<script lang="ts">
	import { navigation } from '$lib/data/profile';
	import { page } from '$app/stores';

	let isMenuOpen = false;
	$: pathname = $page.url.pathname;

	const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
</script>

<header class="sticky top-0 z-30 border-b border-border/70 bg-surface/80 backdrop-blur-lg">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
		<a class="flex items-center gap-2 text-lg font-semibold tracking-tight" href="/">
			<span class="uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text">
				FRAN COBOS RODRÍGUEZ
			</span>
		</a>

		<nav class="hidden items-center gap-6 text-sm font-medium md:flex">
			{#each navigation as link}
				<a
					href={link.href}
					aria-current={isActive(link.href) ? 'page' : undefined}
					class={`relative inline-flex flex-col items-start gap-1 text-sm transition ${
						isActive(link.href) ? 'text-primary' : 'text-slate-300 hover:text-white'
					}`}
				>
					<span>{link.label}</span>
					<span class="text-[11px] uppercase tracking-widest text-slate-500">{link.description}</span>
					{#if isActive(link.href)}
						<span class="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-primary to-secondary"></span>
					{/if}
				</a>
			{/each}
			<a
				href="/contact"
				class="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-xs uppercase tracking-widest text-primary transition hover:-translate-y-0.5 hover:border-primary/80 hover:text-white"
			>
				<span>Contacto</span>
			</a>
		</nav>

		<button
			type="button"
			class="inline-flex items-center justify-center rounded-md border border-border/80 p-2 text-slate-200 md:hidden"
			onclick={() => (isMenuOpen = !isMenuOpen)}
			aria-expanded={isMenuOpen}
			aria-label="Abrir menú de navegación"
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

	{#if isMenuOpen}
		<div class="border-t border-border/70 bg-surface/95 px-4 py-4 text-sm md:hidden">
			<nav class="flex flex-col gap-4">
				{#each navigation as link}
					<a
						href={link.href}
						class={`flex flex-col gap-1 rounded-lg border px-4 py-3 ${
							isActive(link.href)
								? 'border-primary/50 text-primary'
								: 'border-transparent text-slate-300 hover:border-border hover:text-white'
						}`}
						onclick={() => (isMenuOpen = false)}
					>
						<span class="text-base font-semibold">{link.label}</span>
						<span class="text-xs uppercase tracking-wide text-slate-500">{link.description}</span>
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>
