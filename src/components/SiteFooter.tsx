import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-navy-soft font-display text-lg font-bold text-gold-soft">
              HC
            </span>
            <span className="font-display text-base font-bold leading-tight">
              Law Office of
              <br />
              Harvey L. Cox
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
            Estate planning and asset protection for Texas families — clear answers, coordinated
            plans, and flat-fee options.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-gold-soft">
            Practice Areas
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/70">
            {[
              "Wills & Trusts",
              "Probate Avoidance Planning",
              "Powers of Attorney & Incapacity",
              "Asset Protection",
              "Long-Term Care & Medicaid Planning",
              "Special Needs Planning",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-gold-soft">
            Schedule a Consultation
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-navy-foreground/70">
            <li>
              <a
                href="tel:+12542337300"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-gold-soft"
              >
                <Phone className="h-4 w-4 text-gold" />
                (254) 233-7300
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                1600 Lake Air Drive, Suite 108
                <br />
                Waco, Texas 76710
              </span>
            </li>
            <li className="text-xs leading-relaxed text-navy-foreground/50">
              Meetings available in person, by phone, or by Zoom, depending on your needs.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-navy-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Law Office of Harvey L. Cox. All rights reserved.</p>
          <p className="max-w-xl sm:text-right">
            The information on this website is for general information purposes only and is not
            legal advice. Consult a licensed attorney about your specific situation.
          </p>
        </div>
      </div>
    </footer>
  );
}
