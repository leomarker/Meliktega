import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = localStorage.getItem("auth");
  console.log(auth);

  if (auth) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
