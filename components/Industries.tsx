
import {
  Factory,
  Cpu,
  Car,
  HeartPulse,
  Radio,
  Zap,
  BatteryCharging,
  TrainFront,
  Scale,
  ArrowRight,
  CircuitBoard,
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    number: "01",
    title: "Industrial Automation",
    description:
      "Electronic components and PCB solutions for industrial controllers, automation equipment and control systems.",
    tags: ["Control Systems", "Industrial Boards"],
  },
  {
    icon: Scale,
    number: "02",
    title: "Weighing Systems",
    description:
      "Component sourcing and PCB support for electronic weighing scales, measurement instruments and precision systems.",
    tags: ["Weighing Scales", "Instrumentation"],
  },
  {
    icon: Cpu,
    number: "03",
    title: "Embedded Systems",
    description:
      "Components, development platforms and PCB solutions for embedded hardware, prototyping and product development.",
    tags: ["Microcontrollers", "Prototyping"],
  },
  {
    icon: Car,
    number: "04",
    title: "Automotive & EV Electronics",
    description:
      "Component sourcing and PCB design, fabrication and assembly support for automotive and electric mobility applications.",
    tags: ["Automotive", "EV Systems"],
  },
  {
    icon: TrainFront,
    number: "05",
    title: "Railway & Transportation",
    description:
      "Electronic component sourcing and PCB manufacturing support for transportation and railway-related electronics projects.",
    tags: ["Transportation", "Electronic Systems"],
  },
  {
    icon: HeartPulse,
    number: "06",
    title: "Medical Electronics",
    description:
      "Component sourcing and PCB project support for medical equipment development and electronic instrumentation.",
    tags: ["Medical Equipment", "Instrumentation"],
  },
  {
    icon: Radio,
    number: "07",
    title: "Telecommunications",
    description:
      "Electronic components and PCB solutions for communication equipment, networking devices and connectivity systems.",
    tags: ["Communication", "Networking"],
  },
  {
    icon: Zap,
    number: "08",
    title: "Power Electronics",
    description:
      "Component sourcing and PCB support for power supplies, converters, control circuits and power management systems.",
    tags: ["Power Supplies", "Converters"],
  },
  {
    icon: BatteryCharging,
    number: "09",
    title: "Energy & Renewables",
    description:
      "Electronic component sourcing and PCB support for energy monitoring, renewable energy and power management applications.",
    tags: ["Energy Systems", "Monitoring"],
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-slate-50 px-6 py-20 md:py-24"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
            <CircuitBoard size={15} />
            Industry Applications
          </span>

          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Electronics Solutions for{" "}
            <span className="text-sky-600">Multiple Industries</span>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            From component sourcing to PCB design, fabrication and assembly,
            Tesseract Electronics supports businesses developing electronic
            products across a wide range of applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/5 md:p-7"
              >
                <div className="absolute right-6 top-5 text-sm font-bold tracking-widest text-slate-200 transition group-hover:text-sky-200">
                  {industry.number}
                </div>

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100 text-sky-700 ring-1 ring-sky-100 transition duration-300 group-hover:from-sky-600 group-hover:to-blue-700 group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <h3 className="mb-3 pr-4 text-xl font-bold leading-snug text-slate-900">
                  {industry.title}
                </h3>

                <p className="flex-1 text-sm leading-7 text-slate-600 md:text-base">
                  {industry.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {industry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-bold text-sky-700 transition hover:text-sky-900"
                >
                  Discuss Your Requirement
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </article>
            );
          })}
        </div>

        <div className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-sky-900 px-6 py-10 text-center shadow-xl md:px-12 md:py-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-5 -top-14 h-44 w-44 rounded-full border border-white/10" />

          <div className="relative">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
              Your Electronics Project, Our Support
            </p>

            <h3 className="mb-4 text-2xl font-extrabold text-white md:text-3xl">
              Looking for a Reliable Electronics Partner?
            </h3>

            <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Share your BOM, PCB files or project requirements with us.
              Let’s discuss component sourcing, PCB design, fabrication,
              assembly or reverse engineering for your application.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-sky-950/30 transition hover:bg-sky-400"
            >
              Discuss Your Project
              <ArrowRight size={18} />
            </a>

            <p className="mt-5 text-sm font-medium text-slate-400">
              We Deliver More than Expected
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
