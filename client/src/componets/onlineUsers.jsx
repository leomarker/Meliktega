import React from "react";

const onlineUsers = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        return (
          <div
            className="w-[100%] h-14 bg-slatePlus flex justify-center items-center border-slate-700 border-b-2 "
            key={user.user.userName}
          >
            {user.user.name}
          </div>
        );
      })}
    </>
  );
};

export default onlineUsers;
