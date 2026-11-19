"use client";

import { SALON_INFO } from "@/data/salon";
import { MapPin, Phone, Mail, Navigation, Car, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/MotionWrapper";

export function LocationSection() {
  return (
    <section id="dove-siamo" className="py-20 bg-white border-t border-[#ede2d6] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-block text-xs uppercase tracking-widest font-semibold text-[#9c7545] bg-[#faf3eb] px-3.5 py-1 rounded-full border border-[#edd7c4]">
            Posizione & Orari
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2523]">
            Vieni a trovarci a San Martino
          </h2>
          <p className="text-sm sm:text-base text-[#61554c]">
            A pochi minuti da Ferrara sud, in una posizione tranquilla e comodissima con parcheggio gratuito di fronte.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Opening Hours (5 cols) */}
          <FadeIn direction="right" distance={24} className="lg:col-span-5 space-y-6">
            {/* Address Box */}
            <div className="bg-[#faf8f5] rounded-2xl p-6 border border-[#ece0d4] space-y-4 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#b38b59] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-base text-[#2b2523]">Indirizzo Salone</h3>
                  <p className="text-sm text-[#594d45] mt-0.5">{SALON_INFO.address.street}</p>
                  <p className="text-sm text-[#594d45]">44124 San Martino, Ferrara (FE)</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#b38b59] hover:bg-[#9c7545] text-white text-xs font-semibold shadow-xs transition-colors group"
                >
                  <Navigation className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  Apri Navigatore Maps
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#eef7f0] text-[#246b3e] text-xs font-medium border border-[#cbe6d2]">
                  <Car className="w-3.5 h-3.5" />
                  Parcheggio gratuito
                </div>
              </div>
            </div>

            {/* Direct Contacts Box */}
            <div className="bg-[#faf8f5] rounded-2xl p-6 border border-[#ece0d4] space-y-3.5 shadow-2xs">
              <h3 className="font-serif font-semibold text-base text-[#2b2523]">Contatti Diretti</h3>

              <div className="flex items-center gap-3 text-sm text-[#594d45]">
                <Phone className="w-4 h-4 text-[#9c7545] shrink-0" />
                <span>Telefono:</span>
                <a href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`} className="font-semibold text-[#2b2523] hover:text-[#9c7545] transition-colors">
                  {SALON_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#594d45]">
                <Mail className="w-4 h-4 text-[#9c7545] shrink-0" />
                <span>Email:</span>
                <a href={`mailto:${SALON_INFO.email}`} className="font-semibold text-[#2b2523] hover:text-[#9c7545] transition-colors">
                  {SALON_INFO.email}
                </a>
              </div>
            </div>

            {/* Opening Hours Table */}
            <div className="bg-[#faf8f5] rounded-2xl p-6 border border-[#ece0d4] space-y-3 shadow-2xs">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-semibold text-base text-[#2b2523]">Orari di Apertura</h3>
                <span className="text-[11px] font-medium text-[#246b3e] bg-[#eaf4ec] px-2 py-0.5 rounded-full border border-[#cee4d2]">
                  Su Appuntamento
                </span>
              </div>

              <div className="divide-y divide-[#ebdcd0] text-xs sm:text-sm">
                {SALON_INFO.hours.map((h, idx) => (
                  <div key={idx} className="py-2 flex items-center justify-between">
                    <span className="font-medium text-[#4a403a]">{h.day}</span>
                    <span className={h.closed ? "text-[#a38072] italic font-medium" : "text-[#2b2523] font-semibold"}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: Interactive Google Map (7 cols) */}
          <FadeIn direction="left" distance={24} delay={0.15} className="lg:col-span-7 h-full min-h-[460px] rounded-3xl overflow-hidden border border-[#e8dcd0] shadow-sm relative bg-[#ede5dc]">
            <iframe
              src={SALON_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "460px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Posizione Centro Estetico Soleluna"
              className="w-full h-full min-h-[460px]"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
