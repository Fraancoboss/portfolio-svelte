const TAG_REGEX = /[<>]/g;
const MULTISPACE_REGEX = /\s{2,}/g;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function sanitizeInput(value?: string): string {
	if (!value) return '';
	return value.replace(TAG_REGEX, '').replace(MULTISPACE_REGEX, ' ').trim();
}

export function validateEmail(email: string): boolean {
	return EMAIL_REGEX.test(email);
}

export function ensureHttpsUrl(url?: string): string {
	if (!url) return '';
	const trimmed = url.trim();
	if (trimmed.startsWith('https://') || trimmed.startsWith('mailto:')) {
		return trimmed;
	}
	return '';
}
