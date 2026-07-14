import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const places = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/places" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().url(),
    country: z.string(),
    tags: z.array(z.string()),
    slug: z.string(),
    excludeFromNotes: z.boolean().default(false),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    image: z.string().url().optional(),
    country: z.string().optional(),
    tags: z.array(z.string()).default([]),
    slug: z.string().optional(),
  }),
});

export const collections = { places, guides };
