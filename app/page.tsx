export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8fbff",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <nav
        style={{
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          color: "white",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  <img
    src="/favicon.png"
    alt="Logo"
    style={{ width: "45px", height: "45px" }}
  />
  <h2>Tesseract Electronics</h2>
</div>

        <div>
          <a
            href="#services"
            style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
          >
            Services
          </a>

          <a
            href="#products"
            style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
          >
            Products
          </a>

          <a
            href="#contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
 background:
"linear-gradient(rgba(15,23,42,.85),rgba(15,23,42,.85)),url('/pcb bg1.jpg')",
backgroundSize: "cover",
backgroundPosition: "center",
  color: "white",
  textAlign: "center",
  padding: "140px 20px",
}}
      >
        <h1
  style={{
    fontSize: "56px",
    fontWeight: "bold",
    marginBottom: "20px",
  }}
>
  Tesseract Electronics
</h1>

        <h3
  style={{
    fontSize: "24px",
    fontWeight: "400",
  }}
>
  Electronic Components | PCB Design | PCB Fabrication | PCB Assembly
</h3>

        <p
          style={{
            maxWidth: "800px",
            margin: "25px auto",
            lineHeight: "1.8",
          }}
        >
          Trusted supplier of electronic components and PCB solutions for
          startups, R&D teams and industrial customers.
        </p>

        <a
          href="https://wa.me/918123663810"
          target="_blank"
          style={{
            background: "#25D366",
            color: "white",
            padding: "15px 30px",
            borderRadius: "40px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          💬 Get Quote on WhatsApp
        </a>
      </section>

      {/* About */}
      <section
        style={{
          padding: "180px 20px",
          textAlign: "center",
        }}
      >
        <h2>About Tesseract Electronics</h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          Tesseract Electronics is a Bengaluru-based supplier of electronic
          components and provider of PCB Design, PCB Fabrication and PCB
          Assembly services. We support startups, R&D teams and industrial
          customers with reliable and cost-effective electronics solutions.
        </p>
      </section>
<section
  style={{
    padding: "60px 20px",
    background: "#0f172a",
    color: "white",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
      gap: "20px",
      textAlign: "center",
    }}
  >
    <div className="card">
      <h2>10000+</h2>
      <p>Electronic Components Supplied</p>
    </div>

    <div className="card">
      <h2>10000+</h2>
      <p>PCB Projects Supported</p>
    </div>

    <div className="card">
      <h2>100+</h2>
      <p>Happy Customers</p>
  
    </div>
  </div>
</section>

      {/* Services */}
      <section
        id="services"
        style={{
          padding: "60px 40px",
          background: "#f8fafc",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Our Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div className="card">🔌 Electronic Components Supply</div>
          <div className="card">📐 PCB Design</div>
          <div className="card">🏭 PCB Fabrication</div>
          <div className="card">⚙️ PCB Assembly</div>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        style={{
          padding: "60px 40px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div className="card">Resistors</div>
          <div className="card">Capacitors</div>
          <div className="card">Inductors</div>
          <div className="card">Crystal Oscillators</div>
          <div className="card">ICs</div>
          <div className="card">IC Bases</div>
          <div className="card">Sensors</div>
          <div className="card">Microcontrollers</div>
          <div className="card">Relays</div>
          <div className="card">Cables</div>
          <div className="card">Connectors</div>
          <div className="card">Transistors</div>
        </div>
      </section>
<section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
  }}
>
  <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
    Why Choose Tesseract Electronics?
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "20px",
      maxWidth: "1200px",
      margin: "auto",
    }}
  >
    <div className="card">✓ Quality Assured Components</div>
    <div className="card">✓ PCB Design to Production Support</div>
    <div className="card">✓ Fast Turnaround Time</div>
    <div className="card">✓ Competitive Pricing</div>
    <div className="card">✓ BOM Fulfillment Services</div>
    <div className="card">✓ Technical Support & Consultation</div>
  </div>
</section>
      {/* Gallery */}
      <section style={{ padding: "60px 40px" }}>
        <h2 style={{ textAlign: "center" }}>Our Work</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <img src="/pcb1.jpg" alt="PCB1" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "12px" }} />
          <img src="/pcb2.jpg" alt="PCB2" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "12px" }} />
          <img src="/pcb3.jpg" alt="PCB3" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "12px" }} />
          <img src="/pcb5.jpg" alt="PCB4" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "12px" }} />
        </div>
      </section>

      {/* Inquiry Form */}
      <section style={{ padding: "60px 40px" }}>
        <h2 style={{ textAlign: "center" }}>Inquiry Form</h2>

        <form
          action="https://formsubmit.co/tesseractelectronics24@gmail.com"
          method="POST"
          style={{
            maxWidth: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
  type="hidden"
  name="_next"
  value="http://localhost:3000/thank-you"
/>
          <input
  type="text"
  name="name"
  placeholder="Name"
  required
  style={{ padding: "12px" }}
/>

<input
  type="tel"
  name="mobile"
  placeholder="Mobile Number"
  required
  style={{ padding: "12px" }}
/>

<input
  type="email"
  name="email"
  placeholder="Email Address"
  required
  style={{ padding: "12px" }}
/>

<textarea
  name="requirement"
  placeholder="Your Requirement"
  rows={5}
  style={{ padding: "12px" }}
/>

          <button
            type="submit"
            style={{
             background: "white",
             padding: "40px",
             borderRadius: "15px",
             boxShadow: "0 5px 20px rgba(0,0,0,.1)",
             cursor: "pointer",
            }}
          >
            Submit Inquiry
          </button>
        </form>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          padding: "60px 40px",
          textAlign: "center",
        }}
      ><section
  style={{
    background: "#0284c7",
    color: "white",
    textAlign: "center",
    padding: "50px 20px",
  }}
>
  <h2>Need PCB related works or Electronic Components?</h2>

  <p>
    Contact us today for fast quotations and technical support.
  </p>

  <a
    href="https://wa.me/918123663810"
    style={{
      background: "#25D366",
      color: "white",
      padding: "12px 25px",
      borderRadius: "30px",
      textDecoration: "none",
      display: "inline-block",
      marginTop: "15px",
    }}
  >
    Contact on WhatsApp
  </a>
</section>
        <h2>Contact Us</h2>
<a

   
>
</a>
       <div style={{ marginTop: "10px", lineHeight: "1.5" }}>
  <p>📞 +91 8123663810</p>

  <p>📧 tesseractelectronics24@gmail.com</p>

  <p>
    📍 No.34, Above CA Enterprises, Near Sahana International School,
    Viswaneedam Post, Vinayagar Nagar East, Andrahalli Road,
    Bengaluru - 560091
  </p>
</div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#0f172a",
          color: "white",
          padding: "30px",
          textAlign: "center",
        }}
      >
        © 2026 Tesseract Electronics. All Rights Reserved.
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918123663810"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "white",
          padding: "15px 20px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        WhatsApp
      </a>
    </main>
  );
}
