import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/siteData";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-onyx/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
          <BrandLogo className="h-14 w-14 transition-transform duration-200 group-hover:scale-105 sm:h-16 sm:w-16" />
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:-translate-y-px hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${active === link.href.slice(1) ? "text-gold" : "text-white/70 hover:text-gold"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-md text-white transition-colors duration-200 hover:bg-white/10 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-onyx border-t border-white/10 shadow-[0_12px_24px_rgba(0,0,0,0.12)] animate-nav-panel">
          <div className="px-3 py-3 space-y-2">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`group relative block animate-nav-item overflow-hidden rounded-md px-3 py-3 text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${active === link.href.slice(1)
                  ? "bg-white/8 text-gold shadow-[inset_0_0_0_1px_rgba(255,197,92,0.3)]"
                  : "text-white/70 hover:bg-white/5 hover:text-gold"
                  }`}
              >
                <span className="relative z-10 flex items-center justify-between gap-2">
                  <span>{link.label}</span>
                  <span className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${active === link.href.slice(1) ? "bg-gold scale-100" : "bg-transparent group-hover:bg-gold/60"}`} />
                </span>
                <span className={`absolute inset-0 bg-gradient-to-r from-gold/8 to-transparent transition-all duration-200 ${active === link.href.slice(1) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}