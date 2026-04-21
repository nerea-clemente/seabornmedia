// Todo el copy de la web vive aquí. Editar aquí, no en JSX.

export const site = {
  name: "Seaborn Media",
  wordmark: { soft: "Sea", bold: "Born", super: "media" },
  description:
    "Agencia de marketing y contenidos para el sector seafood, pesca y acuicultura.",
  url: "https://www.seabornmedia.com",
  email: "hola@seabornmedia.com",
  phone: "+34 635 369 915",
  phoneDisplay: "635 369 915",
  social: {
    instagram: { handle: "@seaborn.media", url: "https://instagram.com/seaborn.media" },
    linkedin: { handle: "Seaborn Media", url: "https://linkedin.com/company/seabornmedia" },
    tiktok: { handle: "@seaborn.media", url: "https://tiktok.com/@seaborn.media" },
  },
  ogImage: "/og.png",
} as const;

export const nav = {
  links: [
    { href: "#servicios", label: "Servicios" },
    { href: "#sector", label: "Sector" },
    { href: "#proceso", label: "Proceso" },
    { href: "#contacto", label: "Contacto" },
  ],
  cta: { href: "#contacto", label: "Hablemos" },
} as const;

export const hero = {
  eyebrow: "Agencia de marketing · Seafood · Pesca · Acuicultura",
  title: "Marketing que entiende de peces.",
  subtitle:
    "Trabajamos con marcas del seafood que están cansadas de sonar a PDF técnico. Hacemos que las entiendan dentro y fuera del sector.",
  ctaPrimary: { href: "#servicios", label: "Ver qué hacemos" },
  ctaSecondary: { href: "#contacto", label: "Escríbenos" },
} as const;

export const paraQuien = {
  eyebrow: "Para quién",
  title: "Pensado para tres mundos que comparten mar.",
  items: [
    {
      title: "Acuicultura",
      body: "Granjas, criaderos y empresas de cría que quieren contar lo que hacen sin pedir disculpas.",
    },
    {
      title: "Pesca",
      body: "Cofradías, armadores y empresas pesqueras que necesitan llegar a un público que ya no compra como antes.",
    },
    {
      title: "Seafood",
      body: "Marcas y procesadoras que viven en el lineal del súper, en la carta del restaurante y en la cabeza del comprador.",
    },
  ],
} as const;

export const servicios = {
  eyebrow: "Servicios",
  title: "Lo que hacemos por ti.",
  subtitle:
    "Cinco frentes con una idea común: comunicar el sector como merece, sin convertirlo en folleto.",
  items: [
    {
      icon: "feed",
      title: "Contenido y redes",
      body:
        "LinkedIn, Instagram y TikTok. Pensados para tu audiencia real, no para el algoritmo del mes.",
    },
    {
      icon: "pen",
      title: "Storytelling y copy para web",
      body:
        "Escribimos como se lee, no como se firma. Webs, memorias, dosieres y todo lo que tenga texto delante.",
    },
    {
      icon: "spark",
      title: "Campañas creativas",
      body:
        "De la idea al lanzamiento. Briefing claro, producción sensata y mensajes que aguantan la lectura.",
    },
    {
      icon: "compass",
      title: "Posicionamiento de marca",
      body:
        "Qué dices, cómo suenas y por qué te eligen a ti. Trabajo de base, no un cambio de logo.",
    },
    {
      icon: "talk",
      title: "Consultoría de comunicación",
      body:
        "Acompañamos a equipos internos para que comuniquen mejor sin depender siempre de una agencia.",
    },
  ],
} as const;

export const porQueNicho = {
  eyebrow: "Por qué un nicho",
  title: "Una agencia que sabe lo que es un RAS y por qué importa.",
  pitch:
    "El sector seafood no necesita una agencia más. Necesita una que no tenga que googlear tu especie en la primera reunión. Eso es lo que hacemos: especializarnos para no perder el tiempo —ni el tuyo— en explicar lo básico.",
  bullets: [
    {
      title: "Conocemos el sector.",
      body:
        "Sabemos la diferencia entre RAS y jaula abierta, entre MSC y ASC, entre cuota y descarte. No es decoración: es lo que cambia el mensaje.",
    },
    {
      title: "Traducimos lo técnico.",
      body:
        "Lo que en un informe ocupa diez páginas, en una web cabe en un párrafo. Nosotras lo escribimos sin perder lo importante.",
    },
    {
      title: "Hablamos con los que no son del sector.",
      body:
        "Comprador de retail, periodista, regulador, consumidor de un sábado. Cada uno necesita una frase distinta. Y nosotras lo sabemos.",
    },
  ],
} as const;

export const proceso = {
  eyebrow: "Proceso",
  title: "Cómo trabajamos.",
  subtitle:
    "Cuatro pasos. Sin teatro, sin reuniones de relleno, con entregas que se pueden enseñar.",
  steps: [
    {
      n: "01",
      title: "Descubrimiento",
      body:
        "Leemos tus informes, tus notas técnicas y lo que ya tienes publicado. Hablamos con quien hace el trabajo, no solo con marketing.",
    },
    {
      n: "02",
      title: "Estrategia",
      body:
        "Decidimos qué decir, a quién y por qué canal. Un documento corto que sirve para tomar decisiones, no para archivar.",
    },
    {
      n: "03",
      title: "Ejecución",
      body:
        "Producimos los contenidos, las piezas y las campañas. Calendarios reales y entregas que se cumplen.",
    },
    {
      n: "04",
      title: "Iteración",
      body:
        "Medimos lo que importa, ajustamos lo que no funciona y dejamos en marcha lo que sí. Sin informes interminables.",
    },
  ],
} as const;

export const contacto = {
  eyebrow: "Contacto",
  title: "¿Hablamos?",
  subtitle:
    "Cuéntanos qué tienes entre manos. Una memoria, un lanzamiento, una web pendiente, una idea a medias. Te respondemos en menos de 48 horas.",
  blocks: [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Teléfono", value: site.phoneDisplay, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { label: "Instagram", value: site.social.instagram.handle, href: site.social.instagram.url },
    { label: "Web", value: "seabornmedia.com", href: site.url },
  ],
  cta: { href: `mailto:${site.email}`, label: "Escríbenos" },
} as const;

export const footer = {
  tagline: "Marketing y contenidos para el sector seafood.",
  legal: `© ${new Date().getFullYear()} Seaborn Media. Todos los derechos reservados.`,
  smallprint: "Hecho desde Galicia. Pensado para todo lo que viene del mar.",
} as const;

// Hooks para futuro (no se renderizan en v1)
export const future = {
  blog: { enabled: false, items: [] as { title: string; href: string }[] },
  casos: { enabled: false, items: [] as { title: string; href: string }[] },
  equipo: { enabled: false, items: [] as { name: string; role: string }[] },
} as const;
