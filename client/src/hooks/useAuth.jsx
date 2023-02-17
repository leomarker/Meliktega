import { useState } from "react";
import { createContext, useContext, useMemo } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [auth, setAuth] = useState(false);
  let setProfile = false;
  let access = {
    access: false,
    setProfile: false,
  };
  const login = async (email, password) => {
    await axios
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        access.access = response.data.login;
        access.setProfile = response.data.setProfile;

        setAuth(response.data.login);
        setUser(response.data.userData);
        setProfile = response.data.setProfile;
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data.userData));
      })
      .catch(function (error) {
        console.log(error);
      });

    return access;
  };

  return (
    <AuthContext.Provider value={{ login, user, setProfile, auth, access }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
