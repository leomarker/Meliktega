import { useState } from "react";
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  let setProfile = false;
  let access;
  const login = async (email, password) => {
    await axios
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        access = response.data.login;
        console.log(response);
        setUser(response.data.userData);
        setProfile = response.data.setProfile
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(access);
    return access;
  };

  //   const logout = () => {
  //     setUser(null);
  //     navigate("/", { replace: true });
  //   };

  // const value = useMemo(
  //   () => ({
  //     //   user,
  //     login,
  //     //   logout,
  //   }),
  //   [user]
  // );

  return (
    <AuthContext.Provider value={{ login,user, setProfile }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
