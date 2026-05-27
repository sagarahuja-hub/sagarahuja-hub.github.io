import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sagarahuja.co',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  },
  redirects: {
    '/about': '/#about',
    '/contact': '/#contact'
  }
});
