export interface SavingsAccount {
  id: string;
  slug: string;
  institution: string;
  productName: string;
  interestRate: string;
  monthlyFees: string;
  minBalance: string;
  cdic: boolean;
  eTransferLimit?: string;
  withdrawalLimit?: string;
  peakVerdict: string;
  detailedReview: string;
  fullReview: string[];
  bestFor: string;
  pros: string[];
  cons: string[];
}

export interface CreditCard {
  id: string;
  slug: string;
  institution: string;
  productName: string;
  annualFee: string;
  rewardsRate: string;
  welcomeBonus?: string;
  interestRate: string;
  foreignTransactionFee?: string;
  insuranceBenefits?: string[];
  peakVerdict: string;
  detailedReview: string;
  fullReview: string[];
  bestFor: string;
  pros: string[];
  cons: string[];
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
}

export interface Question {
  id: string;
  slug: string;
  question: string;
  answer: string;
  fullAnswer?: string[];
  relatedQuestions?: string[];
  sources?: string[];
}

export interface FAQEdition {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  questions: Question[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string[];
  category: string;
  date: string;
  author: string;
  authorTitle?: string;
  imageUrl?: string;
  imageCaption?: string;
  featured?: boolean;
  relatedArticles?: string[];
}

export interface Answer {
  id: string;
  slug: string;
  question: string;
  shortAnswer: string;
  recommendation: {
    productId: string;
    reasoning: string;
  };
  runnerUp?: {
    productId: string;
    reasoning: string;
  };
  considerations: string[];
  fullAnswer: string[];
  lastUpdated: string;
  relatedAnswers?: string[];
}

export interface AnswerCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  answers: Answer[];
}