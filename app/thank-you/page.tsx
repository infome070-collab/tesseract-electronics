export default function ThankYou() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        background: "#f8fafc",
      }}
    >
      <h1
        style={{
          color: "#0284c7",
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        Thank You!
      </h1>

      <p
        style={{
          fontSize: "18px",
          marginBottom: "10px",
        }}
      >
        Your inquiry has been submitted successfully.
      </p>

      <p
        style={{
          color: "#555",
          marginBottom: "30px",
        }}
      >
        Our team will contact you shortly. "We Delivers More than Expected"
      </p>

      <a
        href="/"
        style={{
          padding: "12px 24px",
          background: "#0284c7",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        Back to Home
      </a>
    </main>
  );
}