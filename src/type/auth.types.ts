import { UserInfoType } from "./index";

export type AuthType = {
  token: string;
  isAuthenticated: boolean;
};

export type AuthContextType = {
  auth: AuthType;
  setAuth: (arg0: AuthType) => void;
  signin: (arg0: UserInfoType) => void;
  signup: (arg0: UserInfoType) => void;
  signout: (arg0: UserInfoType) => void;
};
