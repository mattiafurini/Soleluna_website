"use client";

import Link from "next/link";
import { SALON_INFO } from "@/data/salon";
import { MapPin, Phone, MessageCircle, ArrowUp, Navigation, Car } from "lucide-react";
import { SolelunaLogoIcon } from "@/components/SolelunaLogoIcon";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#241e1b] text-[#d9cfc7] pt-16 pb-14 border-t border-[#3b322d]">
      {/* Decorative large watermark emblem in background */}
      <div
        className="absolute -right-12 -bottom-16 w-80 h-80 opacity-[0.035] pointer-events-none select-none text-white -z-0"
        aria-hidden="true"
      >
        <SolelunaLogoIcon className="w-full h-full text-white" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3b322d]">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#9c7545] to-[#b38b59] flex items-center justify-center text-white shadow-xs">
                <SolelunaLogoIcon className="w-5 h-5 text-amber-100" />
              </div>
              <span className="font-serif text-2xl text-white font-semibold tracking-wide">
                Sole<span className="text-[#b38b59]">luna</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#b8ada4] leading-relaxed max-w-sm">
              Centro estetico e benessere a San Martino, Ferrara. Trattamenti viso e corpo personalizzati in un ambiente intimo, rilassante e riservato.
            </p>

            {/* Quick logistics note */}
            <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-[#bdae9f]">
              <span className="inline-flex items-center gap-1 bg-[#332a25] px-2.5 py-1 rounded-full border border-[#453a33]">
                <Navigation className="w-3 h-3 text-[#b38b59]" />
                8 min da Ferrara Sud
              </span>
              <span className="inline-flex items-center gap-1 bg-[#332a25] px-2.5 py-1 rounded-full border border-[#453a33]">
                <Car className="w-3 h-3 text-emerald-400" />
                Parcheggio gratuito
              </span>
            </div>

            <div className="text-xs text-[#8c8076] space-y-1 pt-2">
              <p className="font-semibold text-[#a89b91]">{SALON_INFO.companyName}</p>
              <p>P.IVA / C.F.: {SALON_INFO.piva}</p>
              <p>REA: FE - 181450 • PEC: soleluna-sas@legalmail.it</p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-white font-semibold text-sm uppercase tracking-wider">
              Navigazione
            </h4>
            <ul className="space-y-2 text-xs text-[#b8ada4]">
              <li>
                <Link href="/#chi-siamo" className="hover:text-white transition-colors">
                  Chi Siamo & Filosofia
                </Link>
              </li>
              <li>
                <Link href="/trattamenti" className="hover:text-white transition-colors">
                  Listino Completo Trattamenti
                </Link>
              </li>
              <li>
                <Link href="/#atmosfera" className="hover:text-white transition-colors">
                  L&apos;Esperienza & Quiete
                </Link>
              </li>
              <li>
                <Link href="/#perche-noi" className="hover:text-white transition-colors">
                  I 5 Valori Fondamentali
                </Link>
              </li>
              <li>
                <Link href="/#recensioni" className="hover:text-white transition-colors">
                  Recensioni delle Clienti
                </Link>
              </li>
              <li>
                <Link href="/#dove-siamo" className="hover:text-white transition-colors">
                  Posizione & Orari
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-white font-semibold text-sm uppercase tracking-wider">
              Contattaci
            </h4>
            <div className="space-y-2.5 text-xs text-[#b8ada4]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#b38b59] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#b38b59] shrink-0" />
                <a href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {SALON_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-[#5cd986]"
                >
                  Assistenza e prenotazioni via WhatsApp
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#38302b] text-white hover:bg-[#4a403a] text-xs transition-colors"
              >
                <span className="text-amber-400">★★★★★</span>
                <span>Vedi 5.0 su Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#80756c] gap-3">
          <p>
            © 2026 Soleluna Centro Estetico. Tutti i diritti riservati.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#b8ada4] hover:text-white transition-colors cursor-pointer group"
          >
            <span>Torna all&apos;inizio</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
