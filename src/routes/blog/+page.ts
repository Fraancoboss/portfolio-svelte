import { featuredPosts } from '$lib/data/posts';
import { sanitizeInput } from '$lib/security/validation';
import type { PageLoad } from './$types';

type MarkdownModule = {
	metadata: {
		title: string;
		excerpt?: string;
		category?: string;
		publishedAt?: string;
		readingTime?: string;
		tags?: string[];
	};
};

const markdownModules = import.meta.glob('./(posts)/*/+page.md', { eager: true });

export const load = (() => {
	const sanitizePost = (post: {
		slug: string;
		title: string;
		excerpt: string;
		category: string;
		publishedAt: string;
		readingTime: string;
		tags: string[];
	}) => ({
		...post,
		slug: sanitizeInput(post.slug),
		title: sanitizeInput(post.title),
		excerpt: sanitizeInput(post.excerpt),
		category: sanitizeInput(post.category),
		publishedAt: sanitizeInput(post.publishedAt),
		readingTime: sanitizeInput(post.readingTime),
		tags: post.tags.map((tag) => sanitizeInput(tag))
	});

	const articles = Object.entries(markdownModules).map(([path, page]) => {
		const slug = path.split('/').at(-2) ?? '';
		const metadata = (page as MarkdownModule).metadata;
		return sanitizePost({
			slug,
			title: metadata.title,
			excerpt: metadata.excerpt ?? '',
			category: metadata.category ?? 'Divulgación',
			publishedAt: metadata.publishedAt ?? '',
			readingTime: metadata.readingTime ?? '',
			tags: metadata.tags ?? []
		});
	});

	articles.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

	return {
		featuredPosts: featuredPosts.map((post) => sanitizePost(post)),
		articles
	};
}) satisfies PageLoad;
