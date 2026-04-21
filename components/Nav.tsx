"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { nav } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile panel open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-navy-deep/95 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="#top"
          aria-label="Inicio"
          className="text-paper transition-opacity hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <Wordmark size="sm" />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-paper/80 hover:text-paper transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button href={nav.cta.href} variant="primary" size="md">
            {nav.cta.label}
          </Button>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-paper hover:bg-paper/10 transition-colors"
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-200",
                open && "translate-y-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform duration-200",
                open && "-translate-y-1 -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={cn(
          "md:hidden overflow-hidden transition-[max-height] duration-300 ease-out",
          open ? "max-h-[80vh]" : "max-h-0",
        )}
      >
        <Container className="pb-8 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-lg text-paper/90 hover:bg-paper/10 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 px-1">
              <Button
                href={nav.cta.href}
                variant="primary"
                size="lg"
                className="w-full"
              >
                {nav.cta.label}
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
