import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-wrapper flex items-center justify-center">
      <div className="welcome flex items-center justify-center flex-col">
        <div>
          <h3 className="h-[60px] text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500  text-transparent bg-clip-text">
            {" "}
            Welcome to Melktega
          </h3>
        </div>
        <div className="my-[20px] text-[18px] text-center">
          <p> Chat With your friends ,share moments</p>
          <p> with your beloved ones with ease</p>
          <p> Melktega is at your door step</p>
        </div>
        <div>
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
