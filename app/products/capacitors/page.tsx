import { ArrowRight, CheckCircle2 } from "lucide-react";

const capacitorTypes = [
  {
    name: "Ceramic / MLCC Capacitors",
    image: "/products/capacitors/mlcc.png",
    description: "Compact ceramic capacitors for high-volume PCB and electronic applications.",
  },
  {
    name: "Electrolytic Capacitors",
    image: "/products/capacitors/electrolytic.png",
    description: "Polarized capacitors for power supply filtering and energy storage.",
  },
  {
    name: "Tantalum Capacitors",
    image: "/products/capacitors/tantalum.png",
    description: "Compact, stable capacitors for space-constrained electronic designs.",
  },
  {
    name: "Film Capacitors",
    image: "/products/capacitors/film.png",
    description: "Reliable capacitors for filtering, coupling and power applications.",
  },
  {
    name: "Polymer Capacitors",
    image: "/products/capacitors/polymer.png",
    description: "Low-ESR capacitors for modern power and high-performance electronics.",
  },
  {
    name: "Aluminium Capacitors",
    image: "/products/capacitors/aluminium.png",
    description: "General-purpose and high-performance aluminium capacitors.",
  },
  {
    name: "Supercapacitors",
    image: "/products/capacitors/supercapacitor.png",
    description: "High-capacitance energy storage solutions for specialized applications.",
  },
  {
    name: "Safety Capacitors",
    image: "/products/capacitors/safety.png",
    description: "X and Y safety capacitors for power and mains-related applications.",
  },
];

const specifications = [
  "Capacitance Value",
  "Voltage Rating",
  "Tolerance",
  "Package / Footprint",
  "Temperature Rating",
  "ESR",
  "Ripple Current",
  "Required Quantity",
];

const applications = [
  "Industrial Automation",
  "Power Electronics",
  "Embedded Electronics",
  "Automotive Electronics",
  "Consumer Electronics",
  "LED & Lighting",
];

export default function CapacitorsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-sky-700 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-widest text-sky-200">
            Electronic Components
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Capacitors Supplier & Sourcing
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-sky-100">
            Source ceramic, MLCC, electrolytic, tantalum, film, polymer and
            other capacitors for prototypes, production and industrial
            electronics applications.
          </p>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-bold text-sky-700 shadow-lg hover:bg-sky-50"
          >
            Request a Quote
            <ArrowRight size={19} />
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-sky-600">
            Capacitor Sourcing
          </p>

          <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">
            Capacitors for Prototype & Production
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Tesseract Electronics helps businesses source capacitors based on
            manufacturer part numbers, specifications, BOMs and project
            requirements. Share your requirement with us and our sales team
            can help with availability and quotation.
          </p>
        </div>
      </section>

      {/* TYPES WITH IMAGES */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-sky-600">
              Product Range
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Types of Capacitors We Can Source
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              We can source a wide range of capacitor types from leading
              manufacturers based on your technical and quantity requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capacitorTypes.map((type) => (
              <div
                key={type.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-48 items-center justify-center bg-slate-100">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="h-full w-full object-contain p-5"
                  />
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {type.name}
                  </h3>

                  <p className="mb-5 text-sm leading-6 text-gray-600">
                    {type.description}
                  </p>

                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 font-semibold text-sky-700 hover:text-sky-900"
                  >
                    Request Quote
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Capacitor Specifications
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              Share your required specifications with our sales team and
              we'll help you find the right component.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {specifications.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-slate-50 p-6 font-semibold text-gray-800"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-sky-600"
                />

                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-sky-600">
              Applications
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Capacitors for Multiple Industries
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((application) => (
              <div
                key={application}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center font-semibold text-gray-800 shadow-sm"
              >
                {application}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-700 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Need Capacitors for Your Project?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-sky-100">
            Send us your part number, specifications, quantity or BOM.
            Our sales team will get back to you.
          </p>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-sky-700 shadow-lg hover:bg-sky-50"
          >
            Contact Sales
            <ArrowRight size={19} />
          </a>

          <p className="mt-6 text-sm text-sky-200">
            Tesseract Electronics • Bengaluru, Karnataka • Serving customers
            across India
          </p>
        </div>
      </section>
    </main>
  );
}