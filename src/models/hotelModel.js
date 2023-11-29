const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  taste: { type: Number, required: true },
});

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  cleanliness: { type: Number, required: true },
  taste: { type: Number, required: true },
  service: { type: Number, required: true },
  type: { type: String, required: true },
  menu: [menuItemSchema],
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
