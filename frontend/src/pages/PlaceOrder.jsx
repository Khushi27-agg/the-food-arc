import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

function PlaceOrder() {
  const navigate = useNavigate();
  const { cartItems, getTotalAmount, placeOrder, token } = useContext(StoreContext);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const subtotal = getTotalAmount();
  const deliveryFee = subtotal > 0 ? 40 : 0;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    if (!token) {
      navigate("/login");
      return;
    }
    setLoading(true);
    try {
      const result = await placeOrder(form);
      if (result.success) {
        navigate("/success");
      } else {
        alert(result.message || "Failed to place order.");
      }
    } catch {
      alert("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "90%",
        margin: "50px auto",
        display: "flex",
        gap: "50px",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 1, minWidth: "280px" }}>
        <h1 style={{ marginBottom: "10px" }}>Delivery Information</h1>
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} style={inputStyle} required />
        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} style={inputStyle} required />
        <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} style={inputStyle} required />
        <input name="street" placeholder="Street" value={form.street} onChange={handleChange} style={inputStyle} required />
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} style={inputStyle} required />
        <input name="state" placeholder="State" value={form.state} onChange={handleChange} style={inputStyle} required />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} style={inputStyle} required />
      </div>

      <div
        style={{
          flex: 1,
          minWidth: "280px",
          border: "1px solid #ddd",
          padding: "24px",
          borderRadius: "12px",
          height: "fit-content",
        }}
      >
        <h2 style={{ marginBottom: "16px" }}>Order Summary</h2>

        {cartItems.length === 0 ? (
          <p style={{ color: "#999" }}>Your cart is empty</p>
        ) : (
          cartItems.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                fontSize: "15px",
              }}
            >
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))
        )}

        <hr style={{ margin: "16px 0" }} />
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span>Subtotal</span><span>₹{subtotal}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span>Delivery Fee</span><span>₹{deliveryFee}</span>
        </div>
        <hr style={{ margin: "16px 0" }} />
        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "18px" }}>
          <span>Total</span><span>₹{subtotal + deliveryFee}</span>
        </div>

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
            marginTop: "20px",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </div>
    </form>
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

export default PlaceOrder;
