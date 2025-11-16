<script lang="ts">
	import { base } from '$app/paths';
	import { profileContent } from '$lib/data/profile';

	/**
	 * Decisión: la información del pie se resuelve una sola vez desde profileContent.es
	 * para dejar claro que el sitio se publica en español fijo y no depende de stores reactivos.
	 * Esto documenta explícitamente de dónde salen navegación, redes y textos legales.
	 */
	const content = profileContent.es;
	const year = new Date().getFullYear();
	const resolveHref = (href: string) => (href.startsWith('http') ? href : `${base}${href}`);
</script>

<footer class="border-t border-border/80 bg-surface/80">
	<div class="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
		<div class="max-w-md space-y-4">
			<p class="text-lg font-semibold">{content.siteMetadata.name} · Secure by Design</p>
			<p class="text-sm text-slate-400">
				{content.footer.tagline}
			</p>
			<div class="flex flex-wrap gap-3">
				{#each content.socialLinks as social}
					<a
						href={social.href}
						target="_blank"
						rel="noreferrer"
						class="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-slate-300 transition hover:border-primary/60 hover:text-primary"
					>
						{social.label}
					</a>
				{/each}
			</div>
		</div>

		<div class="grid flex-1 grid-cols-1 gap-8 text-sm sm:grid-cols-2">
			<div>
				<p class="font-semibold text-body">{content.footer.siteMapTitle}</p>
				<ul class="mt-3 space-y-2 text-slate-400">
					{#each content.navigation as item}
						<li>
							<a href={resolveHref(item.href)} class="hover:text-white">{item.label}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<p class="font-semibold text-body">{content.footer.availabilityTitle}</p>
				<ul class="mt-3 space-y-2 text-slate-400">
					{#each content.footer.availability as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class="border-t border-border/80 bg-surface/90 px-4 py-4 text-center text-xs uppercase tracking-[0.2em] text-slate-500 sm:px-6 lg:px-8">
		© {year} {content.siteMetadata.name}. {content.footer.signature}
	</div>
</footer>
