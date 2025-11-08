import { env } from '$env/dynamic/public';
import type {
	ContactChannel,
	NavigationLink,
	SocialLink,
	Technology,
	TimelineItem
} from '$lib/types/content';

export const siteMetadata = {
	name: 'Fran',
	title: 'Fran · Secure by Design Engineer',
	description:
		'Portafolio profesional centrado en ciberseguridad avanzada, criptografía aplicada y diseño Secure by Design. Desarrollo soluciones con Rust, Python, Svelte y PostgreSQL.',
	keywords: [
		'Fran',
		'Secure by Design',
		'ciberseguridad',
		'Rust',
		'SvelteKit',
		'criptografía'
	],
	url: 'https://fran.dev',
	image: '/og-image.svg',
	language: 'es'
};

export const navigation: NavigationLink[] = [
	{ label: 'Inicio', href: '/', description: 'Perfil y propuesta de valor' },
	{ label: 'Proyectos', href: '/projects', description: 'Casos técnicos y stack' },
	{ label: 'Contacto', href: '/contact', description: 'Mentorías y colaboraciones' }
];

export const hero = {
	role: 'Secure by Design Engineer · AI & Rust enthusiast',
	tagline:
		'Construyo sistemas y experiencias seguras combinando criptografía aplicada, ingeniería multiplataforma y diseño visual.',
	ctaPrimary: {
		label: 'Explorar proyectos',
		href: '/projects'
	},
	ctaSecondary: {
		label: 'Contactar',
		href: '/contact'
	},
	values: [
		'Seguridad de transferencia',
		'Diseño de sistemas seguros',
		'Inteligencia artificial',
		'Auditoría y concienciación'
	]
};

export const coreTechnologies: Technology[] = [
	{ name: 'Rust', category: 'language' },
	{ name: 'Python', category: 'language' },
	{ name: 'SvelteKit', category: 'framework' },
	{ name: 'Swift', category: 'language' },
	{ name: 'PostgreSQL', category: 'database' },
	{ name: 'SQLite', category: 'database' },
	{ name: 'Zero Trust', category: 'security' },
	{ name: 'Secure enclaves', category: 'security' }
];

export const stats = [
	{ label: 'Años diseñando software', value: '5+' },
	{ label: 'Sistemas auditados', value: '20+' },
	{ label: 'Charlas y talleres', value: '15' }
];

export const timeline: TimelineItem[] = [
	{
		year: '2024',
		role: 'Máster en Desarrollo de Software con IA',
		org: 'BIG School · MaureDev',
		description: 'Modelos generativos aplicados al hardening de redes y automatización de auditorías.'
	},
	{
		year: '2023',
		role: 'Ciberseguridad Avanzada',
		org: 'Especialización personal',
		description:
			'Investigo arquitecturas Zero Trust, diseño de PKI ligera y protocolos verificados formalmente.'
	},
	{
		year: '2022',
		role: 'DAM - Aplicaciones Multiplataforma',
		org: 'Ed. Superior',
		description: 'Desarrollo de apps nativas y multiplataforma con énfasis en criptografía aplicada.'
	}
];

export const socialLinks: SocialLink[] = [
	{
		label: 'GitHub',
		handle: '@Fraancoboss',
		href: 'https://github.com/Fraancoboss'
	},
	{
		label: 'LinkedIn',
		handle: 'fran-cobos-rodriguez',
		href: 'https://www.linkedin.com/in/fran-cobos-rodriguez'
	}
];

const contactEmail = env.PUBLIC_CONTACT_EMAIL ?? 'hola@fran.dev';

export const contactChannels: ContactChannel[] = [
	{
		label: 'Correo',
		value: contactEmail,
		subtitle: 'Respuesta en menos de 24h',
		href: `mailto:${contactEmail}`
	},
	{
		label: 'GitHub',
		value: 'github.com/Fraancoboss',
		subtitle: 'Código abierto y experimentos',
		href: 'https://github.com/Fraancoboss'
	},
	{
		label: 'LinkedIn',
		value: 'linkedin.com/in/fran-cobos-rodriguez',
		subtitle: 'Oportunidades profesionales',
		href: 'https://www.linkedin.com/in/fran-cobos-rodriguez'
	}
];
