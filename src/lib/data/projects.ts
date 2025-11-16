import type { Project } from '$lib/types/content';
import type { Language } from './profile';
import { profileContent } from './profile';

export const projectsByLanguage: Record<Language, Project[]> = {
	es: profileContent.es.projects,
	en: profileContent.en.projects
};

export const projects: Project[] = projectsByLanguage.es;
