import { useState, useEffect } from 'react'
import { client, queries, urlFor, type SanityNewsArticle } from './sanity'
import { NEWS_DATA } from '../constants'
import type { NewsArticle } from '../types'

// Transform Sanity article to match existing NewsArticle type
function transformArticle(article: SanityNewsArticle): NewsArticle {
  return {
    id: article._id,
    slug: article.slug.current,
    title: article.title,
    summary: article.summary,
    content: article.content?.map((block: any) =>
      block.children?.map((child: any) => child.text).join('') || ''
    ).filter(Boolean) || [],
    category: article.category,
    date: new Date(article.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    author: article.author,
    authorTitle: article.authorTitle,
    imageUrl: article.image ? urlFor(article.image).width(1200).url() : undefined,
    imageCaption: article.imageCaption,
    featured: article.featured,
    relatedArticles: article.relatedArticles?.map((r) => r._id),
  }
}

export function useNewsArticles() {
  const [articles, setArticles] = useState<NewsArticle[]>(NEWS_DATA) // Start with static data
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await client.fetch<SanityNewsArticle[]>(queries.allNewsArticles)

        if (data && data.length > 0) {
          setArticles(data.map(transformArticle))
        }
        // If no Sanity data, keep using static NEWS_DATA
      } catch (err) {
        console.error('Error fetching articles:', err)
        setError('Failed to fetch articles')
        // Keep using static data on error
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  return { articles, loading, error }
}

export function useNewsArticle(slug: string) {
  const [article, setArticle] = useState<NewsArticle | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchArticle() {
      try {
        const data = await client.fetch<SanityNewsArticle>(
          queries.newsArticleBySlug,
          { slug }
        )

        if (data) {
          const transformed = transformArticle(data)
          // Handle related articles
          if (data.relatedArticles) {
            transformed.relatedArticles = data.relatedArticles.map((r) => r._id)
          }
          setArticle(transformed)
        } else {
          // Fall back to static data
          const staticArticle = NEWS_DATA.find((a) => a.slug === slug)
          setArticle(staticArticle || null)
        }
      } catch (err) {
        console.error('Error fetching article:', err)
        // Fall back to static data
        const staticArticle = NEWS_DATA.find((a) => a.slug === slug)
        setArticle(staticArticle || null)
        setError('Failed to fetch article')
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [slug])

  return { article, loading, error }
}
