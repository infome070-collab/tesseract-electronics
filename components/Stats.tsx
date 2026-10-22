
"use client";

import { CircuitBoard, Package, Workflow } from "lucide-react";

const highlights = [
  {
    icon: CircuitBoard,
    title: "PCB Solutions",
    description:
      "Design, fabrication and assembly support for electronics projects.",
  },
  {
    icon: Package,
    title: "Component Sourcing",
    description:
      "Electronic component sourcing based on your BOM and requirements.",
  },
  {
    icon: Workflow,
    title: "End-to-End Support",
    description:
      "From reverse engineering and prototyping to production coordination.",
  },
];

export default function Stats() {
  return (
    <section className="bg-sky-700 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
            Why Tesseract Electronics
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Electronics Solutions Under One Roof
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-sky-100 sm:text-lg">
            Supporting businesses with PCB services, component sourcing
            and practical solutions for electronics development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/15 bg-white p-7 text-center text-slate-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-100">
                  <Icon size={32} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
