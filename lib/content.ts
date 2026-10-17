// Todo el copy de la web vive aquí. Editar aquí, no en JSX.

export const site = {
  name: "SeaBorn Media",
  wordmark: { soft: "Sea", bold: "Born", super: "media" },
  description:
    "Marketing y contenidos para marcas del sector seafood, pesca y acuicultura.",
  url: "https://www.seabornmedia.com",
  email: "hola@seabornmedia.com",
  phone: "+34635369915",
  phoneDisplay: "635 369 915",
  social: {
    instagram: { handle: "@seaborn.media", url: "https://instagram.com/seaborn.media" },
    linkedin: { handle: "SeaBorn Media", url: "https://linkedin.com/company/seabornmedia" },
    substack: { handle: "SeaBorn", url: "https://seabornmedia.substack.com" },
    tiktok: { handle: "@seaborn.media", url: "https://tiktok.com/@seaborn.media" },
  },
  ogImage: "/og.png",
} as const;

export const nav = {
  links: [
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotras", label: "Nosotras" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#metodo", label: "Proceso" },
  ],
  cta: { href: "#contacto", label: "Hablemos" },
} as const;

export const hero = {
  eyebrow: "Marketing para el sector del mar",
  titleLines: [
    { text: "El sector sabe ", em: "de mar." },
    { text: "Nosotras, ", em: "de contarlo." },
  ],
  body:
    "Estudio de marketing y contenidos para marcas de seafood, pesca y acuicultura que quieren dejar de hablar solo entre técnicos.",
  cta: { label: "Hablemos de tu proyecto", href: "#contacto" },
  pills: ["Estrategia", "Contenido", "Marca", "Comunicación", "Crecimiento"],
  photo: { variant: "underwater", alt: "Composición abstracta de agua y luz" },
} as const;

export const servicios = {
  eyebrow: "Nuestros servicios",
  title: [
    { text: "Soluciones de marketing ", em: null },
    { text: "", em: "diseñadas para el sector seafood." },
  ],
  subtitle:
    "Combinamos conocimiento del sector con criterio editorial. Para que lo que haces se entienda, se cite y se recuerde.",
  moreCta: { label: "Ver todos los servicios", href: "#servicios" },
  items: [
    {
      icon: "chart",
      tone: "navy" as const,
      title: "Estrategia de marketing",
      body: "Planes a medida para alcanzar objetivos reales en un sector en movimiento constante.",
    },
    {
      icon: "pen",
      tone: "coral" as const,
      title: "Contenido y storytelling",
      body: "Historias que conectan, informan y posicionan tu marca sin sonar a folleto.",
    },
    {
      icon: "mega",
      tone: "sky" as const,
      title: "Comunicación digital",
      body: "Redes, campañas, email y presencia online. Pensados para tu audiencia real.",
    },
    {
      icon: "leaf",
      tone: "teal" as const,
      title: "Marca y diseño",
      body: "Identidad visual y materiales que reflejan el valor de tu empresa y del mundo del mar.",
    },
  ],
} as const;

export const hablamos = {
  eyebrow: "Por qué SeaBorn Media",
  title: [
    { text: "Entendemos el sector ", em: null },
    { text: "porque ", em: "hablamos su idioma." },
  ],
  body:
    "No empezamos googleando tu especie. Sabemos la diferencia entre RAS y jaula abierta, entre MSC y ASC, entre gestión pesquera y política pesquera. Y eso cambia lo que acaba en la página.",
  bullets: [
    {
      icon: "waves",
      title: "Conocimiento del sector.",
      body: "Experiencia real en seafood, acuicultura y pesca.",
    },
    {
      icon: "bulb",
      title: "Enfoque editorial.",
      body: "Investigado, no reciclado. Y pensado para quien lee.",
    },
    {
      icon: "people",
      title: "Acompañamiento cercano.",
      body: "Hablas con quien hace el trabajo. Sin capa de cuentas.",
    },
    {
      icon: "chart",
      title: "Resultados medibles.",
      body: "Lo que no se mide, no se mejora. Y eso también lo contamos.",
    },
  ],
  photo: { variant: "shoal", alt: "Composición abstracta de banco de peces" },
} as const;

export const metodo = {
  eyebrow: "Nuestro proceso",
  title: [
    { text: "De la idea ", em: "al impacto." },
  ],
  intro:
    "Un proceso claro, colaborativo y adaptado al sector. Sin reuniones de relleno, con entregas que se pueden enseñar.",
  steps: [
    {
      n: "01",
      tone: "navy" as const,
      title: "Escuchamos.",
      body: "Conocemos tu negocio, tus objetivos y tu contexto. Y leemos lo que ya tienes publicado.",
    },
    {
      n: "02",
      tone: "coral" as const,
      title: "Diseñamos.",
      body: "Decidimos qué contar, a quién y por dónde. Una estrategia corta, útil y accionable.",
    },
    {
      n: "03",
      tone: "sky" as const,
      title: "Ejecutamos.",
      body: "Convertimos la estrategia en piezas reales: contenidos, campañas, diseño, prensa.",
    },
    {
      n: "04",
      tone: "teal" as const,
      title: "Medimos.",
      body: "Analizamos resultados, afinamos lo que funciona y descartamos lo que no.",
    },
  ],
} as const;

export const proyectos = {
  eyebrow: "Proyectos",
  title: "Lo que cruza la mesa cada semana.",
  subtitle:
    "Productores, centros de investigación, certificadoras y empresas en arranque. Una muestra. Sin nombres, todavía.",
  items: [
    {
      n: "№ 01",
      client: "Productora acuícola",
      title: "Una memoria de sostenibilidad de noventa páginas, convertida en algo que el comprador del retail nórdico sí lee.",
      tag: "Editorial · Estrategia",
    },
    {
      n: "№ 02",
      client: "Centro de investigación",
      title: "Un paper revisado por pares, en un dossier público de seis páginas.",
      tag: "Contenido · Diseño",
    },
    {
      n: "№ 03",
      client: "Criadero de primera generación",
      title: "Voz de marca y web antes de la primera cosecha comercial.",
      tag: "Marca · Web",
    },
    {
      n: "№ 04",
      client: "Coalición sectorial",
      title: "Un debate regulatorio reformulado para medios generalistas, sin perder el rigor técnico.",
      tag: "Narrativa · Prensa",
    },
    {
      n: "№ 05",
      client: "Entidad certificadora",
      title: "Un estándar de trazabilidad hecho legible para quien lo tiene que aplicar.",
      tag: "Editorial · Visual",
    },
  ],
} as const;

export const estudio = {
  eyebrow: "El estudio",
  title:
    "Dirigido por Nerea Clemente, que llevaba años dentro del sector antes de ponerse a contarlo.",
  body: [
    "SeaBorn Media es pequeño a propósito. Una editora, un punto de vista, y un equipo rotatorio —diseño, investigación, fotografía— que entra cuando el proyecto lo pide.",
    "Sin capa de cuentas. Sin plan de medios disfrazado de estrategia. Hablas con quien hace el trabajo.",
  ],
  signature: "— Fundadora y editora",
  meta: [
    { k: "Base", v: "Galicia · Oslo" },
    { k: "Idiomas", v: "ES · EN · NO" },
    { k: "Disponibilidad", v: "Dos proyectos al trimestre" },
  ],
  photo: { variant: "fjord", alt: "Composición abstracta de fiordo y agua" },
} as const;

export const cta = {
  eyebrow: "Hablemos",
  title: [
    { text: "¿Lista para llevar tu marca ", em: null },
    { text: "", em: "del mar más lejos?" },
  ],
  subtitle: "Mándanos lo que tengas. Un borrador, una memoria, un briefing o una idea a medias. Te respondemos en menos de 48 horas.",
  cta: { label: "Hablemos", href: "mailto:hola@seabornmedia.com" },
  secondary: { label: "o escríbenos directamente", href: "mailto:hola@seabornmedia.com" },
} as const;

export const footer = {
  tagline: "Marketing y contenidos para un futuro más azul.",
  columns: [
    {
      title: "Estudio",
      links: [
        { href: "#servicios", label: "Servicios" },
        { href: "#nosotras", label: "Nosotras" },
        { href: "#proyectos", label: "Proyectos" },
        { href: "#metodo", label: "Proceso" },
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
      { label: "Instagram", href: site.social.instagram.url },
      { label: "Substack", href: site.social.substack.url },
    ],
  },
  legal: `© ${new Date().getFullYear()} SeaBorn Media. Todos los derechos reservados.`,
  smallprint: "Contado con criterio. Diseñado con cuidado.",
} as const;

export const future = {
  blog: { enabled: false, items: [] as { title: string; href: string }[] },
  casos: { enabled: false, items: [] as { title: string; href: string }[] },
  equipo: { enabled: false, items: [] as { name: string; role: string }[] },
} as const;
