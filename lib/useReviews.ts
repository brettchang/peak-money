import { useState, useEffect } from 'react'
import { client, queries, portableTextToStrings, type SanitySavingsAccount, type SanityCreditCard } from './sanity'
import { ACCOUNT_DATA, CREDIT_CARD_DATA } from '../constants'
import type { SavingsAccount, CreditCard } from '../types'

// Transform Sanity savings account to match existing SavingsAccount type
function transformSavingsAccount(account: SanitySavingsAccount): SavingsAccount {
  return {
    id: account._id,
    slug: account.slug.current,
    institution: account.institution,
    productName: account.productName,
    interestRate: account.interestRate,
    monthlyFees: account.monthlyFees,
    minBalance: account.minBalance,
    cdic: account.cdic,
    eTransferLimit: account.eTransferLimit,
    withdrawalLimit: account.withdrawalLimit,
    peakVerdict: account.peakVerdict,
    detailedReview: account.detailedReview,
    fullReview: portableTextToStrings(account.fullReview),
    bestFor: account.bestFor,
    pros: account.pros || [],
    cons: account.cons || [],
  }
}

// Transform Sanity credit card to match existing CreditCard type
function transformCreditCard(card: SanityCreditCard): CreditCard {
  return {
    id: card._id,
    slug: card.slug.current,
    institution: card.institution,
    productName: card.productName,
    annualFee: card.annualFee,
    rewardsRate: card.rewardsRate,
    welcomeBonus: card.welcomeBonus,
    interestRate: card.interestRate,
    foreignTransactionFee: card.foreignTransactionFee,
    insuranceBenefits: card.insuranceBenefits,
    peakVerdict: card.peakVerdict,
    detailedReview: card.detailedReview,
    fullReview: portableTextToStrings(card.fullReview),
    bestFor: card.bestFor,
    pros: card.pros || [],
    cons: card.cons || [],
  }
}

export function useSavingsAccounts() {
  const [accounts, setAccounts] = useState<SavingsAccount[]>(ACCOUNT_DATA)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAccounts() {
      try {
        const data = await client.fetch<SanitySavingsAccount[]>(queries.allSavingsAccounts)

        if (data && data.length > 0) {
          setAccounts(data.map(transformSavingsAccount))
        }
        // If no Sanity data, keep using static ACCOUNT_DATA
      } catch (err) {
        console.error('Error fetching savings accounts:', err)
        setError('Failed to fetch savings accounts')
        // Keep using static data on error
      } finally {
        setLoading(false)
      }
    }

    fetchAccounts()
  }, [])

  return { accounts, loading, error }
}

export function useSavingsAccount(slug: string) {
  const [account, setAccount] = useState<SavingsAccount | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAccount() {
      try {
        const data = await client.fetch<SanitySavingsAccount>(
          queries.savingsAccountBySlug,
          { slug }
        )

        if (data) {
          setAccount(transformSavingsAccount(data))
        } else {
          // Fall back to static data
          const staticAccount = ACCOUNT_DATA.find((a) => a.slug === slug)
          setAccount(staticAccount || null)
        }
      } catch (err) {
        console.error('Error fetching savings account:', err)
        // Fall back to static data
        const staticAccount = ACCOUNT_DATA.find((a) => a.slug === slug)
        setAccount(staticAccount || null)
        setError('Failed to fetch savings account')
      } finally {
        setLoading(false)
      }
    }

    fetchAccount()
  }, [slug])

  return { account, loading, error }
}

export function useCreditCards() {
  const [cards, setCards] = useState<CreditCard[]>(CREDIT_CARD_DATA)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCards() {
      try {
        const data = await client.fetch<SanityCreditCard[]>(queries.allCreditCards)

        if (data && data.length > 0) {
          setCards(data.map(transformCreditCard))
        }
        // If no Sanity data, keep using static CREDIT_CARD_DATA
      } catch (err) {
        console.error('Error fetching credit cards:', err)
        setError('Failed to fetch credit cards')
        // Keep using static data on error
      } finally {
        setLoading(false)
      }
    }

    fetchCards()
  }, [])

  return { cards, loading, error }
}

export function useCreditCard(slug: string) {
  const [card, setCard] = useState<CreditCard | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCard() {
      try {
        const data = await client.fetch<SanityCreditCard>(
          queries.creditCardBySlug,
          { slug }
        )

        if (data) {
          setCard(transformCreditCard(data))
        } else {
          // Fall back to static data
          const staticCard = CREDIT_CARD_DATA.find((c) => c.slug === slug)
          setCard(staticCard || null)
        }
      } catch (err) {
        console.error('Error fetching credit card:', err)
        // Fall back to static data
        const staticCard = CREDIT_CARD_DATA.find((c) => c.slug === slug)
        setCard(staticCard || null)
        setError('Failed to fetch credit card')
      } finally {
        setLoading(false)
      }
    }

    fetchCard()
  }, [slug])

  return { card, loading, error }
}
