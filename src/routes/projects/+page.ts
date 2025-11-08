import type { PageLoad } from './$types';
import { projects } from '$lib/data/projects';

export const load = (() => {
	return {
		projects
	};
}) satisfies PageLoad;
