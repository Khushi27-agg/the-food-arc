const foodRoute = require("./routes/foodRoute");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const foodData = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 299,
    category: "Pizza",
  },
  {
    id: 2,
    name: "Cheese Burger",
    price: 199,
    category: "Burger",
  },
  {
    id: 3,
    name: "White Sauce Pasta",
    price: 249,
    category: "Pasta",
  },
];

app.get("/", (req, res) => {
  res.send("The Food Arc Backend Running 🚀");
});

app.use("/api/food", foodRoute);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

app.post("/api/order/place", (req, res) => {
  res.json({
    success: true,
    message: "Order placed successfully",
  });
});
