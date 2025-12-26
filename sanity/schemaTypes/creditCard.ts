import { defineType, defineField } from 'sanity'

export const creditCard = defineType({
  name: 'creditCard',
  title: 'Credit Card',
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
      name: 'annualFee',
      title: 'Annual Fee',
      type: 'string',
      description: 'e.g., "$0" or "$120"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rewardsRate',
      title: 'Rewards Rate',
      type: 'string',
      description: 'e.g., "1.5% cash back" or "2x points on travel"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'welcomeBonus',
      title: 'Welcome Bonus',
      type: 'string',
      description: 'e.g., "$200 after spending $1,000"',
    }),
    defineField({
      name: 'interestRate',
      title: 'Interest Rate (APR)',
      type: 'string',
      description: 'e.g., "20.99%"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'foreignTransactionFee',
      title: 'Foreign Transaction Fee',
      type: 'string',
      description: 'e.g., "2.5%" or "None"',
    }),
    defineField({
      name: 'insuranceBenefits',
      title: 'Insurance Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g., "Travel insurance", "Purchase protection"',
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
      of: [{ type: 'block' }],
      description: 'Full review content with rich text formatting',
    }),
    defineField({
      name: 'bestFor',
      title: 'Best For',
      type: 'string',
      description: 'e.g., "Travel rewards" or "Cash back on groceries"',
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
      name: 'cardImageUrl',
      title: 'Card Image URL',
      type: 'url',
      description: 'URL to card image',
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
      fee: 'annualFee',
    },
    prepare({ title, subtitle, fee }) {
      return {
        title: title,
        subtitle: `${subtitle} • ${fee}/year`,
      }
    },
  },
  orderings: [
    {
      title: 'Sort Order',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
    {
      title: 'Annual Fee (Low to High)',
      name: 'annualFeeAsc',
      by: [{ field: 'annualFee', direction: 'asc' }],
    },
  ],
})
