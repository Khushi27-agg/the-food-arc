require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const foodRoute = require("./routes/foodRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("The Food Arc Backend Running 🚀");
});

app.use("/api/food", foodRoute);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
