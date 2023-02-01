import React from "react";
import { useAuth } from "../hooks/useAuth";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const ChatUi = ({ socket }) => {
  const auth = useAuth();
  const user = auth.user;
  console.log(user);
  return (
    <div className="flex h-[100vh]">
      <ChatBar />
      <div className="bg-slate w-full h-full  relative">
        <div className="bg-slateMinus w-full h-[4rem] navbar"></div>

        <div className="py-[10px] w-full absolute bottom-[0]">
          <ChatBody />
          <ChatFooter socket={socket} />
        </div>
      </div>
    </div>
  );
};

export default ChatUi;
