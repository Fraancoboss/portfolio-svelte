<script lang="ts">
	import { siteMetadata } from '$lib/data/profile';
	import type { Snippet } from 'svelte';

	type PostMetadata = {
		title?: string;
		excerpt?: string;
		category?: string;
		publishedAt?: string;
		readingTime?: string;
		tags?: string[];
	};

let { metadata = {}, children }: { metadata?: PostMetadata; children?: Snippet } = $props();
</script>

<svelte:head>
	{#if metadata?.title}
		<title>{metadata.title} · {siteMetadata.name}</title>
		<meta name="description" content={metadata.excerpt ?? siteMetadata.description} />
		<meta property="og:title" content={`${metadata.title} · ${siteMetadata.name}`} />
		<meta property="og:description" content={metadata.excerpt ?? siteMetadata.description} />
	{/if}
</svelte:head>

<article class="prose prose-invert prose-slate mx-auto max-w-3xl py-12 prose-headings:font-semibold prose-headings:text-slate-100 prose-a:text-primary hover:prose-a:text-secondary">
	<header class="mb-10 space-y-2 text-center">
		<p class="text-xs uppercase tracking-[0.3em] text-primary/70">{metadata.category}</p>
		<h1 class="text-4xl font-semibold text-slate-50">{metadata.title}</h1>
		<p class="text-sm text-slate-400">
			Publicado el {metadata.publishedAt} · {metadata.readingTime}
		</p>
	</header>
	{@render children?.()}
</article>
