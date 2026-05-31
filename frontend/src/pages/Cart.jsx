import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart } = useContext(StoreContext);

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  const deliveryFee = cartItems.length > 0 ? 40 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div
      style={{
        width: "90%",
        margin: "50px auto",
      }}
    >
      <h1>Your Cart</h1>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        {cartItems.length === 0 ? (
          <h3>Your cart is empty </h3>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                  paddingBottom: "10px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <span>{item.name}</span>

                <span>₹{item.price}</span>

                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    background: "white",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  ❌
                </button>
              </div>
            ))}

            <h3>Total Items: {cartItems.length}</h3>
            <h3>Subtotal: ₹{subtotal}</h3>
            <h3>Delivery Fee: ₹{deliveryFee}</h3>

            <hr />

            <h2>Total Amount: ₹{total}</h2>

            <Link to="/place-order">
              <button
                style={{
                  padding: "12px 20px",
                  background: "tomato",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "20px",
                }}
              >
                Proceed to Checkout
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
