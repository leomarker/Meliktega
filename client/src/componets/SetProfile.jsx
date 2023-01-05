import React from "react";
import { useState } from "react";

const SetProfile = () => {
  const [name, setName] = useState(null);
  const [userName, setUsername] = useState(null);

  const handelSubmit = () => {};

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="h-[600px] w-[800px] flex justify-center items-center bg-black rounded-2xl flex-col">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full h-[100px] w-[100px] mb-[20px]"></div>
        <div className="flex flex-col">
          <form
            action=""
            onSubmit={handelSubmit}
            className="flex justify-center items-center flex-col mb-[30px]"
          >
            {" "}
            <input
              type="text"
              placeholder="Name"
              className="w-[400px] h-[40px] mb-[20px] rounded-xl p-[10px]"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="@username"
              className="w-[400px] h-[40px] mb-[20px] rounded-xl p-[10px]"
              onChange={(e) => setUsername(e.target.value)}
            />
          </form>
        </div>
        <div>
          <button className=" bg-gradient-to-r from-cyan-500 to-blue-500">
            set profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetProfile;
