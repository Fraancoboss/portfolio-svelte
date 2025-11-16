export type NavigationLink = {
	label: string;
	href: string;
	description?: string;
};

export type SocialLink = {
	label: string;
	href: string;
	handle?: string;
	icon?: string;
};

export type Technology = {
	name: string;
	category: 'language' | 'framework' | 'database' | 'tooling' | 'security' | 'ai';
};

export type ProjectStatus = 'production' | 'in-progress' | 'prototype';

export type Project = {
	title: string;
	slug: string;
	overview: string;
	impact: string;
	tech: string[];
	status: ProjectStatus;
	year: number;
	cta?: {
		label: string;
		href: string;
	};
	links?: {
		label: string;
		href: string;
		external?: boolean;
	}[];
	highlight?: string;
};

export type Post = {
	title: string;
	slug: string;
	excerpt: string;
	category: string;
	publishedAt: string;
	readingTime: string;
	tags: string[];
};

export type TimelineItem = {
	year: string;
	role: string;
	org: string;
	description: string;
};

export type ContactChannel = {
	label: string;
	value: string;
	subtitle?: string;
	href?: string;
};
