function Login() {
  return (
    <div
      style={{
        width: "400px",
        margin: "80px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Login</h1>

      <input type="email" placeholder="Email" style={inputStyle} />

      <input type="password" placeholder="Password" style={inputStyle} />

      <button
        style={{
          width: "100%",
          padding: "12px",
          background: "tomato",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "15px",
        }}
      >
        Login
      </button>

      <p
        style={{
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        Don't have an account? Sign Up
      </p>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

export default Login;
