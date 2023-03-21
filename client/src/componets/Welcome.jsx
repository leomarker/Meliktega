import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-wrapper flex items-center justify-center">
      <div className="welcome flex items-center justify-center flex-col">
        <div className="h-[40px] sm:h-[80px] welcome-text">
          <h3 className="h-[100%] text-[2rem] font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500  text-transparent bg-clip-text">
            Welcome to Melktega
          </h3>
        </div>
        <div className="mt-[30px] text-[18px] text-center font-medium">
          <p> Chat With your friends share moments</p>
          <p> with your beloved ones with ease</p>
          <p> Melktega is at your door step</p>
        </div>
        <div className="my-[50px]">
          <Link to="/login">
            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">
              Start Chat
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
