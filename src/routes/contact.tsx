import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Video, BookOpenCheck, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import familyLegacy from "@/assets/family-legacy.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Schedule a Consultation | Law Office of Harvey L. Cox" },
      {
        name: "description",
        content:
          "Schedule a private estate planning consultation. Call (254) 233-7300 or visit 1600 Lake Air Drive, Suite 108, Waco, Texas 76710. Meetings in person, by phone, or by Zoom.",
      },
      { property: "og:title", content: "Schedule a Consultation | Law Office of Harvey L. Cox" },
      {
        property: "og:description",
        content:
          "Schedule a private estate planning consultation. Call (254) 233-7300. Meetings in person, by phone, or by Zoom.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Schedule a Consultation | Law Office of Harvey L. Cox",
      },
      {
        name: "twitter:description",
        content:
          "Schedule a private estate planning consultation. Call (254) 233-7300. Meetings in person, by phone, or by Zoom.",
      },
    ],
  }),
  component: Contact,
});

const contactCards = [
  {
    icon: Phone,
    title: "Call the Office",
    line1: "(254) 233-7300",
    line2: "Speak with us to schedule your private consultation.",
    href: "tel:+12542337300",
  },
  {
    icon: MapPin,
    title: "Visit the Office",
    line1: "1600 Lake Air Drive, Suite 108",
    line2: "Waco, Texas 76710",
  },
  {
    icon: Video,
    title: "Meet Your Way",
    line1: "In person, by phone, or by Zoom",
    line2: "Whatever fits your needs and the type of planning involved.",
  },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ready to Talk About Your Estate Plan?"
        description="If you are ready to discuss your family, property, existing documents, and planning goals, call our office to schedule a private consultation."
      />

      {/* Contact cards */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((card, i) => {
              const inner = (
                <article className="group h-full rounded-md border border-border bg-card p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_24px_48px_-28px_color-mix(in_oklab,var(--foreground)_35%,transparent)]">
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary transition-colors duration-500 group-hover:bg-gold group-hover:text-gold-foreground">
                    <card.icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 font-display text-lg font-bold text-foreground">{card.title}</h2>
                  <p className="mt-3 font-medium text-foreground/85">{card.line1}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.line2}</p>
                </article>
              );
              return card.href ? (
                <Reveal key={card.title} direction="up" delay={i * 100}>
                  <a href={card.href} className="block h-full">
                    {inner}
                  </a>
                </Reveal>
              ) : (
                <Reveal key={card.title} direction="up" delay={i * 100}>
                  {inner}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* What to expect (split: image left, text right) */}
      <section className="bg-parchment">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <div className="overflow-hidden rounded-md shadow-[0_36px_72px_-36px_color-mix(in_oklab,var(--foreground)_50%,transparent)]">
              <img
                src={familyLegacy}
                alt="A Texas family planning their estate together at the kitchen table"
                width={1600}
                height={912}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={140}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-foreground/80">
              What to Expect
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              A Private Conversation About What Matters to Your Family
            </h2>
            <ul className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <li>
                We talk through your family, your property, and any existing documents — wills,
                trusts, deeds, and beneficiary designations.
              </li>
              <li>
                You get clear answers about probate exposure, incapacity planning, and what Texas
                law does and does not protect.
              </li>
              <li>
                You learn about flat-fee planning options, so you know the cost before documents
                are prepared.
              </li>
            </ul>
            <a
              href="tel:+12542337300"
              className="mt-8 inline-flex items-center gap-2.5 rounded-sm bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground shadow-[0_16px_36px_-16px_color-mix(in_oklab,var(--gold)_80%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
            >
              <Phone className="h-4 w-4" />
              Call (254) 233-7300
            </a>
          </Reveal>
        </div>
      </section>

      {/* Workbook note */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
          <Reveal direction="up">
            <div className="flex flex-col items-start gap-6 rounded-md border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <BookOpenCheck className="mt-1 h-7 w-7 shrink-0 text-gold" />
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground">
                    Still Gathering Information?
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    The Texas Probate Risk Workbook is a practical first step for identifying
                    probate and planning risks. Ask for your copy when you call.
                  </p>
                </div>
              </div>
              <a
                href="tel:+12542337300"
                className="inline-flex shrink-0 items-center gap-2 rounded-sm border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold"
              >
                Request the Workbook
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
