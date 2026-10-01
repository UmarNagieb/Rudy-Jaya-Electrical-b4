import { MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";
import { BUSINESS } from "@/lib/siteData";
import BusinessStatus, { getLocalBusinessHours } from "./BusinessStatus";
import Reveal from "./Reveal";

export default function Contact() {
  const localHours = getLocalBusinessHours();

  return (
    <section id="kontak" className="bg-paper text-onyx py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-conduit">
                09 — Kontak
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-3 mb-5">
                Butuh Bantuan
                <br />
                Kelistrikan?
              </h2>
              <p className="text-conduit leading-relaxed mb-8 max-w-md">
                Konsultasikan kebutuhan kelistrikan Anda dengan teknisi kami yang siap datang ke
                lokasi di Karet Tengsin dan sekitarnya. Hubungi kami melalui nomor pada informasi
                kontak.
              </p>
            </div>

            <div className="border border-onyx/10 rounded-xl bg-white p-7 sm:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-conduit mb-1">
                    Alamat
                  </p>
                  <p className="text-sm leading-relaxed">{BUSINESS.address}</p>
                  <a
                    href={BUSINESS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-gold font-medium mt-2 transition-colors duration-200 hover:text-onyx hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                  >
                    Buka di Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-mono text-xs uppercase tracking-widest text-conduit">
                      Jam Operasional
                    </p>
                    <BusinessStatus />
                  </div>
                  <div className="mt-3 space-y-1 border-l-2 border-onyx/10 pl-3">
                    <p className="text-sm">{localHours.week}</p>
                    <p className="text-sm">{localHours.sunday}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-conduit mb-1">
                    Telepon / WhatsApp
                  </p>
                  <p className="font-mono text-sm">{BUSINESS.phone}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-onyx/10">
                <p className="font-mono text-xs uppercase tracking-widest text-conduit mb-3">
                  Area Layanan
                </p>
                <div className="flex flex-wrap gap-2">
                  {BUSINESS.areas.map((area) => (
                    <span
                      key={area}
                      className="text-xs bg-onyx/5 px-3 py-1.5 rounded-full text-conduit"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}