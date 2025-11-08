<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import TiltedCard from '$lib/components/TiltedCard.svelte';
	import hackerLogo from '$lib/assets/logo-hacker.png';
	import pentesting from '$lib/assets/sbd.png';
	import aiSecurity from '$lib/assets/ia-ciberseguridad.png';
	import cryptoImage from '$lib/assets/criptografia.png';
	import { base } from '$app/paths';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const heroCards = [
		{
			image: hackerLogo,
			alt: 'Pentesting y hardening',
			caption: 'Pentesting',
			overlayTitle: 'Pentesting ofensivo',
			overlayDescription: 'Detección proactiva de vulnerabilidades'
		},
		{
			image: aiSecurity,
			alt: 'Ilustración IA y ciberseguridad',
			caption: 'AI Defense',
			overlayTitle: 'IA + Ciberseguridad',
			overlayDescription: 'Automatización de auditorías y playbooks'
		},
		{
			image: cryptoImage,
			alt: 'Criptografía aplicada',
			caption: 'Criptografía de datos',
			overlayTitle: 'Protección de datos',
			overlayDescription: 'Peticiones de red blindadas y cifrado'
		},
		{
			image: pentesting,
			alt: 'Secure by Design',
			caption: 'Secure by Design',
			overlayTitle: 'Secure by Design',
			overlayDescription: 'Desarrollo que inicia por la seguridad'
		}
	];
	const favoriteTools = [
		{
			title: 'Documentación',
			tools: ['Notion', 'Mermaid', 'Obsidian', 'Drive']
		},
		{
			title: 'Data Managment',
			tools: ['Oracle Developer', 'PostgreSQL', 'SQLite', 'FireBase', 'Hibernate']
		},
		{
			title: 'Frontend',
			tools: ['React', 'SvelteKit', 'Taildwind', 'TypeScript', 'JavaScript']
		},
		{
			title: 'Backend',
			tools: ['Java', 'Python', 'SpringBoot']
		},
		{
			title: 'Seguridad',
			tools: ["SSS 'Shamir Secret Sharing'", 'Rust', 'JWT', 'OTPT', 'Bandit', 'AES-GCM']
		},
		{
			title: 'Cloud',
			tools: ['AWS']
		},
		{
			title: 'IA',
			tools: ['Codex', 'Deepseek', 'n8n', 'NotebookLM']
		},
		{
			title: 'MULTIPLATAFORMA',
			tools: ['React Native', 'Kotlin', 'Android Studio', 'Shortcuts (iOS)', 'Swift']
		}
	];
	const tickerValues = data.hero.values.map((value) => `-- ${value} --`).join(' ');
	const withBase = (path: string) => (path.startsWith('http') ? path : `${base}${path}`);
</script>

<section class="grid gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
	<div class="space-y-6">
		<p class="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">Portafolio</p>
		<h1 class="text-4xl font-semibold text-slate-50 sm:text-5xl">¡Encantado de conocerte!</h1>
		<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text font-bold">
			Quién soy
		</p>
		<div class="space-y-4 text-base font-semibold leading-relaxed text-slate-200">
			<p>
				Soy Fran, estudiante de Desarrollo de Aplicaciones Multiplataforma y del Máster en Desarrollo de Software con Inteligencia Artificial en BIG School, dirigido por MaureDev y un equipo de profesores senior con amplia experiencia en el sector.
			</p>
			<p>
				Exploro tecnologías como Rust, Python y Svelte para diseñar redes de datos criptográficamente seguras y optimizar la comunicación con bases de datos como PostgreSQL y SQLite.
			</p>
			<p>
				Dedico gran parte de mi tiempo a la divulgación sobre criptografía y ciberseguridad avanzada, aplicando los principios de Secure by Design (SbD) en el desarrollo de sistemas.
			</p>
			<p>
				Además, me interesa la integración de tecnologías como Swift en entornos iOS, con el objetivo de crear aplicaciones seguras, eficientes y escalables.
			</p>
		</div>
		<div class="flex flex-wrap gap-4">
			<a
				class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-surface shadow-lg transition hover:shadow-primary/40"
				href={withBase(data.hero.ctaPrimary.href)}
			>
				{data.hero.ctaPrimary.label}
			</a>
			<a
				class="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-slate-200 hover:border-primary/70"
				href={withBase(data.hero.ctaSecondary.href)}
			>
				{data.hero.ctaSecondary.label}
			</a>
		</div>
	</div>
	<div class="space-y-4 rounded-3xl border border-border/70 bg-surface/60 p-6 shadow-2xl backdrop-blur">
		<p class="text-center text-xs uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text font-bold">
			Desarrollo / Inteligencia artificial<br />
			<span class="inline-block">+ Ciberseguridad</span>
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
				/>
			{/each}
		</div>
		<p class="text-center text-sm font-semibold text-transparent bg-gradient-to-r from-rose-200 via-red-200 to-rose-100 bg-clip-text">
			Blue team en la ciberseguridad
		</p>
	</div>
	<div class="lg:col-span-2 overflow-hidden rounded-3xl border border-rose-500/40 bg-gradient-to-r from-slate-900/70 via-rose-900/40 to-slate-900/70 text-xs font-semibold uppercase tracking-[0.3em] text-rose-200">
		<div class="ticker-track">
			<p>{tickerValues}</p>
			<p aria-hidden="true">{tickerValues}</p>
		</div>
	</div>
	<div class="lg:col-span-2 space-y-8">
		<div class="space-y-3">
			<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text font-bold">
				Stack principal
			</p>
			<p class="text-2xl font-semibold text-slate-100">Tecnologías y principios que aplico</p>
			<p class="text-sm text-slate-400">
				Combino lenguajes de programación con frameworks modernos y prácticas Secure by Design para desplegar sistemas confiables.
			</p>
		</div>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each data.technologies as tech}
				<div class="rounded-2xl border border-border/70 bg-surface/60 p-4">
					<p class="text-sm uppercase tracking-[0.3em] text-secondary/70">{tech.category}</p>
					<p class="text-xl font-semibold text-slate-100">{tech.name}</p>
				</div>
			{/each}
		</div>
		<div class="space-y-3">
			<p class="text-sm uppercase tracking-[0.3em] text-slate-400">Mis herramientas favoritas</p>
			<p class="text-sm text-slate-400">
				Estos son los entornos, editores y stacks con los que experimento cada semana para elevar mis flujos SbD.
			</p>
		</div>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each favoriteTools as category}
				<div class="rounded-2xl border border-border/70 bg-surface/60 p-4">
					<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text font-bold">
						{category.title}
					</p>
					<div class="mt-3 space-y-2 text-sm">
						{#each category.tools as tool}
							<p class="rounded-xl border border-border/60 bg-surface/70 px-3 py-2 text-slate-200">{tool}</p>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="grid gap-12 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
	<div class="space-y-6 rounded-3xl border border-border/70 bg-surface/60 p-6 shadow-2xl backdrop-blur">
		<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text font-bold">
			Redes
		</p>
		<div class="space-y-3 text-sm text-slate-300">
			{#each data.socialLinks as social}
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
		<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text font-bold">
			Visión
		</p>
		<p class="text-lg text-slate-200">
			Cada vista 3D resume mis principios: interfaces expresivas, datos confiables y narrativa técnica clara.
		</p>
		<p class="text-sm text-slate-400">
			Este bloque replica dashboards con capas SbD: telemetría firmada, prompts defensivos y documentación viva.
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
			eyebrow="Casos destacados"
			title="Arquitecturas diseñadas con mentalidad defensiva"
			description="Desde detección de amenazas en tiempo real hasta protocolos cifrados para redes distribuidas."
		/>
		<a class="text-sm text-primary hover:text-secondary" href={withBase('/projects')}>Ver todos los proyectos →</a>
	</div>
	<div class="mt-10 grid gap-8 lg:grid-cols-2">
		{#each data.spotlightProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<section class="py-16">
	<SectionTitle
		eyebrow="Trayectoria"
		title="Estudios y focos de investigación"
		description="Combinación de DAM + Máster en IA para construir productos más seguros."
	/>
		<div class="mt-8 space-y-6">
			{#each data.timeline as item}
				<div class="relative">
					<p class="text-lg font-semibold text-slate-100">{item.role}</p>
					<p class="text-sm text-secondary">{item.org}</p>
					<p class="text-sm text-slate-400">{item.description}</p>
				</div>
			{/each}
		</div>
	</section>
