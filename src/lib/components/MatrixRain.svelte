<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	export let side: 'left' | 'right' = 'left';
	export let width = 140;
	// Offset positivo para desplazar el canvas hacia fuera y liberar el centro.
	export let offset = 100;
	// Permite extender el efecto para cubrir desde el borde de pantalla.
	export let fillViewportSide = false;
	// Suaviza la desaparición en el centro para no tapar el contenido.
	export let centerFadeWidth = 160;
	// Con shift controlamos una traslación extra para separar la columna del contenido.
	export let shift = 0;
	// Altura (px) donde el efecto debe comenzar a desvanecerse antes del final del documento.
	export let bottomFadeHeight = 240;
	// Si definimos maxHeight, limitamos la altura total del efecto para no invadir secciones bajas.
	export let maxHeight: number | null = null;

	let canvas: HTMLCanvasElement | null = null;
	let ctx: CanvasRenderingContext2D | null = null;
	let animationId: number | null = null;
	let drops: number[] = [];
	let canvasHeight = 0;
	let canvasWidth = width;

	const characters = '1010011010010110';
	const fontSize = 16;

	const setupCanvas = () => {
		if (!canvas) return;
		const ratio = window.devicePixelRatio || 1;
		const root = document.documentElement;
		canvasHeight = Math.max(root.scrollHeight, root.clientHeight, window.innerHeight);
		if (maxHeight !== null) {
			canvasHeight = Math.min(canvasHeight, maxHeight);
		}

		canvasWidth = fillViewportSide ? Math.max(width, Math.round(window.innerWidth / 2) + offset) : width;

		canvas.width = canvasWidth * ratio;
		canvas.height = canvasHeight * ratio;
		canvas.style.width = `${canvasWidth}px`;
		canvas.style.height = `${canvasHeight}px`;

		ctx = canvas.getContext('2d');
		if (!ctx) return;

		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.scale(ratio, ratio);

		const columns = Math.floor(canvasWidth / (fontSize - 2));
		drops = Array.from({ length: columns }, () => Math.random() * 20);
	};

	const draw = () => {
		const context = ctx;
		if (!context) return;

		context.fillStyle = 'rgba(4, 7, 12, 0.25)';
		context.fillRect(0, 0, canvasWidth, canvasHeight);

		context.fillStyle = 'rgba(93, 224, 255, 0.65)';
		context.font = `${fontSize}px "Space Mono", "Space Grotesk", monospace`;

		const horizontalFade = Math.min(centerFadeWidth, canvasWidth);
		const bottomFadeStart = Math.max(canvasHeight - bottomFadeHeight, 0);

		const fadeAlpha = (x: number) => {
			if (horizontalFade <= 0) return 1;
			if (side === 'left') {
				if (x <= canvasWidth - horizontalFade) return 1;
				return Math.max(0, (canvasWidth - x) / horizontalFade);
			}
			if (x >= horizontalFade) return 1;
			return Math.max(0, x / horizontalFade);
		};

		drops.forEach((drop, index) => {
			const text = characters.charAt(Math.floor(Math.random() * characters.length));
			const x = index * (fontSize - 2);
			const y = drop * fontSize;

			let alpha = fadeAlpha(x);
			if (bottomFadeHeight > 0 && y >= bottomFadeStart) {
				alpha *= Math.max(0, (canvasHeight - y) / bottomFadeHeight);
			}

			context.globalAlpha = alpha;
			context.fillText(text, x, y);
			context.globalAlpha = 1;

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
		const observer = new ResizeObserver(handleResize);
		observer.observe(document.body);

		return () => {
			if (animationId) cancelAnimationFrame(animationId);
			window.removeEventListener('resize', handleResize);
			observer.disconnect();
		};
	});

	onDestroy(() => {
		if (animationId) cancelAnimationFrame(animationId);
	});
</script>

<canvas
	bind:this={canvas}
	class={`matrix-canvas matrix-canvas-${side}`}
	style={`--matrix-width:${canvasWidth}px; --matrix-offset:${offset}px; --matrix-shift:${shift}px`}
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
		mask-image: linear-gradient(
			to bottom,
			transparent,
			rgba(0, 0, 0, 0.6) 8%,
			rgba(0, 0, 0, 0.95) 85%,
			rgba(0, 0, 0, 0.35) 95%,
			transparent
		);
		-webkit-mask-image: linear-gradient(
			to bottom,
			transparent,
			rgba(0, 0, 0, 0.6) 8%,
			rgba(0, 0, 0, 0.95) 85%,
			rgba(0, 0, 0, 0.35) 95%,
			transparent
		);
	}

	.matrix-canvas-left {
		left: calc(var(--matrix-offset) * -1 + var(--matrix-shift));
	}

	.matrix-canvas-right {
		right: calc(var(--matrix-offset) * -1 + var(--matrix-shift));
	}
</style>
