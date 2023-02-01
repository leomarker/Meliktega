import React from "react";
import { useState } from "react";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");
  const handleSend = (e) => {
    e.preventDefault();
    socket.emit("message", {
      text: message,
      socketId: socket.id,
    });
    setMessage("");
  };
  return (
    <div>
      {" "}
      <form action="" className="flex" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Write a message"
          className="w-full bg-slatePlus p-[10px]"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
        <button className="chat-btn">Send</button>
      </form>
    </div>
  );
};

export default ChatFooter;
