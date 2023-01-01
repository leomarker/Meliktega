import React from "react";
import { useState } from "react";
import axios from "axios";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();

  const handleSubmit = (e) => {
    console.log("send some data");
    e.preventDefault();
    axios
      .post("/api/signup", {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center h-[100vh] flex-col">
      <div className="h-[60px] text-5xl font-extrabold mb-[10px] bg-gradient-to-r from-cyan-500 to-blue-500  text-transparent bg-clip-text">
        <p> Create An Account</p>
      </div>
      <div className="mb-[20px]">
        <p>SignUp with your socials</p>
      </div>
      <SocialIcons />
      <p className="mb-[10px]">or</p>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col mb-[30px]"
      >
        <div className="  w-[450px] h-[40px] mb-[30px]">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Melktega@gmail.com"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className=" w-full h-full p-[15px] rounded-2xl "
          />
        </div>
        <div className="w-[450px] h-[40px] mb-[30px]">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className=" w-full h-full p-[15px]  rounded-2xl "
          />
        </div>
        <div className="w-[450px] h-[40px] mb-[60px]">
          <label htmlFor="email">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="password"
            onChange={(e) => {
              setconfirmPassword(e.target.value);
            }}
            className="w-full h-full p-[15px]  rounded-2xl"
          />
        </div>
        <div>
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-500"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
      <div>
        <p>
          Already have an account?<Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
