"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { CircuitBoard, Package, Users, Headphones } from "lucide-react";

const stats = [
  {
    icon: CircuitBoard,
    end: 1000,
    suffix: "+",
    title: "PCB Projects",
  },
  {
    icon: Package,
    end: 10000,
    suffix: "+",
    title: "Electronic Components",
  },
  {
    icon: Users,
    end: 50,
    suffix: "+",
    title: "Industry Partners",
  },

];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

 return (
  <section
    ref={ref}
    className="bg-sky-700 py-20 text-white"
  >
    <div className="mx-auto max-w-7xl px-1">

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
              <div key={index}>
                <div className="rounded-xl bg-white p-8 text-center shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-4xl">

                  <Icon
                    className="mx-auto mb-4 text-sky-600"
                    size={50}
                  />

                  <h3 className="text-4xl font-bold text-sky-700">
                    {inView && (
                      <CountUp
                        end={item.end}
                        duration={2}
                        separator=","
                        suffix={item.suffix}
                      />
                    )}
                  </h3>

                  <p className="mt-3 text-lg font-medium text-gray-700">
                    {item.title}
                  </p>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}