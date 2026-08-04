
export default function Hero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(rgba(2,132,199,0.88), rgba(3,105,161,0.90)), url('/pcb bg1.jpg') center/cover",
        color: "white",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      <div style={{ maxWidth: "950px" }}>

        {/* Top Label */}
        <p
          style={{
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "18px",
            color: "#bae6fd",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Electronic Components • PCB Solutions • India
        </p>

        {/* Main Heading */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            marginBottom: "20px",
            lineHeight: 1.15,
            fontWeight: "800",
          }}
        >
          Electronic Components & PCB Solutions
        </h1>

        {/* Sub Heading */}
        <p
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
            maxWidth: "800px",
            margin: "0 auto 15px",
            lineHeight: "1.6",
            fontWeight: "600",
          }}
        >
          From Prototype to Production
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: "18px",
            maxWidth: "760px",
            margin: "0 auto",
            lineHeight: "1.8",
            color: "#e0f2fe",
          }}
        >
          PCB Design, PCB Fabrication, PCB Assembly and Electronic
          Component Sourcing for businesses across India.
        </p>

        {/* Service Highlights */}
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          <span>✓ PCB Design</span>
          <span>✓ PCB Fabrication</span>
          <span>✓ PCB Assembly</span>
          <span>✓ Component Sourcing</span>
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            marginTop: "38px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {/* Get Quote */}
          <a
            href="#contact"
            style={{
              background: "#ffffff",
              color: "#0284c7",
              padding: "16px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
              minWidth: "150px",
            }}
          >
            Get a Quote
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918123663810?text=Hello%20Tesseract%20Electronics%2C%20I%20would%20like%20to%20enquire%20about%20your%20products%20or%20services."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              color: "white",
              padding: "16px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
              minWidth: "150px",
            }}
          >
            WhatsApp Us
          </a>

          {/* Call */}
          <a
            href="tel:+918123663810"
            style={{
              border: "2px solid white",
              color: "white",
              padding: "14px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
              minWidth: "150px",
            }}
          >
            Call Now
          </a>
        </div>

        {/* Bottom Lead Message */}
        <p
          style={{
            marginTop: "28px",
            fontSize: "14px",
            color: "#e0f2fe",
          }}
        >
          Have a BOM or part number? Send it to us for a quick quotation.
        </p>

      </div>
    </section>
  );
}
