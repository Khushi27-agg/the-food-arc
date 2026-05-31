import { Link } from "react-router-dom";

function Contact() {
  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <div style={{ fontSize: "64px", marginBottom: "20px" }}>📞</div>
      <h1 style={{ fontSize: "42px", color: "#333", marginBottom: "12px" }}>
        Coming Soon
      </h1>
      <p style={{ fontSize: "18px", color: "#777", marginBottom: "36px" }}>
        Our contact page is being set up. We'll be in touch soon!
      </p>
      <Link to="/">
        <button
          style={{
            padding: "12px 28px",
            background: "tomato",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default Contact;
