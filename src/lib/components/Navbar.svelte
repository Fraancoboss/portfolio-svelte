<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { profileContent } from '$lib/data/profile';

	/**
	 * Decisión: fijamos todo el contenido en profileContent
	 * para simplificar el despliegue estático en GitHub Pages y evitar dependencias
	 * con stores globales o sincronización de idioma. Este componente solo necesita
	 * datos inmutables de navegación y CTA, por lo que mantenerlos en constantes
	 * reduce la complejidad y deja claro de dónde salen los textos.
	 */
	const content = profileContent;
	const navigation = content.navigation;
	const navbarCopy = content.navbar;

	let isMenuOpen = $state(false);
	const pathname = $derived($page.url.pathname);

	const resolveHref = (href: string) => (href.startsWith('http') ? href : `${base}${href}`);
	const isActive = (href: string) => {
		const target = resolveHref(href);
		return target === base || target === `${base}/`
			? pathname === `${base}/` || pathname === base
			: pathname.startsWith(target);
	};
</script>

<header class="sticky top-0 z-30 border-b border-border/70 bg-surface/80 backdrop-blur-lg">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
		<a class="flex items-center gap-2 text-lg font-semibold tracking-tight" href={resolveHref('/')}>
			<span class="uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text">
				FRAN COBOS RODRÍGUEZ
			</span>
		</a>

		<nav class="hidden items-center gap-6 text-sm font-medium md:flex">
			{#each navigation as link}
				<a
					href={resolveHref(link.href)}
					aria-current={isActive(link.href) ? 'page' : undefined}
					class={`relative inline-flex text-sm transition ${
						isActive(link.href) ? 'text-primary' : 'text-slate-300 hover:text-white'
					}`}
				>
					<span>{link.label}</span>
					{#if isActive(link.href)}
						<span class="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-primary to-secondary"></span>
					{/if}
				</a>
			{/each}
			<a
				href={resolveHref('/contacto')}
				class="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-xs uppercase tracking-widest text-primary transition hover:-translate-y-0.5 hover:border-primary/80 hover:bg-sky-200/10 hover:text-primary"
			>
				<span>{navbarCopy.contactCta}</span>
			</a>
		</nav>

		<div class="flex items-center gap-3 md:hidden">
			<button
				type="button"
				class="inline-flex items-center justify-center rounded-md border border-border/80 p-2 text-slate-200"
				onclick={() => (isMenuOpen = !isMenuOpen)}
				aria-expanded={isMenuOpen}
				aria-label={navbarCopy.menuLabel}
			>
				{#if isMenuOpen}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="none">
						<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 6l12 12M18 6 6 18" />
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="none">
						<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 7h14M5 12h14M5 17h14" />
					</svg>
				{/if}
			</button>
		</div>
	</div>

	{#if isMenuOpen}
		<div class="border-t border-border/70 bg-surface/95 px-4 py-4 text-sm md:hidden">
			<nav class="flex flex-col gap-4">
				{#each navigation as link}
					<a
						href={resolveHref(link.href)}
						class={`flex flex-col gap-1 rounded-lg border px-4 py-3 ${
							isActive(link.href)
								? 'border-primary/50 text-primary'
								: 'border-transparent text-slate-300 hover:border-border hover:text-white'
						}`}
						onclick={() => (isMenuOpen = false)}
					>
						<span class="text-base font-semibold">{link.label}</span>
					</a>
				{/each}
			</nav>
			<div class="mt-4 flex flex-wrap items-center justify-between gap-3">
				<a
					href={resolveHref('/contacto')}
					class="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary hover:bg-sky-200/10"
					onclick={() => (isMenuOpen = false)}
				>
					{navbarCopy.contactCta}
				</a>
			</div>
		</div>
	{/if}
</header>
