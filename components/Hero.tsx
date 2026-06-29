export default function Hero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(rgba(2,132,199,0.85), rgba(3,105,161,0.85)), url('/pcb bg1.jpg') center/cover",
        color: "white",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "900px" }}>
        <p
          style={{
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "15px",
            color: "#bae6fd",
            fontWeight: "bold",
          }}
        >
          PCB Design • PCB Fabrication • PCB Assembly
        </p>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4rem)",
            marginBottom: "20px",
            lineHeight: 1.2,
          }}
        >
          Tesseract Electronics
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "750px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Your trusted partner for PCB Design, PCB Fabrication,
          PCB Assembly and Electronic Component Sourcing across India.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contact"
            style={{
              background: "#ffffff",
              color: "#0284c7",
              padding: "15px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Get a Quote
          </a>

          <a
            href="tel:+918123663810"
            style={{
              border: "2px solid white",
              color: "white",
              padding: "15px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}