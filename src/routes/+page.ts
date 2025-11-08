import type { PageLoad } from './$types';
import { coreTechnologies, hero, socialLinks, stats, timeline } from '$lib/data/profile';
import { projects } from '$lib/data/projects';

export const load = (() => {
	return {
		hero,
		stats,
		technologies: coreTechnologies,
		timeline,
		spotlightProjects: projects.slice(0, 2),
		socialLinks
	};
}) satisfies PageLoad;
