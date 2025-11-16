import { env } from '$env/dynamic/public';
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

export type Language = 'es' | 'en';

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

type ContactPageCopy = {
	headTitle: string;
	headDescription: string;
	section: SectionCopy;
	networksLabel: string;
	directContactLabel: string;
	directEmail: string;
	directStatusText: string;
	groupedHighlights: {
		title: string;
		description: string;
	}[];
	formTitle: string;
	nameLabel: string;
	emailLabel: string;
	topicLabel: string;
	topics: { value: string; label: string }[];
	messageLabel: string;
	consentCopy: string;
	submitLabel: string;
	disabledNotice: string;
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
	languageSwitchLabel: string;
	menuLabel: string;
};

type SiteMetadata = {
	name: string;
	title: string;
	description: string;
	keywords: string[];
	url: string;
	image: string;
	language: 'es' | 'en';
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

export const defaultLanguage: Language = 'es';

const contactEmail = env.PUBLIC_CONTACT_EMAIL || 'hola@fran.dev';

export const profileContent: Record<Language, ProfileContent> = {
	es: {
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
			{ label: 'Contacto', href: '/contact', description: 'Mentorías y colaboraciones' }
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
				href: '/contact'
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
				description: 'Del prototipo a producción: documentación, threat modeling y despliegues reproducibles.'
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
			headTitle: 'Contacto · Fran',
			headDescription:
				'Reserva una mentoría, solicita una auditoría o colabora en proyectos Secure by Design.',
			section: {
				eyebrow: 'Contacto',
				title: 'Hablemos sobre seguridad, diseño o divulgación',
				description: 'Respondo en menos de 24h.'
			},
			networksLabel: 'Redes',
			directContactLabel: 'Contacto directo',
			directEmail: 'fraancoboss@gmail.com',
			directStatusText: 'Actualmente en búsqueda activa de prácticas en el sector de la programación.',
			groupedHighlights: [
				{
					title: 'Disponibilidad',
					description:
						'Busco prácticas donde aplicar ciberseguridad, IA y desarrollo seguro, aportando documentación sólida, threat modeling detallado y automatización de pruebas en equipos que valoren la mejora continua.'
				},
				{
					title: 'Enfoque técnico',
					description:
						'Cursar DAM y SMR me dio una base sólida en sistemas y redes. En Tigestion desplegué infraestructuras y resolví incidencias in situ, lo que consolidó mi criterio operativo a nivel de sistemas.'
				},
				{
					title: 'Reputación',
					description:
						'Me involucro en comunidades, comparto aprendizajes y mantengo repositorios ordenados, buscando siempre elevar la confianza al colaborar.'
				}
			],
			formTitle: 'Contáctame ahora',
			nameLabel: 'Nombre completo',
			emailLabel: 'Email profesional',
			topicLabel: 'Tema',
			topics: [
				{ value: 'informacion', label: 'Información sobre mí' },
				{ value: 'interes', label: 'Interés laboral' },
				{ value: 'colaboracion', label: 'Colaboración creativa' }
			],
			messageLabel: 'Mensaje',
			consentCopy: 'Acepto recibir una respuesta con recomendaciones técnicas.',
			submitLabel: 'Enviar solicitud',
			disabledNotice:
				'Configura `PUBLIC_CONTACT_ENDPOINT` para activar el envío (Formspree, Getform, Basin, etc.).'
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
			languageSwitchLabel: 'Idioma',
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
	},
	en: {
		siteMetadata: {
			name: 'Fran',
			title: 'Fran · Secure by Design Engineer',
			description:
				'Professional portfolio focused on advanced cybersecurity, applied cryptography and Secure by Design. I craft solutions with Rust, Python, Svelte and PostgreSQL.',
			keywords: [
				'Fran',
				'Secure by Design',
				'cybersecurity',
				'Rust',
				'SvelteKit',
				'cryptography'
			],
			url: 'https://fran.dev',
			image: '/og-image.svg',
			language: 'en'
		},
		navigation: [
			{ label: 'Home', href: '/', description: 'Profile and value proposition' },
			{ label: 'Projects', href: '/projects', description: 'Technical cases and stack' },
			{ label: 'Contact', href: '/contact', description: 'Mentoring and collaborations' }
		],
		hero: {
			role: 'Secure by Design Engineer · AI & Rust enthusiast',
			tagline:
				'I build secure systems and experiences blending applied cryptography, cross-platform engineering and expressive design.',
			ctaPrimary: {
				label: 'Download resume',
				href: '/fran-cv.pdf',
				download: 'Fran-CV.pdf'
			},
			ctaSecondary: {
				label: 'Get in touch',
				href: '/contact'
			},
			values: [
				'Transfer security',
				'Secure systems design',
				'Artificial intelligence',
				'Auditing & awareness'
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
			{ label: 'Years designing software', value: '5+' },
			{ label: 'Audited systems', value: '20+' },
			{ label: 'Talks and workshops', value: '15' }
		],
		timeline: [
			{
				year: '2024',
				role: 'Master in Software Development & AI',
				org: 'BIG School · MaureDev',
				description: 'Generative models applied to network hardening and automated audits.'
			},
			{
				year: '2023',
				role: 'Advanced cybersecurity practice',
				org: 'Self-directed',
				description:
					'I focus on modern encryption, emerging system-level tech, privilege minimization and Zero Trust strategies.'
			},
			{
				year: '2022',
				role: 'DAM · Multiplatform Apps',
				org: 'FP Euroromac - Barajas',
				description: 'Native and cross-platform apps with an emphasis on applied cryptography.'
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
				label: 'Email',
				value: contactEmail,
				subtitle: 'Reply within 24h',
				href: `mailto:${contactEmail}`
			},
			{
				label: 'GitHub',
				value: 'github.com/Fraancoboss',
				subtitle: 'Open source & experiments',
				href: 'https://github.com/Fraancoboss'
			},
			{
				label: 'LinkedIn',
				value: 'linkedin.com/in/fran-cobos-rodriguez',
				subtitle: 'Professional opportunities',
				href: 'https://www.linkedin.com/in/fran-cobos-rodriguez'
			}
		],
		favoriteTools: [
			{
				title: 'Documentation',
				tools: ['Notion', 'Mermaid', 'Obsidian', 'Drive']
			},
			{
				title: 'Data management',
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
				title: 'Security',
				tools: ['Shamir Secret Sharing', 'Rust', 'JWT', 'OTPT', 'Bandit', 'AES-GCM']
			},
			{
				title: 'Cloud',
				tools: ['AWS']
			},
			{
				title: 'AI',
				tools: ['ChatGPT / GPT-5.1', 'Windsurf', 'Claude 3.5 / DeepSeek R1', 'PentestGPT', 'N8N']
			},
			{
				title: 'Multiplatform',
				tools: ['React Native', 'Kotlin', 'Android Studio', 'Shortcuts (iOS)']
			}
		],
		home: {
			heroEyebrow: '',
			heroTitle: 'A pleasure to meet you!',
			heroSubtitle: 'About me',
			biography: [
				"I'm Fran, currently studying Multiplatform Application Development and the Master's in Software Development with Artificial Intelligence at BIG School led by MaureDev and a faculty of senior engineers.",
				'I explore technologies such as Rust, Python and Svelte to design cryptographically secure data networks and optimize communication with relational and non-relational databases.',
				'I spend most of my time sharing ideas about cryptography and advanced cybersecurity, applying Secure by Design principles during every build.',
				"I'm also interested in integrating Swift and other iOS tooling to ship secure, efficient and scalable applications."
			],
			disciplineLine: 'AI + CYBERSECURITY',
			disciplineComplement: '',
			heroBadge: 'Blue team mindset within cybersecurity',
			heroCards: [
				{
					alt: 'Pentesting and hardening',
					caption: 'Pentesting',
					overlayTitle: 'Offensive pentesting',
					overlayDescription: 'Proactive vulnerability detection'
				},
				{
					alt: 'AI and cybersecurity illustration',
					caption: 'AI Defense',
					overlayTitle: 'AI + Cybersecurity',
					overlayDescription: 'Automated audits & playbooks'
				},
				{
					alt: 'Applied cryptography',
					caption: 'Data cryptography',
					overlayTitle: 'Data protection',
					overlayDescription: 'Shielded network requests & encryption'
				},
				{
					alt: 'Secure by Design overview',
					caption: 'Secure by Design',
					overlayTitle: 'Secure by Design',
					overlayDescription: 'Security-first product development'
				}
			],
			stackSection: {
				eyebrow: 'Core stack',
				title: 'Technologies and principles in action',
				description:
					'I mix programming languages with modern frameworks and Secure by Design routines to deploy trustworthy systems.'
			},
			toolsSection: {
				eyebrow: '',
				title: '',
				description: ''
			},
			networksLabel: 'Networks',
			visionLabel: 'Passion',
			visionLead:
				'I devote my time to chasing innovation with every tool in the industry, leveraging AI along the way.',
			visionSupporting:
				'Security and responsibility always stay ahead when I build products.',
			projectsPreview: {
				eyebrow: 'Spotlight cases',
				title: 'Architectures designed with a defensive mindset',
				description:
					'Projects that blend distributed secret custody, a Rust CLI and a JavaFX + ORM client to show how I connect security with clean developer experiences.',
				ctaLabel: 'See all projects →'
			},
			timelineSection: {
				eyebrow: 'Journey',
				title: 'Studies and research focus',
				description: 'Pairing DAM with the AI master to ship safer products.'
			},
			timelineExtras: [
				{
					title: 'Generative AI Community',
					description: 'Innovation circle focused on AI experiments'
				},
				{
					title: 'LinkedIn activity',
					description: 'Weekly posts and technical writing'
				},
				{
					title: 'GitHub activity',
					description: 'Repository research and open collaboration'
				}
			]
		},
		projectsPage: {
			headTitle: 'Projects · Fran',
			headDescription:
				'Case studies on cybersecurity, applied AI and Secure by Design.',
			section: {
				eyebrow: 'Projects',
				title: 'Solutions crafted with a defensive mindset',
				description: 'From prototype to production: documentation, threat modeling and reproducible deploys.'
			},
			filters: [
				{ id: 'all', label: 'All' },
				{ id: 'production', label: 'In production' },
				{ id: 'in-progress', label: 'In progress' },
				{ id: 'prototype', label: 'Prototype' }
			],
			statusLabels: {
				production: 'In production',
				'in-progress': 'In progress',
				prototype: 'Prototype'
			},
			emptyState: 'No results for',
			projectLabel: 'Project'
		},
		contactPage: {
			headTitle: 'Contact · Fran',
			headDescription:
				'Book a mentoring session, request an audit or collaborate on Secure by Design projects.',
			section: {
				eyebrow: 'Contact',
				title: "Let's talk about security, design or content",
				description: 'I reply in under 24h.'
			},
			networksLabel: 'Networks',
			directContactLabel: 'Direct contact',
			directEmail: 'fraancoboss@gmail.com',
			directStatusText: 'Actively seeking programming internships to contribute in real environments.',
			groupedHighlights: [
				{
					title: 'Availability',
					description:
						'I’m looking for internships where I can apply cybersecurity, AI and secure system design while adding thorough documentation, threat modeling and automation.'
				},
				{
					title: 'Focus',
					description:
						'DAM plus SMR gave me a solid background in systems and networking. At Tigestion I rolled out networks on-site and solved incidents, which refined my operational instincts.'
				},
				{
					title: 'Reputation',
					description:
						'I actively share learnings, maintain tidy repositories and collaborate in communities to build trust in every engagement.'
				}
			],
			formTitle: 'Contact me now',
			nameLabel: 'Full name',
			emailLabel: 'Professional email',
			topicLabel: 'Topic',
			topics: [
				{ value: 'informacion', label: 'About my profile' },
				{ value: 'interes', label: 'Career opportunity' },
				{ value: 'colaboracion', label: 'Creative collaboration' }
			],
			messageLabel: 'Message',
			consentCopy: 'I agree to receive a reply with technical suggestions.',
			submitLabel: 'Send request',
			disabledNotice:
				'Set `PUBLIC_CONTACT_ENDPOINT` to enable submissions (Formspree, Getform, Basin, etc.).'
		},
		blogPage: {
			headTitle: 'Writing & blog · Fran',
			headDescription:
				'Technical essays on cybersecurity, applied cryptography and Secure by Design.',
			section: {
				eyebrow: 'Writing',
				title: 'Ideas, guides and studies on advanced security',
				description: 'Content ready to become mdsvex posts and connect with your projects.'
			},
			emptyState: 'Markdown posts are on the way—mdsvex integration is ready.',
			postMetaPrefix: 'Published on'
		},
		footer: {
			tagline:
				'I design secure digital solutions by blending applied cryptography, defensive AI and human-centered design.',
			siteMapTitle: 'Sitemap',
			availabilityTitle: 'Availability',
			availability: [
				'Open to professional internships',
				'Collaborations in offensive cybersecurity',
				'Designing secure visual frameworks'
			],
			signature: 'Built with SvelteKit, TypeScript and TailwindCSS.'
		},
		navbar: {
			contactCta: 'Contact',
			languageSwitchLabel: 'Language',
			menuLabel: 'Open navigation menu'
		},
		projects: [
			{
				title: 'SecureShareVault',
				slug: 'securesharevault',
				overview:
					'Client-server communication system that encrypts with AES-GCM, distributes keys with Shamir Secret Sharing and coordinates external custodians before storing any payload.',
				impact:
					'Keeps secrets away from the central backend, withstands MITM thanks to JWT + optional TLS and simplifies audits with dedicated modules for crypto, orchestration and testing.',
				tech: ['Python', 'Flask', 'AES-GCM', 'Shamir Secret Sharing', 'JWT', 'Docker'],
				status: 'prototype',
				year: 2024,
				cta: {
					label: 'View repository',
					href: 'https://github.com/Fraancoboss/SecureShareVault'
				},
				links: [
					{
						label: 'Technical README',
						href: 'https://github.com/Fraancoboss/SecureShareVault#readme',
						external: true
					}
				],
				highlight: 'Distributed key custody with configurable threshold and MITM tooling for testing'
			},
			{
				title: 'Rust authentication CLI',
				slug: 'login-rust-svelte',
				overview:
					'Command-line application aimed at educational environments to register users and manage logins using Argon2id hashing and layered brute-force defenses.',
				impact:
					'Blends hardened hashing, strict password policy, dictionary streaming checks and timed lockouts, plus a lightweight Svelte frontend to exercise the experience end to end.',
				tech: ['Rust', 'Argon2id', 'Svelte', 'Vite', 'rpassword', 'rockyou.txt.gz'],
				status: 'prototype',
				year: 2024,
				cta: {
					label: 'View repository',
					href: 'https://github.com/Fraancoboss/login-rust-svelte'
				},
				highlight:
					'Ships a demo frontend, weak-pattern detection and a configurable lock after five failed attempts'
			},
			{
				title: 'Hibernate + SQLite + JavaFX',
				slug: 'hibernate-sqlite-javafx',
				overview:
					'Desktop application built with JavaFX and Hibernate showcasing secure CRUD patterns on SQLite with DAO layers, validation and a modern interface.',
				impact:
					'Pairs ORM integration, input hygiene and responsive UI components to demonstrate best practices for Java desktop products.',
				tech: ['Java', 'JavaFX', 'Hibernate', 'SQLite', 'CSS'],
				status: 'in-progress',
				year: 2024,
				cta: {
					label: 'View repository',
					href: 'https://github.com/Fraancoboss/hibernate-sqlite-javafx'
				},
				highlight: 'Layered DAO architecture, validation and custom-styled UI ready for production use'
			}
		],
		featuredPosts: [
			{
				title: 'Secure by Design applied to software-defined networks',
				slug: 'secure-by-design-redes-sd',
				excerpt:
					'How to model threats from the design layer and automate validations with reproducible pipelines.',
				category: 'Secure by Design',
				publishedAt: '2024-10-01',
				readingTime: '8 min',
				tags: ['SbD', 'DevSecOps', 'Rust', 'Infra as Code']
			},
			{
				title: 'Practical cryptography with Rust: post-quantum signatures on lightweight clients',
				slug: 'criptografia-rust-firmas-pqc',
				excerpt:
					'I explore tactics to integrate quantum-resistant primitives into constrained devices.',
				category: 'Cryptography',
				publishedAt: '2024-07-18',
				readingTime: '6 min',
				tags: ['Rust', 'PQC', 'Tink', 'Embedded']
			},
			{
				title: 'Defensive AI playbooks for early response teams',
				slug: 'playbooks-ia-defensiva',
				excerpt:
					'Templates and specialized prompts to generate incident reports and realistic simulations.',
				category: 'Applied AI',
				publishedAt: '2024-05-12',
				readingTime: '7 min',
				tags: ['AI', 'Incident Response', 'Prompt Engineering']
			}
		]
	}
};
