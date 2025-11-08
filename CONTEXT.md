Proyecto: Portfolio Profesional – Fran  
Stack: SvelteKit + TypeScript + TailwindCSS (build estático para GitHub Pages)  
Arquitectura: Modular, segura, escalable  
Filosofía: Secure by Design (SbD)

1. Principios de Seguridad Global

Este proyecto aplica el enfoque Secure by Design (SbD), priorizando la seguridad desde la concepción del sistema.

Objetivos clave:

Evitar vulnerabilidades comunes (OWASP Top 10).

Garantizar integridad, confidencialidad y disponibilidad.

Minimizar superficie de ataque.

Validar y sanear todos los datos de entrada/salida.

Mantener dependencias y librerías actualizadas

2. Estructura Segura del Proyecto

src/
 ├── lib/                  # Componentes, datos y utilidades
 │   ├── components/       # UI modular con mínima exposición
 │   ├── data/             # Datos estáticos validados
 │   ├── security/         # Módulos de validación y sanitización
 │   └── utils/            # Funciones puras y seguras
 │
 ├── routes/               # Rutas públicas y privadas
 │   ├── api/              # (Opcional, sólo si se usa adaptador con funciones)
 │   ├── +layout.svelte    # Layout global
 │   └── +page.svelte      # Páginas públicas
 │
 ├── hooks.server.ts       # Middleware SSR (no se ejecuta en GitHub Pages, mantener solo para despliegues con server)
 ├── app.d.ts              # Tipado global
 └── env.d.ts              # Variables de entorno seguras

. Políticas de Seguridad y Buenas Prácticas
 Middleware (hooks.server.ts)

Registrar logs de errores sin exponer información sensible.

Sanitizar todas las cabeceras de entrada (req.headers).

Configurar CSP (Content Security Policy) estricta.

Bloquear métodos HTTP no autorizados.

Usar HTTPS siempre (GitHub Pages ya sirve sobre HTTPS; para servidores propios, forzar secure: true en cookies y redirecciones).

> Nota: en GitHub Pages no se ejecuta `hooks.server.ts`. Estas políticas aplican cuando se despliega en un entorno con funciones (Vercel, Netlify, Node).

---

Cabeceras de Seguridad recomendadas

// Ejemplo para handle en hooks.server.ts
export async function handle({ event, resolve }) {
  const response = await resolve(event, {
    filterSerializedResponseHeaders: (name) =>
      name === 'content-type' || name.startsWith('x-'),
  });

  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=()');
  response.headers.set('Content-Security-Policy',
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;"
  );

  return response;
}

---
4. Variables de Entorno

- Copiar `.env.example` → `.env` y definir:
  - `PUBLIC_CONTACT_EMAIL` → email que se muestra al usuario.
  - `PUBLIC_CONTACT_ENDPOINT` → URL del servicio externo (Formspree/Getform/Basin) que procesará el formulario.
  - `PUBLIC_RECAPTCHA_SITE_KEY` (opcional) → clave pública v2/v3 si el servicio soporta reCAPTCHA en el frontend.
  - Variables privadas (`PRIVATE_RECAPTCHA_SECRET`, `PRIVATE_RATE_LIMIT_NAMESPACE`, etc.) solo se usan cuando se despliega con backend; ignóralas en GitHub Pages.
- Nunca incluir credenciales en el repositorio.
- Tipar siempre nuevas variables en `src/env.d.ts`. Solo las que empiezan por `PUBLIC_` llegan al cliente (útil para la URL del servicio de formularios).
5. Formularios y Servicios Externos

- GitHub Pages es estático, por lo que el formulario de contacto debe apuntar a un proveedor externo (Formspree, Getform, Basin, StaticForms...).
- Añade `action={PUBLIC_CONTACT_ENDPOINT}` en el `<form>` y define esa URL en `.env`. Estos servicios pueden reenviar correos, notificaciones push o integrarse con Zapier/IFTTT para que lleguen al móvil.
- Para seguridad extra:
  - Aplica sanitización en el frontend (`src/lib/security/validation.ts`) antes de enviar datos.
  - Si el proveedor soporta reCAPTCHA, carga la clave pública y envía el token junto al formulario.
- Si en el futuro se añade un backend propio (Vercel/Netlify/Node), reutiliza `verifyRecaptchaToken` y `enforceRateLimit` en endpoints server-side.
6. Auditoría de Dependencias

Ejecutar semanalmente:

npm audit --omit=dev
npm outdated

Mantener librerías críticas (SvelteKit, Tailwind, adapters, etc.) actualizadas.

Prohibido usar dependencias sin revisar su procedencia o reputación.

7. Privacidad y Datos Personales

No almacenar datos personales sin consentimiento explícito.

Si se usa formulario de contacto:

Validar en cliente y servidor.

Cifrar el transporte (HTTPS/TLS 1.3).

Evitar logs con información sensible.

No usar cookies ni trackers innecesarios.

8. Configuración del Despliegue (GitHub Pages)

1. Ejecutar `npm run build`.
2. Subir la carpeta `build/` (o usar `adapter-static`) al branch `gh-pages`.
3. En GitHub, activar Pages apuntando al branch estático.
4. Configurar el formulario externo (Formspree, etc.) para el dominio de Pages.
5. Si se necesita un backend, considerar migrar a Vercel/Netlify; allí se podrán usar hooks y headers avanzados automáticamente.

9. Monitorización y Resiliencia

Implementar loggers internos solo en servidor (console.error, winston opcional).

No exponer errores al cliente; usar mensajes genéricos.

Establecer fallback de rutas y manejo de errores (+error.svelte).

Probar cada build con herramientas de análisis de seguridad:

npm run check

npm run lint

npx snyk test

10. Futuras Integraciones Seguras

- Si se decide migrar desde GitHub Pages a un entorno con funciones:
  - Activar `hooks.server.ts` para CSP/HSTS.
  - Añadir `/routes/api` con `enforceRateLimit` + `verifyRecaptchaToken`.
  - Conectar PostgreSQL (SSL/TLS) para almacenar mensajes.
- Mantener reCAPTCHA y sanitización aunque se use un servicio externo de formularios.

Integración de autenticación con OAuth 2.0 (si se añade login).

11. Cultura Secure by Design (SbD)

“No hay seguridad añadida al final, solo seguridad integrada desde el principio.”

Revisión continua de amenazas y puntos débiles.

Separación clara entre lógica de cliente y servidor.

Documentar cada cambio que afecte a seguridad o privacidad.

Educar al desarrollador sobre buenas prácticas y amenazas OWASP.

12. Créditos y Filosofía del Autor

Autor: Fran
Enfoque: Desarrollo seguro, divulgación y diseño técnico.
Misión: Integrar ciberseguridad, IA y arte en el desarrollo de software moderno.
Inspiración: “Secure by Design”, “Privacy by Default”, “Minimalismo Funcional”.
