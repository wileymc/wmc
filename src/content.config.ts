import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const places = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().url(),
    country: z.string(),
    tags: z.array(z.string()),
    slug: z.string(),
  }),
});

export const collections = { places };
