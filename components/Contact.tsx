"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        alert("Unable to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-sky-700 px-6 py-20 text-white"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-sky-200">
            Get in Touch
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Request a Quote
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-8 text-sky-100">
            Looking for PCB Design, PCB Fabrication, PCB Assembly or
            Electronic Components? Send us your requirement and our team
            will get back to you.
          </p>

          <div className="space-y-6">

            {/* Address */}
            <div>
              <h3 className="text-xl font-bold">📍 Address</h3>
              <p className="text-sky-100">
                Bengaluru, Karnataka, India
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-xl font-bold">📞 Phone</h3>
              <a
                href="tel:+918123663810"
                className="text-sky-100 hover:text-white"
              >
                +91 8123663810
              </a>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-xl font-bold">📧 Email</h3>
              <a
                href="mailto:tesseractelectronics24@gmail.com"
                className="text-sky-100 hover:text-white"
              >
                tesseractelectronics24@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div>
              <h3 className="text-xl font-bold">💬 WhatsApp</h3>
              <a
                href="https://wa.me/918123663810?text=Hello%20Tesseract%20Electronics%2C%20I%20would%20like%20to%20request%20a%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-100 hover:text-white"
              >
                Chat with us on WhatsApp
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - RFQ FORM */}
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl md:p-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-sky-700">
              Send Your Requirement
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Send your part number, quantity, PCB requirement or BOM.
            </p>
          </div>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />

          {/* Company */}
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone / WhatsApp Number *"
            required
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />

          {/* Requirement Type */}
          <select
            name="service"
            required
            defaultValue=""
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-gray-900 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          >
            <option value="" disabled>
              Select Your Requirement *
            </option>
            <option value="Electronic Components">
              Electronic Components
            </option>
            <option value="BOM Sourcing">
              BOM Sourcing
            </option>
            <option value="PCB Design">
              PCB Design
            </option>
            <option value="PCB Fabrication">
              PCB Fabrication
            </option>
            <option value="PCB Assembly">
              PCB Assembly
            </option>
            <option value="Complete PCB Solution">
              Complete PCB Solution
            </option>
            <option value="Other">
              Other
            </option>
          </select>

          {/* Part Number */}
          <input
            type="text"
            name="partNumber"
            placeholder="Part Number / Component Name"
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />

          {/* Quantity */}
          <input
            type="text"
            name="quantity"
            placeholder="Required Quantity"
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />

          {/* Message */}
          <textarea
            name="message"
            rows={4}
            placeholder="Describe your requirement, specifications, quantity, delivery timeline, etc."
            required
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />

          {/* File Upload */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Upload BOM / Part List / PCB Files
            </label>

            <input
              type="file"
              name="attachment"
              accept=".xlsx,.xls,.csv,.pdf,.zip,.rar,.gerber,.brd,.sch"
              className="w-full rounded-lg border border-slate-300 bg-white p-3 text-sm text-gray-700"
            />

            <p className="mt-2 text-xs text-slate-500">
              Optional. Upload your BOM, Excel, PDF or PCB files.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-sky-600 px-6 py-4 font-bold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending Enquiry..." : "Send Enquiry & Get Quote"}
          </button>

          <p className="text-center text-xs text-slate-500">
            We usually respond within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
}