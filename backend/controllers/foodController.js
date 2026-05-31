const Food = require("../models/foodModel");

const listFood = async (req, res) => {
  try {
    const foods = await Food.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const addFood = async (req, res) => {
  try {
    const image = req.file ? req.file.filename : "";
    const food = new Food({
      name: req.body.name,
      price: Number(req.body.price),
      category: req.body.category,
      description: req.body.description || "",
      image,
    });
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const removeFood = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = { listFood, addFood, removeFood };
