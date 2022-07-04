import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context";

export const PrivateRoutes = ({ children }) => {
  const { auth } = useAuth();
  return <>{auth.token ? children : <Navigate to={"/sigin"} />}</>;
};
