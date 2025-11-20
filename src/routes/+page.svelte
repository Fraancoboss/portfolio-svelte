<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import TiltedCard from '$lib/components/TiltedCard.svelte';
	import hackerLogo from '$lib/assets/logo-hacker.png';
	import pentesting from '$lib/assets/sbd.png';
	import aiSecurity from '$lib/assets/ia-ciberseguridad.png';
	import cryptoImage from '$lib/assets/criptografia.png';
	import { base } from '$app/paths';
	import { profileContent } from '$lib/data/profile';

	/**
	 * Decisión: usamos los datos de profileContent directamente. Mantener una sola fuente
	 * facilita razonar sobre el contenido y evita capas de estado que no aportan funcionalidad.
	 */
	const content = profileContent;
	const heroCardAssets = [hackerLogo, aiSecurity, cryptoImage, pentesting];
	const heroCardFilter = 'hue-rotate(-8deg) saturate(1.2) brightness(1.08)';

	const withBase = (path: string) => (path.startsWith('http') ? path : `${base}${path}`);

	const hero = content.hero;
	const home = content.home;
	const heroCards = heroCardAssets.map((image, index) => {
		const card = home.heroCards[index];
		return {
			image,
			alt: card?.alt ?? '',
			caption: card?.caption ?? '',
			overlayTitle: card?.overlayTitle ?? '',
			overlayDescription: card?.overlayDescription ?? ''
		};
	});
	const favoriteTools = content.favoriteTools;
	const tickerValues =
		'CONCIENCIACIÓN Y AUDITORIA · INTELIGENCIA ARTIFICIAL · TRANSFERENCIA SEGURA DE DATOS · DESARROLLO DE SISTEMAS SEGUROS';
	const technologies = content.coreTechnologies;
	const securityPrinciples = ['Secure by Design', 'Zero Trust', 'Least Privilege', 'IAM'];
	const spotlightProjects = content.projects.slice(0, 2);
	const socialLinks = content.socialLinks;
	const timeline = content.timeline;
</script>

<section class="grid gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
	<div class="space-y-6">
		{#if home.heroEyebrow}
			<p class="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">{home.heroEyebrow}</p>
		{/if}
		<h1 class="text-4xl font-semibold text-slate-50 sm:text-5xl">{home.heroTitle}</h1>
		<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text font-bold">
			{home.heroSubtitle}
		</p>
		<div class="space-y-4 text-base font-semibold leading-relaxed text-body">
			{#each home.biography as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
		<div class="flex flex-wrap gap-4">
			<a
				class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-surface shadow-lg transition hover:shadow-primary/40"
				href={withBase(hero.ctaPrimary.href)}
				download={hero.ctaPrimary.download}
			>
				{hero.ctaPrimary.label}
			</a>
			<a
				class="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-body hover:border-primary/70"
				href={withBase(hero.ctaSecondary.href)}
			>
				{hero.ctaSecondary.label}
			</a>
		</div>
	</div>
	<div class="space-y-4 rounded-3xl border border-border/70 bg-surface/60 p-6 shadow-2xl backdrop-blur">
		<p class="text-center text-xs uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text font-bold">
			{home.disciplineLine}
			{#if home.disciplineComplement}
				<br />
				<span class="inline-block">{home.disciplineComplement}</span>
			{/if}
		</p>
		<div class="grid grid-cols-2 gap-3">
			{#each heroCards as card, index}
				<TiltedCard
					imageSrc={card.image}
					altText={card.alt}
					captionText={card.caption}
					containerHeight="240px"
					containerWidth="100%"
					imageHeight="200px"
					imageWidth="200px"
					rotateAmplitude={12}
					scaleOnHover={1.1}
					showMobileWarning={false}
					displayOverlayContent
					overlayTitle={card.overlayTitle}
					overlayDescription={card.overlayDescription}
					imageFilter={heroCardFilter}
				/>
			{/each}
		</div>
		<p class="text-center text-sm font-semibold text-transparent bg-gradient-to-r from-sky-200 via-cyan-100 to-indigo-200 bg-clip-text">
			{home.heroBadge}
		</p>
	</div>
	<div class="lg:col-span-2 overflow-hidden rounded-3xl border border-sky-400/40 bg-gradient-to-r from-slate-900/70 via-blue-950/40 to-slate-900/70 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
		<div class="ticker-track">
			<p>{tickerValues}</p>
			<p aria-hidden="true">{tickerValues}</p>
		</div>
	</div>
	<div class="lg:col-span-2 space-y-8">
		<div class="space-y-3">
			<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text font-bold">
				{home.stackSection.eyebrow}
			</p>
			<p class="text-2xl font-semibold text-slate-100">{home.stackSection.title}</p>
			<p class="text-sm text-slate-400">
				{home.stackSection.description}
			</p>
		</div>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each technologies as tech}
				<div class="rounded-2xl border border-border/70 bg-surface/60 p-4">
					<p class="text-sm uppercase tracking-[0.3em] text-secondary/70">{tech.category}</p>
					<p class="text-xl font-semibold text-slate-100">{tech.name}</p>
				</div>
			{/each}
			<div class="rounded-2xl border border-border/70 bg-sky-200/10 p-4 text-center sm:col-span-2 lg:col-span-4">
				<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text font-bold">
					Principios Blue Team Aplicados
				</p>
				<div class="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-4">
					{#each securityPrinciples as principle}
						<p class="rounded-xl border border-border/60 bg-surface/70 px-3 py-2 text-body">{principle}</p>
					{/each}
				</div>
			</div>
		</div>
	<div class="border-t border-primary/80"></div>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each favoriteTools as category}
				<div class="rounded-2xl border border-border/70 bg-surface/60 p-4">
					<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text font-bold">
						{category.title}
					</p>
					<div class="mt-3 space-y-2 text-sm">
						{#each category.tools as tool}
							<p class="rounded-xl border border-border/60 bg-surface/70 px-3 py-2 text-body">{tool}</p>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="grid gap-12 py-10 lg:grid-cols-2 lg:items-stretch">
	<div class="space-y-6 rounded-3xl border border-border/70 bg-surface/60 p-6 shadow-2xl backdrop-blur">
		<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text font-bold">
			{home.networksLabel}
		</p>
		<div class="space-y-3 text-sm text-slate-300">
			{#each socialLinks as social}
				<a
					class="flex items-center justify-between rounded-xl border border-border px-4 py-3 hover:border-primary/60 hover:text-primary"
					href={social.href}
					target="_blank"
					rel="noreferrer"
				>
					<span>{social.label}</span>
					<span class="text-xs uppercase tracking-[0.3em] text-slate-500">{social.handle}</span>
				</a>
			{/each}
		</div>
	</div>
	<div class="space-y-4 rounded-3xl border border-border/70 bg-surface/60 p-6 shadow-2xl backdrop-blur">
		<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text font-bold">
			{home.visionLabel}
		</p>
		<p class="text-lg text-body">
			{home.visionLead}
		</p>
		<p class="text-sm text-slate-400">
			{home.visionSupporting}
		</p>
	</div>
</section>

<style>
	.ticker-track {
		display: flex;
		gap: 4rem;
		padding: 1rem 0;
		animation: ticker 16s linear infinite;
	}

	.ticker-track p {
		white-space: nowrap;
	}

	@keyframes ticker {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(-50%);
		}
	}
</style>

<section class="py-16">
	<div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
		<SectionTitle
			eyebrow={home.projectsPreview.eyebrow}
			title={home.projectsPreview.title}
			description={home.projectsPreview.description}
		/>
		<a class="text-sm text-primary hover:text-secondary" href={withBase('/projects')}>
			{home.projectsPreview.ctaLabel}
		</a>
	</div>
	<div class="mt-10 border-t border-primary/80"></div>
	<div class="mt-10 grid gap-8 lg:grid-cols-2">
		{#each spotlightProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<section class="py-16">
	<SectionTitle
		eyebrow={home.timelineSection.eyebrow}
		title={home.timelineSection.title}
		description={home.timelineSection.description}
	/>
		<div class="mt-8 border-t border-primary/80"></div>
		<div class="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
			<div class="space-y-6">
				{#each timeline as item}
					<div class="relative pl-6">
						<div class="absolute left-0 top-2 h-full w-px bg-primary/60"></div>
						<p class="text-lg font-semibold text-slate-100">{item.role}</p>
						<p class="text-sm text-secondary">{item.org}</p>
					</div>
				{/each}
			</div>
			<div class="space-y-6">
				{#each home.timelineExtras as extra}
					<div class="relative pl-6">
						<div class="absolute left-0 top-2 h-full w-px bg-primary/60"></div>
						<p class="text-lg font-semibold text-slate-100">{extra.title}</p>
						<p class="text-sm text-secondary">{extra.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
