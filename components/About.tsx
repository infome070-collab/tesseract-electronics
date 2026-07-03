export default function About() {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src="/pcb bg1.jpg"
            alt="PCB Design"
            style={{
              width: "100%",
              borderRadius: "12px",
            }}
          />
        </div>

        <div>
          <h2
            style={{
              color: "#0284c7",
              fontSize: "38px",
              marginBottom: "20px",
            }}
          >
            About Tesseract Electronics
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.9",
              color: "#444",
            }}
          >
            Tesseract Electronics is a Bengaluru-based company providing
            PCB Design, PCB Fabrication, PCB Assembly and Electronic
            Component Sourcing solutions for startups, R&D organizations
            and industrial manufacturers across India.
          </p>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.8",
              color: "#666",
            }}
          >
            We focus on delivering high-quality engineering solutions with
            fast turnaround, competitive pricing and reliable technical
            support.
          </p>
        </div>
      </div>
    </section>
  );
}