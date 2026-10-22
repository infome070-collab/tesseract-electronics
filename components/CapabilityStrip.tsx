
import {
  CircuitBoard,
  Layers3,
  Cpu,
  PackageSearch,
  ScanSearch,
  ArrowUpRight,
} from "lucide-react";

const capabilities = [
  {
    icon: CircuitBoard,
    title: "PCB Design",
    description: "Schematic and PCB layout support",
  },
  {
    icon: Layers3,
    title: "PCB Fabrication",
    description: "Prototype and production PCBs",
  },
  {
    icon: Cpu,
    title: "PCB Assembly",
    description: "SMT, through-hole and mixed assembly",
  },
  {
    icon: PackageSearch,
    title: "Components Sourcing",
    description: "BOM fulfilment and component supply",
  },
  {
    icon: ScanSearch,
    title: "Reverse Engineering",
    description: "PCB analysis and design recreation",
  },
];

export default function CapabilityStrip() {
  return (
    <section
      aria-label="Our capabilities"
      className="relative z-10 border-y border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              What We Do
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Complete Electronics Support
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Engineering, PCB manufacturing and component sourcing
            support for your electronics requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex gap-4 py-5 sm:px-4 lg:flex-col lg:px-5 lg:py-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="mt-1 shrink-0 text-slate-400 transition-colors group-hover:text-blue-700 lg:hidden"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
