import { PORTFOLIO_IMAGES } from "@/lib/siteData";
import Reveal from "./Reveal";

export default function Portfolio() {
  const columnCount = 3;
  const lastRowItemCount = PORTFOLIO_IMAGES.length % columnCount;
  const lastRowStart = PORTFOLIO_IMAGES.length - lastRowItemCount;

  return (
    <section id="portfolio" className="bg-paper text-onyx py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-conduit">
              05 — Our Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-3">
              Project Gallery
            </h2>
            <p className="text-conduit mt-4 max-w-xl">
              Photos from our electrical installation, panel assembly, and renovation projects.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {PORTFOLIO_IMAGES.map((item, imageIndex) => {
            const isInPartialLastRow = lastRowItemCount > 0 && imageIndex >= lastRowStart;
            const lastRowPosition = isInPartialLastRow
              ? lastRowItemCount === 1
                ? "lg:col-start-3"
                : imageIndex === lastRowStart
                  ? "lg:col-start-2"
                  : "lg:col-start-4"
              : "";

            return (
              <div
                key={item.src}
                className={`group relative aspect-[4/3] overflow-hidden rounded-lg bg-onyx/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-onyx/15 sm:col-span-1 lg:col-span-2 ${lastRowPosition}`}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-gold">
                      {item.category}
                    </span>
                    <p className="text-white font-semibold text-sm mt-1">{item.caption}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}