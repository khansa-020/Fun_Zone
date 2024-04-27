const express = require("express");
const {
  accessChat,
  addToRoom,
  createRoomChat,
  fetchChat,
  removeFromRoom,
  renameRoom,
} = require("../controllers/Chat/ChatController");

const router = express.Router();

router.post("/:id", accessChat);
router.get("/:id", fetchChat);
router.post("/:id/room", createRoomChat);
router.put("/rename", renameRoom);
router.put("/addtoroom", addToRoom);
router.put("/removefromroom", removeFromRoom);

module.exports = router;
