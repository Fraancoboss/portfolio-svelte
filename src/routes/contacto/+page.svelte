<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { profileContent } from '$lib/data/profile';

	const content = profileContent;
	const contactChannels = content.contactChannels;
	const contactIntro = {
		eyebrow: 'Contacto',
		title: 'Conversemos sobre prácticas, auditorías o mentorías',
		description:
			'Respondo en menos de 24h y adapto el canal a tus necesidades. Estos son los medios más directos.'
	};
</script>

<svelte:head>
	<title>Contacto · Fran</title>
	<meta
		name="description"
		content="Escríbeme para prácticas profesionales, auditorías de seguridad o colaboraciones técnicas."
	/>
</svelte:head>

<section class="py-10 space-y-10">
	<SectionTitle
		eyebrow={contactIntro.eyebrow}
		title={contactIntro.title}
		description={contactIntro.description}
	/>

	<div class="grid gap-6 md:grid-cols-2">
		{#each contactChannels as channel}
			<article
				class={`rounded-3xl border border-border/70 p-6 shadow-2xl space-y-3 ${
					channel.fullWidth ? 'md:col-span-2 bg-sky-200/10 border-sky-200/40' : 'bg-surface/70'
				}`}
			>
				<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text font-bold">
					{channel.label}
				</p>
				<p class="text-2xl font-semibold text-slate-100">{channel.value}</p>
				{#if channel.subtitle}
					<p class="text-sm text-slate-400">{channel.subtitle}</p>
				{/if}
				{#if channel.href}
					<a
						class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary"
						href={channel.href}
						target={channel.href.startsWith('http') ? '_blank' : undefined}
						rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
					>
						<span>
							{channel.label === 'LinkedIn'
								? 'Conóceme'
								: channel.label === 'GitHub'
									? 'Mira mis proyectos'
									: 'Contáctame'}
						</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4" fill="none">
							<path
								d="M7 17 17 7M9 7h8v8"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
							/>
						</svg>
					</a>
				{/if}
			</article>
		{/each}
	</div>
	<div class="md:col-span-2 rounded-3xl border border-sky-200/40 bg-sky-200/10 p-6 shadow-2xl space-y-4">
		<hr class="border border-sky-300/50" />
		<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text font-bold">
			Disponibilidad
		</p>
		<p class="text-base text-body">
			De cara a febrero de 2026 estaré disponible para realizar prácticas de DAM enfocadas en el
			desarrollo seguro. Me interesa integrarme en proyectos donde la ciberseguridad y las
			funcionalidades de inteligencia artificial sean el centro, aportando documentación detallada,
			pruebas automatizadas y soluciones creativas para acelerar al equipo.
		</p>
	</div>
</section>
