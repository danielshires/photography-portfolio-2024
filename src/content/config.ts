import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.string(),
		slug: z.string(),
		tags: z.array(z.string()),
		content: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}),
	}),
});

export const collections = {
	posts: postCollection,
};
