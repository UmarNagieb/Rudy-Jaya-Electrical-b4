import { PROCESS_STEPS } from "@/lib/siteData";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="cara-kerja" className="bg-paper text-onyx py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-conduit">
              03 — How It Works
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-3">
              Our Work Process
            </h2>
          </div>
        </Reveal>
        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
          <div className="space-y-12">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.no} delay={i * 0.08}>
                <div className="relative flex gap-6 sm:gap-8">
                  <div className="relative shrink-0">
                    <span className="grid place-items-center w-12 h-12 sm:w-16 sm:h-16 border-2 border-gold rounded-full font-mono font-bold text-gold text-sm sm:text-lg bg-paper">
                      {step.no}
                    </span>
                  </div>
                  <div className="pt-1 sm:pt-3 pb-4">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-conduit leading-relaxed max-w-xl">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}