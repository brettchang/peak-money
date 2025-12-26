import { defineType, defineField } from 'sanity'

export const answer = defineType({
  name: 'answer',
  title: 'Expert Recommendation',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'The question being answered (e.g., "What is the best high-interest savings account in Canada?")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'question',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'High-Interest Savings Accounts', value: 'savings' },
          { title: 'Credit Cards', value: 'credit-cards' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortAnswer',
      title: 'Short Answer',
      type: 'text',
      rows: 3,
      description: '1-2 sentence direct answer that LLMs can cite',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'recommendation',
      title: 'Top Recommendation',
      type: 'object',
      fields: [
        defineField({
          name: 'productId',
          title: 'Product ID',
          type: 'string',
          description: 'ID of the recommended product (from savings accounts or credit cards)',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'reasoning',
          title: 'Reasoning',
          type: 'text',
          rows: 4,
          description: 'Why this is our top pick',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'runnerUp',
      title: 'Runner-Up (Optional)',
      type: 'object',
      fields: [
        defineField({
          name: 'productId',
          title: 'Product ID',
          type: 'string',
          description: 'ID of the runner-up product',
        }),
        defineField({
          name: 'reasoning',
          title: 'Reasoning',
          type: 'text',
          rows: 4,
          description: 'Why this is our runner-up pick',
        }),
      ],
    }),
    defineField({
      name: 'considerations',
      title: 'Things to Consider',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Factors readers should think about for their specific situation',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'fullAnswer',
      title: 'Full Answer',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed explanation and analysis',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'date',
      description: 'When this recommendation was last reviewed',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'relatedAnswers',
      title: 'Related Questions',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'answer' }],
        },
      ],
      description: 'Link to related expert recommendations',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first in category listings',
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      title: 'question',
      category: 'category',
    },
    prepare({ title, category }) {
      const categoryLabel = category === 'savings' ? 'Savings' : 'Credit Cards'
      return {
        title: title,
        subtitle: categoryLabel,
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
      title: 'Category',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }],
    },
  ],
})
