const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { listFood, addFood, removeFood } = require("../controllers/foodController");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get("/list", listFood);
router.post("/add", upload.single("image"), addFood);
router.delete("/remove/:id", removeFood);

module.exports = router;
