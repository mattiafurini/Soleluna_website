"use client";

import { useState } from "react";
import { SERVICES, SALON_INFO, ServiceItem } from "@/data/salon";
import { Clock, MessageCircle, Sparkles } from "lucide-react";

type CategoryFilter = 'all' | 'viso' | 'corpo' | 'massaggi' | 'epilazione' | 'mani-piedi';

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: 'Tutti i Trattamenti' },
    { key: 'viso', label: 'Trattamenti Viso' },
    { key: 'corpo', label: 'Cura del Corpo' },
    { key: 'massaggi', label: 'Massaggi & Relax' },
    { key: 'epilazione', label: 'Epilazione' },
    { key: 'mani-piedi', label: 'Mani & Piedi' },
  ];


  return (
    <section id="trattamenti" className="py-20 bg-[#faf8f5] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-block text-xs uppercase tracking-widest font-semibold text-[#9c7545] bg-[#f4ede4] px-3.5 py-1 rounded-full border border-[#e8dccf]">
            I Nostri Trattamenti
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2523]">
            Percorsi dedicati alla tua <span className="italic text-[#9c7545]">armonia</span>
          </h2>
          <p className="text-sm sm:text-base text-[#61554c]">
            Protocolli curati per viso, corpo e benessere. Per richiedere informazioni sui costi e prenotare la tua consulenza personalizzata, scrivici comodamente su WhatsApp.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="mt-10 flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${activeCategory === cat.key
                  ? "bg-[#b38b59] text-white shadow-sm"
                  : "bg-white text-[#5c4f46] hover:bg-[#f2e7db] border border-[#e8dcd0]"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service: ServiceItem) => {
            const whatsappText = `Ciao SoleLuna! ✨ Vorrei informazioni e disponibilità per il trattamento: "${service.name}".`;
            const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#ede2d6] shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-base sm:text-lg font-semibold text-[#2b2523] leading-snug group-hover:text-[#9c7545] transition-colors">
                      {service.name}
                    </h3>
                    {service.popular && (
                      <span className="shrink-0 inline-flex items-center gap-1 text-[10px] font-semibold text-[#8f6636] bg-[#faf4ec] border border-[#ebdccf] px-2 py-0.5 rounded-full">
                        <Sparkles className="w-2.5 h-2.5 text-[#b38b59]" />
                        Top
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#665a52] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-3.5 pt-3 border-t border-[#f2e7dc] flex items-center justify-between gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-[#7a6d64] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#9c7545]" />
                    <span>{service.duration}</span>
                  </span>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-1.5 px-3.5 text-xs font-semibold rounded-full bg-[#128C7E] hover:bg-[#0c6b60] text-white shadow-2xs transition-colors shrink-0"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-white" />
                    <span>Info & Prenota</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom inquiry note */}
        <div className="mt-12 text-center bg-[#f4ede4] rounded-2xl p-6 border border-[#e5d8cb] max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#594d45]">
            Non trovi il trattamento specifico o hai bisogno di una consulenza personalizzata?
          </p>
          <a
            href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Ciao SoleLuna, vorrei chiederti una consulenza personalizzata su un trattamento...")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#128C7E] hover:underline"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            Scrivici su WhatsApp per un consiglio gratuito →
          </a>
        </div>
      </div>
    </section>
  );
}

