<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { profileContent } from '$lib/data/profile';

	// Decisión: al no haber formulario dinámico, basta con renderizar el contenido estático.
	const contactPage = profileContent.es.contactPage;
	const socialLinks = profileContent.es.socialLinks;
</script>

<svelte:head>
	<title>{contactPage.headTitle}</title>
	<meta name="description" content={contactPage.headDescription} />
</svelte:head>

<section class="py-8">
	<div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
		<div class="flex flex-col gap-6 h-full">
			<SectionTitle
				eyebrow={contactPage.section.eyebrow}
				title={contactPage.section.title}
				description={contactPage.section.description}
			/>
			<div class="space-y-6 rounded-2xl border border-border/70 bg-surface/60 p-5 shadow-2xl">
				<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text font-bold">
					{contactPage.directContactLabel}
				</p>
				<div class="space-y-4 text-sm text-body">
					<p>{contactPage.directEmail}</p>
					<p>{contactPage.directStatusText}</p>
				</div>
				<div>
					<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text font-bold">
						{contactPage.networksLabel}
					</p>
					<div class="mt-3 flex flex-wrap gap-2 text-sm">
						{#each socialLinks as social}
							<a
								href={social.href}
								target="_blank"
								rel="noreferrer"
								class="rounded-full border border-border/80 px-3 py-1.5 text-slate-300 transition hover:border-primary/60 hover:text-primary"
							>
								{social.label}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="rounded-2xl border border-border/70 bg-surface/70 p-6 shadow-2xl space-y-5">
			{#each contactPage.groupedHighlights as highlight}
				<div class="space-y-2 rounded-2xl border border-border/60 bg-surface/80 p-4">
					<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text font-bold">
						{highlight.title}
					</p>
					<p class="text-sm text-body">{highlight.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
