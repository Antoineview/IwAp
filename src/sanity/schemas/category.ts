import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Theme',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of this theme or aspect of your identity/experience',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'What this theme means to you personally',
    }),
    defineField({
      name: 'importance',
      title: 'Personal Importance',
      type: 'number',
      description: 'How central is this theme to your identity (1-10)',
      validation: Rule => Rule.min(1).max(10).integer(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})