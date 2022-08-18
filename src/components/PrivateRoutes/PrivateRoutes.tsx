import { Navigate } from "react-router-dom";
import { useAuth } from "../../context";
import { PropsWithChildren } from "react";

export const PrivateRoutes = ({ children }: PropsWithChildren) => {
  const { auth } = useAuth();
  return <>{auth.token ? children : <Navigate to={"/sigin"} />}</>;
};
