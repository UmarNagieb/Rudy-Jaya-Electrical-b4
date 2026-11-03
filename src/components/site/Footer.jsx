import { MapPin, Phone } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/siteData";
import { getLocalBusinessHours } from "./BusinessStatus";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const localHours = getLocalBusinessHours();

  return (
    <footer className="bg-onyx text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:gap-12">
          <div>
            <BrandLogo className="h-20 w-20 mb-4" />
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">{BUSINESS.intro}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">
              Links
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block text-sm text-white/60 transition-all duration-200 hover:translate-x-1 hover:text-gold focus-visible:outline-none focus-visible:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">
              Contact
            </p>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 shrink-0 text-gold" aria-hidden="true" />
              <p className="font-mono text-sm text-white/60">{BUSINESS.phone}</p>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">
              Location & Hours
            </p>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <div className="space-y-3">
                <p className="text-sm text-white/60 leading-relaxed">{BUSINESS.address}</p>
                <div className="border-t border-white/10 pt-3 text-sm text-white/60">
                  <p>{localHours.week}</p>
                  <p className="mt-1">{localHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Rudy Jaya Elektrical. Electrical Services in Central Jakarta.
          </p>
        </div>
      </div>
    </footer>
  );
}