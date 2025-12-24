import { defineType, defineField, defineArrayMember } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const newsArticle = defineType({
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'News', value: 'News' },
          { title: 'Analysis', value: 'Analysis' },
          { title: 'Opinion', value: 'Opinion' },
          { title: 'Guide', value: 'Guide' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'authorTitle',
      title: 'Author Title',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageCaption',
      title: 'Image Caption',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'relatedArticles',
      title: 'Related Articles',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'newsArticle' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'image',
      category: 'category',
    },
    prepare({ title, author, media, category }) {
      return {
        title,
        subtitle: `${category} • ${author}`,
        media,
      }
    },
  },
})
