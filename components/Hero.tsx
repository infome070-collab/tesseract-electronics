
import {
  ArrowRight,
  CheckCircle2,
  CircuitBoard,
  Cpu,
  Layers3,
  PackageSearch,
  ScanSearch,
} from "lucide-react";

const services = [
  "PCB Design",
  "PCB Fabrication",
  "PCB Assembly",
  "Components Sourcing",
  "Reverse Engineering",
];

const highlights = [
  {
    icon: CircuitBoard,
    title: "PCB Design",
    description: "Engineering & layout",
  },
  {
    icon: Layers3,
    title: "PCB Fabrication",
    description: "Prototype to production",
  },
  {
    icon: Cpu,
    title: "PCB Assembly",
    description: "SMT, THT & mixed",
  },
  {
    icon: PackageSearch,
    title: "Component Sourcing",
    description: "BOM-based procurement",
  },
];

const whatsappUrl =
  "https://wa.me/918123663810?text=Hello%20Tesseract%20Electronics%2C%20I%20would%20like%20to%20discuss%20my%20electronics%20requirement.";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      {/* Background artwork */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/pcb%20bg1.jpg')" }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900/95 to-blue-950"
        aria-hidden="true"
      />

      <div
        className="absolute -right-40 -top-40 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
        {/* Left: Main message */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Electronics Engineering & Supply
          </div>

          <h1 className="mt-7 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            One Stop Solution for{" "}
            <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
              EMS & Electronics
            </span>{" "}
            Requirements
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            From PCB design and fabrication to assembly, component sourcing
            and reverse engineering, we support your electronics requirements
            from prototype to production.
          </p>

          {/* Core services */}
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 text-sm font-medium text-slate-200"
              >
                <CheckCircle2
                  size={16}
                  className="shrink-0 text-sky-400"
                />
                {service}
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#contact"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Get a Quote
              <ArrowRight size={18} />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-lg border border-white/25 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              Enquire on WhatsApp
            </a>

            <a
              href="#services"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold text-sky-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              Explore Our Services
              <ArrowRight size={17} />
            </a>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-400">
            Have a BOM, Gerber file or part number? Share your requirement
            with our team for a quotation.
          </p>
        </div>

        {/* Right: Capability panel */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-md sm:p-7">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                  Our Capabilities
                </p>
                <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                  From Concept to Production
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Integrated support for your electronics projects.
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/15 text-sky-300">
                <CircuitBoard size={27} />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-blue-400/40 hover:bg-blue-500/[0.08]"
                  >
                    <Icon size={23} className="text-sky-300" />

                    <h3 className="mt-3 text-sm font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-xl border border-sky-400/20 bg-sky-400/[0.07] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-sky-300">
                <ScanSearch size={22} />
              </div>

              <div>
                <h3 className="text-sm font-bold">
                  Reverse Engineering
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  PCB analysis, BOM extraction and design recreation support.
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
              <p className="text-xs font-medium text-slate-400">
                We Deliver More than Expected
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-sky-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                Discuss your project
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
