"use client";

import {
  ShieldCheck,
  Clock3,
  BadgeDollarSign,
  Cpu,
  Truck,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "High Quality",
    description:
      "Strict quality checks ensure reliable PCB fabrication and assembly.",
  },
  {
    icon: Clock3,
    title: "Fast Turnaround",
    description:
      "Quick prototype and production delivery to meet project deadlines.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    description:
      "Affordable pricing without compromising quality or reliability.",
  },
  {
    icon: Cpu,
    title: "Engineering Expertise",
    description:
      "Experienced support for PCB design, BOM optimization and sourcing.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    description:
      "Trusted component sourcing with dependable delivery across India.",
  },
  {
    icon: Headset,
    title: "Technical Support",
    description:
      "Dedicated assistance before, during and after project completion.",
  },
];

export default function WhyChooseUs() {
  return (
  <section className="bg-white py-20">
    <div className="mx-auto max-w-7xl px-6">

      <div className="mb-14 text-center">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-sky-700">
            Why Choose Tesseract Electronics?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            We deliver dependable PCB and electronic manufacturing solutions with
            quality, speed and technical excellence.
          </p>
        </div>
</div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-full bg-sky-100 p-4">
                  <Icon className="text-sky-600" size={34} />
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
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