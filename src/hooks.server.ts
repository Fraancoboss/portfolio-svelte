import type { Handle } from '@sveltejs/kit';

const ALLOWED_METHODS = new Set(['GET', 'POST', 'OPTIONS', 'HEAD']);

export const handle: Handle = async ({ event, resolve }) => {
	if (!ALLOWED_METHODS.has(event.request.method)) {
		return new Response('Método no permitido', {
			status: 405,
			headers: { Allow: Array.from(ALLOWED_METHODS).join(', ') }
		});
	}

	const response = await resolve(event, {
		filterSerializedResponseHeaders: (name) =>
			name === 'content-type' || name.startsWith('x-')
	});

	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'geolocation=(), microphone=()');
	response.headers.set(
		'Content-Security-Policy',
		"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;"
	);
	response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
	response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');

	return response;
};
