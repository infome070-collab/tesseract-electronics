"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

const [loading, setLoading] = useState(false);

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);

  const form = e.currentTarget;

  const formData = new FormData(form);

  const response = await fetch("/api/contact", {
  method: "POST",
  body: formData,
});

  setLoading(false);

  if (response.ok) {
    router.push("/thank-you");
  } else {
    alert("Unable to send enquiry. Please try again.");
  }
};
  return (
    <section
      id="contact"
      className="bg-sky-700 py-20 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <h2 className="mb-6 text-4xl font-bold">
            Contact Tesseract Electronics
          </h2>

          <p className="mb-8 leading-8 text-sky-100">
            Looking for PCB Design, PCB Fabrication, PCB Assembly or Electronic
            Components? Contact our engineering team today.
          </p>

          <div className="space-y-6">

            <div>
              <h3 className="font-bold text-xl">📍 Address</h3>
              <p className="text-sky-100">
                Bengaluru, Karnataka, India
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">📞 Phone</h3>
              <a
                href="tel:+918123663810"
                className="text-sky-100 hover:text-white"
              >
                +91 8123663810
              </a>
            </div>

            <div>
              <h3 className="font-bold text-xl">📧 Email</h3>
              <a
                href="mailto:tesseractelectronics24@gmail.com"
                className="text-sky-100 hover:text-white"
              >
                tesseractelectronics24@gmail.com
              </a>
            </div>

          </div>
        </div>

        {/* Right Side */}

        <form
  onSubmit={handleSubmit}
  className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl"
>
          <h3 className="text-2xl font-bold text-sky-700">
            Request a Quote
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
<input
  type="text"
  name="company"
  placeholder="Company Name"
  required
  className="w-full rounded-lg border border-slate-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
/>
<select
  name="service"
  required
  className="w-full rounded-lg border border-slate-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
>
  <option value="">Select Service</option>
  <option>PCB Design</option>
  <option>PCB Fabrication</option>
  <option>PCB Assembly</option>
  <option>Electronic Components</option>
  <option>Embedded Systems</option>
  <option>Other</option>
</select>
<input
  type="text"
  name="quantity"
  placeholder="Quantity (Optional)"
  className="w-full rounded-lg border border-slate-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
/>
<div>
  <label className="mb-2 block font-semibold text-gray-700">
    Upload Gerber / BOM / PDF
  </label>

  <input
    type="file"
    name="attachment"
    accept=".zip,.rar,.7z,.pdf,.xlsx,.xls,.csv,.jpg,.jpeg,.png"
    className="w-full rounded-lg border border-slate-300 bg-white p-2 text-gray-900
               file:mr-4 file:rounded-lg file:border-0
               file:bg-sky-600 file:px-4 file:py-2
               file:text-white hover:file:bg-sky-700"
  />

  <p className="mt-2 text-sm text-gray-500">
    Accepted formats: ZIP, PDF, Excel, CSV, JPG, PNG
  </p>
</div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />

         <textarea
  name="message"
  rows={5}
  placeholder="Describe your project, PCB specifications, quantity, delivery timeline, etc."
            required
           className="w-full rounded-lg border border-slate-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
          <p className="text-sm text-gray-500">
  We usually respond within <strong>24 hours</strong>.
</p>
          <button
  type="submit"
  disabled={loading}
  className="w-full rounded-xl bg-sky-600 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-sky-700 disabled:opacity-60"
>
  {loading ? "Sending..." : "Request a Quotation"}
</button>
        </form>

      </div>
    </section>
  );
}