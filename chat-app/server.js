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

