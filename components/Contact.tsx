export default function Contact() {
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
          action="https://formsubmit.co/tesseractelectronics24@gmail.com"
          method="POST"
          className="space-y-5 rounded-xl bg-white p-8 text-black shadow-xl"
        >
          <h3 className="text-2xl font-bold text-sky-700">
            Request a Quote
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-lg border p-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full rounded-lg border p-3"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full rounded-lg border p-3"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your requirement..."
            required
            className="w-full rounded-lg border p-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-sky-600 py-3 text-lg font-semibold text-white transition hover:bg-sky-700"
          >
            Send Enquiry
          </button>
        </form>

      </div>
    </section>
  );
}