
import { ArrowRight, CheckCircle2 } from "lucide-react";

const capabilities = [
  "Electronic Component Sourcing",
  "PCB Design & Engineering",
  "PCB Fabrication",
  "SMT & Through-Hole PCB Assembly",
  "BOM Procurement & Fulfilment",
  "Prototype to Production Support",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 px-6 py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Image */}
        <div className="relative">
          <img
            src="/pcb bg1.jpg"
            alt="PCB design and electronic manufacturing"
            className="h-full min-h-[350px] w-full rounded-2xl object-cover shadow-xl"
          />

          {/* Image Badge */}
          <div className="absolute bottom-5 left-5 rounded-xl bg-white px-5 py-4 shadow-xl">
            <p className="text-sm font-semibold text-sky-600">
              Electronics Solutions
            </p>
            <p className="text-sm text-gray-600">
              Prototype to Production
            </p>
          </div>
        </div>

        {/* Content */}
        <div>

          <p className="mb-3 font-semibold uppercase tracking-widest text-sky-600">
            About Us
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Your Electronics Partner from{" "}
            <span className="text-sky-600">
              Prototype to Production
            </span>
          </h2>

          <p className="mb-5 text-lg leading-8 text-gray-700">
            Tesseract Electronics is a Bengaluru-based company providing
            PCB Design, PCB Fabrication, PCB Assembly and Electronic
            Component Sourcing solutions for startups, R&D organizations,
            OEMs and industrial manufacturers across India.
          </p>

          <p className="mb-7 leading-8 text-gray-600">
            We help customers simplify electronics procurement and
            manufacturing by combining component sourcing, PCB
            engineering and manufacturing support through a single
            reliable partner.
          </p>

          {/* Capabilities */}
          <div className="mb-8 grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-sky-600"
                />

                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-7 py-3 font-bold text-white shadow-md transition hover:bg-sky-700"
          >
            Talk to Our Team
            <ArrowRight size={18} />
          </a>

        </div>
      </div>
    </section>
  );
}
