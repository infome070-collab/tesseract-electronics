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
      }}
    >
      <h1>Thank You!</h1>

      <p>Your inquiry has been submitted successfully.</p>

      <p>Our team will contact you shortly.</p>

      <a
        href="/"
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: "#0284c7",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
        }}
      >
        Back to Home
      </a>
    </main>
  );
}