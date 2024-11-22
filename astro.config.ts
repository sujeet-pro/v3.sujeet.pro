// @ts-check
// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

import tailwind from '@astrojs/tailwind'
// TODO: path alias doesn't work on astro.config.ts
import { SITE_CANONICAL_ORIGIN } from './src/configs/site.constants'

// https://astro.build/config
export default defineConfig({
  site: SITE_CANONICAL_ORIGIN,
  integrations: [sitemap(), tailwind()],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  experimental: {
    contentIntellisense: true,
    clientPrerender: true
  },
  scopedStyleStrategy: 'where',
  output: 'static'
})