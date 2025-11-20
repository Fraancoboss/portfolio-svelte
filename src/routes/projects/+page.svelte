<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { profileContent } from '$lib/data/profile';

	// Decisión: los proyectos se leen directamente del contenido estático en español.
	const projectsPage = profileContent.projectsPage;
	const projects = profileContent.projects;
</script>

<svelte:head>
	<title>{projectsPage.headTitle}</title>
	<meta name="description" content={projectsPage.headDescription} />
</svelte:head>

<section class="py-12">
	<SectionTitle
		eyebrow={projectsPage.section.eyebrow}
		title={projectsPage.section.title}
		description={projectsPage.section.description}
	/>

	<div class="mt-10 grid gap-8 lg:grid-cols-2">
		{#each projects as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
