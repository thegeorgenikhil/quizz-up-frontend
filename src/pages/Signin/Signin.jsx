import React from "react";
import { Link } from "react-router-dom";

export const Signin = () => {
  return (
    <>
      <header className="header">
        <p className="font-bold text-center">Sign In🔐</p>
      </header>
      <div className="signup-card">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Username:"
            name="username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Enter Password: "
            name="password"
          />
        </div>
        <div className="flex justify-between text-xs align-center">
          <div className="flex align-center">
            <input type="checkbox" name="remember-me" />
            <label htmlFor="remember-me">&#160;Remember Me</label>
          </div>
          <Link
            to="/forgot"
            className="color-white format-link underline-onhover"
          >
            Forgot Password?
          </Link>
        </div>
        <button className="btn btn-block bg-info my-4">Sign In</button>
        <p className="text-sm text-center">
          New to QuizzUp? Sign-up{" "}
          <Link to="/signup" className="color-white">
            here
          </Link>
        </p>
      </div>
    </>
  );
};
