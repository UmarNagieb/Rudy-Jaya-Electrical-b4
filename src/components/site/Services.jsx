import { Cable, Wrench, CircuitBoard, Lightbulb } from "lucide-react";
import { SERVICES, GALLERY } from "@/lib/siteData";
import Reveal from "./Reveal";

const ICONS = { Cable, Wrench, CircuitBoard, Lightbulb };

export default function Services() {
  return (
    <section id="layanan" className="bg-paper text-onyx py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-conduit">
              01 — Layanan
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-3">
              Layanan Kelistrikan Kami
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid lg:grid-cols-5 gap-0 mb-16 border border-onyx/10 rounded-xl overflow-hidden bg-white">
            <div className="lg:col-span-3 p-8 sm:p-10">
              <span className="font-mono text-xs uppercase tracking-widest text-gold">Unggulan</span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-3">
                {SERVICES.featured.title}
              </h3>
              <p className="text-conduit mt-4 leading-relaxed">{SERVICES.featured.description}</p>
              <ul className="mt-6 space-y-2.5">
                {SERVICES.featured.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 relative min-h-[240px] lg:min-h-0">
              <img
                src={GALLERY[11].w}
                alt="Perakitan panel listrik oleh Rudy Jaya Elektrical"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-px bg-onyx/10 border border-onyx/10 rounded-xl overflow-hidden">
          {SERVICES.groups.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <Reveal key={group.title} delay={i * 0.05}>
                <div className="bg-white p-8 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="grid place-items-center w-11 h-11 bg-onyx text-gold rounded-md">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </span>
                    <h3 className="font-heading text-xl font-bold">{group.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-conduit"
                      >
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-conduit/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}