import type { Handle } from '@sveltejs/kit';

// Limitar a métodos seguros evita sorpresas si GitHub Pages llega a reenviar verbos no soportados.
const ALLOWED_METHODS = new Set(['GET', 'POST', 'OPTIONS', 'HEAD']);

/**
 * Hardening defensivo: cada cabecera documenta la amenaza que evita para que el despliegue estático
 * permanezca entendible en el tiempo y podamos auditarlo rápido sin abrir commits antiguos.
 */
const SECURITY_HEADERS: Record<string, string> = {
	// Bloquea iframes maliciosos que provoquen clickjacking.
	'X-Frame-Options': 'DENY',
	// Obliga al navegador a respetar el tipo declarado por Vite y evita sniffing.
	'X-Content-Type-Options': 'nosniff',
	// Aislamos el referrer para no filtrar rutas internas completas.
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	// Deshabilitamos APIs sensibles no utilizadas por el portfolio.
	'Permissions-Policy': 'geolocation=(), microphone=()',
	// CSP mínima para hosting estático; mantenemos 'unsafe-inline' sólo para los estilos generados por Tailwind.
	'Content-Security-Policy':
		"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;",
	// Forzamos HTTPS en subdominios para prevenir downgrades en GitHub Pages.
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	// Ubicamos los assets en el mismo origen para evitar que terceros lean recursos caché.
	'Cross-Origin-Resource-Policy': 'same-origin'
};

export const handle: Handle = async ({ event, resolve }) => {
	if (!ALLOWED_METHODS.has(event.request.method)) {
		return new Response('Método no permitido', {
			status: 405,
			headers: { Allow: Array.from(ALLOWED_METHODS).join(', ') }
		});
	}

	const response = await resolve(event, {
		// Documentado: sólo exponemos cabeceras estrictamente necesarias al cliente.
		filterSerializedResponseHeaders: (name) =>
			name === 'content-type' || name.startsWith('x-')
	});

	for (const [header, value] of Object.entries(SECURITY_HEADERS)) {
		response.headers.set(header, value);
	}

	return response;
};
