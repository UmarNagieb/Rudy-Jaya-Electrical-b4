import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/siteData";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="bg-paper text-onyx py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-conduit">
              07 — Testimoni
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-3">
              Apa Kata Pelanggan
            </h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center rounded-xl border border-gold/30 border-t-2 border-t-gold bg-onyx p-8 text-center shadow-lg shadow-onyx/15">
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-white/75">“{t.quote}”</p>
                <p className="font-heading text-lg font-bold mt-6 text-white">{t.name}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-white/45 mt-1">
                  Pelanggan
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}