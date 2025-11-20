<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { profileContent } from '$lib/data/profile';

	// Decisión: el contenido de “Sobre mí” es totalmente estático y vive en profileContent para mantener una sola fuente.
	const contactPage = profileContent.contactPage;
	const experiences = contactPage.experiences;
	const softSkills = contactPage.softSkills;
	const topSoftSkills = softSkills.slice(0, 3);
	const bottomSoftSkills = softSkills.slice(3, 6);
</script>

<svelte:head>
	<title>{contactPage.headTitle}</title>
	<meta name="description" content={contactPage.headDescription} />
</svelte:head>

<section class="py-10 space-y-10">
	<SectionTitle
		eyebrow={contactPage.section.eyebrow}
		title={contactPage.section.title}
		description={contactPage.section.description}
	/>
		<div class="grid gap-6 lg:grid-cols-3">
			{#each experiences as experience}
				<article class="flex h-full flex-col gap-5 rounded-3xl border border-border/70 bg-surface/70 p-6 shadow-2xl">
					<header class="space-y-3">
						<p class="text-xs uppercase tracking-[0.4em] text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text font-bold">
							{contactPage.experienceEyebrow}
						</p>
						<div class="space-y-1">
							<p class="text-sm uppercase tracking-[0.2em] text-slate-400">{experience.company}</p>
							<h3 class="text-xl font-semibold text-slate-100">{experience.role}</h3>
							<p class="text-xs text-slate-500">{experience.period}</p>
						</div>
					</header>
					<div class="grid flex-1 gap-3" style="grid-auto-rows: 1fr;">
						{#each experience.highlights as highlight}
							<div class="flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-sky-200/5 p-5">
								<p class="text-sm font-semibold text-body leading-relaxed">{highlight.description}</p>
								{#if highlight.metric}
									<span class="inline-flex w-fit rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
										{highlight.metric}
									</span>
								{/if}
							</div>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	<div class="rounded-3xl border border-sky-400/40 bg-sky-200/10 p-6 shadow-2xl space-y-4">
		<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text font-bold">
			{contactPage.softSkillsTitle}
		</p>
		<p class="text-lg font-semibold text-slate-100">{contactPage.softSkillsSubtitle}</p>
		<div class="space-y-3">
			<div class="flex flex-wrap justify-center gap-3">
				{#each topSoftSkills as skill}
					<span class="rounded-full border border-border/60 bg-surface/80 px-4 py-2 text-sm font-semibold text-body">
						{skill}
					</span>
				{/each}
			</div>
			<div class="flex flex-wrap justify-center gap-3">
				{#each bottomSoftSkills as skill}
					<span class="rounded-full border border-border/60 bg-surface/80 px-4 py-2 text-sm font-semibold text-body">
						{skill}
					</span>
				{/each}
			</div>
		</div>
	</div>
</section>
