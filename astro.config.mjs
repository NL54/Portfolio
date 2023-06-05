import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://NL54.github.io',
  base: '/portfolio',
  output: "server",
  adapter: netlify()
});