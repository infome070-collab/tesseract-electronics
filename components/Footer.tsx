import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">

        {/* Company */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-sky-400">
            Tesseract Electronics
          </h2>

          <p className="leading-7 text-gray-300">
            Your trusted partner for PCB Design,
            PCB Fabrication, PCB Assembly,
            Electronic Components and BOM Fulfilment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Quick Links
          </h3>

          <div className="space-y-3">
            <a href="#" className="block hover:text-sky-400">Home</a>
            <a href="#services" className="block hover:text-sky-400">Services</a>
            <a href="#products" className="block hover:text-sky-400">Products</a>
            <a href="#industries" className="block hover:text-sky-400">Industries</a>
            <a href="#contact" className="block hover:text-sky-400">Contact</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Contact
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Phone className="text-sky-400" size={18} />
              <span>+91 8123663810</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-sky-400" size={18} />
              <span>tesseractelectronics24@gmail.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-sky-400" size={18} />
              <span>
                Bengaluru,
                Karnataka,
                India
              </span>
            </div>

          </div>
        </div>

      </div>

      <div className="border-t border-slate-700">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <p className="text-sm text-gray-400">
            © 2026 Tesseract Electronics. All Rights Reserved.
          </p>

          <a
            href="#"
            className="rounded-full bg-sky-600 p-3 transition hover:bg-sky-700"
          >
            <ArrowUp size={18} />
          </a>

        </div>

      </div>
    </footer>
  );
}