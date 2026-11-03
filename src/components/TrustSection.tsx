import { TESTIMONIALS, SALON_INFO } from "@/data/salon";
import { Star, Quote, ExternalLink, Shield, Sparkles, Smile, Clock } from "lucide-react";

export function TrustSection() {
  return (
    <section id="recensioni" className="py-20 bg-white border-y border-[#ede2d6] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-block text-xs uppercase tracking-widest font-semibold text-[#9c7545] bg-[#faf3eb] px-3.5 py-1 rounded-full border border-[#edd7c4]">
            Riprova Sociale & Fiducia
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2523]">
            Cosa dicono le nostre clienti
          </h2>
          <p className="text-sm sm:text-base text-[#61554c]">
            La serenità e i risultati delle nostre clienti sono la nostra migliore presentazione.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#faf8f5] rounded-2xl p-6 sm:p-7 border border-[#ece0d4] shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#d8c5b2]" />
                </div>

                <p className="text-sm text-[#4d423b] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ede0d2]">
                <div className="font-serif font-semibold text-sm text-[#2b2523]">
                  {t.name}
                </div>
                <div className="text-xs text-[#9c7545] font-medium">
                  Trattamento: {t.treatment}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating banner under testimonials */}
        <div className="mt-10 text-center">
          <a
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#faf6f1] border border-[#ebdccf] hover:border-[#d9c4b1] shadow-xs hover:shadow transition-all group"
          >
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-sm text-[#2b2523]">5.0 su Google Maps</span>
            <span className="text-xs text-[#8c7e75]">• 100% recensioni verificate</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#9c7545] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 4 Trust Commitments */}
        <div id="perche-noi" className="mt-20 pt-16 border-t border-[#ede2d6] scroll-mt-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#9c7545]">
              Perché Scegliere SoleLuna
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2b2523] mt-2">
              Il nostro impegno per la tua tranquillità
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#faf6f1] border border-[#ebe0d3]">
              <Shield className="w-8 h-8 text-[#9c7545] mb-3" />
              <h4 className="font-serif font-semibold text-base text-[#2b2523]">Igiene & Sterilizzazione</h4>
              <p className="text-xs text-[#6e625a] mt-1.5 leading-relaxed">
                Tutti gli strumenti metallici seguono cicli rigorosi di disinfezione e sterilizzazione. Uso costante di teli e accessori monouso.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#faf6f1] border border-[#ebe0d3]">
              <Sparkles className="w-8 h-8 text-[#9c7545] mb-3" />
              <h4 className="font-serif font-semibold text-base text-[#2b2523]">Cosmetici Selezionati</h4>
              <p className="text-xs text-[#6e625a] mt-1.5 leading-relaxed">
                Formulazioni dermocompatibili prive di parabeni e sostanze aggressive, adatte anche alle pelli più reattive e delicate.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#faf6f1] border border-[#ebe0d3]">
              <Clock className="w-8 h-8 text-[#9c7545] mb-3" />
              <h4 className="font-serif font-semibold text-base text-[#2b2523]">Puntualità & Riservatezza</h4>
              <p className="text-xs text-[#6e625a] mt-1.5 leading-relaxed">
                Nessuna cabina condivisa o sovrapposizione frettolosa. Il tuo tempo di trattamento è sacro e dedicato interamente a te.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#faf6f1] border border-[#ebe0d3]">
              <Smile className="w-8 h-8 text-[#9c7545] mb-3" />
              <h4 className="font-serif font-semibold text-base text-[#2b2523]">Accoglienza Senza Giudizio</h4>
              <p className="text-xs text-[#6e625a] mt-1.5 leading-relaxed">
                Un ambiente caldo, amichevole e distensivo, dove ogni cliente si sente a casa propria fin dal primo minuto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

