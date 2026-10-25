interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-parchment">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
      />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <p className="enter-up text-xs font-semibold uppercase tracking-[0.22em] text-gold-foreground/80" style={{ animationDelay: "100ms" }}>
          {eyebrow}
        </p>
        <h1 className="enter-right mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-foreground md:text-5xl" style={{ animationDelay: "220ms" }}>
          {title}
        </h1>
        <div className="rule-grow mt-6 h-px w-24 bg-gold" />
        <p className="enter-right mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg" style={{ animationDelay: "400ms" }}>
          {description}
        </p>
      </div>
    </section>
  );
}
