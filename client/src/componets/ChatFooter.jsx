import React from "react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const ChatFooter = ({ socket, setMessages, messages }) => {
  const [message, setMessage] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const handleSend = (e) => {
    e.preventDefault();
    console.log(message);
    console.log();
    if (!(message === "")) {
      socket.emit("message", {
        content: message,
        socketId: socket.id,
        username: user.userName,
      });
      console.log("sadfsa");
      // setMessages([...messages, message]);
    }
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
