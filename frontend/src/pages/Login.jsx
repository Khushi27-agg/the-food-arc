import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

function Login() {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, register } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result =
        mode === "login"
          ? await login(email, password)
          : await register(name, email, password);
      if (result.success) {
        navigate("/");
      } else {
        setError(result.message);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "420px",
        margin: "80px auto",
        padding: "36px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#333" }}>
        {mode === "login" ? "Welcome Back" : "Create Account"}
      </h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
        <button
          onClick={() => setMode("login")}
          style={{
            ...tabBtn,
            background: mode === "login" ? "tomato" : "#f0f0f0",
            color: mode === "login" ? "white" : "#555",
          }}
        >
          Login
        </button>
        <button
          onClick={() => setMode("register")}
          style={{
            ...tabBtn,
            background: mode === "register" ? "tomato" : "#f0f0f0",
            color: mode === "register" ? "white" : "#555",
          }}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {mode === "register" && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />

        {error && (
          <p style={{ color: "tomato", marginTop: "10px", fontSize: "14px" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "13px",
            background: loading ? "#ccc" : "tomato",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: loading ? "not-allowed" : "pointer",
            marginTop: "18px",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          {loading ? "Please wait..." : mode === "login" ? "Login" : "Create Account"}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "14px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "15px",
  boxSizing: "border-box",
};

const tabBtn = {
  flex: 1,
  padding: "9px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "14px",
};

export default Login;
