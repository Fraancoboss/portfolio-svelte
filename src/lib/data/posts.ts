import type { Post } from '$lib/types/content';
import type { Language } from './profile';
import { profileContent } from './profile';

export const featuredPostsByLanguage: Record<Language, Post[]> = {
	es: profileContent.es.featuredPosts,
	en: profileContent.en.featuredPosts
};

export const featuredPosts: Post[] = featuredPostsByLanguage.es;
