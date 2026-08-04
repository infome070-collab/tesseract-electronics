"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-sky-700 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">

        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/favicon.png"
            alt="Tesseract Electronics"
            className="h-11 w-11 rounded-lg"
          />

          <div>
            <h1 className="text-base font-bold text-white sm:text-lg">
              Tesseract Electronics
            </h1>

            <p className="hidden text-xs text-sky-100 sm:block">
              PCB Design • Fabrication • Assembly • Components Sourcing
            </p>

            <p className="hidden text-xs text-sky-100 sm:block">
              "We Deliver More than Expected"
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-white transition hover:text-yellow-300"
            >
              {link.name}
            </a>
          ))}

          {/* WhatsApp */}
          <a
            href="https://wa.me/918123663810?text=Hello%20Tesseract%20Electronics%2C%20I%20would%20like%20to%20request%20a%20quotation."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-green-500 px-4 py-2 font-semibold text-white transition hover:bg-green-600"
          >
            WhatsApp
          </a>

          {/* Get Quote */}
          <a
            href="#contact"
            className="rounded-lg bg-white px-5 py-2 font-bold text-sky-700 transition hover:bg-sky-100"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 lg:hidden">

          {/* Mobile WhatsApp */}
          <a
            href="https://wa.me/918123663810?text=Hello%20Tesseract%20Electronics%2C%20I%20would%20like%20to%20request%20a%20quotation."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-green-500 px-3 py-2 text-sm font-bold text-white"
          >
            WhatsApp
          </a>

          {/* Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-lg p-2 text-white hover:bg-sky-600"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-sky-600 bg-sky-700 lg:hidden">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-sky-600 px-6 py-4 font-medium text-white transition hover:bg-sky-600"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Get Quote */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block bg-white px-6 py-4 text-center font-bold text-sky-700"
          >
            Get a Quote
          </a>

        </div>
      )}
    </header>
  );
}