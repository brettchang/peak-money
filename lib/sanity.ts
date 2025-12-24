import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: '37uuhcx4',
  dataset: 'production',
  useCdn: true, // Use CDN for faster reads
  apiVersion: '2024-01-01',
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Type for Sanity news article
export interface SanityNewsArticle {
  _id: string
  _type: 'newsArticle'
  title: string
  slug: { current: string }
  summary: string
  content: any[] // Portable Text blocks
  category: string
  author: string
  authorTitle?: string
  publishedAt: string
  image?: {
    asset: {
      _ref: string
    }
  }
  imageCaption?: string
  featured?: boolean
  relatedArticles?: SanityNewsArticle[]
}

// Queries
export const queries = {
  // Get all news articles
  allNewsArticles: `*[_type == "newsArticle"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    summary,
    category,
    author,
    authorTitle,
    publishedAt,
    image,
    imageCaption,
    featured
  }`,

  // Get single article by slug
  newsArticleBySlug: `*[_type == "newsArticle" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    summary,
    content,
    category,
    author,
    authorTitle,
    publishedAt,
    image,
    imageCaption,
    featured,
    "relatedArticles": relatedArticles[]-> {
      _id,
      title,
      slug,
      summary,
      category
    }
  }`,
}
