import React from "react";

const onlineUsers = ({ users, setSelectedChat }) => {
  let userName = JSON.parse(localStorage.getItem("user")).userName;
  let usersExceptMe = users.filter((user) => {
    return user.user.userName !== userName;
  });
  console.log(usersExceptMe);
  return (
    <>
      {usersExceptMe.map((user) => {
        return (
          <div
            className="w-[100%] h-14 bg-slatePlus flex justify-center items-center border-slate-700 border-b-2 "
            key={user.user.userName}
            onClick={(e) => {
              setSelectedChat(user);
            }}
          >
            {user.user.name}
          </div>
        );
      })}
    </>
  );
};

export default onlineUsers;
