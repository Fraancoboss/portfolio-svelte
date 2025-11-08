/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly PUBLIC_CONTACT_EMAIL?: string;
	readonly PUBLIC_CONTACT_ENDPOINT?: string;
	readonly PUBLIC_RECAPTCHA_SITE_KEY?: string;
	readonly PRIVATE_RECAPTCHA_SECRET?: string;
	readonly PRIVATE_RATE_LIMIT_NAMESPACE?: string;
	readonly PRIVATE_API_KEY?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
