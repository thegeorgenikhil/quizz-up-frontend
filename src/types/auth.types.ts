import { UserAuthInfoType } from "./index";

export type AuthType = {
  token: string;
  isAuthenticated: boolean;
};

export type AuthContextType = {
  auth: AuthType;
  setAuth: (arg0: AuthType) => void;
  signin: (arg0: UserAuthInfoType) => void;
  signup: (arg0: UserAuthInfoType) => void;
  signout: () => void;
};