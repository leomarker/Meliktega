import React from "react";
import { useState } from "react";

const ChatFooter = () => {
  const [message, setMessage] = useState("");
  const handelsubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {" "}
      <form action="" className="flex">
        <input
          type="text"
          placeholder="Write a message"
          className="w-full bg-slatePlus p-[10px]"
        />
        <button className="chat-btn">Send</button>
      </form>
    </div>
  );
};

export default ChatFooter;
