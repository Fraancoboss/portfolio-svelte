<script lang="ts">
	import { navigation, siteMetadata, socialLinks } from '$lib/data/profile';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-border/80 bg-surface/80">
	<div class="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
		<div class="max-w-md space-y-4">
			<p class="text-lg font-semibold">{siteMetadata.name} · Secure by Design</p>
			<p class="text-sm text-slate-400">
				Creo soluciones digitales seguras combinando criptografía aplicada, IA defensiva y diseño centrado en las personas.
			</p>
			<div class="flex flex-wrap gap-3">
				{#each socialLinks as social}
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
				<p class="font-semibold text-slate-200">Mapa del sitio</p>
				<ul class="mt-3 space-y-2 text-slate-400">
					{#each navigation as item}
						<li>
							<a href={item.href} class="hover:text-white">{item.label}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<p class="font-semibold text-slate-200">Disponibilidad</p>
				<ul class="mt-3 space-y-2 text-slate-400">
					<li>Abierto a prácticas profesionales</li>
					<li>Colaboraciones en ciberseguridad ofensiva</li>
					<li>Diseño de frameworks visuales seguros</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="border-t border-border/80 bg-surface/90 px-4 py-4 text-center text-xs uppercase tracking-[0.2em] text-slate-500 sm:px-6 lg:px-8">
		© {year} {siteMetadata.name}. Construido con SvelteKit, TypeScript y TailwindCSS.
	</div>
</footer>
