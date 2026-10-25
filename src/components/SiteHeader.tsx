import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-border bg-background/95 shadow-[0_8px_30px_-18px_color-mix(in_oklab,var(--foreground)_35%,transparent)] backdrop-blur"
          : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-navy font-display text-lg font-bold text-gold-soft transition-transform duration-500 group-hover:scale-105">
            HC
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-bold tracking-wide text-foreground sm:text-base">
              Law Office of Harvey L. Cox
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Estate Planning · Waco, Texas
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-medium tracking-wide transition-colors hover:text-foreground ${
                pathname === link.to ? "text-foreground" : "text-muted-foreground"
              } after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                pathname === link.to ? "after:scale-x-100" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+12542337300"
            className="hidden items-center gap-2 rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-[0_10px_24px_-12px_color-mix(in_oklab,var(--gold)_70%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            (254) 233-7300
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`border-b border-border/60 py-3.5 text-sm font-medium last:border-0 ${
                  pathname === link.to ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+12542337300"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
            >
              <Phone className="h-4 w-4" />
              Call (254) 233-7300
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
