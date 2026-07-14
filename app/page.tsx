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
      <Footer />
    </main>
  );
}
{/* =========================
    Contact Our Team
========================= */}
<section id="team" className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-900">
        Meet Our Team
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Our team is here to assist you with product sourcing, PCB solutions,
        purchasing, order processing, and customer support.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Operations & Business Development Head - (PAN India) */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-5">
          👨‍💼
        </div>

        <h3 className="text-2xl font-bold text-slate-900">
          Suganya Manogaran
        </h3>

        <div className="mt-6 space-y-2 text-gray-700">
          <p>✔ Sales & Customer Support</p>
          <p>✔ Business Development</p>
          <p>✔ Electronic Components</p>
          <p>✔ PCB Design & Assembly</p>
          <p>✔ Technical Consultation</p>
        </div>

        <div className="mt-8 space-y-3">

          <a
            href="tel:+918123663810"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
          >
            📞 +91 8123663810
          </a>

          <a
            href="mailto:tesseractelectronics24@gmail.com"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
          >
            ✉ tesseractelectronics24@gmail.com
          </a>

        </div>
      </div>

      {/* Co-Founder */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-5">
          👩‍💼
        </div>

        <h3 className="text-2xl font-bold text-slate-900">
          Mr. Poovendran 
        </h3>

        <p className="text-green-600 font-semibold mt-1">
          Co-Founder & Operations
        </p>

        <div className="mt-6 space-y-2 text-gray-700">
          <p>✔ Purchase Management</p>
          <p>✔ Accounts & Billing</p>
          <p>✔ Dispatch Coordination</p>
          <p>✔ Vendor Management</p>
          <p>✔ Customer Follow-up</p>
        </div>

        <div className="mt-8 space-y-3">

          <a
            href="tel:+916374720014"
            className="flex items-center gap-3 text-gray-700 hover:text-green-600"
          >
            📞 +91 6374720014
          </a>

          <a
            href="mailto:infome070@gmail.com"
            className="flex items-center gap-3 text-gray-700 hover:text-green-600"
          >
            ✉ infome070@gmail.com
          </a>

        </div>
      </div>

    </div>

  </div>
</section>