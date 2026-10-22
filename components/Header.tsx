
"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

const links = [
  { name: "Services", href: "/#services" },
  { name: "Components", href: "/#products" },
  { name: "Industries", href: "/#industries" },
  { name: "About Us", href: "/#about" },
  { name: "Brands", href: "/#brands" },
  { name: "Contact", href: "/#contact" },
];

const whatsappUrl =
  "https://wa.me/918123663810?text=Hello%20Tesseract%20Electronics%2C%20I%20would%20like%20to%20request%20a%20quotation.";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-slate-950 via-blue-950 to-sky-800 text-white shadow-lg shadow-slate-950/10"
    >
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Company branding */}
        <a
          href="/#top"
          onClick={closeMenu}
          aria-label="Tesseract Electronics home"
          className="flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 sm:gap-3"
        >
          <img
            src="/favicon.png"
            alt="Tesseract Electronics logo"
            className="h-10 w-10 shrink-0 rounded-xl border border-white/20 bg-white/10 object-contain p-1 sm:h-12 sm:w-12"
          />

          <div className="min-w-0">
            <p className="whitespace-nowrap text-sm font-extrabold tracking-tight sm:text-lg">
              Tesseract Electronics
            </p>

            <p className="mt-0.5 hidden text-[11px] font-medium leading-4 text-sky-100 md:block">
              PCB Design · Fabrication · Assembly · Components Sourcing
            </p>

            <p className="mt-0.5 hidden text-[10px] italic text-sky-200 sm:block">
              We Deliver More than Expected
            </p>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-4 xl:flex"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-sm font-semibold text-slate-100 transition-colors hover:text-sky-300 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              {link.name}
            </a>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-emerald-500 px-3 text-sm font-bold text-white transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <a
            href="/#contact"
            className="inline-flex min-h-10 items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-white px-4 text-sm font-bold text-blue-950 shadow-sm transition hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Get a Quote
            <ChevronRight size={16} />
          </a>
        </nav>

        {/* Mobile and tablet actions */}
        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Tesseract Electronics on WhatsApp"
            className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg bg-emerald-500 px-2.5 text-xs font-bold text-white transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 sm:px-3 sm:text-sm"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile and tablet menu */}
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-slate-950 px-4 py-3 shadow-xl xl:hidden"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-white/10 px-3 py-3.5 text-sm font-semibold text-slate-100 transition hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              {link.name}
              <ChevronRight size={16} className="text-sky-400" />
            </a>
          ))}

          <a
            href="/#contact"
            onClick={closeMenu}
            className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 font-bold text-blue-950 transition hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            Get a Quote
            <ChevronRight size={17} />
          </a>
        </nav>
      )}
    </header>
  );
}
