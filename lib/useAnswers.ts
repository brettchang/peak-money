import { useState, useEffect } from 'react'
import { client, queries, portableTextToStrings, type SanityAnswer } from './sanity'
import { ANSWER_CATEGORIES } from '../constants'
import type { Answer } from '../types'

// Transform Sanity answer to match existing Answer type
function transformAnswer(answer: SanityAnswer): Answer {
  return {
    id: answer._id,
    slug: answer.slug.current,
    question: answer.question,
    shortAnswer: answer.shortAnswer,
    recommendation: answer.recommendation,
    runnerUp: answer.runnerUp,
    considerations: answer.considerations || [],
    fullAnswer: portableTextToStrings(answer.fullAnswer),
    lastUpdated: answer.lastUpdated,
    relatedAnswers: answer.relatedAnswers?.map((r) => r._id),
  }
}

// Get static answers for a category from constants
function getStaticAnswersByCategory(categorySlug: string): Answer[] {
  const category = ANSWER_CATEGORIES.find((c) => c.slug === categorySlug)
  return category?.answers || []
}

// Get all static answers from constants
function getAllStaticAnswers(): Answer[] {
  return ANSWER_CATEGORIES.flatMap((c) => c.answers)
}

export function useAnswers() {
  const [answers, setAnswers] = useState<Answer[]>(getAllStaticAnswers())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAnswers() {
      try {
        const data = await client.fetch<SanityAnswer[]>(queries.allAnswers)

        if (data && data.length > 0) {
          setAnswers(data.map(transformAnswer))
        }
        // If no Sanity data, keep using static data
      } catch (err) {
        console.error('Error fetching answers:', err)
        setError('Failed to fetch answers')
        // Keep using static data on error
      } finally {
        setLoading(false)
      }
    }

    fetchAnswers()
  }, [])

  return { answers, loading, error }
}

export function useAnswersByCategory(categorySlug: string) {
  const [answers, setAnswers] = useState<Answer[]>(getStaticAnswersByCategory(categorySlug))
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAnswers() {
      try {
        const data = await client.fetch<SanityAnswer[]>(
          queries.answersByCategory,
          { category: categorySlug }
        )

        if (data && data.length > 0) {
          setAnswers(data.map(transformAnswer))
        } else {
          // Fall back to static data
          setAnswers(getStaticAnswersByCategory(categorySlug))
        }
      } catch (err) {
        console.error('Error fetching answers:', err)
        // Fall back to static data
        setAnswers(getStaticAnswersByCategory(categorySlug))
        setError('Failed to fetch answers')
      } finally {
        setLoading(false)
      }
    }

    fetchAnswers()
  }, [categorySlug])

  return { answers, loading, error }
}

export function useAnswer(slug: string) {
  const [answer, setAnswer] = useState<Answer | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAnswer() {
      try {
        const data = await client.fetch<SanityAnswer>(
          queries.answerBySlug,
          { slug }
        )

        if (data) {
          setAnswer(transformAnswer(data))
        } else {
          // Fall back to static data
          const staticAnswer = getAllStaticAnswers().find((a) => a.slug === slug)
          setAnswer(staticAnswer || null)
        }
      } catch (err) {
        console.error('Error fetching answer:', err)
        // Fall back to static data
        const staticAnswer = getAllStaticAnswers().find((a) => a.slug === slug)
        setAnswer(staticAnswer || null)
        setError('Failed to fetch answer')
      } finally {
        setLoading(false)
      }
    }

    fetchAnswer()
  }, [slug])

  return { answer, loading, error }
}
