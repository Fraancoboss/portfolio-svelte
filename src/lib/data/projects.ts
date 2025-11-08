import type { Project } from '$lib/types/content';

export const projects: Project[] = [
	{
		title: 'SecureShareVault',
		slug: 'securesharevault',
		overview:
			'Sistema de comunicación cliente-servidor que cifra con AES-GCM, distribuye claves vía Shamir Secret Sharing y coordina custodios externos antes de almacenar cualquier payload.',
		impact:
			'Mantiene los secretos fuera del backend central, resiste MITM gracias a JWT + TLS opcional y facilita auditorías con módulos separados para cifrado, orquestación y pruebas.',
		tech: ['Python', 'Flask', 'AES-GCM', 'Shamir Secret Sharing', 'JWT', 'Docker'],
		status: 'Prototipo',
		year: 2024,
		cta: {
			label: 'Ver repositorio',
			href: 'https://github.com/Fraancoboss/SecureShareVault'
		},
		links: [
			{ label: 'README técnico', href: 'https://github.com/Fraancoboss/SecureShareVault#readme', external: true }
		],
		highlight: 'Custodia distribuida de claves con umbral configurable y tooling MITM para pruebas'
	}
];
