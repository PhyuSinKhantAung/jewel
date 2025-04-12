import { HeroSection } from "@/components/HeroSection";
import "./globals.css";
import { HeroHeader } from "@/components/HeroHeader";
import { Navbar } from "@/components/Navbar";
import CustomJewelry from "@/components/CustomJewelrySection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ExploreMoreSection } from "@/components/ExploreMoreSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <Navbar />
      <HeroSection />
      <CustomJewelry />
      <WhyChooseSection />
      <ExploreMoreSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
