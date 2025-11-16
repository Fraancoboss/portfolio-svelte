# Portfolio Svelte · Fran Cobos

Portafolio personal construido con **SvelteKit 5**, **TailwindCSS 4** y mdsvex. Está optimizado para desplegarse como sitio estático en GitHub Pages y muestra proyectos centrados en ciberseguridad, IA aplicada y diseño _Secure by Design_.

## Características principales

- **Contenido autocontenido**: todos los textos, proyectos, timelines y CTA viven en `src/lib/data/profile.ts`, lo que permite modificar la narrativa sin tocar componentes.
- **Diseño coherente a nivel de sistema**: Layout con degradados sutiles, tarjetas con blur y una navegación fija que resalta la sección activa.
- **Componentes reutilizables**: tarjetas de proyectos, secciones con subtítulo, layout para posts mdsvex y tarjetas con efecto _tilt_ ya listos para nuevos usos.
- **Preparado para despliegue estático**: usa `@sveltejs/adapter-static` y define `paths.base` para GitHub Pages (`/portfolio-svelte`). No existe lógica de idioma ni formularios dependientes de _backend_.
- **Tipado completo**: tipos en `src/lib/types/content.ts` documentan cada bloque de datos (proyectos, timeline, contacto, etc.).

## Stack

- [SvelteKit 5](https://kit.svelte.dev/)
- [TailwindCSS 4](https://tailwindcss.com/)
- [mdsvex](https://mdsvex.pngwn.io/) para futuras entradas en `/blog`
- Vite 7, TypeScript 5.9, ESLint 9, Prettier 3

## Scripts

```bash
npm install          # Instala dependencias
npm run dev -- --open
npm run check        # svelte-check + type checking
npm run lint         # prettier + eslint
npm run build        # genera la salida estática en build/
npm run preview      # sirve el resultado de build/
```

> Nota: la CLI de Tailwind 4 se ejecuta vía `@tailwindcss/vite`, no hace falta un paso adicional de build.

## Estructura relevante

```
src/
├─ lib/
│  ├─ components/   # Navbar, Footer, tarjetas, layout del blog
│  ├─ data/         # profile.ts, projects.ts, posts.ts (única fuente de contenido)
│  ├─ assets/       # imágenes hero
│  └─ types/        # Tipos para el contenido
├─ routes/
│  ├─ +layout.svelte   # Layout raíz con metadatos SEO
│  ├─ +page.svelte     # Home
│  ├─ projects/+page.svelte
│  ├─ blog/+page.(svelte|ts)
│  └─ contact/+page.svelte
└─ app.css             # Tema base (Tailwind 4)
```

### Personalizar contenido

1. Abre `src/lib/data/profile.ts` y modifica las secciones `hero`, `projects`, `contactPage`, etc.
2. Las imágenes de las tarjetas están en `src/lib/assets/`.
3. Para añadir proyectos al listado completo o al _spotlight_, actualiza `profileContent.es.projects`.

### Contacto sin formularios

El archivo `src/routes/contact/+page.svelte` se renderiza como estático, mostrando correo, estado y redes. Si en el futuro necesitas un formulario real, deberás integrar un servicio externo y añadir nuevamente un endpoint o `PUBLIC_CONTACT_ENDPOINT`.

## Despliegue en GitHub Pages

1. Ejecuta `npm run build`.
2. Sube el contenido de `build/` a la rama configurada para Pages.
3. Asegúrate de haber establecido `paths.base = '/portfolio-svelte'` (ya configurado en `svelte.config.js`).
4. Si cambias el nombre del repo o del directorio, ajusta `paths.base` para evitar rutas rotas.

## Decisiones de diseño documentadas

- **Idioma único (español)**: al desplegarse como HTML estático, mantener un solo idioma evita estados incompletos tras refrescar o navegar desde GitHub Pages.
- **Datos centralizados**: preferí `profileContent.es` como fuente única para todos los componentes para reducir dependencias entre páginas.
- **Contacto sin POST**: se eliminó el formulario porque no existe backend en Pages; eso se explica en el código y README para evitar confusión.

## Próximos pasos sugeridos

- Añadir versiones en inglés creando rutas estáticas (`/en`) duplicadas.
- Integrar un servicio de formularios (Formspree, Basin, etc.) si se necesita captura de leads.
- Rellenar `/blog/(posts)` con artículos mdsvex y activar `featuredPostsByLanguage` si se decide volver al multilenguaje.

---

Hecho con mucho cariño!!