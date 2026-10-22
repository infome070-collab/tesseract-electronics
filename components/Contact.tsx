
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Upload,
  Send,
} from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100";

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Location",
    value: "Bengaluru, Karnataka, India",
    href: undefined,
  },
  {
    icon: Phone,
    title: "Call Our Team",
    value: "+91 8123663810",
    href: "tel:+918123663810",
  },
  {
    icon: Mail,
    title: "Email Enquiries",
    value: "tesseractelectronics24@gmail.com",
    href: "mailto:tesseractelectronics24@gmail.com",
  },
];

export default function Contact() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        alert("Unable to send your enquiry. Please check your details and try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 md:py-24"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-sky-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
            <MessageCircle size={15} />
            Let's Discuss Your Project
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Have an Electronics Requirement?
            <span className="mt-2 block text-sky-400">
              Let's Work Together.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Send us your BOM, component part numbers, PCB files or project
            specifications. Our team will review your requirements and
            discuss suitable sourcing or PCB service options.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Reach out to us to discuss your next electronics project.
              </p>
            </div>

            <div className="space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-400/40 hover:bg-white/[0.07]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                      <Icon size={23} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-400">
                        {item.title}
                      </p>
                      <p className="mt-1 break-words text-sm font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.title}>{content}</div>
                );
              })}
            </div>

            <a
              href="https://wa.me/918123663810?text=Hello%20Tesseract%20Electronics%2C%20I%20would%20like%20to%20discuss%20an%20electronics%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 transition hover:bg-emerald-400/15"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="font-bold text-white">Prefer WhatsApp?</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Chat with our team
                  </p>
                </div>
              </div>
              <ArrowRight size={20} className="shrink-0 text-emerald-300" />
            </a>

            <div className="border-t border-white/10 pt-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                How We Can Help
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "PCB Design",
                  "PCB Fabrication",
                  "PCB Assembly",
                  "Components Sourcing",
                  "Reverse Engineering",
                ].map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle2 size={17} className="shrink-0 text-sky-400" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8 md:p-9"
          >
            <div className="mb-7 border-b border-slate-100 pb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                  <Send size={22} />
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Request a Quote
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Tell us what you need.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Fields marked with * are required. You can attach your BOM
                or relevant project files below.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-company" className="mb-2 block text-sm font-semibold text-slate-700">
                  Company Name
                </label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  placeholder="Your company"
                  autoComplete="organization"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone / WhatsApp *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="+91"
                  autoComplete="tel"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-700">
                  Business Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  autoComplete="email"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="contact-service" className="mb-2 block text-sm font-semibold text-slate-700">
                  Requirement Type *
                </label>
                <select
                  id="contact-service"
                  name="service"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Electronic Components">
                    Electronic Components
                  </option>
                  <option value="BOM Sourcing">BOM Sourcing</option>
                  <option value="PCB Design">PCB Design</option>
                  <option value="PCB Fabrication">PCB Fabrication</option>
                  <option value="PCB Assembly">PCB Assembly</option>
                  <option value="Complete PCB Solution">
                    Complete PCB Solution
                  </option>
                  <option value="Reverse Engineering">
                    Reverse Engineering
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-part" className="mb-2 block text-sm font-semibold text-slate-700">
                  Part Number
                </label>
                <input
                  id="contact-part"
                  type="text"
                  name="partNumber"
                  placeholder="Manufacturer part number"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-quantity" className="mb-2 block text-sm font-semibold text-slate-700">
                  Required Quantity
                </label>
                <input
                  id="contact-quantity"
                  type="text"
                  name="quantity"
                  placeholder="e.g. 500 pcs"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-700">
                  Project Details *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Describe your BOM, PCB specifications, quantity, target delivery or other requirements..."
                  required
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="contact-attachment" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Upload size={17} className="text-sky-600" />
                  Attach BOM / PCB / Project Files
                </label>

                <input
                  id="contact-attachment"
                  type="file"
                  name="attachment"
                  accept=".xlsx,.xls,.csv,.pdf,.zip,.rar,.gerber,.brd,.sch"
                  className="w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 p-3 text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-sky-100 file:px-3 file:py-2 file:font-semibold file:text-sky-800 hover:file:bg-sky-200"
                />

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Optional. Accepted formats depend on your file and the
                  server's upload limits.
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-4 font-bold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending Your Enquiry..." : "Submit Enquiry & Request Quote"}
              {!loading && <ArrowRight size={19} />}
            </button>

            <div className="mt-5 flex items-start justify-center gap-2 text-center text-xs leading-5 text-slate-500">
              <Clock3 size={15} className="mt-0.5 shrink-0" />
              <p>
                Our team will review your enquiry and respond as soon as
                possible.
              </p>
            </div>
          </form>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-center">
          <p className="text-sm font-semibold text-slate-400">
            Tesseract Electronics
          </p>
          <p className="mt-2 text-sm italic text-sky-300">
            We Deliver More than Expected
          </p>
        </div>
      </div>
    </section>
  );
}
