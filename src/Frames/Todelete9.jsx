import React, { useState } from "react";

const MessageComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    const newMessageWithTimestamp = {
      text: newMessage,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessageWithTimestamp]);
    setNewMessage("");
  };

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {message.text} {message.timestamp}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default MessageComponent;
