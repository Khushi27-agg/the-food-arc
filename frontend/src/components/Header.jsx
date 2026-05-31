function Header() {
  return (
    <div
      style={{
        width: "90%",
        height: "500px",
        margin: "30px auto",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        alt="Food Banner"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(60%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "60px",
          transform: "translateY(-50%)",
          color: "white",
          maxWidth: "550px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            marginBottom: "20px",
            lineHeight: "1.1",
          }}
        >
          Order your favourite food here
        </h1>

        <p
          style={{
            fontSize: "18px",
            marginBottom: "25px",
            lineHeight: "1.6",
          }}
        >
          Choose from a diverse menu featuring delicious meals delivered right
          to your doorstep.
        </p>

        <button
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "30px",
            backgroundColor: "white",
            color: "#333",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
