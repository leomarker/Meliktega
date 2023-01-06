import React from "react";

const ChatUi = () => {
  return (
    // <div className="flex flex-col h-[100vh]">
    //   <div className="w-[100%] h-[10%] header">
    //     <div className="w-full h-full flex justify-start items-center">
    //       <div className="m-[50px] flex items-center">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="34"
    //           height="34"
    //           fill="currentColor"
    //           class="bi bi-wechat"
    //           viewBox="0 0 16 16"
    //           className="chat-icon mr-[10px]"
    //         >
    //           <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z" />
    //           <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z" />
    //         </svg>
    //         <p className="font-extrabold text-[20px]  bg-gradient-to-r from-cyan-500 to-blue-500  text-transparent bg-clip-text">
    //           Melktega
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-[100%] h-[90%] flex">
    //     <div className="w-[30%] h-full">
    //       <div className="flex mt-[30px]">
    //         <input
    //           type="text"
    //           className="w-[60%] h-[30px] p-[15px] rounded-2xl "
    //           placeholder="search"
    //         />
    //       </div>
    //     </div>
    //     <div className=" w-[70%] h-full flex flex-col-reverse">
    //       <div className="w-full flex justify-center items-center h-[100px] ">
    //         <input
    //           type="text"
    //           className="w-[70%] h-[40px] p-[15px] rounded-2xl"
    //           placeholder="Type Message"
    //           name=""
    //           id=""
    //         />
    //         <button
    //           className="bg-gradient-to-r from-cyan-500 to-blue-500"
    //           type="submit"
    //         >
    //           send
    //         </button>
    //       </div>

    //       <div className="w-full  h-[10%]"></div>
    //     </div>
    //   </div>
    // </div>
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
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            earum eius dignissimos nulla. Adipisci, magnam quisquam! Doloribus
            suscipit nobis aliquid harum, fugiat voluptatem facere eos,
            asperiores, laborum a eveniet repudiandae!
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
