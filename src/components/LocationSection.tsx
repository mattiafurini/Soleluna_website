"use client";

import { useState, useEffect } from "react";
import { SALON_INFO } from "@/data/salon";
import { MapPin, Phone, Mail, Navigation, Car, ExternalLink, Clock } from "lucide-react";
import { FadeIn } from "@/components/ui/MotionWrapper";
import { SalonStatusBadge } from "@/components/SalonStatusBadge";

export function LocationSection() {
  const [currentDayName, setCurrentDayName] = useState<string>("");

  useEffect(() => {
    const daysMap = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    const now = new Date();
    const romeDate = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Rome" }));
    setCurrentDayName(daysMap[romeDate.getDay()]);
  }, []);
  return (
    <section id="dove-siamo" className="py-20 bg-white border-t border-[#ede2d6] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-block text-[11px] uppercase tracking-widest font-semibold text-[#9c7545] bg-[#faf3eb] px-3.5 py-1 rounded-full border border-[#edd7c4]">
            06 • Posizione & Orari
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
          <FadeIn className="lg:col-span-5 space-y-6">
            {/* Address Box */}
            <div className="bg-[#faf8f5] rounded-2xl p-6 border border-[#ece0d4] ring-1 ring-[#b38b59]/15 space-y-4 shadow-2xs hover:shadow-xs transition-shadow">
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
            <div className="bg-[#faf8f5] rounded-2xl p-6 border border-[#ece0d4] ring-1 ring-[#b38b59]/15 space-y-3.5 shadow-2xs">
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

            {/* Opening Hours Table with Today Highlight */}
            <div className="bg-[#faf8f5] rounded-2xl p-6 border border-[#ece0d4] ring-1 ring-[#b38b59]/15 space-y-4 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-[#ebdcd0]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#9c7545]" />
                  <h3 className="font-serif font-semibold text-base text-[#2b2523]">Orari di Apertura</h3>
                </div>
                <SalonStatusBadge className="text-xs text-[#2b2523]" />
              </div>

              <div className="space-y-1 text-xs sm:text-sm">
                {SALON_INFO.hours.map((h, idx) => {
                  const isToday = h.day === currentDayName;
                  return (
                    <div
                      key={idx}
                      className={`py-2 px-2.5 rounded-xl flex items-center justify-between transition-colors ${
                        isToday
                          ? "bg-[#f3e9de] border border-[#e2d0be] font-semibold text-[#2b2523] shadow-2xs"
                          : "text-[#594d45] hover:bg-[#faf4ec]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={isToday ? "font-bold text-[#2b2523]" : "font-medium"}>
                          {h.day}
                        </span>
                        {isToday && (
                          <span className="text-[10px] uppercase tracking-wider font-bold text-[#9c7545] bg-white px-2 py-0.5 rounded-full border border-[#e2cfbe] shadow-2xs">
                            Oggi
                          </span>
                        )}
                      </div>
                      <span className={h.closed ? "text-[#9c8276] italic font-medium" : isToday ? "text-[#2b2523] font-bold" : "text-[#3b322d] font-semibold"}>
                        {h.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Right: Interactive Google Map (7 cols) */}
          <FadeIn delay={0.15} className="lg:col-span-7 h-full min-h-[460px] rounded-3xl overflow-hidden border border-[#e8dcd0] shadow-sm relative bg-[#ede5dc]">
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
