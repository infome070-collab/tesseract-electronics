import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  CircuitBoard,
  Zap,
  Radio,
  Layers,
  Settings2,
} from "lucide-react";

const categories = [
  {
    icon: Layers,
    title: "Resistors",
    description:
      "Through-hole and SMD resistors for electronics, industrial and embedded applications.",
  },
  {
    icon: Layers,
    title: "Capacitors",
    description:
      "Ceramic, electrolytic, tantalum and other capacitor types for a wide range of applications.",
  },
  {
    icon: CircuitBoard,
    title: "Inductors",
    description:
      "Power inductors, SMD inductors and other magnetic components for electronic circuits.",
  },
  {
    icon: Cpu,
    title: "Integrated Circuits",
    description:
      "Analog, digital, interface, power management and application-specific ICs.",
  },
  {
    icon: Cpu,
    title: "Microcontrollers",
    description:
      "Microcontrollers and embedded processors for industrial and electronic product development.",
  },
  {
    icon: Radio,
    title: "Sensors",
    description:
      "Sensors for temperature, pressure, proximity, motion, current and other applications.",
  },
  {
    icon: Zap,
    title: "Diodes",
    description:
      "Rectifier, switching, Schottky, Zener and other diode solutions.",
  },
  {
    icon: Zap,
    title: "Transistors",
    description:
      "BJT, MOSFET and other transistor solutions for switching and amplification applications.",
  },
  {
    icon: Settings2,
    title: "Relays & Protection",
    description:
      "Relays, fuses and circuit protection components for industrial and electronic applications.",
  },
];

const benefits = [
  "Prototype and production quantities",
  "BOM-based component sourcing",
  "Manufacturer part number sourcing",
  "Alternative component identification",
  "Competitive quotation support",
  "Delivery support across India",
];

export default function ProductsPage() {
  return (
    <main className="bg-slate-50">

      {/* HERO */}
      <section className="bg-sky-700 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-4 font-semibold uppercase tracking-widest text-sky-200">
            Electronic Component Sourcing
          </p>

          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Electronic Components for Your Projects
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-sky-100 md:text-xl">
            Source passive and semiconductor components for prototypes,
            development and production from Tesseract Electronics.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="#contact-sales"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-bold text-sky-700 shadow-lg transition hover:bg-sky-50"
            >
              Contact Sales
              <ArrowRight size={19} />
            </a>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-sky-700"
            >
              Send Your Requirement
            </a>

          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-3 font-semibold uppercase tracking-widest text-sky-600">
            Our Product Range
          </p>

          <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">
            Passives & Semiconductors
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Looking for a specific component? Share the manufacturer part
            number, component details or your BOM with our sales team.
            We will help you with availability and quotation.
          </p>

        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="mb-3 font-semibold uppercase tracking-widest text-sky-600">
              Component Categories
            </p>

            <h2 className="mb-5 text-4xl font-bold text-gray-900">
              What Are You Looking For?
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
              We can help source components for your prototype,
              development or production requirements.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
                >

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>

                  <p className="mb-6 flex-grow leading-7 text-gray-600">
                    {category.description}
                  </p>

                  <a
                    href="#contact-sales"
                    className="inline-flex items-center gap-2 font-semibold text-sky-600 hover:text-sky-800"
                  >
                    Contact Sales
                    <ArrowRight size={17} />
                  </a>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* BOM SOURCING */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <p className="mb-3 font-semibold uppercase tracking-widest text-sky-400">
                Need Multiple Components?
              </p>

              <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                Send Us Your BOM
              </h2>

              <p className="mb-7 text-lg leading-8 text-slate-300">
                You don't need to search for every component individually.
                Send your BOM or component list to our sales team and
                we'll help you with sourcing and quotation.
              </p>

              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-7 py-3 font-bold text-white transition hover:bg-sky-400"
              >
                Send BOM / Requirement
                <ArrowRight size={18} />
              </a>

            </div>

            <div className="rounded-2xl bg-white p-7 text-gray-900 shadow-xl">

              <h3 className="mb-6 text-xl font-bold">
                We Can Help With
              </h3>

              <div className="space-y-4">

                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={21}
                      className="mt-0.5 shrink-0 text-sky-600"
                    />

                    <span className="text-gray-700">
                      {benefit}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CONTACT SALES */}
      <section
        id="contact-sales"
        className="bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-3 font-semibold uppercase tracking-widest text-sky-600">
            Need Help?
          </p>

          <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">
            Talk to Our Sales Team
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-600">
            Send us your part number, quantity or BOM. Tell us what you
            need and our team will get back to you with the next steps.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-8 py-4 font-bold text-white shadow-md transition hover:bg-sky-700"
            >
              Request a Quote
              <ArrowRight size={19} />
            </a>

            <a
              href="https://wa.me/918123663810?text=Hello%20Tesseract%20Electronics%2C%20I%20would%20like%20to%20enquire%20about%20electronic%20components."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-8 py-4 font-bold text-white shadow-md transition hover:bg-green-600"
            >
              WhatsApp Sales
            </a>

          </div>

          <p className="mt-6 text-sm text-gray-500">
            Bengaluru, Karnataka • Serving customers across India
          </p>

        </div>
      </section>

    </main>
  );
}