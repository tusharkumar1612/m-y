import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OfferSection from "@/components/OfferSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import LeadForm from "@/components/LeadForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WinterOfferModal from "@/components/WinterOfferModal";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Winter Offer Modal - Appears after 2 seconds */}
      <WinterOfferModal />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Offer Section */}
      <OfferSection />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Amenities Section */}
      <AmenitiesSection />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Lead Form Section */}
      <LeadForm />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
