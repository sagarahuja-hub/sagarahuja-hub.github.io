import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    role: z.string().optional(),
    year: z.string(),
    timeframe: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    metrics: z.array(z.object({
      value: z.string(),
      label: z.string()
    })).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    icon: z.string().optional(),
    quote: z.string().optional(),
    status: z.string().default('Completed'),
    image: z.string().optional(),
    screenshots: z.array(z.object({
      src: z.string(),
      caption: z.string().optional(),
      alt: z.string().optional()
    })).default([])
  })
});

const sideProjects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    year: z.string(),
    summary: z.string(),
    link: z.string().url().optional(),
    linkLabel: z.string().optional(),
    // Optional internal href the card click maps to. Defaults to the
    // generated /side-projects/<slug> detail page if omitted.
    mainHref: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(100),
    icon: z.string().optional(),
    status: z.string().default('Completed'),
    image: z.string().optional()
  })
});

export const collections = {
  projects,
  'side-projects': sideProjects
};
