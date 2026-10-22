
import {
  ArrowRight,
  CheckCircle2,
  CircuitBoard,
  PackageCheck,
  Settings2,
  Workflow,
} from "lucide-react";

const capabilities = [
  "Electronic Component Sourcing",
  "PCB Design & Engineering",
  "PCB Fabrication",
  "SMT & Through-Hole Assembly",
  "BOM Procurement & Fulfilment",
  "Prototype to Production Support",
  "PCB Reverse Engineering",
  "Technical Requirement Coordination",
];

const highlights = [
  {
    icon: CircuitBoard,
    title: "PCB Solutions",
    description: "Design, fabrication and assembly support",
  },
  {
    icon: PackageCheck,
    title: "Component Sourcing",
    description: "BOM and specification-based enquiries",
  },
  {
    icon: Workflow,
    title: "Project Support",
    description: "Prototype and production requirements",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 px-6 py-20 md:py-24"
    >
      <div
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Company image */}
          <div className="relative">
            <div
              className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-3xl border-l-2 border-t-2 border-sky-400/70"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-xl">
              <img
                src="/pcb%20bg1.jpg"
                alt="Printed circuit board representing electronics engineering solutions"
                className="h-[360px] w-full object-cover sm:h-[460px]"
                loading="lazy"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent"
                aria-hidden="true"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  Electronics Solutions
                </span>

                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  From Concept to Circuit Board
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-200">
                  PCB services and component sourcing for electronics
                  development and manufacturing requirements.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 right-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:right-8 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-600">
                Our Commitment
              </p>
              <p className="mt-1 text-sm font-bold text-slate-900">
                We Deliver More than Expected
              </p>
            </div>
          </div>

          {/* Company introduction */}
          <div className="pt-4 lg:pt-0">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
              <Settings2 size={15} />
              About Tesseract Electronics
            </span>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Your Electronics Partner from{" "}
              <span className="text-sky-600">
                Prototype to Production
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
              Tesseract Electronics is a Bengaluru-based electronics
              solutions company serving startups, R&D organisations,
              OEMs and industrial manufacturers across India.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
              We coordinate PCB design, fabrication, assembly, electronic
              component sourcing and reverse engineering support through
              a single point of contact. Our aim is to simplify project
              coordination and help customers address their electronics
              development and procurement requirements.
            </p>

            {/* Key strengths */}
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-sky-300 hover:shadow-md"
                  >
                    <Icon
                      size={23}
                      className="mb-3 text-sky-600"
                      aria-hidden="true"
                    />

                    <h3 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Capabilities */}
            <div className="mt-8">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
                Our Capabilities
              </h3>

              <div className="grid gap-x-5 gap-y-3 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-sky-600"
                      aria-hidden="true"
                    />

                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Discuss Your Requirements
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
