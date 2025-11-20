import type {
	ContactChannel,
	NavigationLink,
	Post,
	Project,
	ProjectStatus,
	SocialLink,
	Technology,
	TimelineItem
} from '$lib/types/content';

type CTA = {
	label: string;
	href: string;
	download?: string;
};

type Hero = {
	role: string;
	tagline: string;
	ctaPrimary: CTA;
	ctaSecondary: CTA;
	values: string[];
};

type Stat = {
	label: string;
	value: string;
};

type FavoriteToolsCategory = {
	title: string;
	tools: string[];
};

type HeroCardCopy = {
	alt: string;
	caption: string;
	overlayTitle: string;
	overlayDescription: string;
};

type TimelineExtra = {
	title: string;
	description: string;
};

type SectionCopy = {
	eyebrow: string;
	title: string;
	description: string;
};

type HomeContent = {
	heroEyebrow: string;
	heroTitle: string;
	heroSubtitle: string;
	biography: string[];
	disciplineLine: string;
	disciplineComplement: string;
	heroBadge: string;
	heroCards: HeroCardCopy[];
	stackSection: SectionCopy;
	toolsSection: SectionCopy;
	networksLabel: string;
	visionLabel: string;
	visionLead: string;
	visionSupporting: string;
	projectsPreview: SectionCopy & { ctaLabel: string };
	timelineSection: SectionCopy;
	timelineExtras: TimelineExtra[];
};

type ProjectsPageCopy = {
	headTitle: string;
	headDescription: string;
	section: SectionCopy;
	filters: { id: 'all' | ProjectStatus; label: string }[];
	statusLabels: Record<ProjectStatus, string>;
	emptyState: string;
	projectLabel: string;
};

type ContactExperienceHighlight = {
	description: string;
	metric?: string;
};

type ContactExperience = {
	role: string;
	company: string;
	period: string;
	highlights: ContactExperienceHighlight[];
};

type ContactPageCopy = {
	headTitle: string;
	headDescription: string;
	section: SectionCopy;
	experienceEyebrow: string;
	experiences: ContactExperience[];
	softSkillsTitle: string;
	softSkillsSubtitle: string;
	softSkills: string[];
};

type BlogPageCopy = {
	headTitle: string;
	headDescription: string;
	section: SectionCopy;
	emptyState: string;
	postMetaPrefix: string;
};

type FooterCopy = {
	tagline: string;
	siteMapTitle: string;
	availabilityTitle: string;
	availability: string[];
	signature: string;
};

type NavbarCopy = {
	contactCta: string;
	menuLabel: string;
};

type SiteMetadata = {
	name: string;
	title: string;
	description: string;
	keywords: string[];
	url: string;
	image: string;
	language: 'es';
};

type ProfileContent = {
	siteMetadata: SiteMetadata;
	navigation: NavigationLink[];
	hero: Hero;
	coreTechnologies: Technology[];
	stats: Stat[];
	timeline: TimelineItem[];
	socialLinks: SocialLink[];
	contactChannels: ContactChannel[];
	favoriteTools: FavoriteToolsCategory[];
	home: HomeContent;
	projectsPage: ProjectsPageCopy;
	contactPage: ContactPageCopy;
	blogPage: BlogPageCopy;
	footer: FooterCopy;
	navbar: NavbarCopy;
	projects: Project[];
	featuredPosts: Post[];
};

export const profileContent: ProfileContent = {
		siteMetadata: {
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
		},
		navigation: [
			{ label: 'Inicio', href: '/', description: 'Perfil y propuesta de valor' },
			{ label: 'Proyectos', href: '/projects', description: 'Casos técnicos y stack' },
			{ label: 'Sobre mí', href: '/contact', description: 'Experiencia y habilidades' }
		],
		hero: {
			role: 'Secure by Design Engineer · AI & Rust enthusiast',
			tagline:
				'Construyo sistemas y experiencias seguras combinando criptografía aplicada, ingeniería multiplataforma y diseño visual.',
			ctaPrimary: {
				label: 'Descargar curriculum',
				href: '/fran-cv.pdf',
				download: 'Fran-CV.pdf'
			},
			ctaSecondary: {
				label: 'Contactar',
				href: '/contacto'
			},
			values: [
				'Seguridad de transferencia',
				'Diseño de sistemas seguros',
				'Inteligencia artificial',
				'Auditoría y concienciación'
			]
		},
		coreTechnologies: [
			{ name: 'Java', category: 'language' },
			{ name: 'Rust', category: 'language' },
			{ name: 'Python', category: 'language' },
			{ name: 'PostgreSQL', category: 'database' },
			{ name: 'React', category: 'framework' },
			{ name: 'Svelte', category: 'framework' },
			{ name: 'Oracle SQL', category: 'database' },
			{ name: 'Tailwind', category: 'tooling' }
		],
		stats: [
			{ label: 'Años diseñando software', value: '5+' },
			{ label: 'Sistemas auditados', value: '20+' },
			{ label: 'Charlas y talleres', value: '15' }
		],
		timeline: [
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
					'Investigo cifrado moderno, nuevas tecnologías a nivel del sistema, gestión de privilegios y enfoques Zero Trust.'
			},
			{
				year: '2022',
				role: 'DAM - Aplicaciones Multiplataforma',
				org: 'FP Euroromac - Barajas',
				description: 'Desarrollo de apps nativas y multiplataforma con énfasis en criptografía aplicada.'
			}
		],
		socialLinks: [
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
		],
		contactChannels: [
			{
				label: 'LinkedIn',
				value: 'linkedin.com/in/fran-cobos-rodriguez',
				subtitle: 'Oportunidades profesionales',
				href: 'https://www.linkedin.com/in/fran-cobos-rodriguez'
			},
			{
				label: 'GitHub',
				value: 'github.com/Fraancoboss',
				subtitle: 'Código abierto y experimentos',
				href: 'https://github.com/Fraancoboss'
			},
			{
				label: 'Correo',
				value: 'fraancoboss@gmail.com',
				subtitle: 'Respuesta en menos de 24h',
				href: 'mailto:fraancoboss@gmail.com',
				fullWidth: true
			}
		],
		favoriteTools: [
			{
				title: 'Documentación',
				tools: ['Notion', 'Mermaid', 'Obsidian', 'Drive']
			},
			{
				title: 'Gestión de datos',
				tools: ['Oracle Developer', 'PostgreSQL', 'SQLite', 'Hibernate']
			},
			{
				title: 'Frontend',
				tools: ['React', 'SvelteKit', 'Tailwind', 'TypeScript', 'JavaScript']
			},
			{
				title: 'Backend',
				tools: ['Java', 'Python', 'Rust', 'SpringBoot']
			},
			{
				title: 'Seguridad',
				tools: ['Shamir Secret Sharing', 'Rust', 'JWT', 'OTPT', 'Bandit', 'AES-GCM']
			},
			{
				title: 'Cloud',
				tools: ['AWS']
			},
			{
				title: 'IA',
				tools: ['ChatGPT / GPT-5.1', 'Windsurf', 'Claude 3.5 / DeepSeek R1', 'PentestGPT', 'N8N']
			},
			{
				title: 'Multiplataforma',
				tools: ['React Native', 'Kotlin', 'Android Studio', 'Shortcuts (iOS)']
			}
		],
		home: {
			heroEyebrow: '',
			heroTitle: 'Un placer conocerte',
			heroSubtitle: 'Quién soy',
			biography: [
				'Soy Fran, estudiante de Desarrollo de Aplicaciones Multiplataforma y del Máster en Desarrollo de Software con Inteligencia Artificial en BIG School, dirigido por MaureDev y un equipo de profesores senior con amplia experiencia en el sector.',
				'Exploro tecnologías como Rust, Python y Svelte para diseñar redes de datos criptográficamente seguras y optimizar la comunicación con bases de datos relacionales y no relacionales.',
				'Dedico gran parte de mi tiempo a la divulgación sobre criptografía y ciberseguridad avanzada, aplicando los principios de Secure by Design (SbD) en el desarrollo de sistemas.',
				'Además, me interesa la integración de tecnologías como Swift en entornos iOS, con el objetivo de crear aplicaciones seguras, eficientes y escalables.'
			],
			disciplineLine: 'IA + CIBERSEGURIDAD',
			disciplineComplement: '',
			heroBadge: 'Blue team en la ciberseguridad',
			heroCards: [
				{
					alt: 'Pentesting y hardening',
					caption: 'Pentesting',
					overlayTitle: 'Pentesting ofensivo',
					overlayDescription: 'Detección proactiva de vulnerabilidades'
				},
				{
					alt: 'Ilustración IA y ciberseguridad',
					caption: 'AI Defense',
					overlayTitle: 'IA + Ciberseguridad',
					overlayDescription: 'Automatización de auditorías y playbooks'
				},
				{
					alt: 'Criptografía aplicada',
					caption: 'Criptografía de datos',
					overlayTitle: 'Protección de datos',
					overlayDescription: 'Peticiones de red blindadas y cifrado'
				},
				{
					alt: 'Secure by Design',
					caption: 'Secure by Design',
					overlayTitle: 'Secure by Design',
					overlayDescription: 'Desarrollo que inicia por la seguridad'
				}
			],
			stackSection: {
				eyebrow: 'Stack principal',
				title: 'Tecnologías y principios que aplico',
				description:
					'Combino lenguajes de programación con frameworks modernos y prácticas Secure by Design para desplegar sistemas confiables.'
			},
			toolsSection: {
				eyebrow: '',
				title: '',
				description: ''
			},
			networksLabel: 'Redes',
			visionLabel: 'Pasión',
			visionLead:
				'Dedico mi tiempo a buscar la innovación con todas las herramientas del sector, apoyándome en inteligencia artificial.',
			visionSupporting:
				'Siempre priorizo la seguridad y la responsabilidad al construir soluciones.',
			projectsPreview: {
				eyebrow: 'Casos destacados',
				title: 'Arquitecturas diseñadas con mentalidad defensiva',
				description:
					'Historias reales con custodia distribuida, automatización CLI en Rust y un cliente JavaFX que muestran cómo conecto seguridad, usabilidad y despliegues confiables.',
				ctaLabel: 'Ver todos los proyectos →'
			},
			timelineSection: {
				eyebrow: 'Trayectoria',
				title: 'Estudios y focos de investigación',
				description: 'Combinación de DAM + Máster en IA para construir productos más seguros.'
			},
			timelineExtras: [
				{
					title: 'AcademIA Generativa',
					description: 'Comunidad de innovaciones sobre IA'
				},
				{
					title: 'Actividad en LinkedIn',
					description: 'Posts semanales y divulgación'
				},
				{
					title: 'Actividad en GitHub',
					description: 'Estudio de repositorios y colaboración'
				}
			]
		},
		projectsPage: {
			headTitle: 'Proyectos · Fran',
			headDescription:
				'Casos de estudio sobre ciberseguridad, IA aplicada y diseño Secure by Design.',
			section: {
				eyebrow: 'Proyectos',
				title: 'Soluciones diseñadas con mentalidad defensiva',
				description: ''
			},
			filters: [
				{ id: 'all', label: 'Todo' },
				{ id: 'production', label: 'En producción' },
				{ id: 'in-progress', label: 'En progreso' },
				{ id: 'prototype', label: 'Prototipo' }
			],
			statusLabels: {
				production: 'En producción',
				'in-progress': 'En progreso',
				prototype: 'Prototipo'
			},
			emptyState: 'Sin resultados para',
			projectLabel: 'Proyecto'
		},
		contactPage: {
			headTitle: 'Sobre mí · Fran',
			headDescription:
				'Experiencia laboral aplicada con métricas reales y mentalidad blue team enfocada a resultados.',
			section: {
				eyebrow: 'Sobre mí',
				title: 'Experiencia laboral',
				description:
					'Roles reales donde combiné soporte técnico, desarrollo a medida e IA para acelerar equipos y procesos.'
			},
			experienceEyebrow: 'Experiencia laboral',
			experiences: [
				{
					role: 'Técnico informático · Prácticas SMR',
					company: 'Tigestion',
					period: '20/03/2024 – 21/06/2024',
					highlights: [
						{ description: 'Reducción del tiempo por incidencia', metric: '35%' },
						{ description: 'Miembro clave en el desarrollo de webs personalizadas' }
					]
				},
				{
					role: 'Desarrollo en gestión empresarial',
					company: 'FranService',
					period: '25/04/2025 – 21/09/2025',
					highlights: [
						{ description: 'Desarrollo móvil en iOS y escritorio para ERP', metric: '+40% productividad' },
						{
							description: 'Digitalización de partes de trabajo e IA para agilizar procesos empresariales'
						}
					]
				},
					{
						role: 'E-commerce y desarrollo de página web',
					company: 'Recotex',
					period: '19/03/2025 – 21/07/2025',
					highlights: [
						{ description: 'Gestión de redes sociales con IA', metric: '+25% pedidos' },
						{
							description: 'Implementación web a producción y sistema de personalización',
							metric: '+30% producción'
						}
					]
				}
			],
			softSkillsTitle: 'Habilidades blandas',
			softSkillsSubtitle: 'Mentalidad que refuerza mis entregables',
				softSkills: [
					'Aprendizaje continuo',
					'Creatividad e innovación',
					'Empatía y escucha activa',
					'Capacidad analítica alta',
					'Adaptabilidad al cambio',
					'Autonomía y seguridad'
				]
		},
		blogPage: {
			headTitle: 'Divulgación y blog · Fran',
			headDescription:
				'Artículos técnicos sobre ciberseguridad, criptografía aplicada y diseño Secure by Design.',
			section: {
				eyebrow: 'Divulgación',
				title: 'Ideas, guías y estudios sobre seguridad avanzada',
				description: 'Contenido listo para convertirse en mdsvex y conectado con tus proyectos.'
			},
			emptyState: 'Pronto habrá publicaciones en formato markdown usando mdsvex.',
			postMetaPrefix: 'Publicado el'
		},
		footer: {
			tagline:
				'Creo soluciones digitales seguras combinando criptografía aplicada, IA defensiva y diseño centrado en las personas.',
			siteMapTitle: 'Mapa del sitio',
			availabilityTitle: 'Disponibilidad',
			availability: [
				'Abierto a prácticas profesionales',
				'Colaboraciones en ciberseguridad ofensiva',
				'Diseño de frameworks visuales seguros'
			],
			signature: 'Construido con SvelteKit, TypeScript y TailwindCSS.'
		},
		navbar: {
			contactCta: 'Contacto',
			menuLabel: 'Abrir menú de navegación'
		},
		projects: [
			{
				title: 'SecureShareVault',
				slug: 'securesharevault',
				overview:
					'Sistema de comunicación cliente-servidor que cifra con AES-GCM, distribuye claves vía Shamir Secret Sharing y coordina custodios externos antes de almacenar cualquier payload.',
				impact:
					'Mantiene los secretos fuera del backend central, resiste MITM gracias a JWT + TLS opcional y facilita auditorías con módulos separados para cifrado, orquestación y pruebas.',
				tech: ['Python', 'Flask', 'AES-GCM', 'Shamir Secret Sharing', 'JWT', 'Docker'],
				status: 'prototype',
				year: 2024,
				cta: {
					label: 'Ver repositorio',
					href: 'https://github.com/Fraancoboss/SecureShareVault'
				},
				links: [
					{
						label: 'README técnico',
						href: 'https://github.com/Fraancoboss/SecureShareVault#readme',
						external: true
					}
				],
				highlight:
					'Custodia distribuida de claves con umbral configurable y tooling MITM para pruebas'
			},
			{
				title: 'Sistema CLI de autenticación en Rust',
				slug: 'login-rust-svelte',
				overview:
					'Aplicación de línea de comandos orientada a entornos educativos que registra usuarios y gestiona inicios de sesión aplicando buenas prácticas de seguridad con Argon2id y defensas anti fuerza bruta.',
				impact:
					'Combina hashing endurecido, política de contraseñas robusta, verificación contra diccionarios y bloqueo temporal tras intentos fallidos, además de un frontend Svelte para probar la experiencia completa.',
				tech: ['Rust', 'Argon2id', 'Svelte', 'Vite', 'rpassword', 'rockyou.txt.gz'],
				status: 'prototype',
				year: 2024,
				cta: {
					label: 'Ver repositorio',
					href: 'https://github.com/Fraancoboss/login-rust-svelte'
				},
				highlight:
					'Incluye frontend demostrativo, detección de patrones débiles y bloqueo configurable tras 5 intentos'
			},
			{
				title: 'Hibernate + SQLite + JavaFX',
				slug: 'hibernate-sqlite-javafx',
				overview:
					'Aplicación de escritorio con JavaFX y Hibernate que demuestra cómo estructurar CRUDs seguros sobre SQLite, usando capas DAO, validaciones y un frontend moderno.',
				impact:
					'Integra ORM con verificación de entradas, manejo de estados y una UI responsiva para mostrar buenas prácticas en aplicaciones Java de escritorio.',
				tech: ['Java', 'JavaFX', 'Hibernate', 'SQLite', 'CSS'],
				status: 'in-progress',
				year: 2024,
				cta: {
					label: 'Ver repositorio',
					href: 'https://github.com/Fraancoboss/hibernate-sqlite-javafx'
				},
				highlight: 'Arquitectura en capas con DAO, validaciones y estilos personalizados listos para producción'
			}
		],
		featuredPosts: [
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
		]

};
