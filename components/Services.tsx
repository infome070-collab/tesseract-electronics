import {
  Cpu,
  CircuitBoard,
  Factory,
  Package,
} from "lucide-react";

const services = [
  {
    icon: <CircuitBoard size={42} />,
    title: "PCB Design",
    description:
      "High-speed, multilayer and embedded PCB design using industry-standard CAD tools.",
  },
  {
    icon: <Factory size={42} />,
    title: "PCB Fabrication",
    description:
      "Prototype and production PCB manufacturing with excellent quality and fast turnaround.",
  },
  {
    icon: <Cpu size={42} />,
    title: "PCB Assembly",
    description:
      "SMT, Through-Hole and mixed technology PCB assembly with complete testing support.",
  },
  {
    icon: <Package size={42} />,
    title: "Component Sourcing",
    description:
      "Authorized electronic component sourcing and complete BOM fulfilment from trusted brands.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold text-sky-600">
          Our Services
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-center text-gray-600">
          We provide complete electronic manufacturing solutions from PCB
          design to final assembly and component sourcing.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 text-sky-600">
                {service.icon}
              </div>

              <h3 className="mb-4 text-xl font-bold">
                {service.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}