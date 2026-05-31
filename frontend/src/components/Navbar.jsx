import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function Navbar() {
  const { cartItems } = useContext(StoreContext);

  return (
    <nav
      style={{
        width: "90%",
        margin: "20px auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "tomato" }}>The Food Arc 🍕</h2>

      <ul
        style={{
          display: "flex",
          gap: "25px",
          listStyle: "none",
          cursor: "pointer",
        }}
      >
        <li><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link></li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
      </ul>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link
          to="/cart"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "20px",
          }}
        >
          🛒 {cartItems.length}
        </Link>

        <Link to="/login">
          <button
            style={{
              padding: "10px 20px",
              background: "tomato",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
