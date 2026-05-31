const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
  placeOrder,
  userOrders,
  listOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

router.post("/place", authMiddleware, placeOrder);
router.get("/userorders", authMiddleware, userOrders);
router.get("/list", listOrders);
router.post("/status", updateOrderStatus);

module.exports = router;
