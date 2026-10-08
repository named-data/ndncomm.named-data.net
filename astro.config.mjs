import { defineConfig } from 'astro/config';

// SITE and BASE_PATH are set by the GitHub Pages workflow; locally the site is served from /.
export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
});
