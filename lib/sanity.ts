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

// Type for Sanity savings account
export interface SanitySavingsAccount {
  _id: string
  _type: 'savingsAccount'
  institution: string
  productName: string
  slug: { current: string }
  interestRate: string
  monthlyFees: string
  minBalance: string
  cdic: boolean
  eTransferLimit?: string
  withdrawalLimit?: string
  peakVerdict: string
  detailedReview: string
  fullReview?: any[] // Portable Text blocks
  bestFor: string
  pros: string[]
  cons: string[]
  logoUrl?: string
  affiliateUrl?: string
  sortOrder?: number
}

// Type for Sanity credit card
export interface SanityCreditCard {
  _id: string
  _type: 'creditCard'
  institution: string
  productName: string
  slug: { current: string }
  annualFee: string
  rewardsRate: string
  welcomeBonus?: string
  interestRate: string
  foreignTransactionFee?: string
  insuranceBenefits?: string[]
  peakVerdict: string
  detailedReview: string
  fullReview?: any[] // Portable Text blocks
  bestFor: string
  pros: string[]
  cons: string[]
  logoUrl?: string
  cardImageUrl?: string
  affiliateUrl?: string
  sortOrder?: number
}

// Type for Sanity answer (Expert Recommendation)
export interface SanityAnswer {
  _id: string
  _type: 'answer'
  question: string
  slug: { current: string }
  category: 'savings' | 'credit-cards'
  shortAnswer: string
  recommendation: {
    productId: string
    reasoning: string
  }
  runnerUp?: {
    productId: string
    reasoning: string
  }
  considerations: string[]
  fullAnswer?: any[] // Portable Text blocks
  lastUpdated: string
  relatedAnswers?: { _id: string; question: string; slug: { current: string } }[]
  sortOrder?: number
}

// Type for Sanity FAQ Edition
export interface SanityFAQEdition {
  _id: string
  _type: 'faqEdition'
  title: string
  slug: { current: string }
  description: string
  date: string
  sortOrder?: number
  questions?: SanityFAQQuestion[]
}

// Type for Sanity FAQ Question
export interface SanityFAQQuestion {
  _id: string
  _type: 'faqQuestion'
  question: string
  slug: { current: string }
  edition?: { _id: string; title: string; slug: { current: string } }
  answer: string
  fullAnswer?: any[] // Portable Text blocks
  relatedQuestions?: { _id: string; question: string; slug: { current: string } }[]
  sources?: string[]
  sortOrder?: number
}

// Helper to convert Portable Text blocks to plain text strings
export function portableTextToStrings(blocks: any[] | undefined): string[] {
  if (!blocks) return []
  return blocks.map((block: any) =>
    block.children?.map((child: any) => child.text).join('') || ''
  ).filter(Boolean)
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

  // Get all savings accounts
  allSavingsAccounts: `*[_type == "savingsAccount"] | order(sortOrder asc, interestRate desc) {
    _id,
    institution,
    productName,
    slug,
    interestRate,
    monthlyFees,
    minBalance,
    cdic,
    eTransferLimit,
    withdrawalLimit,
    peakVerdict,
    detailedReview,
    fullReview,
    bestFor,
    pros,
    cons,
    logoUrl,
    affiliateUrl,
    sortOrder
  }`,

  // Get single savings account by slug
  savingsAccountBySlug: `*[_type == "savingsAccount" && slug.current == $slug][0] {
    _id,
    institution,
    productName,
    slug,
    interestRate,
    monthlyFees,
    minBalance,
    cdic,
    eTransferLimit,
    withdrawalLimit,
    peakVerdict,
    detailedReview,
    fullReview,
    bestFor,
    pros,
    cons,
    logoUrl,
    affiliateUrl,
    sortOrder
  }`,

  // Get all credit cards
  allCreditCards: `*[_type == "creditCard"] | order(sortOrder asc) {
    _id,
    institution,
    productName,
    slug,
    annualFee,
    rewardsRate,
    welcomeBonus,
    interestRate,
    foreignTransactionFee,
    insuranceBenefits,
    peakVerdict,
    detailedReview,
    fullReview,
    bestFor,
    pros,
    cons,
    logoUrl,
    cardImageUrl,
    affiliateUrl,
    sortOrder
  }`,

  // Get single credit card by slug
  creditCardBySlug: `*[_type == "creditCard" && slug.current == $slug][0] {
    _id,
    institution,
    productName,
    slug,
    annualFee,
    rewardsRate,
    welcomeBonus,
    interestRate,
    foreignTransactionFee,
    insuranceBenefits,
    peakVerdict,
    detailedReview,
    fullReview,
    bestFor,
    pros,
    cons,
    logoUrl,
    cardImageUrl,
    affiliateUrl,
    sortOrder
  }`,

  // Get all answers (Expert Recommendations)
  allAnswers: `*[_type == "answer"] | order(sortOrder asc) {
    _id,
    question,
    slug,
    category,
    shortAnswer,
    recommendation,
    runnerUp,
    considerations,
    fullAnswer,
    lastUpdated,
    sortOrder,
    "relatedAnswers": relatedAnswers[]-> {
      _id,
      question,
      slug
    }
  }`,

  // Get answers by category
  answersByCategory: `*[_type == "answer" && category == $category] | order(sortOrder asc) {
    _id,
    question,
    slug,
    category,
    shortAnswer,
    recommendation,
    runnerUp,
    considerations,
    fullAnswer,
    lastUpdated,
    sortOrder,
    "relatedAnswers": relatedAnswers[]-> {
      _id,
      question,
      slug
    }
  }`,

  // Get single answer by slug
  answerBySlug: `*[_type == "answer" && slug.current == $slug][0] {
    _id,
    question,
    slug,
    category,
    shortAnswer,
    recommendation,
    runnerUp,
    considerations,
    fullAnswer,
    lastUpdated,
    sortOrder,
    "relatedAnswers": relatedAnswers[]-> {
      _id,
      question,
      slug,
      category
    }
  }`,

  // Get all FAQ editions with their questions
  allFAQEditions: `*[_type == "faqEdition"] | order(date desc, sortOrder asc) {
    _id,
    title,
    slug,
    description,
    date,
    sortOrder,
    "questions": *[_type == "faqQuestion" && references(^._id)] | order(sortOrder asc) {
      _id,
      question,
      slug,
      answer,
      fullAnswer,
      sources,
      sortOrder,
      "relatedQuestions": relatedQuestions[]-> {
        _id,
        question,
        slug
      }
    }
  }`,

  // Get single FAQ edition by slug with questions
  faqEditionBySlug: `*[_type == "faqEdition" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    date,
    sortOrder,
    "questions": *[_type == "faqQuestion" && references(^._id)] | order(sortOrder asc) {
      _id,
      question,
      slug,
      answer,
      fullAnswer,
      sources,
      sortOrder,
      "relatedQuestions": relatedQuestions[]-> {
        _id,
        question,
        slug
      }
    }
  }`,

  // Get single FAQ question by slug
  faqQuestionBySlug: `*[_type == "faqQuestion" && slug.current == $slug][0] {
    _id,
    question,
    slug,
    answer,
    fullAnswer,
    sources,
    sortOrder,
    "edition": edition-> {
      _id,
      title,
      slug
    },
    "relatedQuestions": relatedQuestions[]-> {
      _id,
      question,
      slug
    }
  }`,
}
