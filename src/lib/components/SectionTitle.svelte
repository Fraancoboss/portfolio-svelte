<script lang="ts">
	type Props = {
		eyebrow?: string;
		title: string;
		description?: string;
		align?: 'left' | 'center';
	};

	let { eyebrow, title, description, align = 'left' }: Props = $props();

	const alignment = $derived(align === 'center' ? 'text-center mx-auto' : 'text-left');
</script>

<div class={`space-y-3 ${alignment} max-w-3xl`}>
	{#if eyebrow}
		<p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{eyebrow}</p>
	{/if}
	<h2 class="text-3xl font-semibold text-slate-100 sm:text-4xl">{title}</h2>
	{#if description}
		<p class="text-base text-slate-400">{description}</p>
	{/if}
</div>
