import { defineType, defineField } from 'sanity'

export const savingsAccount = defineType({
  name: 'savingsAccount',
  title: 'Savings Account',
  type: 'document',
  fields: [
    defineField({
      name: 'institution',
      title: 'Institution',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productName',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.institution}-${doc.productName}`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'interestRate',
      title: 'Interest Rate',
      type: 'string',
      description: 'e.g., "4.00%"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'monthlyFees',
      title: 'Monthly Fees',
      type: 'string',
      description: 'e.g., "$0" or "$4.95"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'minBalance',
      title: 'Minimum Balance',
      type: 'string',
      description: 'e.g., "$0" or "$1,000"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cdic',
      title: 'CDIC Insured',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'eTransferLimit',
      title: 'E-Transfer Limit',
      type: 'string',
      description: 'e.g., "$3,000/day"',
    }),
    defineField({
      name: 'withdrawalLimit',
      title: 'Withdrawal Limit',
      type: 'string',
      description: 'e.g., "Unlimited" or "2 free/month"',
    }),
    defineField({
      name: 'peakVerdict',
      title: 'Peak Verdict',
      type: 'string',
      description: 'Short verdict summary',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'detailedReview',
      title: 'Detailed Review',
      type: 'text',
      description: 'Brief overview paragraph',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullReview',
      title: 'Full Review',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Full review paragraphs',
    }),
    defineField({
      name: 'bestFor',
      title: 'Best For',
      type: 'string',
      description: 'e.g., "High balances" or "Everyday banking"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pros',
      title: 'Pros',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'cons',
      title: 'Cons',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'logoUrl',
      title: 'Logo URL',
      type: 'url',
      description: 'URL to institution logo',
    }),
    defineField({
      name: 'affiliateUrl',
      title: 'Affiliate URL',
      type: 'url',
      description: 'Link to apply/learn more',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first in comparisons',
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      title: 'productName',
      subtitle: 'institution',
      rate: 'interestRate',
    },
    prepare({ title, subtitle, rate }) {
      return {
        title: title,
        subtitle: `${subtitle} • ${rate}`,
      }
    },
  },
  orderings: [
    {
      title: 'Interest Rate (High to Low)',
      name: 'interestRateDesc',
      by: [{ field: 'interestRate', direction: 'desc' }],
    },
    {
      title: 'Sort Order',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
})
