<script lang="ts">
	type CSSSize = string;

	type Props = {
		imageSrc: string;
		altText?: string;
		captionText?: string;
		containerHeight?: CSSSize;
		containerWidth?: CSSSize;
		imageHeight?: CSSSize;
		imageWidth?: CSSSize;
		scaleOnHover?: number;
		rotateAmplitude?: number;
		showMobileWarning?: boolean;
		showTooltip?: boolean;
		displayOverlayContent?: boolean;
		overlayTitle?: string;
		overlayDescription?: string;
	};

	let {
		imageSrc,
		altText = 'Tilted card image',
		captionText = '',
		containerHeight = '300px',
		containerWidth = '100%',
		imageHeight = '300px',
		imageWidth = '300px',
		scaleOnHover = 1.1,
		rotateAmplitude = 14,
		showMobileWarning = true,
		showTooltip = true,
		displayOverlayContent = false,
		overlayTitle = '',
		overlayDescription = ''
	}: Props = $props();
let container: HTMLElement | null = null;
let pointerXValue = $state(0);
let pointerYValue = $state(0);
	let rotateXValue = $state(0);
	let rotateYValue = $state(0);
	let translateXValue = $state(0);
	let translateYValue = $state(0);
	let liftValue = $state(0);
	let scaleValue = $state(1);
let tooltipOpacityValue = $state(0);
let rotateCaptionValue = $state(0);
let lastY = 0;

	function handleMouse(event: MouseEvent) {
		if (!container) return;
		const rect = container.getBoundingClientRect();
		const offsetX = event.clientX - rect.left - rect.width / 2;
		const offsetY = event.clientY - rect.top - rect.height / 2;

		const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
		const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

		rotateXValue = rotationX;
		rotateYValue = rotationY;
		translateXValue = (offsetX / rect.width) * 40;
		translateYValue = (offsetY / rect.height) * 40;
		pointerXValue = event.clientX - rect.left;
		pointerYValue = event.clientY - rect.top;

		const velocityY = offsetY - lastY;
		rotateCaptionValue = -velocityY * 0.6;
		lastY = offsetY;
	}

	function handleEnter() {
		scaleValue = Math.max(scaleOnHover, 1.12);
		liftValue = 60;
		tooltipOpacityValue = 1;
	}

	function handleLeave() {
		translateXValue = 0;
		translateYValue = 0;
		liftValue = 0;
		scaleValue = 1;
		tooltipOpacityValue = 0;
		rotateXValue = 0;
		rotateYValue = 0;
		rotateCaptionValue = 0;
	}

	const overlayVisible = displayOverlayContent && (overlayTitle || overlayDescription);
</script>

<figure
	bind:this={container}
	class="relative flex h-full w-full flex-col items-center justify-center [perspective:800px]"
	style={`height:${containerHeight};width:${containerWidth};`}
	onmousemove={handleMouse}
	onmouseenter={handleEnter}
	onmouseleave={handleLeave}
>
	{#if showMobileWarning}
		<div class="absolute top-4 text-center text-sm text-slate-400 sm:hidden">
			Este efecto se ve mejor en escritorio.
		</div>
	{/if}

	<div
		class="relative transition-transform duration-300 ease-out [transform-style:preserve-3d]"
		style={`width:${imageWidth};height:${imageHeight};transform:translate3d(${translateXValue}px, ${translateYValue}px, ${liftValue}px) rotateX(${rotateXValue}deg) rotateY(${rotateYValue}deg) scale(${scaleValue});`}
	>
		<img
			src={imageSrc}
			alt={altText}
			class="absolute left-0 top-0 rounded-[15px] object-cover shadow-2xl will-change-transform [transform:translateZ(0)]"
			style={`width:${imageWidth};height:${imageHeight};`}
			loading="lazy"
		/>

		{#if overlayVisible}
			<div class="absolute left-0 top-0 z-[2] space-y-1 rounded-2xl border border-border/60 bg-surface/80 p-4 text-sm text-slate-200 [transform:translateZ(35px)]">
				{#if overlayTitle}
					<p class="text-sm font-semibold text-primary">{overlayTitle}</p>
				{/if}
				{#if overlayDescription}
					<p class="text-xs text-slate-400">{overlayDescription}</p>
				{/if}
			</div>
		{/if}
	</div>

	{#if showTooltip && captionText}
		<figcaption
			class="pointer-events-none absolute left-0 top-0 hidden rounded bg-white px-2 py-1 text-[10px] text-[#2d2d2d] shadow-lg transition-opacity duration-200 sm:block"
			style={`transform:translate(${pointerXValue}px, ${pointerYValue}px) rotate(${rotateCaptionValue}deg);opacity:${tooltipOpacityValue};`}
		>
			{captionText}
		</figcaption>
	{/if}
</figure>
