<script lang="ts">
	import '../app.css';
	import Layout from '$lib/components/Layout.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { base } from '$app/paths';
	import { profileContent } from '$lib/data/profile';

	let { children } = $props();

	// Decisión: usamos profileContent.es directamente porque el despliegue estático
	// obliga a fijar un idioma. Esto evita lógicas de idioma que no aportan funcionalidad real.
	const siteMetadata = profileContent.es.siteMetadata;
	const ogImage = siteMetadata.image.startsWith('http')
		? siteMetadata.image
		: `${base}${siteMetadata.image}`;
	const ogLocale = siteMetadata.language === 'en' ? 'en_US' : 'es_ES';
</script>

<svelte:head>
	<title>{siteMetadata.title}</title>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<link rel="canonical" href={siteMetadata.url} />
	<meta name="description" content={siteMetadata.description} />
	<meta name="keywords" content={siteMetadata.keywords.join(', ')} />
	<meta name="author" content={siteMetadata.name} />
	<meta property="og:title" content={siteMetadata.title} />
	<meta property="og:description" content={siteMetadata.description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:url" content={siteMetadata.url} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={siteMetadata.title} />
	<meta name="twitter:description" content={siteMetadata.description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<Layout>{@render children?.()}</Layout>
