import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PropertyShowcase from "@/components/PropertyShowcase";
import TrustedBy from "@/components/TrustedBy";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import PremiumFeatures from "@/components/PremiumFeatures";
import LocationBenefits from "@/components/LocationBenefits";
import SecondaryCTA from "@/components/SecondaryCTA";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <PropertyShowcase />
      <TrustedBy />
      <Process />
      <Testimonials />
      <PremiumFeatures />
      <LocationBenefits />
      <SecondaryCTA />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}
