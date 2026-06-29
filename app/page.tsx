import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Brands from "@/components/Brands";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <>
        <Header />
        <Hero />
        <About />
        <Services />
        <Products />
        <Brands />
        <Industries />
        <Contact />
        <Footer />
    </>
  );
}