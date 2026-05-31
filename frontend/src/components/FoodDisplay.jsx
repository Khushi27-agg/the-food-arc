import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function FoodDisplay({ category, search }) {
  const { cartItems, setCartItems, foodList } = useContext(StoreContext);

  const filteredFoods = foodList.filter((food) => {
    const matchesCategory = category === "All" || food.category === category;

    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div
      style={{
        width: "90%",
        margin: "50px auto",
      }}
    >
      <h2>Top Dishes Near You</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredFoods.map((food, index) => (
          <div
            key={food._id || food.id || index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "15px",
              overflow: "hidden",
              background: "white",
            }}
          >
            <img
              src={
                food.image ||
                "https://images.unsplash.com/photo-1513104890138-7c749659a591"
              }
              alt={food.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{food.name}</h3>

              <p
                style={{
                  color: "tomato",
                  fontWeight: "bold",
                }}
              >
                ₹{food.price}
              </p>

              <button
                onClick={() => setCartItems([...cartItems, food])}
                style={{
                  padding: "10px 15px",
                  background: "tomato",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay;
