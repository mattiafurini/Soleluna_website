"use client";

import { SALON_INFO } from "@/data/salon";
import { MessageCircle, ShieldCheck, Heart, Leaf, Award, Phone } from "lucide-react";

export function Hero() {
  const scrollToTrattamenti = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("trattamenti");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-[#faf8f5] via-[#f7f2ec] to-[#faf8f5]">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#ecdccb]/40 to-[#d8b88d]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Main heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2b2523] tracking-tight leading-[1.15]">
            Il tuo momento di <span className="italic text-[#9c7545]">benessere</span> e autentica bellezza.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#61554c] leading-relaxed max-w-2xl mx-auto font-normal">
            Benvenuta in <strong className="font-semibold text-[#2b2523]">SoleLuna</strong>. Uno spazio intimo e riservato dove ogni trattamento viso, corpo e massaggio è cucito su misura per farti sentire coccolata, rigenerata e luminosa.
          </p>

          {/* Call to actions */}
          <div className="pt-2 flex flex-col items-center justify-center gap-4">
            {/* Direct contact buttons - Identical dimensions for perfect symmetrical centering */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Ciao SoleLuna! ✨ Vorrei verificare la disponibilità per un appuntamento in salone.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[260px] h-12 inline-flex items-center justify-center gap-2.5 px-4 rounded-full bg-[#128C7E] hover:bg-[#0c6b60] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 text-center"
              >
                <MessageCircle className="w-4 h-4 text-white shrink-0" />
                <span>Prenota su WhatsApp</span>
              </a>

              <a
                href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-[260px] h-12 inline-flex items-center justify-center gap-2.5 px-4 rounded-full bg-white hover:bg-[#faf6f1] text-[#2b2523] border border-[#d8c8b8] font-medium text-sm shadow-xs hover:shadow transition-all text-center"
              >
                <Phone className="w-4 h-4 text-[#b38b59] shrink-0" />
                <span>Chiama: {SALON_INFO.phone}</span>
              </a>
            </div>

            {/* Secondary navigation link */}
            <div>
              <a
                href="#trattamenti"
                onClick={scrollToTrattamenti}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-medium text-[#73655c] hover:text-[#2b2523] transition-colors cursor-pointer"
              >
                <span>Tutti i Trattamenti</span>
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* Logistic note */}
          <div className="pt-2 text-xs text-[#82766d] flex flex-col items-center justify-center gap-1">
            <span>📍 Via Chiesa 114/A, San Martino (FE)</span>
            <span className="text-[#3b7a57] font-medium">Parcheggio gratuito di fronte</span>
          </div>
        </div>

        {/* 4 Pillars of Trust Bar */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white/80 border border-[#ede2d6] rounded-2xl p-5 text-center shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#f4ede4] flex items-center justify-center text-[#9c7545]">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-semibold text-sm sm:text-base text-[#2b2523]">Consulenza Su Misura</h3>
            <p className="text-xs text-[#6e625a] mt-1">Check-up della pelle e percorsi personalizzati.</p>
          </div>

          <div className="bg-white/80 border border-[#ede2d6] rounded-2xl p-5 text-center shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#f4ede4] flex items-center justify-center text-[#9c7545]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-semibold text-sm sm:text-base text-[#2b2523]">Igiene & Monouso</h3>
            <p className="text-xs text-[#6e625a] mt-1">Standard igienici e sicurezza impeccabili.</p>
          </div>

          <div className="bg-white/80 border border-[#ede2d6] rounded-2xl p-5 text-center shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#f4ede4] flex items-center justify-center text-[#9c7545]">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-semibold text-sm sm:text-base text-[#2b2523]">Cosmetici Selezionati</h3>
            <p className="text-xs text-[#6e625a] mt-1">Attivi concentrati, sicuri ed efficaci.</p>
          </div>

          <div className="bg-white/80 border border-[#ede2d6] rounded-2xl p-5 text-center shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#f4ede4] flex items-center justify-center text-[#9c7545]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-semibold text-sm sm:text-base text-[#2b2523]">Esperienza & Cura</h3>
            <p className="text-xs text-[#6e625a] mt-1">Niente fretta: dedizione esclusiva per te.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

