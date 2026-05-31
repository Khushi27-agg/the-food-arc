const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password)
      return res.json({ success: false, message: "All fields are required" });

    const exists = await User.findOne({ email });
    if (exists)
      return res.json({ success: false, message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed });
    await user.save();

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.json({ success: false, message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.json({ success: false, message: "Invalid credentials" });

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = { registerUser, loginUser };
