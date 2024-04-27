const asyncHandler = require("express-async-handler");
const ChatModel = require("../../models/ChatModel.js");
const MessageModel = require("../../models/MessageModel.js");
const User = require("../../models/Users.js");

const sendMessage = asyncHandler(async (req, res) => {
  const id = req.params.id; //logged in user
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    return res.sendStatus(400);
  }

  var newMessage = {
    sender: id,
    content: content,
    chat: chatId,
  };
  try {
    var message = await MessageModel.create(newMessage);
    message = await message.populate("sender", "username profilePicture");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "username profilePicture email",
    });
    await ChatModel.findByIdAndUpdate(req.body.chatId, {
      latestMessage: message,
    });
    res.json(message);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const allMessages = asyncHandler(async (req, res) => {
  try {
    const messages = await MessageModel.find({ chat: req.params.chatId })
      .populate("sender", "username profilePicture email")
      .populate("chat");
    res.json(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = {
  sendMessage,
  allMessages,
};
