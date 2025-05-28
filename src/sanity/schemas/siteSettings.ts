import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'The main title of your website.'
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description: 'A short description for your website.'
    }),
    defineField({
      name: 'homeHero',
      title: 'Homepage Hero Text',
      type: 'text',
      description: 'A short paragraph for the homepage hero section.'
    }),
    defineField({
      name: 'aboutBlurb',
      title: 'About Page Blurb',
      type: 'text',
      description: 'A short paragraph for the about page.'
    })
  ]
}) 