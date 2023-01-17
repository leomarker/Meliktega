import React from "react";
import { useAuth } from "../hooks/useAuth";


const ChatUi = () => {
const auth = useAuth();
const user = auth.user
console.log(user)
  return (
    <div className="flex h-[100vh]">
      <div className="bg-slate w-[4rem] h-full flex flex-col">
        <div className="h-full flex flex-col mt-[20px] mx-[10px]">
          {" "}
          <div className="mb-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-list-nested"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <div className="mb-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-chat-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
            </svg>
          </div>
          <div className="mb-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-gear-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-slateMinus w-[20rem] h-full">
        <div className="p-[20px]">
          {" "}
          <form action="">
            <input
              type="text"
              placeholder="search"
              className="bg-slatePlus w-[18rem] h-[2rem] p-[10px] bg-stone-700"
            />
          </form>
        </div>
      </div>
      <div className="bg-slate w-full h-full  relative">
        <div className="bg-slateMinus w-full h-[4rem] navbar"></div>

        <div className="py-[10px] w-full absolute bottom-[0]">
          <div className="message">
            <div className="message__outer">
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
            </div>
          </div>
          <div></div>
          <form action="" className="flex">
            <input
              type="text"
              placeholder="Write a message"
              className="w-full bg-slatePlus p-[10px]"
            />
            <button className="chat-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatUi;
