import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import customToc from "astro-custom-toc";
import tailwind from "@astrojs/tailwind";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkToc from "remark-toc";


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
    markdown: {
        syntaxHighlight: 'prism',
        remarkPlugins: [
          [remarkToc, { heading: "contents"}]
        ],
        rehypePlugins: [
            rehypeHeadingIds,
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    behavior: 'wrap',
                },
            ],
        ]
    },
});
