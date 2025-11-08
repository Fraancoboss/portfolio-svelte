<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const canSubmit = Boolean(data.contactEndpoint);
</script>

<svelte:head>
	<title>Contacto · Fran</title>
	<meta
		name="description"
		content="Reserva una mentoría, solicita una auditoría o colabora en proyectos Secure by Design."
	/>
</svelte:head>

<section class="py-12">
	<div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
		<div class="flex flex-col gap-8 h-full">
			<SectionTitle
				eyebrow="Contacto"
				title="Hablemos sobre seguridad, diseño o divulgación"
				description="Respondo en menos de 24h. Prefiero conversaciones con contexto técnico."
			/>
			<div class="flex flex-col gap-6 flex-1">
				<div class="space-y-4">
					{#each data.contactChannels as channel}
						<a
							class="flex flex-col gap-1 rounded-3xl border border-border/60 bg-gradient-to-r from-slate-900/70 to-slate-800/50 px-6 py-5 text-slate-100 shadow-lg shadow-black/20 transition hover:border-primary/60 hover:shadow-primary/20"
							href={channel.href}
						>
							<p class="text-xs uppercase tracking-[0.3em] text-primary/80">{channel.label}</p>
							<p class="text-xl font-semibold text-slate-50">{channel.value}</p>
							{#if channel.subtitle}
								<p class="text-sm text-slate-400">{channel.subtitle}</p>
							{/if}
						</a>
					{/each}
				</div>
				<div class="rounded-3xl border border-border/70 bg-surface/60 p-6 mt-auto">
					<p class="text-sm uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text font-bold">
						Redes
					</p>
					<div class="mt-4 flex flex-wrap gap-3 text-sm">
						{#each data.socialLinks as social}
							<a
								href={social.href}
								target="_blank"
								rel="noreferrer"
								class="rounded-full border border-border/80 px-4 py-2 text-slate-300 transition hover:border-primary/60 hover:text-primary"
							>
								{social.label}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<form
			class="rounded-3xl border border-border/70 bg-surface/70 p-8 shadow-2xl space-y-8"
			method="POST"
			action={canSubmit ? data.contactEndpoint : undefined}
		>
			<div>
				<h2 class="text-3xl font-semibold text-slate-50 sm:text-4xl">Contáctame ahora</h2>
			</div>
			<div class="grid gap-6">
				<label class="flex flex-col gap-2 text-sm text-slate-200">
					Nombre completo
					<input
						type="text"
						name="name"
						required
						class="rounded-xl border border-border/70 bg-transparent px-4 py-3 text-base focus:border-primary focus:outline-none"
					/>
				</label>
				<label class="flex flex-col gap-2 text-sm text-slate-200">
					Email profesional
					<input
						type="email"
						name="email"
						required
						class="rounded-xl border border-border/70 bg-transparent px-4 py-3 text-base focus:border-primary focus:outline-none"
					/>
				</label>
				<label class="flex flex-col gap-2 text-sm text-slate-200">
					Tema
					<select
						name="topic"
						class="rounded-xl border border-border/70 bg-surface px-4 py-3 text-base focus:border-primary focus:outline-none"
					>
						<option value="informacion">Información sobre mí</option>
						<option value="interes">Interés laboral</option>
						<option value="colaboracion">Colaboración creativa</option>
					</select>
				</label>
				<label class="flex flex-col gap-2 text-sm text-slate-200">
					Mensaje
					<textarea
						name="message"
						rows="5"
						required
						class="rounded-xl border border-border/70 bg-transparent px-4 py-3 text-base focus:border-primary focus:outline-none"
					></textarea>
				</label>
				<label class="flex items-center gap-3 text-xs text-slate-400">
					<input type="checkbox" name="consent" required class="rounded border-border/70 bg-transparent" />
					Acepto recibir una respuesta con recomendaciones técnicas.
				</label>
					<button
						type="submit"
						class="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-surface transition hover:shadow-lg hover:shadow-primary/20"
						disabled={!canSubmit}
					>
						Enviar solicitud
					</button>
					{#if !canSubmit}
						<p class="text-xs text-amber-300">
							Configura `PUBLIC_CONTACT_ENDPOINT` para activar el envío (Formspree, Getform, Basin, etc.).
						</p>
					{/if}
				</div>
			</form>
		</div>
</section>
