<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Divulgación y blog · Fran</title>
	<meta
		name="description"
		content="Artículos técnicos sobre ciberseguridad, criptografía aplicada y diseño Secure by Design."
	/>
</svelte:head>

<section class="py-12">
	<SectionTitle
		eyebrow="Divulgación"
		title="Ideas, guías y estudios sobre seguridad avanzada"
		description="Contenido listo para convertirse en mdsvex y conectado con tus proyectos."
	/>

	<div class="mt-10 grid gap-6 lg:grid-cols-3">
		{#each data.featuredPosts as post}
			<a
				class="rounded-3xl border border-border/70 bg-surface/60 p-6 transition hover:-translate-y-1 hover:border-primary/70"
				href={`/blog/${post.slug}`}
			>
				<p class="text-xs uppercase tracking-[0.3em] text-secondary">{post.category}</p>
				<h3 class="mt-3 text-2xl font-semibold text-slate-50">{post.title}</h3>
				<p class="mt-2 text-sm text-slate-400">{post.excerpt}</p>
				<p class="mt-4 text-xs text-slate-500">{post.publishedAt} · {post.readingTime}</p>
				<div class="mt-4 flex flex-wrap gap-2">
					{#each post.tags as tag}
						<span class="rounded-full border border-border/80 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-slate-400">
							{tag}
						</span>
					{/each}
				</div>
			</a>
		{/each}
	</div>

	<div class="mt-16 space-y-6">
		{#each data.articles as article}
			<a
				href={`/blog/${article.slug}`}
				class="flex flex-col gap-4 rounded-2xl border border-border/70 bg-surface/70 p-6 transition hover:border-primary/60 hover:text-primary sm:flex-row sm:items-center sm:justify-between"
			>
				<div>
					<p class="text-xs uppercase tracking-[0.4em] text-primary/70">{article.category}</p>
					<h4 class="text-xl font-semibold text-slate-100">{article.title}</h4>
					<p class="text-sm text-slate-400">{article.excerpt}</p>
				</div>
				<div class="text-right text-xs text-slate-500">
					<p>{article.publishedAt}</p>
					<p>{article.readingTime}</p>
				</div>
			</a>
		{:else}
			<p class="text-slate-400">Pronto habrá publicaciones en formato markdown usando mdsvex.</p>
		{/each}
	</div>
</section>
