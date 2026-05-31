function ExploreMenu({ category, setCategory }) {
  const categories = [
    "All",
    "Pizza",
    "Burger",
    "Pasta",
    "Desserts",
    "Drinks",
    "Chinese",
  ];

  return (
    <div style={{ width: "90%", margin: "40px auto" }}>
      <h2>Explore Our Menu</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            style={{
              padding: "10px 20px",
              borderRadius: "20px",
              border: category === item ? "2px solid tomato" : "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ExploreMenu;
