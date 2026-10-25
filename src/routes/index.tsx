import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  FileText,
  Gavel,
  HeartPulse,
  ShieldCheck,
  HandHeart,
  HeartHandshake,
  BookOpenCheck,
  Newspaper,
  GraduationCap,
  ArrowRight,
  MapPin,
  BadgeCheck,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CallBand } from "@/components/CallBand";
import heroOffice from "@/assets/hero-office.jpg";
import scalesDesk from "@/assets/scales-desk.jpg";
import texasOaks from "@/assets/texas-oaks.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Law Office of Harvey L. Cox | Waco Estate Planning Attorney",
      },
      {
        name: "description",
        content:
          "Protect your family from probate problems and estate planning mistakes in Texas. Harvey L. Cox has practiced law since 1990. Call (254) 233-7300.",
      },
      { property: "og:title", content: "Law Office of Harvey L. Cox | Waco Estate Planning Attorney" },
      {
        property: "og:description",
        content:
          "Estate planning, probate avoidance, and asset protection for Texas families. Practicing law since 1990. Flat-fee planning options.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Law Office of Harvey L. Cox | Waco Estate Planning Attorney",
      },
      {
        name: "twitter:description",
        content:
          "Estate planning, probate avoidance, and asset protection for Texas families. Practicing law since 1990.",
      },
    ],
  }),
  component: Index,
});

const helpCards = [
  {
    icon: FileText,
    title: "Create or Update an Estate Plan",
    text: "Wills, trusts, powers of attorney, beneficiary arrangements, and coordinated planning.",
  },
  {
    icon: Gavel,
    title: "Avoid Probate Problems",
    text: "Understand how deeds, account ownership, trusts, and beneficiary designations affect probate.",
  },
  {
    icon: HeartPulse,
    title: "Plan for Incapacity",
    text: "Make sure the right people can handle financial and medical decisions if you cannot.",
  },
  {
    icon: ShieldCheck,
    title: "Protect Assets",
    text: "Identify what Texas law protects and where additional planning may be appropriate.",
  },
  {
    icon: HandHeart,
    title: "Plan for Long-Term Care",
    text: "Address care costs, Medicaid issues, and family decisions before a crisis.",
  },
  {
    icon: HeartHandshake,
    title: "Plan for a Special Needs Beneficiary",
    text: "Protect an inheritance without disrupting needs-based benefits.",
  },
];

const resources = [
  {
    icon: BookOpenCheck,
    title: "Texas Probate Risk Workbook",
    text: "A practical first step for identifying probate and planning risks before you meet with an attorney.",
  },
  {
    icon: Newspaper,
    title: "Articles & Guides",
    text: "Plain-English answers about Texas estate planning, organized by topic.",
  },
  {
    icon: GraduationCap,
    title: "Classes & Educational Programs",
    text: "On-demand training and live estate-planning classes for Texas families.",
  },
];

function Index() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-parchment">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* Text column — enters from the right */}
          <div>
            <p className="enter-up inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-foreground/80" style={{ animationDelay: "120ms" }}>
              <MapPin className="h-3.5 w-3.5" />
              Waco, Texas · Practicing Since 1990
            </p>
            <h1 className="enter-right mt-5 font-display text-4xl font-bold leading-[1.15] text-foreground md:text-[2.9rem]" style={{ animationDelay: "260ms" }}>
              Protect Your Family from Probate Problems and Estate Planning Mistakes in Texas
            </h1>
            <div className="rule-grow mt-7 h-px w-24 bg-gold" />
            <p className="enter-right mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg" style={{ animationDelay: "480ms" }}>
              Texas estate planning for families who want clear answers about wills, trusts,
              probate avoidance, incapacity, asset protection, and what will actually happen when
              the plan is needed.
            </p>
            <div className="enter-up mt-9 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "640ms" }}>
              <a
                href="tel:+12542337300"
                className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground shadow-[0_16px_36px_-16px_color-mix(in_oklab,var(--gold)_80%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
              >
                <Phone className="h-4 w-4" />
                Call to Schedule a Consultation
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-card px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold"
              >
                View Estate Planning Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="enter-up mt-10 flex flex-wrap gap-x-8 gap-y-3" style={{ animationDelay: "800ms" }}>
              {["35+ Years in Practice", "Flat-Fee Planning Options", "Serving Clients Throughout Texas"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                    <BadgeCheck className="h-4 w-4 text-gold" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Image column — enters from the left */}
          <figure className="enter-left relative" style={{ animationDelay: "300ms" }}>
            <div className="hero-zoom overflow-hidden rounded-md shadow-[0_40px_80px_-40px_color-mix(in_oklab,var(--foreground)_55%,transparent)]">
              <img
                src={heroOffice}
                alt="The office of the Law Office of Harvey L. Cox in Waco, Texas"
                width={1600}
                height={912}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <figcaption className="absolute -bottom-6 left-6 rounded-sm bg-navy px-6 py-4 text-navy-foreground shadow-xl">
              <span className="block font-display text-2xl font-bold text-gold-soft">Since 1990</span>
              <span className="mt-0.5 block text-xs uppercase tracking-[0.16em] text-navy-foreground/70">
                Serving Texas Families
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* --------------------------------------- What do you need help with */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <Reveal direction="right" className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-foreground/80">
              Where Would You Like to Begin?
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              What Do You Need Help With?
            </h2>
            <div className="mx-auto mt-6 h-px w-20 bg-gold" />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {helpCards.map((card, i) => (
              <Reveal key={card.title} direction="up" delay={i * 90}>
                <article className="group h-full rounded-md border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_24px_48px_-28px_color-mix(in_oklab,var(--foreground)_35%,transparent)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-primary transition-colors duration-500 group-hover:bg-gold group-hover:text-gold-foreground">
                    <card.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold leading-snug text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal direction="up" delay={120} className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-gold-foreground"
            >
              View All Estate Planning Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ More than signing documents (split) */}
      <section className="bg-parchment">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <div className="overflow-hidden rounded-md shadow-[0_36px_72px_-36px_color-mix(in_oklab,var(--foreground)_50%,transparent)]">
              <img
                src={scalesDesk}
                alt="Scales of justice and estate planning documents on a mahogany desk"
                width={1200}
                height={1008}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={140}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-foreground/80">
              A Coordinated Plan
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Estate Planning Is More Than Signing Documents
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A will, trust, or power of attorney only solves part of the problem. The plan also has
              to coordinate real estate, account ownership, beneficiary designations, incapacity
              planning, and the practical decisions your family may someday have to make.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The goal is a plan your family can understand and use — not simply a stack of signed
              documents.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-gold-foreground"
            >
              More About the Practice
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- Stats band */}
      <section className="bg-navy">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 text-center sm:grid-cols-3">
          {[
            { stat: "1990", label: "Practicing Law in Texas Since" },
            { stat: "35+", label: "Years of Experience" },
            { stat: "100%", label: "Flat-Fee Planning Options Available" },
          ].map((item, i) => (
            <Reveal key={item.label} direction="up" delay={i * 120}>
              <p className="font-display text-5xl font-bold text-gold-soft">{item.stat}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.16em] text-navy-foreground/70">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------- Not ready yet */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <Reveal direction="right" className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-foreground/80">
              Start With Knowledge
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Not Ready to Meet with an Attorney?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              You can start by learning, organizing your information, and identifying the questions
              that matter to your family.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {resources.map((item, i) => (
              <Reveal key={item.title} direction="up" delay={i * 100}>
                <article className="h-full rounded-md border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold">
                  <item.icon className="h-7 w-7 text-gold" />
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal direction="up" delay={140} className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-card px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold"
            >
              Request the Free Workbook
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------ About preview */}
      <section className="bg-parchment">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left" className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-md shadow-[0_36px_72px_-36px_color-mix(in_oklab,var(--foreground)_50%,transparent)]">
              <img
                src={texasOaks}
                alt="Live oak trees in the Texas countryside at golden hour"
                width={1600}
                height={912}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={140} className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-foreground/80">
              Meet Your Attorney
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              More Than Thirty-Five Years in Practice
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Harvey L. Cox has practiced law in Texas since 1990. His background includes
              substantial litigation experience before he concentrated his practice on helping
              families prevent legal and financial problems through estate planning and
              asset-protection planning.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              He earned his law degree from the University of Houston Law Center and continues to
              teach estate-planning programs through McLennan Community College Continuing
              Education.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-navy px-8 py-4 text-sm font-semibold text-navy-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft"
            >
              Learn More About Harvey
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CallBand />
    </>
  );
}
