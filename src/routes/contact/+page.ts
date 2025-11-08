import { env } from '$env/dynamic/public';
import { contactChannels, socialLinks } from '$lib/data/profile';
import { ensureHttpsUrl, sanitizeInput } from '$lib/security/validation';
import type { PageLoad } from './$types';

export const load = (() => {
	const safeChannels = contactChannels.map((channel) => ({
		...channel,
		label: sanitizeInput(channel.label),
		value: sanitizeInput(channel.value),
		subtitle: channel.subtitle ? sanitizeInput(channel.subtitle) : undefined,
		href: ensureHttpsUrl(channel.href)
	}));

	const safeSocial = socialLinks.map((link) => ({
		...link,
		label: sanitizeInput(link.label),
		handle: link.handle ? sanitizeInput(link.handle) : undefined,
		href: ensureHttpsUrl(link.href)
	}));

	const contactEndpoint = ensureHttpsUrl(env.PUBLIC_CONTACT_ENDPOINT);

	return {
		contactChannels: safeChannels,
		socialLinks: safeSocial,
		contactEndpoint
	};
}) satisfies PageLoad;
