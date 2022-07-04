import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { useAuth } from "../../context";

export const Signin = () => {
  const { signin } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const { email, password, rememberMe } = formData;
  const isFormFullyFilled = email && password;
  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!isFormFullyFilled) return;
      await signin(formData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };
  return (
    <>
      <header className="header">
        <p className="font-bold text-center">Sign In🔐</p>
      </header>
      <div className="signup-card">
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="input"
              required
              placeholder="Enter Email:"
              name="email"
              onChange={formChangeHandler}
              value={email}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input"
              required
              placeholder="Enter Password: "
              name="password"
              onChange={formChangeHandler}
              value={password}
            />
          </div>
          <div className="flex justify-between text-xs align-center">
            <div className="flex align-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={rememberMe}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.checked,
                  }))
                }
              />
              <label htmlFor="remember-me">&#160;Remember Me</label>
            </div>
          </div>
          <button
            className="btn btn-block bg-info my-4"
            onClick={formSubmitHandler}
          >
            {loading ? <Loader /> : "Sign In"}
          </button>
        </form>
        <button
          className="btn btn-block bg-info my-4"
          onClick={() =>
            setFormData({
              email: "test@email.com",
              password: "123456",
              rememberMe: true,
            })
          }
        >
          Login as Guest User
        </button>
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
