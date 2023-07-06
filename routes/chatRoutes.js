const express = require("express");
const { protect } = require("../middleware/authmiddleware");
const { accessChat, fetchChats } = require("../controllers/chatControllers");

const router = express.Router();

router.post("/accessChat", protect, accessChat); //accessing or creating the chat
router.get("/fetchChat", protect, fetchChats); //get all chat of a particular user from DB

module.exports = router;
