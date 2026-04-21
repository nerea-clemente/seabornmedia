import { Container } from "@/components/ui/Container";
import { CrescentShape } from "@/components/ui/CrescentShape";
import { paraQuien } from "@/lib/content";

export function ParaQuien() {
  return (
    <section
      id="sector"
      className="relative isolate overflow-hidden bg-cream py-20 sm:py-24"
    >
      <CrescentShape
        variant="fluke"
        tone="coral"
        opacity={0.12}
        className="-left-[20%] top-[10%] h-[80%] w-[55%]"
      />

      <Container className="relative z-10">
        <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
          <span className="h-px w-7 bg-ink/40" />
          {paraQuien.eyebrow}
        </p>
        <h2 className="font-display max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-ink">
          {paraQuien.title}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paraQuien.items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-ink/10 bg-paper/60 p-7 backdrop-blur-sm"
            >
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/75">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
