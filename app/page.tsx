export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8ffff",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <nav
        style={{
         background: "#0284c7",
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
"linear-gradient(rgba(14,165,233,.75),rgba(59,130,246,.75)),url('/pcb bg1.jpg')",
backgroundSize: "cover",
backgroundPosition: "center", color: "white",
  textAlign: "center",
  padding: "180px 20px",
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
   PCB Design |PCB Fabrication | PCB Assembly | Component Sourcing | BOM Fulfillment | Technical Support
</h3>

        <p
          style={{
            maxWidth: "800px",
            margin: "25px auto",
            lineHeight: "1.8",
          }}
        >
          End-to-end PCB Design, PCB Fabrication, PCB Assembly and Electronic Components sourcing services. Delivering reliable and cost-effective electronics solutions across India.
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
      <p
  style={{
    color: "#dcfce7",
    fontSize: "22px",
    fontWeight: "bold",
    margin: "15px 0",
  }}
>
  We Deliver More Than Expected
</p>
/* Company Statistics */

<section
  style={{
    padding: "60px 20px",
    background: "#0f172a",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "20px",
    }}
  >
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "25px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#0284c7", fontSize: "36px" }}>1000+</h2>
      <p>PCB Projects Completed</p>
    </div>

    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "25px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#0284c7", fontSize: "36px" }}>50K+</h2>
      <p>Components Supplied</p>
    </div>

    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "25px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#0284c7", fontSize: "36px" }}>50+</h2>
      <p>Industries Served</p>
    </div>

    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "25px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#0284c7", fontSize: "36px" }}>Pan India</h2>
      <p>Customer Support</p>
    </div>
  </div>
</section>
      {/* About */}
      <section
        style={{
          padding: "50px 20px",
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
{<section
  style={{
    padding: "50px 20px",
    background: "#ffffff",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontWeight: "1000",
      fontSize: "2.5rem",
      color: "#000",
      marginBottom: "15px",
    }}
  >
  Industries We Serve
  </h2>
  <p
    style={{
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto 40px",
      lineHeight: "1.8",
    }}
  >
    Providing PCB Design, Fabrication, Assembly and Component Sourcing
    Solutions for Diverse Industries.
  </p>

 <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
    maxWidth: "1200px",
    margin: "auto",
  }}
>
  <div className="card">
    <h3>🏭 Industrial Automation</h3>
  </div>

  <div className="card">
    <h3>⚖️ Weighing Scale Manufacturing</h3>
  </div>

  <div className="card">
    <h3>🌐 IoT & Embedded Systems</h3>
  </div>

  <div className="card">
    <h3>🏥 Medical Electronics</h3>
  </div>

  <div className="card">
    <h3>🚗 Automotive Electronics</h3>
  </div>

  <div className="card">
    <h3>🔬 Research & Development</h3>
  </div>
</div>
</section>
      /* Services */}
      <section
        id="services"
        style={{fontWeight:900,color:"#000",
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
          <div className="card">
  <h3>📐 PCB Design</h3>
  <p>
    Schematic design, PCB layout, multilayer board design and prototype support.
  </p>
</div>

<div className="card">
  <h3>🏭 PCB Fabrication</h3>
  <p>
    High-quality prototype and production PCB manufacturing with fast turnaround.
  </p>
</div>

<div className="card">
  <h3>⚙️ PCB Assembly</h3>
  <p>
    SMT and Through-Hole assembly services
  </p>
</div>

<div className="card">
  <h3>🔌 Electronic Components</h3>
  <p>
    Reliable sourcing of ICs, connectors, sensors, relays and BOM fulfillment.
  </p>
</div>

        </div>
      </section>
{/* PCB Process Flow */}

<section
  style={{
    padding: "50px 20px",
    background: "#f8fafc",
    textAlign: "center",
  }}
>
  <h2 style={{fontWeight:900,color:"#000"}}>
  PCB Development Process
</h2>

  <p
    style={{
      maxWidth: "800px",
      margin: "0 auto 40px",
      lineHeight: "1.8",
    }}
  >
    From concept to delivery, we provide complete PCB design,
    fabrication and assembly solutions.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
      gap: "20px",
      maxWidth: "1200px",
      margin: "auto",
    }}
  >
    <div className="card">
      <h3>1️⃣ Requirement</h3>
      <p>Understanding customer requirements.</p>
    </div>
<div className="card">
  <h3>2️⃣ PCB Design</h3>
  <p>Schematic and PCB layout design.</p>
</div>

<div className="card">
  <h3>3️⃣ Fabrication</h3>
  <p>PCB manufacturing and prototyping.</p>
</div>

<div className="card">
  <h3>4️⃣ Assembly</h3>
  <p>SMT and Through-Hole assembly.</p>
</div>

<div className="card">
  <h3>5️⃣ Testing</h3>
  <p>Quality inspection and validation.</p>
</div>

<div className="card">
  <h3>6️⃣ Delivery</h3>
  <p>Final product delivery and support.</p>
</div>

  </div>
</section>
{/* Request Quote Section */}

<section
  style={{
    background: "#0284c7",
    color: "white",
    textAlign: "center",
    padding: "70px 20px",
  }}
>
  <h2>Need PCB Design, Fabrication or Assembly Services?</h2>

  <p
    style={{
      maxWidth: "700px",
      margin: "20px auto",
      lineHeight: "1.8",
    }}
  >
    Get fast quotations for PCB Design, PCB Fabrication,
    PCB Assembly and Electronic Components sourcing.
  </p>

<a
href="https://wa.me/918123663810"
target="_blank"
style={{
background: "#25D366",
color: "white",
padding: "15px 30px",
borderRadius: "30px",
textDecoration: "none",
fontWeight: "bold",
display: "inline-block",
marginTop: "10px",
}}

>

💬 Request Quote on WhatsApp

  </a>
</section>

      {/* Products */}
      <section
        id="products"
        style={{fontWeight:900,color:"#000",
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
    padding: "50px 20px",
    background: "#ffffff",
  }}
>
  <h2 style={{fontWeight:900,color:"#000", textAlign: "center", marginBottom: "40px" }}>
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

      {/* Contact */}
      <section
        id="contact"
        style={{fontWeight:900,color:"#000",
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
