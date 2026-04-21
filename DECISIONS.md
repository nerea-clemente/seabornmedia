# DECISIONS

Decisiones tomadas durante el primer pase. Revisar y revertir las que no encajen.

## Marca

- **Wordmark**: "Sea**Born**" con `Born` en negrita y `media` en superíndice coral. El brief escribe "Seaborn Media" en flow text, pero el logo del template corporativo usa la mayúscula intermedia. Mantengo esa firma tipográfica solo en el wordmark; en `<title>`, metadata y copy es "Seaborn Media".
- **Tagline corta**: "Marketing y contenidos para el sector seafood." (footer y `<meta description>`).

## Tipografía

- Headlines en **Nunito** (800/900) cargado desde `next/font/google`. Encaja con la pista del brief ("ligeramente redondeada"), tiene presencia a tamaños grandes y mantiene legibilidad cómoda.
- Cuerpo en **Inter** (400/500/600). El brief lo proponía como alternativa para tamaños pequeños y se ve mejor a 14–16px que Nunito regular.
- Las dos van como CSS variables (`--font-nunito`, `--font-inter`) y se exponen al theme de Tailwind como `font-display` y `font-body`. Cambiar fuente = cambiar el `next/font` import.

## Tailwind v4

- Sin `tailwind.config.js`. Toda la configuración vive en `app/globals.css` dentro del bloque `@theme`. Es la forma canónica en v4.
- Solo PostCSS + `@tailwindcss/postcss`. Sin más plugins.

## Stack

- Next.js 15.1, React 19, TypeScript estricto.
- Sin librería de animación. CSS transitions + `prefers-reduced-motion` cubren todo lo que hay.
- Sin `clsx`. Hay un helper de 3 líneas en `lib/cn.ts`.
- Sin estado global. Solo dos `useState` locales en `Nav` (scroll + open).

## Estructura

- Componentes de sección en `components/`, primitivas en `components/ui/`.
- Todo el copy aislado en `lib/content.ts` como objetos `as const`. Los componentes consumen tipados.
- `future` en `content.ts` deja stubs apagados para blog, casos y equipo (v2).

## Visual

- **Crescents**: tres variantes (`crescent`, `fluke`, `wave`) en `CrescentShape.tsx`. Formas orgánicas sin clipart marino. Opacidad por defecto 10 %, ajustada por sección.
- **Tarjetas**: `rounded-3xl`, padding generoso (28 px+), borde sutil. Variante navy para fondos oscuros, cream/paper para claros.
- **Color de acento por sección**:
  - Hero, Servicios, Contacto → coral sobre navy
  - Para quién, Proceso → ink/teal sobre cream
  - Por qué nicho → teal sobre paper
- **Nav**: sticky-fixed. Transparente sobre el hero, navy 95 % con blur al hacer scroll (>24 px). Hamburguesa sin librería; bloquea scroll del body al abrir.

## Accesibilidad

- `lang="es-ES"` en `<html>`.
- `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>` semánticos.
- Focus ring coral global (`:focus-visible`).
- `prefers-reduced-motion` corta animaciones y scroll suave.
- `scroll-margin-top` en secciones para que los anclas no queden tapadas por la nav.
- Alt SVG: todo decorativo lleva `aria-hidden`. Los iconos de servicio también, porque van junto al título.
- Mobile nav con `aria-expanded`, `aria-controls`, label dinámico.

## Cosas conscientemente fuera de v1

- Imagen Open Graph real. La metadata apunta a `/og.png` pero el archivo no existe todavía. Hay que añadirlo antes de promocionar.
- Formulario de contacto con backend. El brief no lo pidió y hay `mailto:` en el CTA. Si se quiere form, lo más sencillo es Resend o Vercel Forms.
- Blog, casos de estudio, página de equipo. Stubs preparados en `lib/content.ts`.
- `next/image` y CMS. La web no necesita imágenes en v1.
- robots.txt / sitemap.xml. Trivial añadir cuando se decida la URL definitiva.

## Para ejecutar

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # producción
```

Build en limpio: 107 kB First Load JS, todo prerender estático.
