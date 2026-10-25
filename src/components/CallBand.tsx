import { Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

interface CallBandProps {
  title?: string;
  description?: string;
}

export function CallBand({
  title = "Ready to Talk About Your Estate Plan?",
  description = "If you are ready to discuss your family, property, existing documents, and planning goals, call our office to schedule a private consultation.",
}: CallBandProps) {
  return (
    <section className="gold-sweep relative overflow-hidden bg-navy">
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
        <Reveal direction="right">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
            Private Consultation
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-foreground/70">
            {description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+12542337300"
              className="inline-flex items-center gap-2.5 rounded-sm bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground shadow-[0_16px_36px_-16px_color-mix(in_oklab,var(--gold)_80%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
            >
              <Phone className="h-4 w-4" />
              Call (254) 233-7300
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-8 py-4 text-sm font-semibold text-navy-foreground transition-colors duration-300 hover:border-gold hover:text-gold-soft"
            >
              Plan a Visit
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
