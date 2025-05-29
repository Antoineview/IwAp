// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://myself-blog.netlify.app',
  integrations: [
    sanity({
      projectId: 'd6wudfve',
      dataset: 'production',
      apiVersion: '2023-05-03',
      useCdn: true,
      studioBasePath: '/studio'
    }), 
    react()
  ],
  output: 'server',
  adapter: vercel()
});