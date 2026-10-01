import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS, HERO_IMAGE, waLink } from "@/lib/siteData";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative bg-onyx text-white overflow-hidden">
      <Reveal x={48} y={0} delay={0.12} className="absolute inset-0 lg:hidden">
        <img
          src={HERO_IMAGE}
          alt="Hasil pemasangan panel listrik oleh Rudy Jaya Elektrical"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="eager"
        />
      </Reveal>
      <div className="absolute inset-0 bg-onyx/80 lg:hidden" />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 min-h-[100svh]">
        <div className="flex flex-col justify-center px-5 sm:px-8 py-28 lg:py-0 lg:pr-12">
          <Reveal x={48} y={0}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="font-mono text-xs uppercase tracking-widest text-gold">
                Jasa Listrik Jakarta Pusat
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
              Rudy Jaya
              <br />
              <span className="text-gold">Elektrical</span>
            </h1>
          </Reveal>
          <Reveal x={48} y={0} delay={0.28} className="mt-6">
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-md">
              {BUSINESS.tagline}
            </p>
          </Reveal>
          <Reveal x={48} y={0} delay={0.56} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-gold text-onyx font-semibold px-6 py-4 rounded-md transition-all duration-200 ease-out min-h-[52px] hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <Phone className="w-5 h-5 motion-safe:group-hover:animate-phone-shake" strokeWidth={2.5} />
                Hubungi via WhatsApp
              </a>
              <a
                href="#layanan"
                className="group inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-6 py-4 rounded-md transition-all duration-200 ease-out min-h-[52px] hover:-translate-y-0.5 hover:border-gold/70 hover:bg-white/5 hover:text-gold active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Lihat Layanan
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative hidden lg:block">
          <Reveal x={48} y={0} delay={0.12} className="absolute inset-0">
            <img
              src={HERO_IMAGE}
              alt="Hasil pemasangan panel listrik oleh Rudy Jaya Elektrical"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          </Reveal>
          <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}