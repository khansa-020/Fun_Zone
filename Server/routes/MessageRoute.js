const express = require("express");
const { sendMessage, allMessages } = require("../controllers/Chat/MessageController");

const router = express.Router();

router.post("/:id", sendMessage);
router.get("/:chatId/fetchMessages", allMessages);

module.exports = router;
