import React from "react";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../hooks/useAuth";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const ChatUi = ({ socket }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [messages, setMessages] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const lastMessageRef = useRef(null);
  const [users, setUsers] = useState([]);

  console.log(selectedChat);

  useEffect(() => {
    socket.connect();
    socket.emit("users", { user });
  }, []);

  useEffect(() => {
    socket.on("messageResponse", (data) =>
      setMessages((mess) => [...mess, data])
    );
  }, [socket]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket.on("users", (data) => {
      setUsers(data);
    });
  });
  return (
    <div className="flex h-[100vh]">
      <ChatBar users={users} setSelectedChat={setSelectedChat} />
      <div className="bg-slate w-full h-full  relative">
        {/* <div className="bg-slateMinus w-full h-[4rem] navbar"></div> */}

        <div className="py-[10px] w-full absolute bottom-[0]">
          <ChatBody
            messages={messages}
            lastMessageRef={lastMessageRef}
            selectedChat={selectedChat}
          />
          <ChatFooter
            socket={socket}
            setMessages={setMessages}
            messages={messages}
            selectedChat={selectedChat}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatUi;
