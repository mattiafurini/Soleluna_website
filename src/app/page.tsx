import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AtmosphereSection } from "@/components/AtmosphereSection";
import { TrustSection } from "@/components/TrustSection";
import { WhatsAppBookingBanner } from "@/components/WhatsAppBookingBanner";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      <Header />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <AtmosphereSection />
        <SectionDivider />
        <TrustSection />
        <SectionDivider />
        <WhatsAppBookingBanner />
        <SectionDivider />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
