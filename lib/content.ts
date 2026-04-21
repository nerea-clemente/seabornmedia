// Todo el copy de la web vive aquí. Editar aquí, no en JSX.

export const site = {
  name: "Seaborn Media",
  wordmark: { soft: "Sea", bold: "Born", super: "media" },
  description:
    "Estudio editorial para el sector seafood, pesca y acuicultura.",
  url: "https://www.seabornmedia.com",
  email: "hola@seabornmedia.com",
  phone: "+34635369915",
  phoneDisplay: "635 369 915",
  social: {
    instagram: { handle: "@seaborn.media", url: "https://instagram.com/seaborn.media" },
    linkedin: { handle: "Seaborn Media", url: "https://linkedin.com/company/seabornmedia" },
    substack: { handle: "Seaborn", url: "https://seabornmedia.substack.com" },
    tiktok: { handle: "@seaborn.media", url: "https://tiktok.com/@seaborn.media" },
  },
  ogImage: "/og.png",
} as const;

export const nav = {
  links: [
    { href: "#proyectos", label: "Proyectos" },
    { href: "#metodo", label: "Método" },
    { href: "#servicios", label: "Servicios" },
    { href: "#estudio", label: "Estudio" },
  ],
  cta: { href: "#contacto", label: "Cuéntame un proyecto" },
} as const;

export const hero = {
  eyebrow: "Agencia editorial · Seafood · Acuicultura · Sistemas alimentarios",
  titleLines: [
    { text: "El sector sabe ", em: "de mar." },
    { text: "Nosotras, ", em: "de contarlo." },
  ],
  body: [
    "Seaborn Media es un estudio editorial pensado para un sector que hasta ahora se ha comunicado sobre todo hacia dentro.",
    "Trabajamos con quienes producen, investigan y regulan lo que viene del mar. Y escribimos —y diseñamos— para el resto.",
  ],
} as const;

export const queHacemos = {
  eyebrow: "Qué hacemos",
  lede:
    "Traducimos un sector técnico al idioma del retail, los medios, la administración y quien se come lo que producís.",
  body: [
    "No somos una agencia generalista. Trabajamos solo con seafood, acuicultura y sistemas alimentarios, con la profundidad que el tema pide.",
    "La ciencia se convierte en contenido. Los datos, en relato. Y una de las industrias más importantes del planeta deja de leerse como un informe regulatorio.",
  ],
} as const;

export const problema = {
  eyebrow: "El problema",
  title: [
    { text: "Al sector no le faltan ", em: "argumentos." },
    { text: "Le falta ", em: "relato." },
  ],
  items: [
    {
      n: "01",
      label: "Datos",
      body:
        "Los números están ahí. Rendimientos, trazabilidad, huella, mortalidades. Enterrados en memorias anuales que no abre casi nadie.",
    },
    {
      n: "02",
      label: "Ciencia",
      body:
        "La investigación es sólida. Pero se queda atrapada en revistas de acceso cerrado, siglas y pdfs de noventa páginas que ningún comprador va a leer.",
    },
    {
      n: "03",
      label: "Voz",
      body:
        "Lo que no hay es voz. Así que consumidores, medios y legisladores le acaban escribiendo la historia al sector por su cuenta.",
    },
  ],
} as const;

export const metodo = {
  eyebrow: "Cómo trabajamos",
  title: "Un método que viene del periodismo, no de la publicidad.",
  intro:
    "La mayoría de las agencias llega con una plantilla. Nosotras llegamos con bibliografía. El seafood no necesita gritar más fuerte. Necesita que se le explique bien.",
  steps: [
    {
      n: "01",
      title: "Primero, leer la ciencia.",
      body:
        "Antes de escribir un titular, leemos los informes, las notas técnicas, la exposición regulatoria. No hay atajos.",
    },
    {
      n: "02",
      title: "Saber quién está al otro lado.",
      body:
        "No habla igual un comprador de un retailer nórdico, un técnico de Bruselas y alguien que hace la compra un sábado. Adaptarlo no es opcional.",
    },
    {
      n: "03",
      title: "Escribir pensando en quien lee.",
      body:
        "Corto cuando se puede. Técnico cuando toca. Nunca rellenado para parecer importante.",
    },
    {
      n: "04",
      title: "Diseñar para que no se pierda nada.",
      body:
        "Tipografía, jerarquía, maquetación. El formato forma parte del mensaje, sobre todo si el mensaje es difícil.",
    },
  ],
} as const;

export const servicios = {
  eyebrow: "Servicios",
  title: "Pensado para un sector que se comunica en pdfs y vende en el lineal del súper.",
  items: [
    {
      title: "Editorial y contenidos de fondo",
      body:
        "Informes, whitepapers y artículos de autoría pensados para leerse, no para archivarse.",
    },
    {
      title: "Voz de marca y posicionamiento",
      body:
        "Cómo suena tu empresa en un sector donde casi todas suenan igual. Trabajo de base, no un cambio de logo.",
    },
    {
      title: "Relato de sostenibilidad",
      body:
        "Llevar datos de ESG, certificaciones e impacto a algo que retailers, inversores y medios puedan citar.",
    },
    {
      title: "Diseño visual y editorial",
      body:
        "Maquetaciones que respetan al lector. Tipografía con criterio. Infografías que dicen algo.",
    },
    {
      title: "Web y presencia digital",
      body:
        "Webs que cuentan lo que hacéis de verdad, sin esconderlo detrás de fotos de stock de redes de pesca.",
    },
    {
      title: "Campañas para audiencias técnicas",
      body:
        "Go-to-market para reguladores, compras y B2B. Precisión antes que volumen.",
    },
  ],
} as const;

export const proyectos = {
  eyebrow: "Proyectos",
  title: "A lo que nos enfrentamos, aunque todavía no podamos poner nombres.",
  subtitle:
    "Trabajamos con productores, centros de investigación, certificadoras y empresas en arranque. Un vistazo a los encargos que cruzan la mesa.",
  items: [
    {
      n: "№ 01",
      client: "Productora acuícola",
      title:
        "Pasar una memoria de sostenibilidad de noventa páginas a algo que un comprador de retail nórdico sí lea.",
      tag: "Editorial · Estrategia",
    },
    {
      n: "№ 02",
      client: "Centro de investigación",
      title:
        "Convertir un paper revisado por pares en un dossier público de seis páginas.",
      tag: "Contenido · Diseño",
    },
    {
      n: "№ 03",
      client: "Criadero de primera generación",
      title:
        "Construir voz de marca y web antes de la primera cosecha comercial.",
      tag: "Marca · Web",
    },
    {
      n: "№ 04",
      client: "Coalición sectorial",
      title:
        "Reformular un debate regulatorio para medios generalistas sin perder el rigor técnico.",
      tag: "Narrativa · Prensa",
    },
    {
      n: "№ 05",
      client: "Entidad certificadora",
      title:
        "Hacer inteligible un estándar de trazabilidad para quienes lo tienen que aplicar.",
      tag: "Editorial · Visual",
    },
  ],
} as const;

export const nicho = {
  eyebrow: "Por qué un estudio de nicho",
  title: [
    { text: "Nicho, ", em: "a mucha honra." },
  ],
  body: [
    "La mayoría de las agencias acepta cualquier briefing. Nosotras aceptamos los que entendemos. Eso cambia lo que acaba en la página.",
    "No empezamos googleando tu especie. Ya sabemos la diferencia entre RAS y jaula abierta, entre MSC y ASC, entre gestión pesquera y política pesquera.",
  ],
  punchline: "De eso va todo esto.",
} as const;

export const estilo = {
  eyebrow: "Estilo editorial",
  title: "Una postura sobre cómo debería sonar este sector.",
  cards: [
    {
      title: "Editorial, no publicitario.",
      body:
        "Si suena a anuncio, pierdes de entrada a la gente informada. Y la gente informada es la que importa.",
      accent: "ink",
    },
    {
      title: "Investigado, no reciclado.",
      body:
        "Nada de mensajes prestados. Cada pieza parte de fuentes primarias y de la gente que está haciendo el trabajo.",
      accent: "coral",
    },
    {
      title: "Primero, para los de dentro.",
      body:
        "Si pasa el filtro técnico, pasa el resto. Al revés no funciona nunca.",
      accent: "teal",
    },
  ],
} as const;

export const estudio = {
  eyebrow: "El estudio",
  title:
    "Dirigido por Nerea Clemente, que llevaba años en el sector antes de ponerse a contarlo.",
  body: [
    "Seaborn Media es pequeño a propósito. Una editora, un punto de vista y un equipo rotatorio —diseño, investigación, fotografía— que entra cuando el proyecto lo pide.",
    "Sin capa de cuentas. Sin plan de medios vestido de estrategia. Hablas con quien hace el trabajo.",
  ],
  signature: "— Fundadora y editora",
  initials: "NC",
} as const;

export const cta = {
  eyebrow: "Por dónde empezar",
  title: "¿Tienes algo difícil de explicar?",
  subtitle:
    "Mándanos lo que tengas. Un borrador, una memoria, un briefing o una idea a medias. Te decimos qué merece la pena contar y cómo.",
  emailLabel: site.email,
  telLabel: site.phoneDisplay,
} as const;

export const footer = {
  tagline: "Estudio editorial para seafood, acuicultura y sistemas alimentarios.",
  columns: [
    {
      title: "Estudio",
      links: [
        { href: "#proyectos", label: "Proyectos" },
        { href: "#metodo", label: "Método" },
        { href: "#servicios", label: "Servicios" },
        { href: "#estudio", label: "Sobre el estudio" },
      ],
    },
  ],
  contact: {
    title: "Contacto",
    items: [
      { label: site.email, href: `mailto:${site.email}` },
      { label: site.phoneDisplay, href: `tel:${site.phone}` },
      { label: "Entre Galicia y Oslo", href: null as string | null },
    ],
  },
  redes: {
    title: "Redes",
    items: [
      { label: "LinkedIn", href: site.social.linkedin.url },
      { label: "Substack", href: site.social.substack.url },
      { label: `Instagram · ${site.social.instagram.handle}`, href: site.social.instagram.url },
    ],
  },
  legal: `© ${new Date().getFullYear()} Seaborn Media. Todos los derechos reservados.`,
  smallprint: "Contado con criterio. Diseñado con cuidado.",
} as const;

export const future = {
  blog: { enabled: false, items: [] as { title: string; href: string }[] },
  casos: { enabled: false, items: [] as { title: string; href: string }[] },
  equipo: { enabled: false, items: [] as { name: string; role: string }[] },
} as const;
