import { Navigate } from "react-router-dom";
import { PropsWithChildren } from "react";
import { useAppSelector } from "../../app/hooks";

export const PrivateRoutes = ({ children }: PropsWithChildren) => {
  const { token } = useAppSelector((state) => state.auth);
  return <>{token ? children : <Navigate to={"/sigin"} />}</>;
};
