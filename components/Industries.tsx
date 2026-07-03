import {
  Factory,
  Cpu,
  Car,
  HeartPulse,
  Radio,
  Zap,
} from "lucide-react";

const industries = [
  {
    icon: <Factory size={42} />,
    title: "Industrial Automation",
  },
  {
    icon: <Cpu size={42} />,
    title: "Embedded Systems",
  },
  {
    icon: <Car size={42} />,
    title: "Automotive Electronics",
  },
  {
    icon: <HeartPulse size={42} />,
    title: "Medical Electronics",
  },
  {
    icon: <Radio size={42} />,
    title: "Telecommunication",
  },
  {
    icon: <Zap size={42} />,
    title: "Power Electronics",
  },
  {
    icon: <Zap size={42} />,
    title: "Energy Sector",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-4xl font-bold text-center text-sky-600 mb-4">
          Industries We Serve
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          Our engineering expertise supports customers across diverse
          industries requiring reliable electronic design and manufacturing.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry) => (

            <div
              key={industry.title}
              className="rounded-xl bg-slate-50 p-8 shadow transition hover:-translate-y-2 hover:shadow-xl text-center"
            >
              <div className="text-sky-600 flex justify-center mb-5">
                {industry.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {industry.title}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}