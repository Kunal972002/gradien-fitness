import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ServicesOverview } from "@/components/ServicesOverview";
import { PricingSection } from "@/components/PricingSection";
import { HolisticSupport } from "@/components/HolisticSupport";
import { Testimonials } from "@/components/Testimonials";
import { BookingSection } from "@/components/BookingSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELEVATE — Premium Fitness for Female Executives" },
      { name: "description", content: "High-performance fitness designed for women who lead. Executive coaching, group sessions, and precision nutrition. Join 500+ members." },
      { property: "og:title", content: "ELEVATE — Premium Fitness for Female Executives" },
      { property: "og:description", content: "Outperform in the boardroom. Transform in the studio." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesOverview />
        <PricingSection />
        <HolisticSupport />
        <Testimonials />
        <BookingSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
