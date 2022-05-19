import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [auth, setAuth] = useState(() => {
    if (token) {
      return {
        token,
        isAuthenticated: !!token,
      };
    }
    return { token: "", isAuthenticated: false };
  });

  const signup = async (userInfo) => {
    const { name, email, password } = userInfo;
    const res = await api.post("/auth/signup", {
      name,
      email,
      password,
    });
    const data = await res.data;
    if (data.error) {
      throw new Error(data.error);
    }
    if (res.status === 201 && data.user) {
      localStorage.setItem("token", data.user.token);
      setAuth({
        token: data.user.token,
        isAuthenticated: true,
      });
      navigate("/");
    }
  };

  const signin = async (userInfo) => {
    const { email, password, rememberMe } = userInfo;
    const res = await api.post("/auth/login", {
      email,
      password,
    });
    const data = await res.data;
    if (data.error) {
      throw new Error(data.error);
    }
    if (res.status === 200 && data.user) {
      if (rememberMe) localStorage.setItem("token", data.user.token);
      setAuth({
        token: data.user.token,
        isAuthenticated: true,
      });
      navigate("/");
    }
  };

  const signout = () => {
    localStorage.removeItem("token");
    setAuth({ token: "", isAuthenticated: false });
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
