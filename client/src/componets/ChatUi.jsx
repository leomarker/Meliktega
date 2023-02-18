import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const ChatUi = ({ socket }) => {
  const auth = useAuth();
  const user = auth.user;
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   socket.on("messageResponse", (data) => {
  //     setMessages([...messages, data]);
  //     console.log(data);
  //   });
  // }, [socket, messages]);

  useEffect(() => {
    socket.on("messageResponse", (data) =>
      setMessages((mess) => [...mess, data])
    );
  }, [socket]);

  return (
    <div className="flex h-[100vh]">
      <ChatBar />
      <div className="bg-slate w-full h-full  relative">
        {/* <div className="bg-slateMinus w-full h-[4rem] navbar"></div> */}

        <div className="py-[10px] w-full absolute bottom-[0]">
          <ChatBody messages={messages} />
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
