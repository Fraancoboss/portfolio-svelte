<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import { profileContent } from '$lib/data/profile';

	// Decisión: fijamos la fuente de datos en profileContent.es para mantener
	// coherencia con el resto del sitio estático.
	let { data }: { data: PageData } = $props();
	const withBase = (path: string) => `${base}${path}`;
	const blogPage = profileContent.es.blogPage;
	const featuredPosts = profileContent.es.featuredPosts;
</script>

<svelte:head>
	<title>{blogPage.headTitle}</title>
	<meta name="description" content={blogPage.headDescription} />
</svelte:head>

<section class="py-12">
	<SectionTitle
		eyebrow={blogPage.section.eyebrow}
		title={blogPage.section.title}
		description={blogPage.section.description}
	/>

	<div class="mt-10 grid gap-6 lg:grid-cols-3">
		{#each featuredPosts as post}
			<a
				class="rounded-3xl border border-border/70 bg-surface/60 p-6 transition hover:-translate-y-1 hover:border-primary/70"
				href={withBase(`/blog/${post.slug}`)}
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
				href={withBase(`/blog/${article.slug}`)}
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
			<p class="text-slate-400">{blogPage.emptyState}</p>
		{/each}
	</div>
</section>
