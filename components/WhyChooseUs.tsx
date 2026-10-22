
import {
  ShieldCheck,
  Clock3,
  BadgeDollarSign,
  Cpu,
  Truck,
  Headset,
  CircuitBoard,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: CircuitBoard,
    number: "01",
    title: "End-to-End PCB Support",
    description:
      "One point of contact for PCB design, fabrication and assembly, helping simplify your electronics development process.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Component Sourcing",
    description:
      "BOM-based sourcing support for electronic components, with attention to part numbers, specifications and availability.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Quality-Focused Approach",
    description:
      "We focus on clear specifications, careful requirement review and suitable manufacturing and sourcing options.",
  },
  {
    icon: Clock3,
    number: "04",
    title: "Responsive Coordination",
    description:
      "Clear communication on enquiries, supplier lead times and project requirements to help you plan with confidence.",
  },
  {
    icon: BadgeDollarSign,
    number: "05",
    title: "Practical Solutions",
    description:
      "We work with your technical requirements and budget to explore suitable component and PCB project options.",
  },
  {
    icon: Headset,
    number: "06",
    title: "Customer-Focused Support",
    description:
      "Personalized assistance from initial enquiry through requirement clarification and order coordination.",
  },
];

const capabilities = [
  "PCB Design",
  "PCB Fabrication",
  "PCB Assembly",
  "Components Sourcing",
  "Reverse Engineering",
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:py-24">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Introduction */}
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
              <ShieldCheck size={15} />
              The Tesseract Advantage
            </span>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Why Choose{" "}
              <span className="text-sky-600">
                Tesseract Electronics?
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              We help businesses source electronic components and coordinate
              PCB projects through a customer-focused approach built around
              technical requirements, clear communication and practical
              solutions.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Support across key stages of PCB development",
                "BOM and specification-based component enquiries",
                "Solutions tailored to your project requirements",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-sky-600"
                  />
                  <p className="text-sm font-medium leading-6 text-slate-700 md:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
            >
              Discuss Your Requirements
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Feature cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/5"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition group-hover:bg-sky-600 group-hover:text-white">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <span className="text-xs font-bold tracking-widest text-slate-300">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Capability banner */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-950 via-blue-950 to-sky-900 p-7 md:p-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                Our Core Capabilities
              </p>

              <h3 className="text-2xl font-extrabold text-white md:text-3xl">
                From Components to PCB Solutions
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                Tell us what your project needs. We’ll work with you to
                understand the requirement and discuss the available options.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-sky-800 transition hover:bg-sky-50"
            >
              Contact Our Team
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-white/15 pt-6">
            {capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-sm font-medium italic text-slate-500">
          We Deliver More than Expected
        </p>
      </div>
    </section>
  );
}
