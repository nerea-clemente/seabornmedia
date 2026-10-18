export default function Page() {
  return (
    <main className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-navy text-paper">
      {/* Aleta oficial como marca de agua. Shade sobre shade, como la portada del brand book */}
      <svg
        aria-hidden
        viewBox="0 0 1536 1536"
        className="pointer-events-none absolute -right-[22%] top-1/2 h-[160%] w-[90%] -translate-y-1/2 text-navy-dark sm:-right-[10%] sm:w-[70%]"
      >
        <path
          fill="currentColor"
          d="M 1298.054688 1298.546875 C 1055.027344 1541.574219 686.992188 1582.199219 401.3125 1421.855469 C 402.292969 1420.613281 403.339844 1419.503906 404.253906 1418.261719 C 429.984375 1416.761719 456.503906 1418.980469 483.019531 1422.769531 C 501.960938 1425.054688 520.902344 1428.84375 539.125 1433.351562 C 790.640625 1495.460938 1054.898438 1396.253906 1226.144531 1200.835938 C 1212.496094 1184.183594 1198.84375 1169.03125 1183.757812 1153.878906 C 1092.84375 1062.960938 979.984375 998.628906 847.464844 959.964844 C 775.488281 939.523438 702.011719 926.589844 625.53125 921.300781 C 644.472656 820.523438 648.980469 720.59375 639.183594 621.320312 C 624.8125 461.5 568.773438 322.121094 472.570312 204.753906 C 418.035156 236.5625 368.003906 275.945312 324.113281 319.835938 C 187.742188 456.210938 106.753906 641.695312 118.117188 836.457031 C 118.835938 855.398438 118.835938 875.125 118.117188 894 C 116.617188 933.449219 109.824219 972.046875 99.179688 1008.363281 C 93.953125 1027.433594 87.03125 1045.917969 79.519531 1064.203125 C -38.238281 790.675781 14.207031 461.566406 237.640625 238.128906 C 530.503906 -54.730469 1005.257812 -54.730469 1298.121094 238.128906 C 1590.980469 530.992188 1590.980469 1005.75 1298.121094 1298.609375 Z"
        />
      </svg>

      {/* Contenido */}
      <div className="relative z-10 flex flex-1 flex-col px-6 py-10 sm:px-10 sm:py-12">
        {/* Bloque central */}
        <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-3xl">
            {/* Logo oficial, variante dark con "media" en coral para contrastar sobre navy */}
            <img
              src="./logo-dark.svg"
              alt="SeaBorn Media"
              width={280}
              height={76}
              className="h-auto w-[min(65vw,280px)]"
            />

            <h1 className="mt-10 max-w-[20ch] font-display text-[clamp(2.1rem,6vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-paper">
              Tu agencia de marketing y comunicación{" "}
              <span className="text-coral">seafood.</span>
            </h1>

            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-sky sm:text-lg">
              Estamos preparando algo pensado para marcas de pesca, acuicultura y seafood. Si no quieres esperar, cuéntanos tu proyecto.
            </p>

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

        <footer className="mt-12 border-t border-sky/15 pt-6 text-[11px] uppercase tracking-[0.18em] text-sky/70">
          SeaBorn Media · {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  );
}
