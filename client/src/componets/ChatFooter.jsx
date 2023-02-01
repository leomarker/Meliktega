import React from "react";
import { useState } from "react";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");
  const handleSend = (e) => {
    e.preventDefault();
    console.log("asdhjfgsa");
    console.log(message);

    socket.emit("message", {
      text: message,
    });
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
        />
        <button className="chat-btn">Send</button>
      </form>
    </div>
  );
};

export default ChatFooter;
