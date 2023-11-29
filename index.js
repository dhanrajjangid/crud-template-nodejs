const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware
const userRoutes = require("./src/routes/userRoutes");
const hotelRoutes = require("./src/routes/hotelRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

require("dotenv").config(); // Load environment variables from .env

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS
app.use(cors()); // Use this line to enable CORS

// Routes
app.use("/users", userRoutes); // Use '/users' for user-related routes
app.use("/hotel", hotelRoutes); // Use '/users' for user-related routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
