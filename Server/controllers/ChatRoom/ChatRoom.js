const ChatRoom = require('../../models/ChatRoom');

const chatRoom= {
  getAllChatRooms: async (req, res) => {
    try {
      const chatRooms = await ChatRoom.find();
      res.json(chatRooms);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createChatRoom: async (req, res) => {
    const { name } = req.body;
    try {
      const newChatRoom = new ChatRoom({ name, users: [], messages: [] });
      await newChatRoom.save();
      res.json(newChatRoom);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  addUserToChatRoom: async (req, res) => {
    const { roomId } = req.params;
    const { username } = req.body;
    try {
      const chatRoom = await ChatRoom.findById(roomId);
      if (!chatRoom) {
        return res.status(404).json({ error: 'Chat room not found' });
      }

      if (!chatRoom.users.includes(username)) {
        chatRoom.users.push(username);
        await chatRoom.save();
      }

      res.json(chatRoom);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = chatRoom;
