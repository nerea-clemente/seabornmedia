import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { footer, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy-darker py-12 text-paper">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Wordmark size="sm" />
          <p className="mt-3 max-w-sm text-sm text-paper/60">{footer.tagline}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-paper/60 sm:items-end">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href={site.social.linkedin.url}
              className="hover:text-coral transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={site.social.instagram.url}
              className="hover:text-coral transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href={site.social.tiktok.url}
              className="hover:text-coral transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
          </div>
          <p>{footer.legal}</p>
          <p className="text-paper/40">{footer.smallprint}</p>
        </div>
      </Container>
    </footer>
  );
}
