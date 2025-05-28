import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Me',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Your name or chosen identity',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'A representation of your identity (not necessarily your face)',
    }),
    defineField({
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string',
      description: 'How you wish to be referred to',
    }),
    defineField({
      name: 'identities',
      title: 'Identities',
      type: 'array',
      of: [{type: 'string'}],
      description: 'The various ways you identify yourself',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Raw', value: 'raw'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
        },
      ],
      description: 'Write about yourself without constraints',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'pronouns',
      media: 'image',
    },
  },
})