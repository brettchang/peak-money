import { defineType, defineField } from 'sanity'

export const faqQuestion = defineType({
  name: 'faqQuestion',
  title: 'FAQ Question',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'The question being asked',
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
      name: 'edition',
      title: 'Edition',
      type: 'reference',
      to: [{ type: 'faqEdition' }],
      description: 'Which FAQ edition this question belongs to',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Short Answer',
      type: 'text',
      rows: 3,
      description: 'Brief answer (shown in previews and accordions)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullAnswer',
      title: 'Full Answer',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Extended answer with full detail (shown on question detail page)',
    }),
    defineField({
      name: 'relatedQuestions',
      title: 'Related Questions',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'faqQuestion' }],
        },
      ],
      description: 'Link to related FAQ questions',
    }),
    defineField({
      name: 'sources',
      title: 'Sources',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Attribution and source citations',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Order within the edition (lower numbers appear first)',
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      title: 'question',
      edition: 'edition.title',
    },
    prepare({ title, edition }) {
      return {
        title: title,
        subtitle: edition || 'No edition',
      }
    },
  },
  orderings: [
    {
      title: 'Sort Order',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
})
