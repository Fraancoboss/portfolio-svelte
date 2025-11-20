<script lang="ts">
	import type { Project } from '$lib/types/content';
	import { profileContent } from '$lib/data/profile';

let { project }: { project: Project } = $props();
const copy = profileContent.projectsPage;
</script>

<article
	class="group flex flex-col gap-6 rounded-2xl border border-border/80 bg-surface/60 p-6 text-body shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-primary/50 hover:bg-surface/80"
>
	<header class="flex flex-wrap items-center justify-between gap-3">
		<div>
			<p class="text-sm uppercase tracking-[0.25em] text-secondary/80">
				{copy.projectLabel}
			</p>
			<h3 class="text-2xl font-semibold text-slate-50">{project.title}</h3>
		</div>
		<div class="flex items-center gap-2 text-xs">
			<span class="rounded-full border border-border px-3 py-1 text-slate-400">{project.year}</span>
		</div>
	</header>

	<p class="text-base text-slate-300">{project.overview}</p>

	{#if project.highlight}
		<div class="rounded-xl border border-primary/40 bg-primary/5 p-4 text-sm text-primary">
			{project.highlight}
		</div>
	{/if}

	<p class="text-sm text-slate-400">{project.impact}</p>

	<ul class="flex flex-wrap gap-2">
		{#each project.tech as item}
			<li class="rounded-full border border-border/80 px-3 py-1 text-xs uppercase tracking-widest text-slate-400">
				{item}
			</li>
		{/each}
	</ul>

	<div class="mt-auto flex flex-wrap gap-3">
		{#if project.cta}
			<a
				href={project.cta.href}
				class="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:text-white"
				target={project.cta.href.startsWith('http') ? '_blank' : undefined}
				rel={project.cta.href.startsWith('http') ? 'noreferrer' : undefined}
			>
				{project.cta.label}
				<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M8 7h9v9" />
				</svg>
			</a>
		{/if}

		{#if project.links}
			{#each project.links as link}
				<a
					href={link.href}
					target={link.external ? '_blank' : undefined}
					rel={link.external ? 'noreferrer' : undefined}
					class="inline-flex items-center gap-1 text-sm text-slate-300 underline decoration-dotted underline-offset-4 hover:text-primary"
				>
					{link.label}
				</a>
			{/each}
		{/if}
	</div>
</article>
