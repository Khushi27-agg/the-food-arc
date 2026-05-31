import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: '90%',
        margin: '50px auto',
        display: 'flex',
        gap: '50px',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ flex: 1 }}>
        <h1>Delivery Information</h1>

        <input type="text" placeholder="First Name" style={inputStyle} />

        <input type="text" placeholder="Last Name" style={inputStyle} />

        <input type="email" placeholder="Email Address" style={inputStyle} />

        <input type="text" placeholder="Street" style={inputStyle} />

        <input type="text" placeholder="City" style={inputStyle} />

        <input type="text" placeholder="State" style={inputStyle} />

        <input type="text" placeholder="Phone Number" style={inputStyle} />
      </div>

      <div
        style={{
          flex: 1,
          border: '1px solid #ddd',
          padding: '20px',
          borderRadius: '10px',
          height: 'fit-content',
        }}
      >
        <h2>Order Summary</h2>

        <p>Subtotal: ₹400</p>
        <p>Delivery Fee: ₹40</p>

        <hr />

        <h2>Total: ₹440</h2>

        <button
          onClick={() => navigate('/success')}
          style={{
            width: '100%',
            padding: '12px',
            background: 'tomato',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginTop: '15px',
  border: '1px solid #ccc',
  borderRadius: '8px',
};

export default PlaceOrder;
