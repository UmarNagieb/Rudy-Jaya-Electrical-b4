import { TRUST_BADGES } from "@/lib/siteData";

export default function TrustStrip() {
  return (
    <div className="bg-onyx border-t border-white/10 py-5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="font-mono text-xs uppercase tracking-widest text-white/50 flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}