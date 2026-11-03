import { Home, Building2, Building, Briefcase } from "lucide-react";
import { TARGET_MARKET } from "@/lib/siteData";
import Reveal from "./Reveal";

const ICONS = { Home, Building2, Building, Briefcase };

export default function TargetMarket() {
  return (
    <section className="bg-onyx text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              04 — Target Market
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-3">
              We Meet a Wide Range of Electrical Needs
            </h2>
            <p className="text-white/50 mt-4">
              From homes to light industrial projects, we handle jobs of every size.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {TARGET_MARKET.map((cat, i) => {
            const Icon = ICONS[cat.icon];
            return (
              <Reveal key={cat.group} delay={i * 0.05}>
                <div className="border border-white/10 rounded-xl p-7 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={2} />
                    <h3 className="font-heading text-lg font-bold">{cat.group}</h3>
                  </div>
                  <div className="space-y-3">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between gap-4 text-sm border-b border-white/5 pb-2.5 last:border-0"
                      >
                        <span className="text-white/80 font-medium">{item.name}</span>
                        <span className="text-white/40 text-right text-xs leading-relaxed">
                          {item.need}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}