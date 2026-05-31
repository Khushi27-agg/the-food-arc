const Order = require("../models/orderModel");
const User = require("../models/userModel");

const placeOrder = async (req, res) => {
  try {
    const { items, amount, address } = req.body;
    const order = new Order({
      userId: req.userId,
      items,
      amount,
      address,
    });
    await order.save();
    await User.findByIdAndUpdate(req.userId, { cartData: {} });
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const userOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const listOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    await Order.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = { placeOrder, userOrders, listOrders, updateOrderStatus };
