"use client";

import { SALON_INFO } from "@/data/salon";
import { MessageCircle, Phone, Clock, Sparkles, ShieldCheck, Heart } from "lucide-react";
import { FadeIn } from "@/components/ui/MotionWrapper";
import { SolelunaLogoIcon } from "@/components/SolelunaLogoIcon";

export function WhatsAppBookingBanner() {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Ciao Soleluna! ✨ Vorrei verificare le disponibilità in agenda per un appuntamento."
  )}`;

  return (
    <section id="prenota" className="py-20 bg-gradient-to-b from-[#faf8f5] to-[#f4eee7] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <FadeIn className="relative p-2 sm:p-3 rounded-[36px] bg-gradient-to-b from-[#f7efe6] to-[#eddccf] border border-[#e2d0bf] ring-1 ring-[#b38b59]/20 shadow-lg">
          {/* Inner luxury invitation card */}
          <div className="relative overflow-hidden bg-white rounded-[28px] sm:rounded-[30px] p-7 sm:p-12 border border-[#f0e4d7] ring-1 ring-[#b38b59]/10 text-center space-y-6">
            {/* Subtle glow background */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#ebdccf]/30 rounded-full blur-3xl pointer-events-none -z-0" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -z-0" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              {/* Luxury Seal Emblem */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#9c7545] to-[#d8b88d] text-white shadow-xs mx-auto border-2 border-white">
                <SolelunaLogoIcon className="w-6 h-6 text-white" />
              </div>

              <div className="inline-block text-[11px] uppercase tracking-widest font-semibold text-[#9c7545] bg-[#faf3eb] px-3.5 py-1 rounded-full border border-[#ebdccf]">
                05 • Prenotazioni & Accoglienza
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2523] leading-tight">
                Fissa il tuo momento di <span className="italic font-normal text-[#9c7545]">benessere</span>
              </h2>

              <p className="text-sm sm:text-base text-[#61554c] leading-relaxed">
                Per garantirti riservatezza assoluta e nessun tempo d&apos;attesa, riceviamo <strong>esclusivamente su appuntamento</strong>. Scrivici su WhatsApp o chiamaci: concorderemo insieme il momento perfetto per la tua pausa di quiete.
              </p>

              {/* 3 Reassurance Value Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-[#6e5f55]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf7f3] border border-[#ebdccf]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9c7545]" />
                  <span>Cabina Riservata 1 a 1</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf7f3] border border-[#ebdccf]">
                  <Heart className="w-3.5 h-3.5 text-[#9c7545]" />
                  <span>Check-up Cute Gratuito</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf7f3] border border-[#ebdccf]">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Risposta Rapida</span>
                </span>
              </div>

              {/* Main Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#128C7E] hover:bg-[#0c6b60] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all group"
                >
                  <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span>Scrivici su WhatsApp</span>
                </a>

                <a
                  href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white hover:bg-[#faf6f1] text-[#2b2523] border border-[#d8c8b8] font-medium text-sm shadow-2xs hover:shadow transition-all group"
                >
                  <Phone className="w-4 h-4 text-[#b38b59] group-hover:scale-110 transition-transform" />
                  <span>Chiama: {SALON_INFO.phone}</span>
                </a>
              </div>

              {/* Availability Note */}
              <div className="pt-3 flex items-center justify-center gap-2 text-xs text-[#8c7d74]">
                <Clock className="w-3.5 h-3.5 text-[#9c7545]" />
                <span>
                  Via Chiesa 114/A, San Martino (FE) • Parcheggio gratuito di fronte
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
