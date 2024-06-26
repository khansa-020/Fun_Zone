const asyncHandler = require("express-async-handler");
const ChatModel = require("../../models/ChatModel.js");
const User = require("../../models/Users.js");


//Access Chat
const accessChat = asyncHandler(async (req, res) => {
  const id = req.params.id; //logged in user
  const { userId } = req.body;
  if (!userId) {
    return res.sendStatus(400);
  }
  var isChat = await ChatModel.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");
  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "username email  profilePicture",
  });
  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [id, userId],
    };
    try {
      const createdChat = await ChatModel.create(chatData);
      const fullChat = await ChatModel.findOne({
        _id: createdChat._id,
      }).populate("users", "-password");
      res.status(200).send(fullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});


//Fetch Chat
const fetchChat = asyncHandler(async (req, res) => {
  const id = req.params.id; //logged in user
  try {
    ChatModel.find({ users: { $elemMatch: { $eq: id } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "username email  profilePicture",
        });
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});


//Create ChatRoom
const createRoomChat = asyncHandler(async (req, res) => {
  const id = req.params.id; //logged in user
  if (!req.body.users || !req.body.name) {
    return res.status(400).send({ message: "Please fill all the fields" });
  }
  var users = JSON.parse(req.body.users);
  if (users.length < 2) {
    return res
      .status(400)
      .send("More than 2 users are required to form a Room");
  }
  users.push(id);
  try {
    const roomChat = await ChatModel.create({
      chatName: req.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: id,
    });
    const fullRoomChat = await ChatModel.findOne({ _id: roomChat._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");

    res.status(200).json(fullRoomChat);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});


//Rename ChatRoom
const renameRoom = asyncHandler(async (req, res) => {
  const { chatId, chatName } = req.body;
  const updatedChat = await ChatModel.findByIdAndUpdate(
    chatId,
    {
      chatName,
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!updatedChat) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(updatedChat);
  }
});



// Add to ChatRoom
const addToRoom = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  const added = await ChatModel.findByIdAndUpdate(
    chatId,
    {
      $push: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!added) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(added);
  }
});

//Remove From ChatRoom
const removeFromRoom = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  const removed = await ChatModel.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!removed) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(removed);
  }
});

module.exports = {
  accessChat,
  fetchChat,
  createRoomChat,
  renameRoom,
  addToRoom,
  removeFromRoom,
};
