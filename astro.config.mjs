import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE and BASE_PATH come from the GitHub Pages workflow (base is empty once the custom domain
// ndncomm.named-data.net is set in the repo's Pages settings); locally the site is served from /.
export default defineConfig({
  site: process.env.SITE || 'https://ndncomm.named-data.net',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  image: { service: passthroughImageService() },
  integrations: [sitemap()],
});
