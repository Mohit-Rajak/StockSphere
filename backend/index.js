require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const User = require("./model/UserModel");

const app = express();
const PORT = process.env.PORT || 9000;
const MONGO_URL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || "SECRET_KEY"; // JWT Secret Key

app.use(cors());
app.use(express.json());

//  Connect to MongoDB
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error: ", err));

//Middleware to Verify JWT Token
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "Access Denied!" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid Token!" });
    req.user = user;
    next();
  });
};

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate if all required fields are present
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


//Login Route
app.post("/login", async (req, res) => {
  try {
    console.log("Login Request Body:", req.body);

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found for email:", email);
      return res.status(404).json({ message: "User not found. Please sign up first!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid password for email:", email);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
    console.log("Login success, token generated");

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/allHoldings", (req, res) => {
  const holdings = [
    {
      name: "TCS",
      qty: 10,
      avg: 3000,
      price: 3200,
      net: "+2000",
      day: "+1.5%",
      isLoss: false
    },
    {
      name: "KVB",
      qty: 2,
      avg: 1200,
      price: 140,
      net: "500",
      day: "2%",
      isLoss: true
    },{
      name: "INFY",
      qty: 5,
      avg: 100,
      price: 1400,
      net: "-500",
      day: "-2%",
      isLoss: true
    },{
      name: "INFY",
      qty: 5,
      avg: 500,
      price: 1400,
      net: "-500",
      day: "-2%",
      isLoss: true
    },{
      name: "INFY",
      qty: 5,
      avg: 200,
      price: 1400,
      net: "-500",
      day: "-2%",
      isLoss: true
    },{
      name: "Jio",
      qty: 5,
      avg: 150,
      price: 400,
      net: "-50",
      day: "-2%",
      isLoss: true
    },{
      name: "Reliance",
      qty: 56,
      avg: 2200,
      price: 1900,
      net: "-900",
      day: "-99%",
      isLoss: true
    },{
      name: "Wipro",
      qty: 3,
      avg: 1600,
      price: 1400,
      net: "990",
      day: "2%",
      isLoss: true
    }
  ];

  res.json(holdings); //
});

app.get("/allPositions" , (req , res) => {
   const positions = [
    {
      product: "CNC",
      name: "RELIANCE",
      qty: 5,
      avg: 2550.2,
      price: 2580.5,
      isLoss: false,
      day: "+1.2%",
    },
    {
      product: "MIS",
      name: "TCS",
      qty: 10,
      avg: 3400.0,
      price: 3300.0,
      isLoss: true,
      day: "-1.7%",
    },
    {
      product: "CNC",
      name: "INFY",
      qty: 15,
      avg: 1450.0,
      price: 1495.0,
      isLoss: false,
      day: "+3.1%",
    },
    {
      product: "MIS",
      name: "HDFCBANK",
      qty: 20,
      avg: 1630.0,
      price: 1602.0,
      isLoss: true,
      day: "-1.72%",
    },
    {
      product: "CNC",
      name: "ITC",
      qty: 100,
      avg: 420.0,
      price: 428.7,
      isLoss: false,
      day: "+2.07%",
    },
    {
      product: "MIS",
      name: "BAJAJFINSV",
      qty: 3,
      avg: 15950.0,
      price: 16230.0,
      isLoss: false,
      day: "+1.75%",
    },
    {
      product: "CNC",
      name: "HINDUNILVR",
      qty: 8,
      avg: 2600.0,
      price: 2580.0,
      isLoss: true,
      day: "-0.77%",
    },
  ];
   res.json(positions);
});

app.post("/newOrder", (req, res) => {
  const { name, qty, price, mode } = req.body;

  if (!name || !qty || !price || !mode) {
    return res.status(400).json({ message: "Missing fields in request" });
  }
  console.log("New Order Received:", { name, qty, price, mode });
  return res.status(200).json({ message: "Order placed successfully" });
});



//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
