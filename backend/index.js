require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const { HoldingsModel }  = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionModel');
const { OrdersModel } = require('./model/OrdersModel');
const { UserModel } = require('./model/UserModel');
const { middleware } = require('./middleware');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGODB_URL;
const SECRET = process.env.JWT_SECRET || "super_secret_code";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());

const allowedOrigins = [
  "http://localhost:5173", // frontend
  "http://localhost:3000", // dashboard (or whatever port it runs on)
  'https://stock-platform-blush.vercel.app',
  'https://stock-trading-platform-five.vercel.app',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to database");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
  }
}
connectDB();

// Routes
app.get('/allHoldings', async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post('/newOrder', middleware, async (req, res) => {
  let newOrder = new OrdersModel({
    user: req.userId,
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    model: req.body.model,
  });

  await newOrder.save();
  res.send('order saved');
});

app.get("/myOrders", middleware, async (req, res) => {
  try {
    const orders = await OrdersModel.find({ user: req.userId }).populate("user", "email name");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
});

// NEW: Get user data endpoint
app.get("/user", middleware, async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ 
      id: user._id, 
      name: user.name, 
      email: user.email 
    });
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
});

app.get("/check-auth", middleware, (req, res) => {
  res.json({ authenticated: true });
});

app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already taken" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Create token
    const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: '24h' });

    // Set cookie with proper settings for cross-origin
    res.cookie('token', token, {
      httpOnly: true,
      secure: false, // set to true in production with HTTPS
      sameSite: 'lax', // or 'none' if using HTTPS
      maxAge: 24 * 60 * 60 * 1000
    });

    res.status(201).json({ message: "Signup successful", user: { id: newUser._id, name: newUser.name } });
  } catch (err) {
    res.status(500).json({ message: 'Error: ' + err.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" }); // Fixed: res.status instead of express.status
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create token
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "24h" });

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000
    });

    res.json({ message: "Login successful", user: { id: user._id, name: user.name } });
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    domain: 'localhost'
  });
  res.json({ message: "Logged out successfully" });
});

app.post('/token', middleware, (req, res) => {
  // Create a new token for API use
  const token = jwt.sign({ id: req.userId }, SECRET, { expiresIn: '24h' });
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});