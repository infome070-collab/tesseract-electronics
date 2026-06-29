import {
  Cpu,
  Microchip,
  Cable,
  PackageCheck,
} from "lucide-react";

const products = [
  {
    icon: <Microchip size={42} />,
    title: "Electronic Components",
    description: "ICs, Microcontrollers, Sensors, Connectors, Relays and Passive Components.",
  },
  {
    icon: <Cpu size={42} />,
    title: "Development Boards",
    description: "Evaluation kits and embedded development platforms for rapid prototyping.",
  },
  {
    icon: <Cable size={42} />,
    title: "Connectors & Cables",
    description: "Industrial connectors, wire harnesses and custom cable assemblies.",
  },
  {
    icon: <PackageCheck size={42} />,
    title: "BOM Fulfilment",
    description: "Complete sourcing, procurement and logistics support for your projects.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold text-sky-600">
          Products
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-center text-gray-600">
          We supply genuine electronic components and engineering products from
          leading global manufacturers.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 text-sky-600">
                {product.icon}
              </div>

              <h3 className="mb-4 text-xl font-bold">
                {product.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}