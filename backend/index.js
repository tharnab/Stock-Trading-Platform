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

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGODB_URL;
const SECRET = process.env.JWT_SECRET || "super_secret_code";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());

// ✅ FIXED CORS CONFIGURATION - More permissive
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://stock-platform-blush.vercel.app",
  "https://stock-trading-platform-five.vercel.app",
  "https://stock-trading-platform-production.up.railway.app",
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    // Allow all subdomains of vercel.app, railway.app, and localhost
    if (origin.endsWith('.vercel.app') || 
        origin.endsWith('.railway.app') ||
        origin.includes('localhost')) {
      return callback(null, true);
    }
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('Allowed origin:', origin);
      callback(null, true); // ✅ TEMPORARILY ALLOW ALL ORIGINS
    }
  },
  credentials: true,
}));

// ✅ SIMPLIFIED MIDDLEWARE
function middleware(req, res, next) {
  // Check for token in cookie only
  const token = req.cookies?.token;
  
  if (!token) {
    return res.status(401).json({ message: "Unauthorized. Please login first." });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    console.log('Token validation failed:', err.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to database");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
  }
}
connectDB();

// ✅ HEALTH CHECK ENDPOINTS
app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is healthy',
    timestamp: new Date().toISOString()
  });
});

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

// Get user data endpoint
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

    // Set cookie with production settings
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      domain: '.vercel.app',
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
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create token
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "24h" });

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      domain: '.vercel.app',
      maxAge: 24 * 60 * 60 * 1000
    });

    res.json({ message: "Login successful", user: { id: user._id, name: user.name } });
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
});

app.post("/logout", (req, res) => {
  // Clear cookie for production
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    domain: '.vercel.app'
  });
  
  res.json({ message: "Logged out successfully" });
});

app.post('/token', middleware, (req, res) => {
  // Create a new token for API use
  const token = jwt.sign({ id: req.userId }, SECRET, { expiresIn: '24h' });
  res.json({ token });
});

// ✅ FIXED ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ 
    error: 'Internal server error',
    message: 'Something went wrong'
  });
});

// ✅ FIXED 404 HANDLER (REMOVED WILDCARD *)
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Endpoint not found',
    message: `Route ${req.originalUrl} does not exist`
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});