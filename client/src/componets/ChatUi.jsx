import React from "react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const ChatUi = ({ socket }) => {
  const auth = useAuth();
  const user = auth.user;
  const [sentMessages, setSentMessages] = useState([]);
  const [messageResponse, setMessageResponse] = useState([]);
  console.log(sentMessages + "nati");

  return (
    <div className="flex h-[100vh]">
      <ChatBar />
      <div className="bg-slate w-full h-full  relative">
        <div className="bg-slateMinus w-full h-[4rem] navbar"></div>

        <div className="py-[10px] w-full absolute bottom-[0]">
          <ChatBody messageResponse={messageResponse} />
          <ChatFooter
            socket={socket}
            setSentMessages={setSentMessages}
            sentMessages={sentMessages}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatUi;
