const express = require("express");

const router = express.Router();

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

router.get("/list", (req, res) => {
  res.json(foodData);
});

module.exports = router;
