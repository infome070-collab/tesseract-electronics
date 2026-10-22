
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
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Header />

      <Hero />


      <Stats />

      <About />

      <Services />

      <Products />

      <Industries />

      <WhyChooseUs />

      <Brands />

      <Contact />

      <Footer />
    </main>
  );
}
