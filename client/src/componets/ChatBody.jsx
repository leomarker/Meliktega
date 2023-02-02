import React from "react";

const ChatBody = ({ messageResponse }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(messageResponse);
  console.log(user);
  return (
    <div>
      <div className="message">
        {messageResponse.map((message) => {
          if (message.username === user.userName) {
            return (
              <div className="message__outer">
                <div className="message__inner">
                  <div className="message__avatar flex justify-center items-center">
                    <p>A</p>
                  </div>
                  <div className="message__bubble ml-[20px] mr-[10px] mb-[20px] p-[15px]">
                    {message.text}
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
                    {message.text}
                  </div>
                </div>

                <div></div>
              </div>
            );
          }
        })}

        {/* <div className="message__outer">
          <div className="message__inner">
            <div className="message__avatar flex justify-center items-center">
              <p>A</p>
            </div>
            <div className="message__bubble ml-[20px] mr-[10px] mb-[20px] p-[15px]">
              hello
            </div>
          </div>

          <div></div>
        </div>
        <div className="message__incoming">
          <div className="message__incoming__inner">
            <div className="message__incoming__avatar flex justify-center items-center">
              <p>A</p>
            </div>
            <div className="message__incoming__bubble ml-[20px] mr-[10px] mb-[20px] p-[15px]">
              hey! how are ya...
            </div>
          </div>

          <div></div>
        </div>
        <div className="message__incoming">
          <div className="message__incoming__inner">
            <div className="message__incoming__avatar flex justify-center items-center">
              <p>A</p>
            </div>
            <div className="message__incoming__bubble ml-[20px] mr-[10px] mb-[20px] p-[15px]">
              haven't seen you in a while
            </div>
          </div>

          <div></div>
        </div> */}
      </div>
    </div>
  );
};

export default ChatBody;
