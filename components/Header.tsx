"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Industries", href: "#industries" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-sky-600 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/favicon.png"
            alt="Tesseract Electronics"
            className="h-11 w-11"
          />

          <div>
            <h1 className="text-lg font-bold text-white">
              Tesseract Electronics
            </h1>

            <p className="text-xs text-sky-100">
              PCB • Assembly • Components
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-white transition hover:text-yellow-300"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-lg bg-white px-5 py-2 font-semibold text-sky-600 transition hover:bg-sky-100"
          >
            Get Quote
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-sky-700 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-sky-600 px-6 py-4 text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block px-6 py-4 font-semibold text-yellow-300"
          >
            Get Quote
          </a>
        </div>
      )}
    </header>
  );
}