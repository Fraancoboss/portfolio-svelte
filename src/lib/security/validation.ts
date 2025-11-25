const TAG_REGEX = /[<>]/g;
const MULTISPACE_REGEX = /\s{2,}/g;

/**
 * Sanitizamos cualquier metadato proveniente de mdsvex para evitar inyección HTML simple
 * y normalizamos espacios para no romper el layout en tarjetas.
 */
export function sanitizeInput(value?: string): string {
	if (!value) return '';
	return value.replace(TAG_REGEX, '').replace(MULTISPACE_REGEX, ' ').trim();
}
