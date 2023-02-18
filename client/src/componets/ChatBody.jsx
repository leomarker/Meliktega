import React from "react";

const ChatBody = ({ messages }) => {
  const username = JSON.parse(localStorage.getItem("user")).userName;

  console.log(messages);
  console.log(username);
  return (
    <div>
      <div className="message">
        {messages.map((message) => {
          if (message.username === username) {
            return (
              <div className="message__outer">
                <div className="message__inner">
                  <div className="message__avatar flex justify-center items-center">
                    <p>A</p>
                  </div>
                  <div className="message__bubble ml-[20px] mr-[10px] mb-[20px] p-[15px]">
                    {message.content}
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="message__incoming">
                <div className="message__incoming__inner">
                  <div className="message__incoming__avatar flex justify-center items-center">
                    <p>A</p>
                  </div>
                  <div className="message__incoming__bubble ml-[20px] mr-[10px] mb-[20px] p-[15px]">
                    {message.content}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ChatBody;
