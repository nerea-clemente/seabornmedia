import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy-darker text-paper py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] border-b border-paper/15 pb-12">
          <div>
            <Wordmark size="md" />
            <p className="mt-4 max-w-[32ch] text-sm text-paper/70 leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-coral">
                {col.title}
              </h5>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-paper/75 hover:text-coral transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-coral">
              {footer.contact.title}
            </h5>
            <ul className="space-y-2">
              {footer.contact.items.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-paper/75 hover:text-coral transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm text-paper/75">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-coral">
              {footer.redes.title}
            </h5>
            <ul className="space-y-2">
              {footer.redes.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-paper/75 hover:text-coral transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-paper/50 sm:flex-row sm:justify-between">
          <span>{footer.legal}</span>
          <span>{footer.smallprint}</span>
        </div>
      </Container>
    </footer>
  );
}
