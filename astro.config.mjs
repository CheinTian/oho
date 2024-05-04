import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import customToc from "astro-custom-toc";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: 'https://oho.maxt.info',
    integrations: [customToc(),mdx(
    {
        gfm: false,
        smartypants: true,
        remarkPlugins: [],
        rehypePlugins: [],
    }
    ), sitemap(), tailwind()],
});
