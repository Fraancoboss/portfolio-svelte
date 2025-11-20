const TAG_REGEX = /[<>]/g;
const MULTISPACE_REGEX = /\s{2,}/g;

export function sanitizeInput(value?: string): string {
	if (!value) return '';
	return value.replace(TAG_REGEX, '').replace(MULTISPACE_REGEX, ' ').trim();
}
