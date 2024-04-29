const socketIO = require("socket.io");

module.exports = function(server) {
  const io = socketIO(server, {
    pingTimeout: 60000, // if no msg snd in 60 secs then connection will close to save the bandwidth
    cors: {
      origin: "http://localhost:3000", // Adjust the origin as per your frontend setup
    },
  });

  io.on("connection", (socket) => {
    console.log("connected to socket.io");

    socket.on("setup", (userData) => {
      socket.join(userData._id);
      socket.emit("connected");
    });

    socket.on("join chat", (room) => {
      socket.join(room);
    });

    socket.on("typing", (room) => socket.in(room).emit("typing"));
    socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

    socket.on("newmessage", (newMessageRecieved) => {
      var chat = newMessageRecieved.chat;
      if (!chat.users) return console.log("chat.users not defined");

      chat.users.forEach((user) => {
        if (user._id == newMessageRecieved.sender._id) return;

        socket.in(user._id).emit("message received", newMessageRecieved);
      });
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
