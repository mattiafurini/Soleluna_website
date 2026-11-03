import { SALON_INFO } from "@/data/salon";
import { MessageCircle, Phone, Clock, Sparkles } from "lucide-react";

export function WhatsAppBookingBanner() {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Ciao SoleLuna! ✨ Vorrei verificare le disponibilità in agenda per un appuntamento."
  )}`;

  return (
    <section id="prenota" className="py-20 bg-gradient-to-b from-[#faf8f5] to-[#f4eee7] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden bg-white rounded-3xl p-8 sm:p-12 border border-[#ebdcd0] shadow-md text-center space-y-6">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#128C7E] bg-[#eef7f3] px-3.5 py-1.5 rounded-full border border-[#d2edd7]">
              <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
              Prenotazioni & Informazioni
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2523] leading-tight">
              Fissa il tuo momento di <span className="italic text-[#9c7545]">benessere</span>
            </h2>

            <p className="text-sm sm:text-base text-[#61554c] leading-relaxed">
              Per garantirti la massima attenzione e nessun tempo d&apos;attesa, riceviamo <strong>su appuntamento</strong>. Scrivici comodamente su WhatsApp o chiamaci in salone: concorderemo insieme il giorno e l&apos;orario migliore per te.
            </p>

            {/* Main Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#128C7E] hover:bg-[#0c6b60] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                Prenota via WhatsApp
              </a>

              <a
                href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white hover:bg-[#faf6f1] text-[#2b2523] border border-[#d8c8b8] font-semibold text-sm shadow-xs hover:shadow transition-all"
              >
                <Phone className="w-4 h-4 text-[#b38b59]" />
                Chiama: {SALON_INFO.phone}
              </a>
            </div>

            {/* Availability Note */}
            <div className="pt-4 flex items-center justify-center gap-2 text-xs text-[#7e6f65]">
              <Clock className="w-4 h-4 text-[#9c7545]" />
              <span>
                Aperti dal <strong>Lunedì al Venerdì</strong> • Rispondiamo al più presto
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

