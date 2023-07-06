const express = require("express");
const { protect } = require("../middleware/authmiddleware");
const {
  sendMessage,
  fetchMessage,
} = require("../controllers/messageController");

const router = express.Router();

router.post("/sendMessage", protect, sendMessage);
router.get("/:chatId", protect, fetchMessage); //get all messages for a particular chat

module.exports = router;
