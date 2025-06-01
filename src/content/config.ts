import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
  schema: () => 
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      tags: z.array(z.string()),
      slug: z.string().optional(),
    })
});

export const collections = {
  blog: blogCollection
};
