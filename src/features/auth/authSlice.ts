import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";
import { UserAuthInfoType } from "../../types";

export interface AuthState {
  token: string;
  isAuthenticated: boolean;
}

export interface AuthResponse {
  token: string;
}

const initialState = {
  token: localStorage.getItem("token") || "",
  isAuthenticated: !!localStorage.getItem("token") || false,
};

export const signup = createAsyncThunk<AuthResponse, UserAuthInfoType>(
  "auth/signup",
  async (userInfo) => {
    const { name, email, password } = userInfo;
    const res = await api.post("/auth/signup", {
      name,
      email,
      password,
    });
    const data = await res.data;
    return data.user;
    // if (data.error) {
    //   throw new Error(data.error);
    // }
    // if (res.status === 201 && data.user) {
    //   localStorage.setItem("token", data.user.token);
    //   setAuth({
    //     token: data.user.token,
    //     isAuthenticated: true,
    //   });
    //   navigate("/");
    // }
  }
);

export const signin = createAsyncThunk<AuthResponse, UserAuthInfoType>(
  "auth/signin",
  async (userInfo) => {
    const { email, password } = userInfo;
    const res = await api.post("/auth/login", {
      email,
      password,
    });
    const data = await res.data;
    return data.user;
    // if (res.status === 200 && data.user) {
    //   if (rememberMe) localStorage.setItem("token", data.user.token);
    //   setAuth({
    //     token: data.user.token,
    //     isAuthenticated: true,
    //   });
    //   navigate("/");
    // }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: (state) => {
      state.token = "";
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
