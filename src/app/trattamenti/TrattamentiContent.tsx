"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES, SALON_INFO, ServiceItem } from "@/data/salon";
import { Clock, MessageCircle, Sparkles, ArrowLeft, Filter, Phone } from "lucide-react";

type CategoryFilter = "all" | "viso" | "corpo" | "massaggi" | "epilazione" | "mani-piedi";

const CATEGORIES: { key: CategoryFilter; label: string }[] = [
  { key: "all", label: "Tutti i Trattamenti" },
  { key: "viso", label: "Trattamenti Viso" },
  { key: "corpo", label: "Cura del Corpo" },
  { key: "massaggi", label: "Massaggi & Relax" },
  { key: "epilazione", label: "Epilazione" },
  { key: "mani-piedi", label: "Mani & Piedi" },
];

export function TrattamentiContent() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredServices =
    activeCategory === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  const getCategoryCount = (key: CategoryFilter) => {
    if (key === "all") return SERVICES.length;
    return SERVICES.filter((s) => s.category === key).length;
  };

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back navigation & Page Header */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#73655c] hover:text-[#9c7545] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Torna alla Home</span>
          </Link>

          <div className="max-w-2xl space-y-3">
            <div className="inline-block text-xs uppercase tracking-widest font-semibold text-[#9c7545] bg-[#f4ede4] px-3.5 py-1 rounded-full border border-[#e8dccf]">
              Listino Completo dei Servizi
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2b2523] tracking-tight">
              Tutti i nostri <span className="italic text-[#9c7545]">trattamenti</span>
            </h1>
            <p className="text-sm sm:text-base text-[#61554c] leading-relaxed">
              Dalla cura minuziosa del viso ai massaggi rigeneranti, ogni seduta è studiata per offrirti risultati visibili e un momento di puro relax. Seleziona una categoria per filtrare il listino.
            </p>
          </div>
        </div>

        {/* Categories Tabs Filter */}
        <div className="mt-8 pt-6 border-t border-[#ebdcd0]">
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-[#8a7a70]">
            <Filter className="w-3.5 h-3.5 text-[#9c7545]" />
            <span>Filtra per Categoria</span>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const count = getCategoryCount(cat.key);
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-[#b38b59] text-white shadow-sm"
                      : "bg-white text-[#5c4f46] hover:bg-[#f2e7db] border border-[#e8dcd0]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-[#f0e6dc] text-[#7a6d64]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-6 flex items-center justify-between text-xs text-[#7e6f66]">
          <span>
            Mostrando <strong>{filteredServices.length}</strong> trattamenti
          </span>
          <span className="hidden sm:inline text-[#9c7545]">
            Consulenza e check-up sempre inclusi
          </span>
        </div>

        {/* Services Grid */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
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

        {/* Custom inquiry card */}
        <div className="mt-14 bg-gradient-to-r from-[#f4ede4] to-[#fbf8f4] rounded-2xl p-6 sm:p-8 border border-[#e5d8cb] text-center max-w-2xl mx-auto space-y-4">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2b2523]">
            Non sai quale trattamento è più adatto a te?
          </h3>
          <p className="text-xs sm:text-sm text-[#594d45] leading-relaxed">
            Contattaci su WhatsApp o telefona direttamente in salone. Annalisa sarà felice di consigliarti il percorso migliore per le esigenze della tua pelle.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Ciao SoleLuna! ✨ Vorrei un consiglio su quale trattamento è più adatto alle mie esigenze.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] hover:bg-[#0c6b60] text-white font-medium text-xs shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              Consulenza su WhatsApp
            </a>
            <a
              href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#faf6f1] text-[#2b2523] border border-[#d8c8b8] font-medium text-xs shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#b38b59]" />
              Chiama: {SALON_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

