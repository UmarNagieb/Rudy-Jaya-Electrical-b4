import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import TrustStrip from "@/components/site/TrustStrip";
import Services from "@/components/site/Services";
import WhyUs from "@/components/site/WhyUs";
import Process from "@/components/site/Process";
import TargetMarket from "@/components/site/TargetMarket";
import Portfolio from "@/components/site/Portfolio";
import About from "@/components/site/About";
import Testimonials from "@/components/site/Testimonials";
import FAQ from "@/components/site/FAQ";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="bg-paper">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyUs />
        <Process />
        <TargetMarket />
        <Portfolio />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}