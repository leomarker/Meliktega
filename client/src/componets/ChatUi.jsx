import React from "react";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../hooks/useAuth";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const ChatUi = ({ socket }) => {
  const auth = useAuth();
  const user = JSON.parse(localStorage.getItem("user"));
  const [messages, setMessages] = useState([]);
  const lastMessageRef = useRef(null);

  console.log(user);

  useEffect(() => {
    socket.connect();
  }, []);

  useEffect(() => {
    socket.on("messageResponse", (data) =>
      setMessages((mess) => [...mess, data])
    );
  }, [socket]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-[100vh]">
      <ChatBar />
      <div className="bg-slate w-full h-full  relative">
        {/* <div className="bg-slateMinus w-full h-[4rem] navbar"></div> */}

        <div className="py-[10px] w-full absolute bottom-[0]">
          <ChatBody messages={messages} lastMessageRef={lastMessageRef} />
          <ChatFooter
            socket={socket}
            setMessages={setMessages}
            messages={messages}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatUi;
