const express = require('express');
const chatRoomController = require('../controllers/ChatRoom/ChatRoom');

const router = express.Router();

router.get('/chat-rooms', chatRoomController.getAllChatRooms);
router.post('/chat-rooms', chatRoomController.createChatRoom);
router.post('/chat-rooms/:roomId/add-user', chatRoomController.addUserToChatRoom);

module.exports = router;
