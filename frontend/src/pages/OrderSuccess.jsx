import { Link } from 'react-router-dom';

function OrderSuccess() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '100px',
      }}
    >
      <h1>🎉 Order Placed Successfully!</h1>

      <p
        style={{
          marginTop: '20px',
          fontSize: '18px',
        }}
      >
        Thank you for ordering with The Food Arc 🍕
      </p>

      <Link to="/">
        <button
          style={{
            marginTop: '30px',
            padding: '12px 25px',
            background: 'tomato',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Back To Home
        </button>
      </Link>
    </div>
  );
}

export default OrderSuccess;
