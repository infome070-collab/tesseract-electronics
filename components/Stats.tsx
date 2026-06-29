"use client";

import { CircuitBoard, Package, Users, Headphones } from "lucide-react";

const stats = [
  {
    icon: CircuitBoard,
    number: "100+",
    title: "PCB Projects",
  },
  {
    icon: Package,
    number: "10,000+",
    title: "Electronic Components",
  },
  {
    icon: Users,
    number: "25+",
    title: "Industry Partners",
  },
  {
    icon: Headphones,
    number: "24/7",
    title: "Technical Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-sky-700 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Company Highlights
          </h2>

          <p className="mt-4 text-lg text-sky-100">
            Delivering quality PCB solutions and electronic components across India.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-xl bg-white p-8 text-center shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Icon
                  className="mx-auto mb-5 text-sky-600"
                  size={48}
                />

                <h3 className="text-4xl font-bold text-sky-700">
                  {item.number}
                </h3>

                <p className="mt-3 text-lg font-medium text-gray-700">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}