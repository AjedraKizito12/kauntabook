import Camp from "@/components/Camp";
import Features from "@/components/Features/Features";
import GetApp from "@/components/GetApp";
import TestimonialsSection from "@/components/Testimonies/testimonies";
import Hero from "@/components/Hero";
import FAQSection from "@/components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Features />
      <TestimonialsSection />
      <FAQSection />
      <GetApp />
    </>
  );
}
