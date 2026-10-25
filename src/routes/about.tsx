import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  GraduationCap,
  BookOpen,
  ExternalLink,
  MapPin,
  Phone,
  Video,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CallBand } from "@/components/CallBand";
import scalesDesk from "@/assets/scales-desk.jpg";
import texasOaks from "@/assets/texas-oaks.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Harvey L. Cox | Waco Estate Planning Attorney" },
      {
        name: "description",
        content:
          "Harvey L. Cox has practiced law in Texas since 1990, focusing on estate planning and asset protection. University of Houston Law Center graduate serving clients throughout Texas.",
      },
      { property: "og:title", content: "About Harvey L. Cox | Waco Estate Planning Attorney" },
      {
        property: "og:description",
        content:
          "Practicing law in Texas since 1990. Estate planning and asset protection for Texas families, taught and written about in plain English.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Harvey L. Cox | Waco Estate Planning Attorney" },
      {
        name: "twitter:description",
        content:
          "Practicing law in Texas since 1990. Estate planning and asset protection for Texas families.",
      },
    ],
  }),
  component: About,
});

const approachItems = [
  "Wills and trusts",
  "Powers of attorney and medical decision-making documents",
  "Real estate ownership and deeds",
  "Beneficiary designations",
  "Bank and investment account ownership",
  "Probate exposure",
  "Incapacity planning",
  "Asset-protection concerns",
  "Special family circumstances",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Practice"
        title="Meet Harvey L. Cox"
        description="Harvey L. Cox has practiced law in Texas since 1990 and focuses his practice on estate planning and asset protection — helping Texas families put plans in place that are clear, practical, and coordinated."
      />

      {/* Bio split: image left, text right */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <div className="overflow-hidden rounded-md shadow-[0_36px_72px_-36px_color-mix(in_oklab,var(--foreground)_50%,transparent)]">
              <img
                src={scalesDesk}
                alt="Scales of justice and estate planning law books in the office"
                width={1200}
                height={1008}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={140}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-foreground/80">
              Why Estate Planning
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Many Legal Problems Are Easier to Prevent Than to Fix
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Harvey began his legal career in litigation and spent many years handling disputes
              involving businesses, finances, and families. That experience shaped the way he
              approaches estate planning today.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Estate planning gives families the opportunity to make decisions in advance rather
              than leaving those decisions to a court, financial institution, or family member
              during a crisis.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Approach checklist */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <Reveal direction="right" className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-foreground/80">
              How I Approach Planning
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              A Good Estate Plan Should Do More Than Produce Signed Documents
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Harvey looks at the plan as a whole, including:
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-x-12 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {approachItems.map((item, i) => (
              <Reveal key={item} direction="up" delay={(i % 3) * 90}>
                <li className="flex gap-3.5 rounded-md border border-border bg-card px-5 py-4 text-sm font-medium text-foreground/85 transition-colors duration-300 hover:border-gold">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal direction="up" delay={140} className="mt-10">
            <p className="max-w-2xl font-display text-lg italic leading-relaxed text-foreground/80">
              "The goal is to create a plan that makes sense on paper and in real life."
            </p>
          </Reveal>
        </div>
      </section>

      {/* 35 years + teaching */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left" className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-md shadow-[0_36px_72px_-36px_color-mix(in_oklab,var(--foreground)_50%,transparent)]">
              <img
                src={texasOaks}
                alt="Live oak trees in the Texas countryside near Waco"
                width={1600}
                height={912}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={140} className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-foreground/80">
              Experience & Public Education
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              More Than Thirty-Five Years in Practice
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Harvey earned his law degree from the University of Houston Law Center and has
              practiced law in Texas since 1990. His earlier litigation work gives him a practical
              perspective on what can happen when documents conflict, ownership is unclear, or
              family members are left without clear instructions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              He has taught legal subjects in both classroom and public-education settings and
              continues to teach estate-planning and asset-protection programs through McLennan
              Community College Continuing Education, along with seminars for Texas families.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Writing + Gary */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal direction="left">
              <article className="h-full rounded-md border border-border bg-card p-8">
                <BookOpen className="h-8 w-8 text-gold" />
                <h2 className="mt-5 font-display text-xl font-bold text-foreground">
                  Writing for Texas Families
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Harvey writes on estate planning, probate avoidance, and asset protection. His
                  estate-planning books include:
                </p>
                <ul className="mt-4 space-y-2.5 text-sm font-medium text-foreground/85">
                  <li className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    The No-Nonsense Guide to Texas Estate Planning
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    Common Estate Planning Mistakes People Make
                  </li>
                </ul>
                <a
                  href="https://silverpenpublishing.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-gold-foreground"
                >
                  View Books and Guides
                  <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
            <Reveal direction="right" delay={120}>
              <article className="h-full rounded-md border border-border bg-card p-8">
                <GraduationCap className="h-8 w-8 text-gold" />
                <h2 className="mt-5 font-display text-xl font-bold text-foreground">
                  Meet Gary D. Hill
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Gary works with Harvey to serve estate-planning clients and help families
                  complete the planning process. He is a Certified Financial Education Instructor
                  (CFEI) with more than 32 years of experience, including the past 17 years working
                  alongside Harvey.
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    Deep knowledge of Medicare, Medicaid, and long-term-care planning
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    Speaks to libraries, senior centers, and churches across the community
                  </li>
                  <li className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    A practical, senior-focused perspective on client education
                  </li>
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Practical details */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <Reveal direction="right" className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-foreground/80">
              A Practical Texas Estate-Planning Practice
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Clear Explanations, Flat Fees, and Meetings That Fit Your Life
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "Visit the Office",
                text: "1600 Lake Air Drive, Suite 108, Waco, Texas 76710 — working with clients throughout Texas.",
              },
              {
                icon: Phone,
                title: "Meet by Phone",
                text: "Conversations by phone work well for many planning discussions and follow-ups.",
              },
              {
                icon: Video,
                title: "Meet by Zoom",
                text: "Video meetings are available depending on your needs and the type of planning involved.",
              },
            ].map((item, i) => (
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
            <div className="flex items-center gap-3 rounded-md border border-border bg-secondary px-6 py-4 text-sm text-muted-foreground">
              <Users className="h-5 w-5 shrink-0 text-gold" />
              The practice is designed around clear explanations, flat-fee planning options, and
              helping you understand why particular documents and choices are recommended.
            </div>
          </Reveal>
        </div>
      </section>

      <CallBand />
    </>
  );
}
