import type { Post } from '$lib/types/content';

export const featuredPosts: Post[] = [
	{
		title: 'Secure by Design aplicado a redes definidas por software',
		slug: 'secure-by-design-redes-sd',
		excerpt:
			'Cómo modelar amenazas desde la capa de diseño y automatizar validaciones con pipelines reproducibles.',
		category: 'Secure by Design',
		publishedAt: '2024-10-01',
		readingTime: '8 min',
		tags: ['SbD', 'DevSecOps', 'Rust', 'Infra as Code']
	},
	{
		title: 'Criptografía práctica con Rust: firmas post-cuánticas en clientes ligeros',
		slug: 'criptografia-rust-firmas-pqc',
		excerpt:
			'Exploro estrategias para integrar primitivas resistentes a quantum en dispositivos con recursos limitados.',
		category: 'Criptografía',
		publishedAt: '2024-07-18',
		readingTime: '6 min',
		tags: ['Rust', 'PQC', 'Tink', 'Embebidos']
	},
	{
		title: 'Playbooks de IA defensiva para equipos de respuesta temprana',
		slug: 'playbooks-ia-defensiva',
		excerpt:
			'Plantillas y prompts especializados para generar reportes de incidentes y simulaciones realistas.',
		category: 'IA aplicada',
		publishedAt: '2024-05-12',
		readingTime: '7 min',
		tags: ['IA', 'Incident Response', 'Prompt Engineering']
	}
];
