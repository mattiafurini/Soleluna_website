import { CheckCircle2 } from "lucide-react";
import { SolelunaLogoIcon } from "@/components/SolelunaLogoIcon";
import { SALON_INFO } from "@/data/salon";

export function AboutSection() {
  return (
    <section id="chi-siamo" className="py-20 bg-white border-y border-[#ede2d6] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Atmospheric card / Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#faf4ee] to-[#f2e6d9] border border-[#e8d5c4] shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#9c7545] to-[#d8b88d] text-white flex items-center justify-center mb-6 shadow-sm">
                <SolelunaLogoIcon className="w-8 h-8 text-white" />
              </div>

              <span className="text-xs uppercase tracking-widest font-semibold text-[#9c7545]">
                La Nostra Filosofia
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2b2523] mt-2 leading-snug">
                Un’oasi di tranquillità alle porte di Ferrara.
              </h3>

              <div className="my-6 border-t border-[#dfcbba]" />

              <blockquote className="italic text-[#5e5148] text-sm sm:text-base leading-relaxed">
                &ldquo;Credo fermamente che un trattamento estetico sia prima di tutto un momento di riconnessione con se stessi. Quando una cliente entra da Soleluna, la fretta rimane fuori dalla porta.&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#dcc2a5] flex items-center justify-center font-serif font-bold text-[#4a392b]">
                  AP
                </div>
                <div>
                  <div className="font-serif font-semibold text-[#2b2523] text-sm">
                    {SALON_INFO.owner}
                  </div>
                  <div className="text-xs text-[#7e6f65]">
                    Estetista & Titolare Soleluna
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative dot */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#ebd8c5]/40 rounded-full blur-xl -z-10" />
          </div>

          {/* Right: Detailed text & principles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block text-xs uppercase tracking-widest font-semibold text-[#9c7545] bg-[#faf3eb] px-3.5 py-1 rounded-full border border-[#edd7c4]">
              Chi Siamo
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2523] leading-tight">
              Prendersi cura di sé non è un lusso, ma un <span className="italic text-[#9c7545]">gesto d&apos;amore</span> quotidiano.
            </h2>

            <p className="text-[#594d45] text-sm sm:text-base leading-relaxed">
              Il <strong>Centro Estetico Soleluna</strong> a San Martino (Ferrara) nasce con una missione precisa: offrire alle proprie clienti trattamenti di alta qualità in un ambiente raccolto, sereno e rilassante, dove la cura del dettaglio e l&apos;ascolto sono al centro di ogni seduta.
            </p>

            <p className="text-[#594d45] text-sm sm:text-base leading-relaxed">
              Dalla pulizia viso specifica al massaggio drenante, fino alla manicure e pedicure curativa, ogni seduta inizia con una valutazione attenta delle esigenze individuali della tua pelle. Non utilizziamo protocolli standardizzati: ogni trattamento è modulato per garantirti il massimo risultato e un relax profondo.
            </p>

            {/* List of key standards */}
            <div className="pt-2 space-y-3.5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9c7545] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#2b2523]">Diagnosi Personalizzata</h4>
                  <p className="text-xs text-[#6e625a]">Valutiamo insieme lo stato della cute prima di scegliere sieri, oli essenziali o macchinari.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9c7545] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#2b2523]">Puntualità & Zero Attese Stressanti</h4>
                  <p className="text-xs text-[#6e625a]">Gli appuntamenti sono scanditi per dedicarti tutto il tempo necessario, senza sovrapposizioni o corse.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9c7545] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#2b2523]">Comodità Logistica a San Martino</h4>
                  <p className="text-xs text-[#6e625a]">Facilmente raggiungibile da Ferrara centro in pochi minuti, con ampio parcheggio gratuito proprio di fronte.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#trattamenti"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#9c7545] hover:text-[#7d5c33] transition-colors"
              >
                Esplora i nostri trattamenti →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

