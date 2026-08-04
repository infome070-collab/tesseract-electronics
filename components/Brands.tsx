
import { ArrowRight } from "lucide-react";

const brands = [
  "adi",
  "cdil",
  "infineon",
  "microchip",
  "molex",
  "Nuvoton",
  "nxp",
  "omron",
  "st",
  "abracon",
  "bourns",
  "Everlight",
  "maxim integrated",
  "onsemi",
  "nexperia",
  "tdk",
  "wurth elektronik",
  "yageo",
  "toshiba",
  "Renesas",
  "te",
  "ti",
  "vishay",
];

export default function Brands() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">

          <p className="mb-3 font-semibold uppercase tracking-widest text-sky-600">
            Global Manufacturers
          </p>

          <h2 className="mb-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Trusted Component Brands
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
            We source genuine electronic components from leading global
            semiconductor and electronic component manufacturers through
            trusted supply channels.
          </p>

        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">

          {brands.map((brand) => (
            <div
              key={brand}
              className="group flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
            >
              <img
                src={`/brand/${brand}.png`}
                alt={brand}
                className="max-h-14 max-w-[120px] object-contain transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-2xl bg-slate-900 px-6 py-10 text-center text-white">

          <h3 className="mb-3 text-2xl font-bold">
            Can't Find Your Required Component?
          </h3>

          <p className="mx-auto mb-6 max-w-2xl leading-7 text-slate-300">
            Send us your manufacturer part number or BOM. We'll check
            availability, suggest suitable alternatives if needed, and
            provide a competitive quotation.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-7 py-3 font-bold text-white transition hover:bg-sky-400"
          >
            Send Part Number
            <ArrowRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
}
