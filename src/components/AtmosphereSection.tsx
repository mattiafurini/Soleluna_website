"use client";

import Image from "next/image";
import { Sparkles, Moon, Droplets, Flame } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

export function AtmosphereSection() {
  const steps = [
    {
      icon: Moon,
      tag: "Calma Visiva & Sonora",
      title: "Luci Soffuse & Quiete",
      description:
        "Cabina climatizzata, luci soffuse a temperatura calda e sottofondo sonoro a frequenze distensive. Il sistema nervoso rallenta fin dal primo istante.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80",
    },
    {
      icon: Droplets,
      tag: "Aromaterapia & Tatto",
      title: "Oli Botanici & Texture Pregiate",
      description:
        "Diffusione di oli essenziali puri, asciugamani morbidi riscaldati e texture dermocompatibili che trasformano ogni trattamento in un rituale sensoriale.",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80",
    },
    {
      icon: Flame,
      tag: "Decompressione",
      title: "Risveglio Dolce Senza Fretta",
      description:
        "Finita la seduta, il tempo rimane tuo. Nessuna fretta di liberare la cabina: potrai riprendere contatto con la giornata con la massima serenità.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <section id="atmosfera" className="py-20 bg-gradient-to-b from-[#faf8f5] via-[#f5ede3] to-[#faf8f5] relative overflow-hidden scroll-mt-20">
      {/* Decorative ambient glowing circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#d8b88d]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[#ecdccb]/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-block text-[11px] uppercase tracking-widest font-semibold text-[#9c7545] bg-white/80 px-3.5 py-1 rounded-full border border-[#ebdccf] shadow-2xs">
            03 • Atmosfera & Quiete
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2523] leading-tight">
            Uno spazio pensato per far <span className="italic text-[#9c7545]">respirare</span> il tuo tempo.
          </h2>
          <p className="text-sm sm:text-base text-[#61554c] leading-relaxed">
            Un trattamento estetico è molto più di un risultato visibile: è una parentesi di distacco dallo stress quotidiano, in cui mente e corpo ritrovano equilibrio.
          </p>
        </FadeIn>

        {/* Sensory 3-Card Grid */}
        <StaggerContainer
          staggerChildren={0.12}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <StaggerItem
                key={idx}
                className="rounded-3xl p-6 sm:p-7 bg-white/95 backdrop-blur-xs border border-[#ebdcd0] shadow-xs hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-44 -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 mb-5 overflow-hidden bg-[#faf3eb]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider text-[#9c7545] bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#edd7c4] shadow-2xs">
                      Fase 0{idx + 1}
                    </span>
                    <div className="absolute bottom-3 left-4 text-white text-xs font-medium">
                      {step.tag}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-[#faf3eb] border border-[#ebdccf] flex items-center justify-center text-[#9c7545]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-[#2b2523] group-hover:text-[#9c7545] transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#665a52] leading-relaxed pt-1">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#f4ede4] flex items-center gap-2 text-xs text-[#b38b59]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Dedicato al tuo riposo</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Quote banner */}
        <FadeIn delay={0.2} className="mt-12 text-center max-w-xl mx-auto">
          <p className="font-serif italic text-base sm:text-lg text-[#5a4e46]">
            &ldquo;La bellezza più luminosa nasce quando ti concedi il permesso di fermarti.&rdquo;
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
