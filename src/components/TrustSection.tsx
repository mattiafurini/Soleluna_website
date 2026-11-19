"use client";

import { TESTIMONIALS, SALON_INFO } from "@/data/salon";
import { Star, Quote, ExternalLink, ShieldCheck, Sparkles, Clock, Car, CheckCircle2, Lock } from "lucide-react";
import { motion } from "motion/react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

export function TrustSection() {
  return (
    <section id="recensioni" className="py-20 bg-white border-y border-[#ede2d6] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-block text-[11px] uppercase tracking-widest font-semibold text-[#9c7545] bg-[#faf3eb] px-3.5 py-1 rounded-full border border-[#edd7c4]">
            04 • Recensioni Verificate
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2523]">
            Cosa dicono le nostre clienti
          </h2>
          <p className="text-sm sm:text-base text-[#61554c]">
            La serenità e i risultati reali di chi ha scelto di affidarsi a Soleluna sono la nostra migliore presentazione.
          </p>
        </FadeIn>

        {/* Testimonials Grid with Stagger */}
        <StaggerContainer
          staggerChildren={0.12}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t, idx) => {
            const initials = t.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2);

            return (
              <StaggerItem
                key={idx}
                className="bg-[#faf8f5] rounded-3xl p-6 sm:p-7 border border-[#ece0d4] shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Decorative watermark quote */}
                <div
                  className="absolute -top-3 -right-2 font-serif text-8xl text-[#ebdccf]/40 select-none pointer-events-none leading-none -z-0"
                  aria-hidden="true"
                >
                  “
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-[#8c7e75] bg-white/80 px-2.5 py-0.5 rounded-full border border-[#e8dccf] font-medium">
                      Google Maps
                    </span>
                  </div>

                  <p className="text-sm text-[#4d423b] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-[#ede0d2] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#9c7545] to-[#c9a77b] text-white font-serif font-semibold text-xs flex items-center justify-center shadow-2xs shrink-0 border border-white/70">
                    {initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-serif font-semibold text-sm text-[#2b2523] truncate">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-[#9c7545] font-medium flex items-center gap-1.5 truncate">
                      <span>{t.treatment || "Percorso Benessere"}</span>
                      <span className="text-[#d8c5b2]">•</span>
                      <span className="text-[#8c7e75]">{t.badge || "Recensione Google"}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Google rating banner under testimonials */}
        <FadeIn delay={0.2} className="mt-10 text-center">
          <a
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#faf6f1] border border-[#ebdccf] hover:border-[#d9c4b1] shadow-2xs hover:shadow transition-all group hover:-translate-y-0.5"
          >
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs text-[#8c7e75] hidden sm:inline">100% recensioni verificate su Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#9c7545] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </FadeIn>

        {/* Bento Grid: Perché Scegliere Soleluna */}
        <div id="perche-noi" className="mt-20 pt-16 border-t border-[#ede2d6] scroll-mt-20">
          <FadeIn className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[#9c7545] bg-[#faf3eb] px-3.5 py-1 rounded-full border border-[#edd7c4]">
              Garanzie Soleluna • I 5 Valori Fondamentali
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#2b2523]">
              Il nostro impegno per la tua tranquillità
            </h3>
            <p className="text-sm text-[#665a52]">
              Cinque pilastri concreti per garantirti un&apos;esperienza rilassante, sicura e priva di pensieri.
            </p>
          </FadeIn>

          <StaggerContainer
            staggerChildren={0.1}
            className="grid grid-cols-1 md:grid-cols-12 gap-5"
          >
            {/* Bento Item 1 (Large - 7 cols): Privacy & Tempo Dedicato */}
            <StaggerItem className="md:col-span-7 rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-[#faf4ee] via-[#f7eee4] to-[#f0e3d5] border border-[#e8d5c4] shadow-xs relative overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#9c7545] bg-white/70 px-3 py-1 rounded-full border border-[#e5d2c2]">
                    <Lock className="w-3 h-3 text-[#b38b59]" />
                    Privacy & Riservatezza
                  </span>
                  <span className="text-xs font-medium text-[#7a6454] bg-[#ebdccf]/50 px-2.5 py-1 rounded-full border border-[#dfcbba]">
                    1 Cliente alla Volta
                  </span>
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl text-[#2b2523] leading-snug">
                  Una cabina tutta per te, senza sovrapposizioni o corse.
                </h4>

                <p className="text-sm text-[#5a4e46] leading-relaxed max-w-xl">
                  Da Soleluna gli appuntamenti sono pianificati con margini generosi. Nessuna sala d&apos;attesa affollata, nessuna cabina condivisa e nessun trattamento affrettato. Dal momento in cui entri, il tempo e l&apos;attenzione sono dedicati al 100% al tuo benessere.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#e2cfbe]/70 flex items-center gap-3 text-xs text-[#705e52]">
                <Clock className="w-4 h-4 text-[#9c7545]" />
                <span>Puntualità rigorosa: il tuo orario di prenotazione viene sempre rispettato.</span>
              </div>

              {/* Decorative background glow */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-gradient-to-tl from-[#d8b88d]/30 to-transparent rounded-full blur-2xl pointer-events-none" />
            </StaggerItem>

            {/* Bento Item 2 (5 cols): Igiene Ospedaliera */}
            <StaggerItem className="md:col-span-5 rounded-3xl p-7 sm:p-9 bg-white border border-[#ede2d6] shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Protocollo Sicurezza
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#faf3eb] border border-[#ebdccf] flex items-center justify-center text-[#9c7545] group-hover:bg-[#9c7545] group-hover:text-white transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <h4 className="font-serif text-xl sm:text-2xl text-[#2b2523]">
                  Igiene & Sterilizzazione
                </h4>

                <p className="text-xs sm:text-sm text-[#665a52] leading-relaxed">
                  Tutti gli strumenti metallici seguono rigorosi cicli di disinfezione chimica e termica. Teli, coprilettini e accessori per manicure/pedicure sono rigorosamente monouso.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f2e7dc] flex items-center gap-2 text-xs text-emerald-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero compromessi sulla tua salute</span>
              </div>
            </StaggerItem>

            {/* Bento Item 3 (4 cols): Cosmetici Attivi */}
            <StaggerItem className="md:col-span-4 rounded-3xl p-6 sm:p-7 bg-white border border-[#ede2d6] shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div className="space-y-3.5">
                <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-[#9c7545] bg-[#faf3eb] px-2.5 py-0.5 rounded-full border border-[#edd7c4]">
                  <Sparkles className="w-3 h-3 text-[#b38b59]" />
                  Cosmesi Attiva
                </span>

                <h4 className="font-serif text-lg sm:text-xl text-[#2b2523]">
                  Formule Dermoaffini
                </h4>

                <p className="text-xs sm:text-sm text-[#665a52] leading-relaxed">
                  Solo formulazioni prive di parabeni e petrolati occlusivi. Utilizziamo principi attivi botanici ad alta biodisponibilità, ideali anche per le pelli più sensibili o reattive.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#f2e7dc] text-xs text-[#8c7e75]">
                Dermatologicamente testati
              </div>
            </StaggerItem>

            {/* Bento Item 4 (4 cols): Consulenza Onesta */}
            <StaggerItem className="md:col-span-4 rounded-3xl p-6 sm:p-7 bg-white border border-[#ede2d6] shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div className="space-y-3.5">
                <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-[#9c7545] bg-[#faf3eb] px-2.5 py-0.5 rounded-full border border-[#edd7c4]">
                  <CheckCircle2 className="w-3 h-3 text-[#b38b59]" />
                  Ascolto Autentico
                </span>

                <h4 className="font-serif text-lg sm:text-xl text-[#2b2523]">
                  Consulenza Senza Pressioni
                </h4>

                <p className="text-xs sm:text-sm text-[#665a52] leading-relaxed">
                  Ogni percorso inizia con un&apos;analisi trasparente della pelle. Niente pacchetti forzati: solo i trattamenti e i consigli domiciliari che servono veramente a te.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#f2e7dc] text-xs text-[#8c7e75]">
                Check-up gratuito pre-trattamento
              </div>
            </StaggerItem>

            {/* Bento Item 5 (4 cols): Parcheggio & Posizione */}
            <StaggerItem className="md:col-span-4 rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#faf8f5] to-[#f4ede4] border border-[#ebdccf] shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div className="space-y-3.5">
                <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                  <Car className="w-3 h-3 text-emerald-600" />
                  Comodità Assoluta
                </span>

                <h4 className="font-serif text-lg sm:text-xl text-[#2b2523]">
                  Parcheggio Gratuito
                </h4>

                <p className="text-xs sm:text-sm text-[#665a52] leading-relaxed">
                  Ci troviamo a San Martino, a soli 8 minuti da Ferrara sud. Ampio parcheggio gratuito proprio davanti alla porta, senza stress di parchimetri o ZTL.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#e8d7c6] text-xs text-emerald-800 font-medium">
                Via Chiesa 114/A (San Martino)
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
