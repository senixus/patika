import React, { useState, useEffect } from "react";
import "./index.css";
import io from "socket.io-client";
let socket;

const PORT = "localhost:8000/";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket = io(PORT);
  }, []);

  useEffect(() => {
    socket.on("chat", (data) => {
      setMessages([...messages, data]);
    });
  });

  const handleChange = (e) => {
    const message = e.target.value;
    setMessage(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit("chat", message);

    setMessage("");
  };

  return (
    <div id="chat">
      <h2>Chat App</h2>
      <div id="chat-window">
        {messages.map((message, index) => (
          <div id="output" key={index}>
            {message}
          </div>
        ))}
      </div>
      <input
        onChange={handleChange}
        id="mesaj"
        type="text"
        value={message}
        placeholder="Mesaj"
      />
      <button id="gonder" type="submit" onClick={handleSubmit}>
        Gönder
      </button>
    </div>
  );
};

export default App;
