"use client";

import Link from "next/link";
import { SERVICES, SALON_INFO, ServiceItem } from "@/data/salon";
import { Clock, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

export function ServicesSection() {
  // Mostriamo esattamente i 3 trattamenti iconici principali in Home Page (Viso, Corpo, Mani)
  const TOP_SERVICE_IDS = ["pulizia-viso", "drenante-anticellulite", "semipermanente-mani"];
  const topServices = TOP_SERVICE_IDS.map((id) => SERVICES.find((s) => s.id === id)!).filter(Boolean);

  return (
    <section id="trattamenti" className="py-20 bg-[#faf8f5] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-block text-xs uppercase tracking-widest font-semibold text-[#9c7545] bg-[#f4ede4] px-3.5 py-1 rounded-full border border-[#e8dccf]">
            I Più Richiesti in Salone
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2523]">
            Trattamenti dedicati alla tua <span className="italic text-[#9c7545]">armonia</span>
          </h2>
          <p className="text-sm sm:text-base text-[#61554c]">
            Una selezione dei nostri 3 percorsi iconici più amati. Per consultare tutti i servizi con i filtri per categoria, scopri il listino completo.
          </p>
        </FadeIn>

        {/* Services Grid with Stagger (3 Top Treatments in a single balanced row on desktop) */}
        <StaggerContainer
          staggerChildren={0.12}
          className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {topServices.map((service: ServiceItem) => {
            const whatsappText = `Ciao Soleluna! ✨ Vorrei informazioni e disponibilità per il trattamento: "${service.name}".`;
            const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

            return (
              <StaggerItem
                key={service.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#ede2d6] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg font-semibold text-[#2b2523] leading-snug group-hover:text-[#9c7545] transition-colors">
                      {service.name}
                    </h3>
                    <span className="shrink-0 inline-flex items-center gap-1 text-[10px] font-semibold text-[#8f6636] bg-[#faf4ec] border border-[#ebdccf] px-2.5 py-0.5 rounded-full">
                      <Sparkles className="w-2.5 h-2.5 text-[#b38b59]" />
                      Top
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#665a52] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#f2e7dc] flex items-center justify-between gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-[#7a6d64] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#9c7545]" />
                    <span>{service.duration}</span>
                  </span>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-2 px-4 text-xs font-semibold rounded-full bg-[#128C7E] hover:bg-[#0c6b60] text-white shadow-2xs hover:shadow transition-all shrink-0 group-hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-white" />
                    <span>Info & Prenota</span>
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA to full treatments page with filters */}
        <FadeIn delay={0.2} className="mt-12 text-center space-y-3">
          <Link
            href="/trattamenti"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2b2523] hover:bg-[#433834] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 group"
          >
            <span>Scopri il Listino Completo</span>
            <ArrowRight className="w-4 h-4 text-[#e0c4a4] group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-xs text-[#8c7e75]">
            Sfoglia tutti i trattamenti per Viso, Corpo, Massaggi, Epilazione e Mani & Piedi
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
