import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import SocialIcons from "./SocialIcons";

const Auth = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const auth = useAuth();

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("send some data");
    e.preventDefault();

    const check = await auth.login(email, password);
    if (check.access) {
      if (!check.setProfile) {
        Navigate("/setprofile");
      } else {
        Navigate("/chats");
      }
    }
  };
  return (
    <div className="auth flex items-center">
      <div className="login flex items-center justify-center h-[100%] w-[100%] flex-col">
        <h2 className="h-[60px] text-5xl font-extrabold mb-[10px] bg-gradient-to-r from-cyan-500 to-blue-500  text-transparent bg-clip-text">
          Login To Your Account{" "}
        </h2>

        <div className="mb-[30px]">
          <h3 className="text-[1rem] font-normal">login with your socials</h3>
        </div>
        <SocialIcons />

        <p className="mb-[20px]">or</p>

        <form
          action=""
          className="flex  items-center flex-col mb-[20px]"
          onSubmit={handleSubmit}
        >
          <div className="w-[450px] h-[40px] mb-[40px]">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Melktega@gmail.com"
              className=" w-full h-full rounded-xl p-[10px]"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div className="w-[450px] h-[40px] mb-[40px]">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="password"
              className="w-full h-full rounded-xl p-[10px]"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-[40px] bg-gradient-to-r from-cyan-500 to-blue-500  text-transparent bg-clip-text float-right">
            <p> Forgot password?</p>
          </div>
          <button className=" bg-gradient-to-r from-cyan-500 to-blue-500">
            SignIn
          </button>
        </form>
        <div className="">
          <h3 className="text-[1rem]">
            Dont have an account?
            <Link to="/signup">signup now!</Link>
          </h3>
        </div>
      </div>
      {/* <div className="signup flex items-center justify-center h-[100%] w-[100%] flex-col bg-green-600">
        <div className="mb-[30px]">
          <h3 className="text-[3rem]"> New here?</h3>
        </div>
        <div className="text-center text-[18px] mb-[40px]">
          <p>Signup Now and start chating</p>
          <p>don't make your friends wait more!!</p>
        </div>
        <div>
          <button>SignUp</button>
        </div>
      </div> */}
    </div>
  );
};

export default Auth;
