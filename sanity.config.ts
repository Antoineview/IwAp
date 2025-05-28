import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'
import { media } from 'sanity-plugin-media'

export default defineConfig({
  name: 'myself',
  title: 'Personal Blog',

  projectId: 'd6wudfve',
  dataset: 'production',
  
  plugins: [
    deskTool(),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
  
  document: {
    // For a more minimal UI
    actions: (prev) => prev,
  },
})