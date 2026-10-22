
"use client";

import { useState } from "react";
import {
  ArrowRight,
  Cpu,
  CircuitBoard,
  Radio,
  Zap,
  PackageSearch,
} from "lucide-react";

const brandGroups = [
  {
    title: "Semiconductors",
    description: "ICs, microcontrollers and semiconductor devices",
    icon: Cpu,
    brands: [
      { name: "Analog Devices", file: "adi" },
      { name: "CDIL", file: "cdil" },
      { name: "Infineon", file: "infineon" },
      { name: "Microchip", file: "microchip" },
      { name: "Nuvoton", file: "Nuvoton" },
      { name: "NXP", file: "nxp" },
      { name: "STMicroelectronics", file: "st" },
      { name: "Maxim Integrated", file: "maxim integrated" },
      { name: "onsemi", file: "onsemi" },
      { name: "Nexperia", file: "nexperia" },
      { name: "Toshiba", file: "toshiba" },
      { name: "Renesas", file: "Renesas" },
      { name: "Texas Instruments", file: "ti" },
    ],
  },
  {
    title: "Passive Components",
    description: "Resistors, capacitors, inductors and protection",
    icon: Zap,
    brands: [
      { name: "TDK", file: "tdk" },
      { name: "Yageo", file: "yageo" },
      { name: "Bourns", file: "bourns" },
      { name: "Würth Elektronik", file: "wurth elektronik" },
      { name: "Abracon", file: "abracon" },
      { name: "Vishay", file: "vishay" },
    ],
  },
  {
    title: "Connectors & Electromechanical",
    description: "Interconnect, switching and control components",
    icon: CircuitBoard,
    brands: [
      { name: "Molex", file: "molex" },
      { name: "Omron", file: "omron" },
      { name: "TE Connectivity", file: "te" },
      { name: "Everlight", file: "Everlight" },
    ],
  },
];

function BrandLogo({
  name,
  file,
}: {
  name: string;
  file: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="group flex min-h-24 items-center justify-center rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg">
      {!imageFailed ? (
        <img
          src={`/brand/${encodeURIComponent(file)}.png`}
          alt={`${name} logo`}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className="max-h-12 max-w-full object-contain transition duration-300 group-hover:scale-105"
        />
      ) : (
        <span className="text-center text-sm font-bold text-slate-700">
          {name}
        </span>
      )}
    </div>
  );
}

export default function Brands() {
  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-slate-50 px-6 py-20 md:py-24"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            <PackageSearch size={15} />
            Component Sourcing
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Electronic Component{" "}
            <span className="text-sky-600">Brands</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            We support component sourcing enquiries across a range of
            semiconductor, passive component and electromechanical
            manufacturers. Share your part numbers or BOM for a quotation.
          </p>
        </div>

        {/* Brand categories */}
        <div className="space-y-10">
          {brandGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                      <Icon size={25} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-sm font-semibold text-slate-400">
                    {group.brands.length} manufacturers
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {group.brands.map((brand) => (
                    <BrandLogo
                      key={brand.name}
                      name={brand.name}
                      file={brand.file}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enquiry CTA */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-sky-900 px-6 py-10 text-center shadow-xl md:px-12 md:py-14">
          <div className="pointer-events-none absolute -right-10 -top-20 h-56 w-56 rounded-full border border-white/10" />

          <div className="relative">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-sky-300 ring-1 ring-white/15">
              <Radio size={28} />
            </div>

            <h3 className="text-2xl font-extrabold text-white md:text-3xl">
              Can't Find Your Required Component?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Send us your manufacturer part number or BOM. We'll review
              your requirements and help check sourcing options, availability
              and suitable alternatives where appropriate.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-7 py-3.5 font-bold text-white transition hover:bg-sky-400"
            >
              Send Your BOM or Part Number
              <ArrowRight size={18} />
            </a>

            <p className="mt-5 text-xs leading-6 text-slate-400">
              Manufacturer names are shown for component identification and
              sourcing enquiries. Authorised-distributor status is not implied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
