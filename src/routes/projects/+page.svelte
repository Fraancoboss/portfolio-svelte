<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const filters = ['Todo', 'En producción', 'En progreso', 'Prototipo'] as const;
	let activeFilter = $state<(typeof filters)[number]>('Todo');

	const filteredProjects = $derived(
		activeFilter === 'Todo'
			? data.projects
			: data.projects.filter((project) => project.status === activeFilter)
	);
</script>

<svelte:head>
	<title>Proyectos · Fran</title>
	<meta
		name="description"
		content="Casos de estudio sobre ciberseguridad, IA aplicada y diseño Secure by Design."
	/>
</svelte:head>

<section class="py-12">
	<SectionTitle
		eyebrow="Proyectos"
		title="Soluciones diseñadas con mentalidad defensiva"
		description="Del prototipo a producción: documentación, threat modeling y despliegues reproducibles."
	/>

	<div class="mt-8 flex flex-wrap gap-3">
		{#each filters as filter}
			<button
				type="button"
				class={`rounded-full border px-4 py-1 text-sm transition ${
					activeFilter === filter
						? 'border-primary/80 bg-primary/10 text-primary'
						: 'border-border text-slate-400 hover:border-primary/60 hover:text-primary'
				}`}
				onclick={() => (activeFilter = filter)}
			>
				{filter}
			</button>
		{/each}
	</div>

	<div class="mt-10 grid gap-8 lg:grid-cols-2">
		{#each filteredProjects as project (project.slug)}
			<ProjectCard {project} />
		{:else}
			<p class="text-slate-400">Sin resultados para {activeFilter}.</p>
		{/each}
	</div>
</section>
