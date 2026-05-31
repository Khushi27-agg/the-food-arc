function Footer() {
  return (
    <footer
      style={{
        background: "#222",
        color: "white",
        padding: "40px",
        marginTop: "50px",
      }}
    >
      {" "}
      <h2>The Food Arc 🍕</h2>
      <p style={{ marginTop: "10px" }}>
        Delivering happiness one meal at a time.
      </p>
      <div style={{ marginTop: "20px" }}>
        <p>📧 support@thefoodarc.com</p>
      </div>
      <hr style={{ margin: "20px 0" }} />
      <p>© 2026 The Food Arc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
