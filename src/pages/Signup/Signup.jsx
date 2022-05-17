import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <>
      <header className="header">
        <p className="text-xl font-bold text-center">Sign Up🔐</p>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Enter Email: "
            name="email"
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
        <div className="text-xs flex align-start">
          <input type="checkbox" name="terms-and-conditions" />
          <label htmlFor="terms-and-conditions">
            &#160;By signing up, you confirm that you accept our{" "}
            <Link to="/" className="color-white">
              Terms and Conditions
            </Link>{" "}
            and have read our{" "}
            <Link to="/" className="color-white">
              Privacy Policy
            </Link>
          </label>
        </div>
        <button className="btn btn-block bg-info my-4">Sign Up</button>
        <p className="text-sm text-center">
          Already have an account? Sign-in{" "}
          <Link to={"/login"} className="color-white">
            here
          </Link>
        </p>
      </div>
    </>
  );
};
