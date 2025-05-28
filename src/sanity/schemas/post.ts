import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Writing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Make it personal, honest, transgressive',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Images that challenge, provoke, or comfort',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'A brief preview of your thoughts',
    }),
    defineField({
      name: 'categories',
      title: 'Themes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      description: 'What aspects of identity, boundaries, or existence does this explore?',
    }),
    defineField({
      name: 'mood',
      title: 'Mood',
      type: 'string',
      options: {
        list: [
          {title: 'Raw', value: 'raw'},
          {title: 'Reflective', value: 'reflective'},
          {title: 'Confrontational', value: 'confrontational'},
          {title: 'Healing', value: 'healing'},
          {title: 'Celebratory', value: 'celebratory'},
        ],
      },
      description: 'The emotional tone of this piece',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      description: 'Be authentic, unapologetic, and true to yourself',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `— ${author}`}
    },
  },
})