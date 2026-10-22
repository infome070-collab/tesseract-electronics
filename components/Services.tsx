
import {
  Cpu,
  CircuitBoard,
  Factory,
  PackageSearch,
  ScanSearch,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: CircuitBoard,
    title: "PCB Design",
    description:
      "Transform your concept into a PCB design aligned with your technical and manufacturing requirements.",
    features: [
      "Schematic and PCB layout",
      "Component selection support",
      "Design for manufacturability",
    ],
    cta: "Discuss Your PCB",
  },
  {
    number: "02",
    icon: Factory,
    title: "PCB Fabrication",
    description:
      "PCB fabrication support for prototype development and production requirements based on your specifications.",
    features: [
      "Single and double-sided PCBs",
      "Multilayer PCB requirements",
      "Prototype and production orders",
    ],
    cta: "Get PCB Quote",
  },
  {
    number: "03",
    icon: Cpu,
    title: "PCB Assembly",
    description:
      "Assembly support for electronic boards, with component procurement and manufacturing coordination.",
    features: [
      "SMT assembly",
      "Through-hole assembly",
      "Mixed-technology assembly",
    ],
    cta: "Request Assembly Quote",
  },
  {
    number: "04",
    icon: PackageSearch,
    title: "Components Sourcing",
    description:
      "Component sourcing support for production BOMs, development projects and specific part-number requirements.",
    features: [
      "Active and passive components",
      "BOM-based procurement",
      "Alternate and hard-to-find parts",
    ],
    cta: "Send Your BOM",
  },
  {
    number: "05",
    icon: ScanSearch,
    title: "Reverse Engineering",
    description:
      "Technical support for analysing existing PCBs and recreating designs based on available reference material.",
    features: [
      "PCB and component analysis",
      "BOM extraction support",
      "Schematic and layout recreation",
    ],
    cta: "Discuss Your Requirement",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Engineering · Manufacturing · Sourcing
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Electronics Solutions,{" "}
            <span className="text-blue-700">All in One Place</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            From PCB design and fabrication to assembly, component sourcing
            and reverse engineering, we support your electronics requirements
            from prototype to production.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-bold tracking-widest text-slate-300">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-blue-600"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className="mt-7 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-bold text-blue-700 transition-colors hover:text-blue-900"
                >
                  {service.cta}
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </article>
            );
          })}
        </div>

        {/* Enquiry banner */}
        <div className="relative mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-950 via-blue-950 to-blue-800 px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:px-12">
          <div
            className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
              Have a requirement?
            </p>

            <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Have a Project, PCB File or BOM?
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Share your part numbers, BOM, Gerber files or reference PCB
              images. Our team can review your requirement for quotation.
            </p>
          </div>

          <div className="relative mt-7 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
            <a
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-blue-950 transition hover:bg-sky-100"
            >
              Send Your Requirement
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/918123663810?text=Hello%20Tesseract%20Electronics%2C%20I%20have%20an%20electronics%20requirement."
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
