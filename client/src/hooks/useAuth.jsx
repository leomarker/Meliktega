import { useState } from "react";
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
  // const [user, setUser] = useLocalStorage("user", userData);
  const [accces, setAcess] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    await axios
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("auth", response.data.login);
        console.log(response.data.login);
        console.log(response.data.login);
        // if (auth) {
        //   Navigate("/setprofile", { replace: true });
        // }
        setAcess(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    return accces;
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

  return <AuthContext.Provider value={login}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
