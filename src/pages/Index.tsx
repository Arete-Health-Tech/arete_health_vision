import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import PlatformSection from "@/components/PlatformSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";

const Index = () => {
  return (
    <div className="min-h-screen font-outfit">
      <Header />
      <HeroSection />
      <VisionSection />
      <PlatformSection />
      <WhyChooseSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
