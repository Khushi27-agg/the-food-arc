const express = require("express");
const router = express.Router();
const Food = require("../models/foodModel");

// Get all foods
router.get("/list", async (req, res) => {
  const foods = await Food.find({});
  res.json(foods);
});

// Add food
router.post("/add", async (req, res) => {
  try {
    const food = new Food({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    });

    await food.save();

    res.json({
      success: true,
      message: "Food Added",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
