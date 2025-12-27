import { useState, useEffect } from 'react'
import { client, queries, portableTextToStrings, type SanityFAQEdition, type SanityFAQQuestion } from './sanity'
import { FAQ_EDITIONS } from '../constants'
import type { FAQEdition, Question } from '../types'

// Transform Sanity FAQ question to match existing Question type
function transformQuestion(question: SanityFAQQuestion): Question {
  return {
    id: question._id,
    slug: question.slug.current,
    question: question.question,
    answer: question.answer,
    fullAnswer: portableTextToStrings(question.fullAnswer),
    relatedQuestions: question.relatedQuestions?.map((r) => r._id),
    sources: question.sources,
  }
}

// Transform Sanity FAQ edition to match existing FAQEdition type
function transformEdition(edition: SanityFAQEdition): FAQEdition {
  return {
    id: edition._id,
    slug: edition.slug.current,
    title: edition.title,
    description: edition.description,
    date: new Date(edition.date).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    }),
    questions: edition.questions?.map(transformQuestion) || [],
  }
}

export function useFAQEditions() {
  const [editions, setEditions] = useState<FAQEdition[]>(FAQ_EDITIONS)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchEditions() {
      try {
        const data = await client.fetch<SanityFAQEdition[]>(queries.allFAQEditions)

        if (data && data.length > 0) {
          setEditions(data.map(transformEdition))
        }
        // If no Sanity data, keep using static FAQ_EDITIONS
      } catch (err) {
        console.error('Error fetching FAQ editions:', err)
        setError('Failed to fetch FAQ editions')
        // Keep using static data on error
      } finally {
        setLoading(false)
      }
    }

    fetchEditions()
  }, [])

  return { editions, loading, error }
}

export function useFAQEdition(slug: string) {
  const [edition, setEdition] = useState<FAQEdition | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchEdition() {
      try {
        const data = await client.fetch<SanityFAQEdition>(
          queries.faqEditionBySlug,
          { slug }
        )

        if (data) {
          setEdition(transformEdition(data))
        } else {
          // Fall back to static data
          const staticEdition = FAQ_EDITIONS.find((e) => e.slug === slug)
          setEdition(staticEdition || null)
        }
      } catch (err) {
        console.error('Error fetching FAQ edition:', err)
        // Fall back to static data
        const staticEdition = FAQ_EDITIONS.find((e) => e.slug === slug)
        setEdition(staticEdition || null)
        setError('Failed to fetch FAQ edition')
      } finally {
        setLoading(false)
      }
    }

    fetchEdition()
  }, [slug])

  return { edition, loading, error }
}

export function useFAQQuestion(questionSlug: string) {
  const [question, setQuestion] = useState<Question | null>(null)
  const [edition, setEdition] = useState<{ id: string; title: string; slug: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchQuestion() {
      try {
        const data = await client.fetch<SanityFAQQuestion>(
          queries.faqQuestionBySlug,
          { slug: questionSlug }
        )

        if (data) {
          setQuestion(transformQuestion(data))
          if (data.edition) {
            setEdition({
              id: data.edition._id,
              title: data.edition.title,
              slug: data.edition.slug.current,
            })
          }
        } else {
          // Fall back to static data - search all editions
          for (const ed of FAQ_EDITIONS) {
            const found = ed.questions.find((q) => q.slug === questionSlug)
            if (found) {
              setQuestion(found)
              setEdition({ id: ed.id, title: ed.title, slug: ed.slug })
              break
            }
          }
        }
      } catch (err) {
        console.error('Error fetching FAQ question:', err)
        // Fall back to static data
        for (const ed of FAQ_EDITIONS) {
          const found = ed.questions.find((q) => q.slug === questionSlug)
          if (found) {
            setQuestion(found)
            setEdition({ id: ed.id, title: ed.title, slug: ed.slug })
            break
          }
        }
        setError('Failed to fetch FAQ question')
      } finally {
        setLoading(false)
      }
    }

    fetchQuestion()
  }, [questionSlug])

  return { question, edition, loading, error }
}

// Helper to get all questions across all editions (for finding related questions)
export function useAllFAQQuestions() {
  const { editions, loading, error } = useFAQEditions()

  const allQuestions = editions.flatMap((edition) =>
    edition.questions.map((q) => ({
      ...q,
      editionSlug: edition.slug,
      editionTitle: edition.title,
    }))
  )

  return { questions: allQuestions, loading, error }
}
