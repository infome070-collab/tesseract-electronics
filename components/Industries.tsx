
import {
  Factory,
  Cpu,
  Car,
  HeartPulse,
  Radio,
  Zap,
  BatteryCharging,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Industrial Automation",
    description:
      "Electronic components, PCB assembly and control solutions for industrial automation systems.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description:
      "Components, development platforms and PCB solutions for embedded product development.",
  },
  {
    icon: Car,
    title: "Automotive Electronics",
    description:
      "Electronic components and PCB solutions for automotive and mobility applications.",
  },
  {
    icon: HeartPulse,
    title: "Medical Electronics",
    description:
      "Reliable electronic sourcing and PCB manufacturing support for medical equipment applications.",
  },
  {
    icon: Radio,
    title: "Telecommunication",
    description:
      "Components and PCB solutions for communication, networking and telecom equipment.",
  },
  {
    icon: Zap,
    title: "Power Electronics",
    description:
      "Components and PCB solutions for power supplies, converters and energy management systems.",
  },
  {
    icon: BatteryCharging,
    title: "Energy Sector",
    description:
      "Electronic components and manufacturing support for renewable energy and energy management products.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-slate-50 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-sky-600">
            Applications
          </p>

          <h2 className="mb-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Industries We Serve
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
            Our engineering and sourcing capabilities support businesses
            across industries requiring reliable electronic components,
            PCB design and manufacturing solutions.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">
                  <Icon size={29} strokeWidth={2} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {industry.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {industry.description}
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-sky-600 transition hover:text-sky-800"
                >
                  Discuss Your Requirement
                  <ArrowRight
                    size={17}
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
            Looking for Electronics Manufacturing Support?
          </h3>

          <p className="mx-auto mb-6 max-w-2xl leading-7 text-sky-100">
            Tell us about your application, component requirement or PCB
            project. Our team can help you with sourcing, manufacturing
            and assembly.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 font-bold text-sky-700 transition hover:bg-sky-50"
          >
            Talk to Our Team
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
