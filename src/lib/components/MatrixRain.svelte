<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	export let side: 'left' | 'right' = 'left';
	export let width = 140;

	let canvas: HTMLCanvasElement | null = null;
	let ctx: CanvasRenderingContext2D | null = null;
	let animationId: number | null = null;
	let drops: number[] = [];
	let canvasHeight = 0;

	const characters = '1010011010010110';
	const fontSize = 16;

	const setupCanvas = () => {
		if (!canvas) return;
		const ratio = window.devicePixelRatio || 1;
		canvasHeight = window.innerHeight;

		canvas.width = width * ratio;
		canvas.height = canvasHeight * ratio;
		canvas.style.width = `${width}px`;
		canvas.style.height = `${canvasHeight}px`;

		ctx = canvas.getContext('2d');
		if (!ctx) return;

		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.scale(ratio, ratio);

		const columns = Math.floor(width / (fontSize - 2));
		drops = Array.from({ length: columns }, () => Math.random() * 20);
	};

	const draw = () => {
		const context = ctx;
		if (!context) return;

		context.fillStyle = 'rgba(4, 7, 12, 0.25)';
		context.fillRect(0, 0, width, canvasHeight);

		context.fillStyle = 'rgba(93, 224, 255, 0.65)';
		context.font = `${fontSize}px "Space Mono", "Space Grotesk", monospace`;

		drops.forEach((drop, index) => {
			const text = characters.charAt(Math.floor(Math.random() * characters.length));
			const x = index * (fontSize - 2);
			const y = drop * fontSize;

			context.fillText(text, x, y);

			if (y > canvasHeight && Math.random() > 0.975) {
				drops[index] = 0;
			} else {
				drops[index] = drop + 1;
			}
		});
	};

	const animate = () => {
		draw();
		animationId = requestAnimationFrame(animate);
	};

	onMount(() => {
		const handleResize = () => {
			setupCanvas();
		};

		setupCanvas();
		animate();
		window.addEventListener('resize', handleResize);

		return () => {
			if (animationId) cancelAnimationFrame(animationId);
			window.removeEventListener('resize', handleResize);
		};
	});

	onDestroy(() => {
		if (animationId) cancelAnimationFrame(animationId);
	});
</script>

<canvas
	bind:this={canvas}
	class={`matrix-canvas matrix-canvas-${side}`}
	style={`--matrix-width:${width}px`}
	aria-hidden="true"
></canvas>

<style>
	.matrix-canvas {
		position: absolute;
		top: 0;
		bottom: 0;
		width: var(--matrix-width);
		height: 100%;
		pointer-events: none;
		mix-blend-mode: screen;
		opacity: 0.9;
		mask-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6) 15%, rgba(0, 0, 0, 0.95) 70%, transparent);
		-webkit-mask-image: linear-gradient(
			to bottom,
			transparent,
			rgba(0, 0, 0, 0.6) 15%,
			rgba(0, 0, 0, 0.95) 70%,
			transparent
		);
	}

	.matrix-canvas-left {
		left: -25px;
	}

	.matrix-canvas-right {
		right: -25px;
	}
</style>
