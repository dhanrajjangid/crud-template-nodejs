const Hotel = require("../models/hotelModel");

const addHotel = async (req, res) => {
  try {
    const newHotel = new Hotel(req.body);
    await newHotel.save();
    res.json({ message: "Hotel added successfully", hotel: newHotel });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add hotel", error: error.message });
  }
};

const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { addHotel, getHotels };
