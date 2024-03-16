const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
  name: String,
  users: [String],
  messages: [{ 
    user: String,
    text: String }],
});

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

module.exports = ChatRoom;
