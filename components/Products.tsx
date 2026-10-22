
import {
  Cpu,
  CircuitBoard,
  Cable,
  PackageCheck,
  ArrowRight,
  Zap,
  Boxes,
  Database,
  Magnet,
  Waves,
  ShieldCheck,
} from "lucide-react";

const products = [
  {
    icon: Cpu,
    title: "Electronic Components",
    description:
      "ICs, microcontrollers, sensors, resistors, capacitors, relays and other components for electronic applications.",
    cta: "Request Component Quote",
  },
  {
    icon: CircuitBoard,
    title: "Development Boards",
    description:
      "Development boards, evaluation kits and embedded platforms for prototyping and product development.",
    cta: "Enquire About Boards",
  },
  {
    icon: Cable,
    title: "Connectors & Cables",
    description:
      "Electronic connectors, interconnects and cable solutions for industrial and electronic applications.",
    cta: "Request Cable Quote",
  },
  {
    icon: PackageCheck,
    title: "BOM Fulfilment",
    description:
      "Part-number-based sourcing and BOM procurement support for prototype and production requirements.",
    cta: "Send Your BOM",
  },
];

const categories = [
  {
    icon: Zap,
    title: "Power Management",
    description:
      "Power ICs, regulators, converters, MOSFETs and battery management components.",
  },
  {
    icon: Cpu,
    title: "Discrete Semiconductors",
    description:
      "Diodes, transistors, rectifiers, TVS protection and ESD protection devices.",
  },
  {
    icon: Database,
    title: "Memory",
    description:
      "EEPROM, SPI memory and other memory components based on your requirements.",
  },
  {
    icon: Magnet,
    title: "Inductors",
    description:
      "Chip inductors, common-mode chokes, power inductors and ferrite beads.",
  },
  {
    icon: Waves,
    title: "Crystals & Oscillators",
    description:
      "Crystal components, ceramic resonators, TCXO, VCXO and OCXO.",
  },
  {
    icon: ShieldCheck,
    title: "Fuses & Protection",
    description:
      "Resettable PTC fuses and other circuit protection components.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Component Sourcing & BOM Support
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Electronic Components{" "}
            <span className="text-blue-700">& Products</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Source electronic components for development, maintenance and
            production requirements through our component sourcing service.
          </p>
        </div>

        {/* Main product cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <article
                key={product.title}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {product.title}
                </h3>

                <p className="mt-3 flex-grow text-sm leading-7 text-slate-600">
                  {product.description}
                </p>

                <a
                  href="/#contact"
                  className="mt-6 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-bold text-blue-700 hover:text-blue-900"
                >
                  {product.cta}
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </article>
            );
          })}
        </div>

        {/* Product Tree image */}
        <div className="mt-20">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                Explore Our Portfolio
              </p>

              <h3 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Electronic Component Product Tree
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Explore our component classification across power management,
                discrete semiconductors, memory, inductors, crystals and
                circuit protection.
              </p>
            </div>

            <a
              href="/#contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800 md:self-auto"
            >
              Enquire About Components
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm sm:p-4">
            <img
              src="/product-tree.png"
              alt="Tesseract Electronics product tree showing power management ICs, discrete semiconductors, memory, inductors, crystals and fuses"
              loading="lazy"
              className="mx-auto h-auto w-full max-w-5xl rounded-lg object-contain"
            />
          </div>

          <p className="mt-3 text-center text-xs leading-5 text-slate-500">
            Product categories shown for reference. Availability and
            specifications are confirmed against each enquiry.
          </p>
        </div>

        {/* Category cards */}
        <div className="mt-14">
          <div className="mb-7">
            <h3 className="text-2xl font-bold text-slate-900">
              Explore Component Categories
            </h3>
            <p className="mt-2 text-slate-600">
              Looking for a specific component family? Start here.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <a
                  key={category.title}
                  href="/#contact"
                  className="group flex gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:bg-blue-50/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      {category.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {category.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                      Enquire now
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* BOM enquiry banner */}
        <div className="relative mt-16 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-950 via-blue-950 to-blue-800 px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:px-12">
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
              Component Sourcing
            </p>

            <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Looking for a Specific Part?
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Send us your manufacturer part number, BOM or component
              specification. We will review your requirement and respond
              with availability and quotation details where possible.
            </p>

            <p className="mt-4 text-sm text-slate-300">
              BOM · Part Number · Quantity · Datasheet
            </p>
          </div>

          <div className="relative mt-7 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
            <a
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-blue-950 transition hover:bg-sky-100"
            >
              Send Your BOM
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/918123663810?text=Hello%20Tesseract%20Electronics%2C%20I%20need%20a%20quotation%20for%20electronic%20components."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
