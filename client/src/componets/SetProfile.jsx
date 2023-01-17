import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const SetProfile = () => {
  const [name, setName] = useState(null);
  const [userName, setUsername] = useState(null);
  const navigate = useNavigate();
  const auth = useAuth();

  const handelSubmit = (e) => {
    console.log("send some profile data");
    e.preventDefault();
    console.log(auth.user._id)
    const user = auth.user

    axios
      .post("/api/setProfile", {
        name: name,
        userName: userName,
        userId: auth.user._id
      })
      .then(function (response) {
        console.log(response);
        auth.user = {user, userName}
        navigate("/chats", { replace: true });
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
            <button className=" bg-gradient-to-r from-cyan-500 to-blue-500">
              set profile
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SetProfile;
