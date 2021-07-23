const express = require("express");
const socket = require("socket.io");
const cors = require("cors");

const app = express();

const server = app.listen(8000, function () {
  console.log("8000 port dinleniyor");
});

const io = socket(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", function (socket) {
  console.log("socket baglantısı yapıldı.", socket.id);

  socket.on("chat", function (data) {
    io.sockets.emit("chat", data);
  });

  socket.on("yaziyor", function (data) {
    socket.broadcast.emit("yaziyor", data);
  });
});

// io.on("connection", (socket) => {
//   console.log(socket.id);

//   socket.on("join_room", (data) => {
//     socket.join(data);
//     console.log("User Joined Room: " + data);
//   });

//   socket.on("send_message", (data) => {
//     console.log(data);
//     socket.to(data.room).emit("receive_message", data.content);
//   });

//   socket.on("disconnect", () => {
//     console.log("USER DISCONNECTED");
//   });
// });
