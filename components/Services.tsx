
import {
  Cpu,
  CircuitBoard,
  Factory,
  Package,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: CircuitBoard,
    title: "PCB Design",
    description:
      "High-speed, multilayer and embedded PCB design using industry-standard CAD tools for reliable and production-ready boards.",
    cta: "Discuss Your PCB",
  },
  {
    icon: Factory,
    title: "PCB Fabrication",
    description:
      "Prototype and production PCB manufacturing with quality control, competitive pricing and dependable turnaround.",
    cta: "Get PCB Quote",
  },
  {
    icon: Cpu,
    title: "PCB Assembly",
    description:
      "SMT, Through-Hole and mixed-technology PCB assembly with component sourcing and testing support.",
    cta: "Request Assembly Quote",
  },
  {
    icon: Package,
    title: "Component Sourcing",
    description:
      "Electronic component sourcing and BOM fulfilment from trusted manufacturers and suppliers at competitive prices.",
    cta: "Send Your BOM",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-sky-600">
            What We Do
          </p>

          <h2 className="mb-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Our Services
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
            Complete electronics solutions from PCB design and manufacturing
            to assembly and electronic component sourcing.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl"
              >

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">
                  <Icon size={30} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-6 flex-grow leading-7 text-gray-600">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-semibold text-sky-600 transition hover:text-sky-800"
                >
                  {service.cta}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-2xl bg-sky-700 px-6 py-10 text-center text-white shadow-lg md:px-10">
          <h3 className="mb-3 text-2xl font-bold md:text-3xl">
            Have a Project or BOM?
          </h3>

          <p className="mx-auto mb-6 max-w-2xl text-sky-100">
            Send us your PCB files, BOM or component requirement.
            Our team will review your requirement and provide a quotation.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 font-bold text-sky-700 transition hover:bg-sky-50"
          >
            Send Your Requirement
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
