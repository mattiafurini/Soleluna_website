"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES, SALON_INFO, SERVICE_IMAGES, CATEGORY_FALLBACK_IMAGES, ServiceItem } from "@/data/salon";
import { Clock, MessageCircle, Sparkles, ArrowLeft, Filter, Phone, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "@/components/ui/MotionWrapper";

type CategoryFilter = "all" | "viso" | "corpo" | "massaggi" | "epilazione" | "mani-piedi";

const CATEGORIES: { key: CategoryFilter; label: string }[] = [
  { key: "all", label: "Tutti i Trattamenti" },
  { key: "viso", label: "Trattamenti Viso" },
  { key: "corpo", label: "Cura del Corpo" },
  { key: "massaggi", label: "Massaggi & Relax" },
  { key: "epilazione", label: "Epilazione" },
  { key: "mani-piedi", label: "Mani & Piedi" },
];

const CATEGORY_LABELS: Record<string, string> = {
  viso: "Rituale Viso",
  corpo: "Cura Corpo",
  massaggi: "Massaggio Olistico",
  epilazione: "Epilazione",
  "mani-piedi": "Mani & Piedi Spa",
};

const CATEGORY_SEARCH_TERMS: Record<string, string[]> = {
  viso: [
    "viso",
    "facciale",
    "pulizia viso",
    "trattamento viso",
    "trattamenti viso",
    "pelle",
    "cute",
    "anti-age",
    "antiage",
    "rughe",
    "illuminante",
    "glow",
    "acido ialuronico",
    "siero",
    "couperose",
    "sensibile",
    "delicata",
    "purificante",
    "sebo",
    "peeling",
    "maschera",
  ],
  corpo: [
    "corpo",
    "body",
    "cura del corpo",
    "trattamenti corpo",
    "trattamento corpo",
    "scrub",
    "esfoliante",
    "sali marini",
    "drenante",
    "anticellulite",
    "cellulite",
    "ritenzione",
    "rimodellante",
    "bendaggi",
    "fanghi",
    "fangoterapia",
    "argilla",
    "termale",
    "tonificante",
    "rassodante",
  ],
  massaggi: [
    "massaggi",
    "massaggio",
    "massage",
    "relax",
    "rilassante",
    "antistress",
    "olistico",
    "decontratturante",
    "schiena",
    "cervicale",
    "contratture",
    "linfodrenaggio",
    "vodder",
    "drenaggio",
    "gambe",
    "benessere",
    "aromaterapia",
  ],
  epilazione: [
    "epilazione",
    "depilazione",
    "ceretta",
    "cera",
    "laser",
    "sopracciglia",
    "peli",
    "peluria",
    "definitiva",
    "progressiva",
    "diodo",
    "inguine",
    "ascelle",
    "braccia",
    "gambe",
  ],
  "mani-piedi": [
    "mani",
    "piedi",
    "mano",
    "piede",
    "manicure",
    "pedicure",
    "unghie",
    "unghia",
    "semipermanente",
    "smalto",
    "gel",
    "cuticole",
    "paraffina",
    "screpolate",
    "calli",
    "callosita",
    "spa",
  ],
};

function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function serviceMatchesQuery(service: ServiceItem, rawQuery: string): boolean {
  if (!rawQuery.trim()) return true;
  const q = normalizeString(rawQuery.trim());

  const nameNorm = normalizeString(service.name);
  const descNorm = normalizeString(service.description);
  const catNorm = normalizeString(service.category);
  const catLabel = normalizeString(CATEGORY_LABELS[service.category] || "");
  const catTabLabel = normalizeString(
    CATEGORIES.find((c) => c.key === service.category)?.label || ""
  );

  // 1. Match nel nome
  if (nameNorm.includes(q)) return true;

  // 2. Match nella descrizione
  if (descNorm.includes(q)) return true;

  // 3. Match nella categoria o nell'etichetta di categoria
  if (catNorm.includes(q) || catLabel.includes(q) || catTabLabel.includes(q)) return true;

  // 4. Match nei sinonimi e termini associati alla categoria
  const terms = CATEGORY_SEARCH_TERMS[service.category] || [];
  if (terms.some((term) => normalizeString(term).includes(q) || q.includes(normalizeString(term)))) {
    return true;
  }

  // 5. Match per query a più parole (es. "pulizia viso", "massaggio schiena")
  const words = q.split(/\s+/).filter(Boolean);
  if (words.length > 1) {
    const allMatch = words.every((w) =>
      nameNorm.includes(w) ||
      descNorm.includes(w) ||
      catNorm.includes(w) ||
      catLabel.includes(w) ||
      terms.some((term) => normalizeString(term).includes(w))
    );
    if (allMatch) return true;
  }

  return false;
}

export function TrattamentiContent() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.trim();

  // Filtro principale nella categoria corrente
  const matchesCurrentCategory = SERVICES.filter(
    (s) => (activeCategory === "all" || s.category === activeCategory) && serviceMatchesQuery(s, query)
  );

  // Se l'utente ha digitato una ricerca che non dà risultati nella categoria selezionata
  // ma trova corrispondenze in altre categorie (es. ha "Viso" attivo e cerca "massaggio"):
  const allCategoryMatches = query ? SERVICES.filter((s) => serviceMatchesQuery(s, query)) : [];

  const isCrossCategoryFallback =
    activeCategory !== "all" &&
    query !== "" &&
    matchesCurrentCategory.length === 0 &&
    allCategoryMatches.length > 0;

  const filteredServices = isCrossCategoryFallback ? allCategoryMatches : matchesCurrentCategory;

  const getCategoryCount = (key: CategoryFilter) => {
    if (key === "all") {
      return SERVICES.filter((s) => serviceMatchesQuery(s, query)).length;
    }
    return SERVICES.filter((s) => s.category === key && serviceMatchesQuery(s, query)).length;
  };

  const handleResetFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
  };

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back navigation & Page Header */}
        <FadeIn className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#73655c] hover:text-[#9c7545] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
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
              Dalla cura minuziosa del viso ai massaggi rigeneranti, ogni seduta è studiata per offrirti risultati visibili e un momento di puro relax. Cerca per nome o seleziona una categoria.
            </p>
          </div>
        </FadeIn>

        {/* Search & Categories Bar */}
        <FadeIn delay={0.15} className="mt-8 pt-6 border-t border-[#ebdcd0] space-y-4">
          {/* Search Input Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#9c7545] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cerca per nome o categoria (es. viso, massaggi, corpo, unghie)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-full text-xs sm:text-sm bg-white border border-[#e8dcd0] focus:border-[#9c7545] focus:outline-none transition-colors shadow-2xs text-[#2b2523] placeholder-[#9c8e84]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a8998d] hover:text-[#2b2523] p-0.5 cursor-pointer"
                  aria-label="Cancella ricerca"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-xs text-[#7e6f66] flex items-center justify-between sm:justify-end gap-3">
              <span>
                <strong>{filteredServices.length}</strong> trattamenti trovati
              </span>
              {(activeCategory !== "all" || searchQuery !== "") && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs font-semibold text-[#9c7545] hover:underline cursor-pointer"
                >
                  Resetta filtri
                </button>
              )}
            </div>
          </div>

          {/* Quick Category Chips */}
          <div className="flex items-center flex-wrap gap-1.5 pt-0.5 text-xs text-[#8a7b71]">
            <span className="text-[11px] text-[#9c897d] mr-1">Ricerche frequenti:</span>
            {["Viso", "Massaggi", "Corpo", "Epilazione", "Mani & Piedi"].map((chip) => {
              const isSelected = searchQuery.toLowerCase() === chip.toLowerCase();
              return (
                <button
                  key={chip}
                  onClick={() => {
                    if (isSelected) {
                      setSearchQuery("");
                    } else {
                      setSearchQuery(chip.toLowerCase());
                    }
                  }}
                  className={`text-[11px] px-2.5 py-0.5 rounded-full transition-colors cursor-pointer border ${
                    isSelected
                      ? "bg-[#b38b59] text-white border-[#b38b59]"
                      : "bg-[#f4ede4] hover:bg-[#ebdccf] text-[#6b584a] border-[#e5d8cb]"
                  }`}
                >
                  {chip}
                </button>
              );
            })}
          </div>

          {/* Categories Tabs Filter */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#8a7a70]">
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
        </FadeIn>

        {/* Cross-category fallback notice */}
        {isCrossCategoryFallback && (
          <div className="mt-6 p-3.5 px-4 rounded-2xl bg-[#faf3eb] border border-[#ecd7c4] text-xs text-[#7d6554] flex flex-wrap items-center justify-between gap-2 shadow-2xs">
            <span>
              Nessun risultato in <strong>{CATEGORIES.find((c) => c.key === activeCategory)?.label}</strong>, ma abbiamo trovato <strong>{filteredServices.length}</strong> trattamenti correlati:
            </span>
            <button
              onClick={() => setActiveCategory("all")}
              className="text-xs font-semibold text-[#9c7545] underline hover:text-[#7d5c34] cursor-pointer"
            >
              Mostra tutti i trattamenti
            </button>
          </div>
        )}

        {/* Services Grid with Layout Animations & Photo Headers */}
        <div className="mt-8">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-3xl p-10 text-center border border-[#e8dcd0] max-w-md mx-auto space-y-3 shadow-xs"
            >
              <div className="w-12 h-12 rounded-full bg-[#faf3eb] text-[#9c7545] flex items-center justify-center mx-auto">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-[#2b2523]">
                Nessun trattamento trovato
              </h3>
              <p className="text-xs sm:text-sm text-[#7e6f66]">
                Nessun risultato corrisponde alla ricerca &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#b38b59] text-white text-xs font-semibold hover:bg-[#9c7545] transition-colors"
              >
                Mostra tutti i trattamenti
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence>
                {filteredServices.map((service: ServiceItem) => {
                  const whatsappText = `Ciao Soleluna! ✨ Vorrei informazioni e disponibilità per il trattamento: "${service.name}".`;
                  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
                  const imageUrl = SERVICE_IMAGES[service.id] || CATEGORY_FALLBACK_IMAGES[service.category];

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={service.id}
                      className="bg-white rounded-3xl p-5 sm:p-6 border border-[#ede2d6] shadow-2xs hover:shadow-lg transition-shadow flex flex-col justify-between group overflow-hidden"
                    >
                      <div>
                        {/* Image Header */}
                        {imageUrl && (
                          <div className="relative h-44 -mx-5 -mt-5 sm:-mx-6 sm:-mt-6 mb-4 overflow-hidden bg-[#faf3eb]">
                            <Image
                              src={imageUrl}
                              alt={service.name}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                            
                            {/* Category Pill Tag */}
                            <span className="absolute top-3 left-3 inline-flex items-center text-[10px] font-semibold tracking-wider uppercase text-[#735229] bg-white/95 backdrop-blur-md border border-[#ebdccf] px-2.5 py-0.5 rounded-full shadow-2xs">
                              {CATEGORY_LABELS[service.category] || "Trattamento"}
                            </span>

                            {service.popular && (
                              <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] font-semibold text-[#8f6636] bg-white/95 backdrop-blur-md border border-[#ebdccf] px-2.5 py-0.5 rounded-full shadow-2xs">
                                <Sparkles className="w-2.5 h-2.5 text-[#b38b59]" />
                                Top
                              </span>
                            )}
                          </div>
                        )}

                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h3 className="font-serif text-base sm:text-lg font-semibold text-[#2b2523] leading-snug group-hover:text-[#9c7545] transition-colors">
                            {service.name}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-[#665a52] leading-relaxed">
                          {service.description}
                        </p>

                        {service.benefit && (
                          <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#8a6839] bg-[#faf3ea] px-2.5 py-1 rounded-lg border border-[#edd8c4]">
                            <Sparkles className="w-3 h-3 text-[#b38b59] shrink-0" />
                            <span>{service.benefit}</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-4 pt-3.5 border-t border-[#f2e7dc] flex items-center justify-between gap-3">
                        <div className="flex flex-col">
                          <span className="flex items-center gap-1.5 text-xs text-[#7a6d64] font-medium">
                            <Clock className="w-3.5 h-3.5 text-[#9c7545]" />
                            <span>{service.duration}</span>
                          </span>
                          <span className="text-[10px] text-[#9c897d] font-normal">
                            Cabina riservata
                          </span>
                        </div>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 py-2 px-3.5 text-xs font-semibold rounded-full bg-[#128C7E] hover:bg-[#0c6b60] text-white shadow-2xs hover:shadow transition-all shrink-0"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-white" />
                          <span>Info & Prenota</span>
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Luxury 3-Step Consultation Guide */}
        <FadeIn delay={0.2} className="mt-16 rounded-[32px] bg-gradient-to-br from-[#faf4ee] via-[#f7eee4] to-[#f0e3d5] p-7 sm:p-10 border border-[#e5d5c5] shadow-xs text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-block text-[11px] uppercase tracking-widest font-semibold text-[#9c7545] bg-white/80 px-3.5 py-1 rounded-full border border-[#ebdccf]">
            Guida Personalizzata Soleluna
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#2b2523] leading-snug">
            Non sai quale percorso scegliere? <span className="italic font-normal text-[#9c7545]">Ti guidiamo noi.</span>
          </h3>

          <p className="text-xs sm:text-sm text-[#594d45] leading-relaxed max-w-xl mx-auto">
            Ogni pelle ha una sua storia e necessità stagionali diverse. Ecco come costruiamo insieme la tua esperienza:
          </p>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-2">
            <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-5 border border-[#ede2d6] shadow-2xs space-y-2">
              <span className="text-[10px] font-bold text-[#b38b59] uppercase tracking-wider block">Fase 01</span>
              <h4 className="font-serif font-semibold text-sm text-[#2b2523]">Messaggio Senza Impegno</h4>
              <p className="text-[11px] text-[#6e6056] leading-relaxed">Scrivici su WhatsApp descrivendo come senti la pelle o quale obiettivo vorresti raggiungere.</p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-5 border border-[#ede2d6] shadow-2xs space-y-2">
              <span className="text-[10px] font-bold text-[#b38b59] uppercase tracking-wider block">Fase 02</span>
              <h4 className="font-serif font-semibold text-sm text-[#2b2523]">Check-up & Consiglio</h4>
              <p className="text-[11px] text-[#6e6056] leading-relaxed">Annalisa analizza le tue esigenze e ti consiglia il trattamento o massaggio più affine.</p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-5 border border-[#ede2d6] shadow-2xs space-y-2">
              <span className="text-[10px] font-bold text-[#b38b59] uppercase tracking-wider block">Fase 03</span>
              <h4 className="font-serif font-semibold text-sm text-[#2b2523]">Cabina Privata Senza Fretta</h4>
              <p className="text-[11px] text-[#6e6056] leading-relaxed">Goditi il tuo appuntamento in un ambiente raccolto e silenzioso, dedicato solo a te.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Ciao Soleluna! ✨ Vorrei un consiglio personalizzato su quale trattamento è più indicato per me.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#128C7E] hover:bg-[#0c6b60] text-white font-medium text-xs shadow-xs hover:shadow transition-all"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Richiedi un consiglio su WhatsApp</span>
            </a>
            <a
              href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#faf6f1] text-[#2b2523] border border-[#d8c8b8] font-medium text-xs shadow-2xs hover:shadow transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#b38b59]" />
              <span>Chiama: {SALON_INFO.phone}</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
