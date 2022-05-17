import React from "react";

export const ForgotPassword = () => {
  return (
    <>
      <header className="header">
        <p className="text-xl font-bold text-center">Forgot Password😶‍🌫️</p>
      </header>
      <div className="signup-card">
        <p className="text-regular text-center">
          Don't worry! It happens. Enter{" "}
          <strong>the email linked to your account</strong> and we'll send a
          link on your email to reset your password
        </p>
        <div className="input-group">
          <input
            type="email"
            className="input"
            placeholder="Enter Email: "
            name="email"
          />
        </div>
        <button className="btn btn-block bg-info">Send Reset Link</button>
      </div>
    </>
  );
};
