import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Brands from "@/components/Brands";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Header />
      <Hero />
      <About />
      <Stats />
     <WhyChooseUs />
      <Services />
      <Products />
      <Brands />
      <Industries />
      <Contact />
      <Team />
      <Footer />
    </main>
  );
}
