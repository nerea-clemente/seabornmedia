import Image from "next/image";

export default function Page() {
  return (
    <main className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-navy text-paper">
      {/* Isotipo gigante como marca de agua — igual que el brand book */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute -right-[22%] top-1/2 h-[160%] w-[90%] -translate-y-1/2 opacity-[0.07] sm:-right-[12%] sm:w-[70%] md:opacity-[0.09]"
      >
        <circle cx="50" cy="50" r="46" fill="var(--color-paper)" />
        <path
          d="M50 20 C 46 44, 36 54, 22 56 L 50 80 L 78 56 C 64 54, 54 44, 50 20 Z"
          fill="var(--color-navy)"
        />
      </svg>

      {/* Contenido */}
      <div className="relative z-10 flex flex-1 flex-col px-6 py-10 sm:px-10 sm:py-12">
        {/* Pill arriba a la izquierda */}
        <p className="inline-flex w-fit items-center gap-2.5 rounded-full border border-sky/30 bg-sky/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky backdrop-blur-sm sm:text-xs">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-coral" />
          Próximamente
        </p>

        {/* Bloque central */}
        <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-3xl">
            {/* Logo oficial */}
            <Image
              src="/logo.svg"
              alt="SeaBorn Media"
              width={520}
              height={140}
              priority
              className="h-auto w-[min(80vw,520px)]"
            />

            {/* Tagline */}
            <h1 className="mt-10 max-w-[20ch] font-display text-[clamp(2.1rem,6vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-paper">
              Tu agencia de marketing y comunicación{" "}
              <span className="text-coral">seafood.</span>
            </h1>

            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-sky sm:text-lg">
              Estamos preparando algo pensado para marcas de pesca, acuicultura y seafood. Si no quieres esperar, cuéntanos tu proyecto.
            </p>

            {/* Contacto */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="mailto:hola@seabornmedia.com"
                className="group inline-flex items-center gap-3 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-cream"
              >
                hola@seabornmedia.com
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="https://instagram.com/seaborn.media"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-sky underline-offset-[6px] transition-colors hover:text-coral hover:underline"
              >
                Instagram @seaborn.media
              </a>
            </div>
          </div>
        </div>

        {/* Pie — meta minimal */}
        <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-sky/15 pt-6 text-[11px] uppercase tracking-[0.18em] text-sky/70">
          <span>SeaBorn Media · {new Date().getFullYear()}</span>
          <span>Galicia · Oslo</span>
        </footer>
      </div>
    </main>
  );
}
