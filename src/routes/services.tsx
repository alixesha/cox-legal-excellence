import { createFileRoute } from "@tanstack/react-router";
import {
  FileText,
  Gavel,
  HeartPulse,
  ShieldCheck,
  HandHeart,
  HeartHandshake,
  Check,
  Phone,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CallBand } from "@/components/CallBand";
import familyLegacy from "@/assets/family-legacy.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Estate Planning Services | Law Office of Harvey L. Cox" },
      {
        name: "description",
        content:
          "Wills & trusts, probate avoidance, incapacity planning, asset protection, long-term care, and special needs planning for Texas families. Flat-fee options.",
      },
      { property: "og:title", content: "Estate Planning Services | Law Office of Harvey L. Cox" },
      {
        property: "og:description",
        content:
          "Wills & trusts, probate avoidance, incapacity planning, asset protection, long-term care, and special needs planning for Texas families.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Estate Planning Services | Law Office of Harvey L. Cox",
      },
      {
        name: "twitter:description",
        content:
          "Wills & trusts, probate avoidance, incapacity planning, asset protection, long-term care, and special needs planning for Texas families.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    number: "01",
    icon: FileText,
    title: "Wills & Trusts",
    text: "Wills and revocable living trusts are two different planning tools. The right choice depends on your assets, family circumstances, probate concerns, and how much ongoing control you want built into the plan.",
  },
  {
    number: "02",
    icon: Gavel,
    title: "Probate Avoidance Planning",
    text: "A will does not avoid probate by itself. Probate exposure often depends on how real estate, bank accounts, investments, beneficiary designations, and other assets are arranged. Planning may involve trusts, deeds, survivorship provisions, or other ownership arrangements.",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Powers of Attorney & Incapacity Planning",
    text: "Estate planning should address what happens during your lifetime if illness, injury, or cognitive decline makes it difficult to manage financial or medical decisions. A coordinated plan can include financial powers of attorney, medical powers of attorney, and advance directives.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Asset Protection Planning",
    text: "Texas law protects some assets automatically, while other assets may remain exposed to creditors, lawsuits, long-term-care costs, or poor inheritance planning. Planning focuses on identifying what is protected, what is exposed, and what options may be available.",
  },
  {
    number: "05",
    icon: HandHeart,
    title: "Long-Term Care & Medicaid Planning",
    text: "Long-term-care costs can affect a family's home, savings, and estate plan. Planning before a crisis gives families more options than waiting until care is immediately needed.",
  },
  {
    number: "06",
    icon: HeartHandshake,
    title: "Special Needs Planning",
    text: "An outright inheritance can create problems for a beneficiary who receives needs-based government benefits. A special needs trust can allow assets to be managed for that person without automatically requiring the inheritance to be spent first.",
  },
];

const problems = [
  "Unnecessary probate delays and expense",
  "Property passing to unintended beneficiaries",
  "Outdated beneficiary designations",
  "Family confusion about who should act",
  "Missing or incomplete incapacity planning",
  "Real estate passing in an unintended way",
  "Inheritances creating problems for vulnerable beneficiaries",
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Estate Planning Services"
        title="Clear, Practical Plans Built Around Texas Law"
        description="Estate planning is about more than preparing documents. A good plan should help the right people act when needed, reduce avoidable court involvement, coordinate how property passes, and give your family clear instructions."
      />

      {/* Service cards */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} direction="up" delay={(i % 2) * 100}>
                <article className="group relative h-full overflow-hidden rounded-md border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_24px_48px_-28px_color-mix(in_oklab,var(--foreground)_35%,transparent)]">
                  <span className="pointer-events-none absolute right-6 top-4 font-display text-5xl font-bold text-secondary transition-colors duration-500 group-hover:text-gold-soft">
                    {service.number}
                  </span>
                  <service.icon className="h-8 w-8 text-gold" />
                  <h2 className="mt-5 font-display text-xl font-bold leading-snug text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Practical approach (split: image left, text right) */}
      <section className="bg-parchment">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <div className="overflow-hidden rounded-md shadow-[0_36px_72px_-36px_color-mix(in_oklab,var(--foreground)_50%,transparent)]">
              <img
                src={familyLegacy}
                alt="A Texas family reviewing their estate planning documents together"
                width={1600}
                height={912}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={140}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-foreground/80">
              A Practical, Texas-Focused Approach
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Every Estate Plan Should Fit the Family Using It
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              My work focuses on creating plans that are understandable, practical, and coordinated
              under Texas law. That includes looking beyond the documents themselves to ownership,
              beneficiary designations, real estate, incapacity planning, and the way the plan is
              expected to work in real life.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Estate planning should not leave you guessing about legal fees. Flat-fee planning
              options are available, so you know the cost of the agreed planning work before the
              documents are prepared.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Will or trust? */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <Reveal direction="right" className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-foreground/80">
              Choosing Your Tools
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Do You Need a Will or a Trust?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Neither tool is automatically better. The decision should be based on your property,
              how it is titled, your family situation, and the problems you are trying to prevent.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal direction="left">
              <article className="h-full rounded-md border border-border bg-card p-8">
                <h3 className="font-display text-xl font-bold text-foreground">A Will May Be Right When</h3>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Your estate is straightforward and probate in Texas would be manageable",
                    "You mainly want to name guardians, beneficiaries, and an executor",
                    "Ongoing management of assets is not needed",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal direction="right" delay={120}>
              <article className="h-full rounded-md border border-gold/60 bg-card p-8 shadow-[0_24px_48px_-28px_color-mix(in_oklab,var(--gold)_45%,transparent)]">
                <h3 className="font-display text-xl font-bold text-foreground">A Trust May Fit Better When</h3>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {[
                    "You want to reduce or avoid probate for your family",
                    "Real estate or accounts need coordinated management",
                    "Privacy, incapacity management, or control over timing matters",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problems prevented (navy band) */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <Reveal direction="right" className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
              What Good Planning Prevents
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy-foreground md:text-4xl">
              Common Problems Estate Planning Can Help Prevent
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-foreground/70">
              Many of these problems arise because individual documents, accounts, deeds, and
              beneficiary forms were never coordinated as one plan.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-x-12 gap-y-5 sm:grid-cols-2">
            {problems.map((problem, i) => (
              <Reveal key={problem} direction="up" delay={i * 70}>
                <li className="flex gap-3.5 border-b border-white/10 pb-5 text-sm leading-relaxed text-navy-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {problem}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal direction="up" delay={140} className="mt-12">
            <a
              href="tel:+12542337300"
              className="inline-flex items-center gap-2.5 rounded-sm bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
            >
              <Phone className="h-4 w-4" />
              Call (254) 233-7300 to Take the Next Step
            </a>
          </Reveal>
        </div>
      </section>

      <CallBand />
    </>
  );
}
