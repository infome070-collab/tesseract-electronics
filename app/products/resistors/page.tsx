import { ArrowRight, CheckCircle2 } from "lucide-react";

const resistorTypes = [
  "SMD / Chip Resistors",
  "Through-Hole Resistors",
  "Thick Film Resistors",
  "Thin Film Resistors",
  "Metal Film Resistors",
  "Wirewound Resistors",
  "Power Resistors",
  "Precision Resistors",
];

const applications = [
  "Industrial Automation",
  "Embedded Electronics",
  "Power Electronics",
  "Automotive Electronics",
  "Instrumentation",
  "Consumer Electronics",
];

export default function ResistorsPage() {
  return (
    <main className="bg-slate-50">

      {/* HERO */}
      <section className="bg-sky-700 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-4 font-semibold uppercase tracking-widest text-sky-200">
            Electronic Components
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Resistors Supplier & Sourcing
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-sky-100">
            Source SMD, through-hole, precision and power resistors for
            prototypes, production and industrial electronics applications.
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
            Resistor Sourcing
          </p>

          <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">
            Resistors for Prototype & Production
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Tesseract Electronics helps businesses source resistors based on
            manufacturer part numbers, specifications, BOMs and project
            requirements. Tell us what you need and our sales team can help
            with availability and quotation.
          </p>

        </div>
      </section>

      {/* TYPES */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="mb-3 font-semibold uppercase tracking-widest text-sky-600">
              Product Range
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Types of Resistors We Can Source
            </h2>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {resistorTypes.map((type) => (
              <div
                key={type}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-sky-600"
                />

                <span className="font-semibold text-gray-800">
                  {type}
                </span>
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
              Resistor Specifications
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              Share your required specifications with our sales team and
              we'll help you find the right component.
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Resistance Value",
              "Tolerance",
              "Power Rating",
              "Package / Footprint",
              "Temperature Coefficient",
              "Operating Temperature",
              "Voltage Rating",
              "Required Quantity",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-slate-50 p-6 text-center font-semibold text-gray-800"
              >
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
              Resistors for Multiple Industries
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
            Need Resistors for Your Project?
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
            Tesseract Electronics • Bengaluru, Karnataka • Serving customers across India
          </p>

        </div>
      </section>

    </main>
  );
}