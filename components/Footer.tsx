
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ArrowRight,
  MessageCircle,
  CircuitBoard,
} from "lucide-react";

const services = [
  "PCB Design",
  "PCB Fabrication",
  "PCB Assembly",
  "Electronic Components Sourcing",
  "PCB Reverse Engineering",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-16">
        {/* Company */}
        <div className="lg:col-span-1">
          <a href="/" className="mb-5 inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10">
              <CircuitBoard className="h-7 w-7 text-sky-400" />
            </span>

            <span>
              <span className="block text-xl font-bold tracking-tight">
                Tesseract <span className="text-sky-400">Electronics</span>
              </span>
              <span className="mt-1 block text-xs text-slate-400">
                Engineering & Component Solutions
              </span>
            </span>
          </a>

          <p className="mb-4 text-sm font-semibold text-sky-300">
            We Deliver More than Expected
          </p>

          <p className="max-w-sm text-sm leading-7 text-slate-400">
            Your electronics solutions partner for PCB design,
            fabrication, assembly, component sourcing, and reverse
            engineering — supporting businesses from concept to production.
          </p>

          <a
            href="https://wa.me/918123663810"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
          >
            <MessageCircle size={17} />
            Connect on WhatsApp
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-base font-bold">
            Quick Links
          </h3>

          <div className="mb-3 h-1 w-10 rounded-full bg-sky-500" />

          <nav className="space-y-3 text-sm text-slate-400">
            {[
              ["Home", "#"],
              ["About Us", "#about"],
              ["Services", "#services"],
              ["Products", "#products"],
              ["Industries", "#industries"],
              ["Our Brands", "#brands"],
              ["Contact Us", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-2 transition hover:translate-x-1 hover:text-sky-300"
              >
                <ArrowRight
                  size={14}
                  className="text-sky-500 opacity-0 transition group-hover:opacity-100"
                />
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-6 text-base font-bold">
            Our Capabilities
          </h3>

          <div className="mb-3 h-1 w-10 rounded-full bg-sky-500" />

          <ul className="space-y-4 text-sm text-slate-400">
            {services.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                <span className="transition hover:text-sky-300">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-base font-bold">
            Get in Touch
          </h3>

          <div className="mb-3 h-1 w-10 rounded-full bg-sky-500" />

          <p className="mb-6 text-sm leading-6 text-slate-400">
            Have a project, BOM, or component requirement? Contact our team
            to discuss your needs.
          </p>

          <div className="space-y-5">
            <a
              href="tel:+918123663810"
              className="group flex items-start gap-3"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sky-400 transition group-hover:bg-blue-500/20">
                <Phone size={18} />
              </span>
              <span>
                <span className="mb-1 block text-xs text-slate-500">
                  Call Us
                </span>
                <span className="text-sm text-slate-300 transition group-hover:text-sky-300">
                  +91 8123663810
                </span>
              </span>
            </a>

            <a
              href="mailto:tesseractelectronics24@gmail.com"
              className="group flex items-start gap-3"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sky-400 transition group-hover:bg-blue-500/20">
                <Mail size={18} />
              </span>
              <span className="min-w-0">
                <span className="mb-1 block text-xs text-slate-500">
                  Email Us
                </span>
                <span className="break-all text-sm text-slate-300 transition group-hover:text-sky-300">
                  tesseractelectronics24@gmail.com
                </span>
              </span>
            </a>

            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sky-400">
                <MapPin size={18} />
              </span>
              <span>
                <span className="mb-1 block text-xs text-slate-500">
                  Location
                </span>
                <span className="text-sm leading-6 text-slate-300">
                  Bengaluru, Karnataka, India
                  <br />
                  Serving customers across India
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-xs leading-6 text-slate-500 md:text-left">
            © {new Date().getFullYear()} Tesseract Electronics.
            All Rights Reserved.
          </p>

          <p className="text-center text-xs text-slate-500">
            PCB Design • Fabrication • Assembly • Component Sourcing
          </p>

          <a
            href="#"
            aria-label="Back to top"
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sky-400 transition hover:border-sky-400/40 hover:bg-sky-500/10 md:mx-0"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
