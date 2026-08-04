
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-50">
      {/* Navigation */}
      <Header />

      {/* Main Lead Generation Section */}
      <Hero />

      {/* Quick credibility / business highlights */}
      <Stats />

      {/* Why customers should choose Tesseract */}
      <WhyChooseUs />

      {/* Core services */}
      <Services />

      {/* Electronic components */}
      <Products />

      {/* Industries we serve */}
      <Industries />

      {/* Company information */}
      <About />

      {/* Trusted component brands */}
      <Brands />

      {/* Main enquiry / RFQ section */}
      <Contact />

      {/* Team / company credibility */}
      <Team />

      {/* Footer */}
      <Footer />
    </main>
  );
}
