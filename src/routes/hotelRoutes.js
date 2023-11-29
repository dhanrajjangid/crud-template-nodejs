const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/hotelController"); // Update this path

router.get("/getHotels", hotelController.getHotels);
router.post("/addHotel", hotelController.addHotel);

module.exports = router;
