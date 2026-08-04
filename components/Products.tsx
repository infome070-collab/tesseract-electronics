
import {
  Cpu,
  Microchip,
  Cable,
  PackageCheck,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    icon: Cpu,
    title: "Electronic Components",
    description:
      "ICs, microcontrollers, sensors, connectors, relays, resistors, capacitors and other electronic components.",
    cta: "Request Component Quote",
  },
  {
    icon: Microchip,
    title: "Development Boards",
    description:
      "Evaluation kits, development boards and embedded platforms for rapid prototyping and product development.",
    cta: "Find a Development Board",
  },
  {
    icon: Cable,
    title: "Connectors & Cables",
    description:
      "Industrial connectors, wire harnesses and cable assemblies for electronic and industrial applications.",
    cta: "Request Cable Quote",
  },
  {
    icon: PackageCheck,
    title: "BOM Fulfilment",
    description:
      "Complete BOM sourcing, procurement and logistics support for prototype, small-batch and production requirements.",
    cta: "Send Your BOM",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-sky-600">
            Component Sourcing
          </p>

          <h2 className="mb-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Electronic Components & Products
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
            We help businesses source electronic components and engineering
            products from trusted manufacturers and suppliers.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <div
                key={product.title}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl"
              >

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">
                  <Icon size={30} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="mb-6 flex-grow leading-7 text-gray-600">
                  {product.description}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-semibold text-sky-600 transition hover:text-sky-800"
                >
                  {product.cta}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

              </div>
            );
          })}
        </div>

        {/* Part Number CTA */}
        <div className="mt-14 overflow-hidden rounded-2xl bg-slate-900 px-6 py-10 text-center text-white shadow-xl md:px-10">
          <p className="mb-2 font-semibold uppercase tracking-widest text-sky-300">
            Need a Specific Component?
          </p>

          <h3 className="mb-4 text-2xl font-bold md:text-3xl">
            Send Us Your Part Number
          </h3>

          <p className="mx-auto mb-7 max-w-2xl leading-7 text-slate-300">
            Have a manufacturer part number, BOM or component list?
            Send your requirement to our sourcing team and we will check
            availability and provide a quotation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-7 py-3 font-bold text-white transition hover:bg-sky-400"
            >
              Send Part Number
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/918123663810?text=Hello%20Tesseract%20Electronics%2C%20I%20need%20a%20quotation%20for%20electronic%20components."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-7 py-3 font-bold text-white transition hover:bg-green-600"
            >
              WhatsApp Requirement
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
