import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/siteData";
import Reveal from "./Reveal";

export default function FAQ() {
  const [open, setOpen] = useState(-1);

  return (
    <section id="faq" className="bg-onyx text-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              08 — Tanya Jawab
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-3">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>
        </Reveal>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 py-5 px-3 -mx-3 text-left group rounded-md transition-colors duration-200 hover:bg-white/5 focus-visible:bg-white/5 focus-visible:outline-none"
                aria-expanded={open === i}
              >
                <span
                  className={`font-heading text-base sm:text-lg font-semibold transition-colors ${open === i ? "text-gold" : "text-white group-hover:text-gold"
                    }`}
                >
                  {item.q}
                </span>
                <span className={`shrink-0 grid place-items-center w-7 h-7 border rounded-full transition-all duration-200 ${open === i
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-white/20 text-white/70 group-hover:border-gold/60 group-hover:text-gold"
                  }`}>
                  {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-48 pb-5" : "max-h-0"
                  }`}
              >
                <p className="text-white/50 leading-relaxed pr-10">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}