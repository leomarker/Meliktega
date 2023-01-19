import { useState } from "react";
import { createContext, useContext, useMemo } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
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
        setUser(response.data.userData);
        setProfile = response.data.setProfile
        setAuth(response.data.login)
        localStorage.setItem("token",)
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(access)
    return access;
  };

  return (
    <AuthContext.Provider value={{ login,user, setProfile,auth , access }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
