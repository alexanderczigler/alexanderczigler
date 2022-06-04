import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import rehypeExternalLinks from 'rehype-external-links';

const extensions = ['.svelte', '.md'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: extensions,
  kit: {
    adapter: adapter(),
    prerender: { default: true },
  },
  preprocess: [
    preprocess({
      preserve: ['module'],
    }),
    mdsvex({
      extensions: extensions,
      rehypePlugins: [
        rehypeExternalLinks, // Adds 'target' and 'rel' to external links
      ],
    }),
  ],
};

export default config;
