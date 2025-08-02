import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ServiceGrid from "@/components/ServiceGrid";
import ReviewsSection from "@/components/ReviewsSection";
import ClientLogos from "@/components/ClientLogos";
import BrochureSection from "@/components/BrochureSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <ServiceGrid />
        <ReviewsSection />
        <ClientLogos />
        <BrochureSection />
      </main>
      <Footer />
    </>
  );
}
