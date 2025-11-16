<script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';

	let { children } = $props();
</script>

<div class="relative min-h-screen overflow-hidden bg-surface text-body">
	<div class="pointer-events-none absolute inset-0 opacity-60">
		<div class="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[140px]"></div>
		<div class="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-secondary/10 blur-[180px]"></div>
	</div>

	<div class="relative flex min-h-screen flex-col">
		<Navbar />
		<main class="flex-1">
			<div class="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				{#key $page.url.pathname}
					<div class="page-transition" in:fade={{ duration: 250 }} out:fade={{ duration: 200 }}>
						<div
							in:fly={{ y: 16, duration: 300, easing: quintOut }}
							out:fly={{ y: -16, duration: 200, easing: quintOut }}
						>
							{@render children?.()}
						</div>
					</div>
				{/key}
			</div>
		</main>
		<Footer />
	</div>
</div>
