import { Users, BadgeCheck, ShieldCheck, Wrench } from "lucide-react";
import { WHY_US } from "@/lib/siteData";
import Reveal from "./Reveal";

const ICONS = { Users, BadgeCheck, ShieldCheck, Wrench };

export default function WhyUs() {
  return (
    <section className="bg-onyx text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              02 — Why Choose Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-3">
              Professional electrical work you can trust
            </h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
          {WHY_US.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="bg-onyx p-8 h-full">
                  <Icon className="w-8 h-8 text-gold mb-5" strokeWidth={1.5} />
                  <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}