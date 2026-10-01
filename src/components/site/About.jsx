import { CheckCircle } from "lucide-react";
import { BUSINESS, GALLERY, TRUST_BADGES } from "@/lib/siteData";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="tentang" className="bg-paper text-onyx py-20 sm:py-28 border-y border-onyx/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img
              src={GALLERY[12].w}
              alt="Hasil pemasangan panel listrik oleh Rudy Jaya Elektrical"
              loading="lazy"
              className="rounded-xl w-full object-cover"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-onyx text-white p-5 rounded-lg shadow-xl hidden sm:block">
              <p className="font-mono text-xs uppercase tracking-widest text-gold mb-1">
                Jakarta Pusat
              </p>
              <p className="font-semibold text-sm">Karet Tengsin & sekitarnya</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-conduit">
              06 — Tentang
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-5">
              {BUSINESS.name}
            </h2>
            <p className="text-conduit leading-relaxed mb-6">{BUSINESS.intro}</p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {TRUST_BADGES.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0" strokeWidth={2} />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}