import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { useAuth } from "../../context";

export const Signup = () => {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: "",
  });
  const { name, email, password, confirmPassword, termsAndConditions } =
    formData;
  const isFormFullyFilled =
    name && email && password === confirmPassword && termsAndConditions;
  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [loading, setLoading] = useState(false);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!isFormFullyFilled) return;
      await signup(formData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <>
      <header className="header">
        <p className="text-xl font-bold text-center">Sign Up🔐</p>
      </header>
      <div className="signup-card">
        <form>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="input"
              placeholder="Enter Name:"
              name="name"
              onChange={formChangeHandler}
              value={name}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="input"
              placeholder="Enter Email: "
              name="email"
              onChange={formChangeHandler}
              value={email}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="input"
              placeholder="Enter Password: "
              name="password"
              onChange={formChangeHandler}
              value={password}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              className="input"
              placeholder="Confirm Password: "
              name="confirmPassword"
              onChange={formChangeHandler}
              value={confirmPassword}
            />
          </div>

          <div className="text-xs flex align-start">
            <input
              type="checkbox"
              name="termsAndConditions"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.checked,
                }))
              }
              value={termsAndConditions}
            />
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
          <button
            className="btn btn-block bg-info my-4"
            onClick={formSubmitHandler}
          >
            {loading ? <Loader /> : "Sign Up"}
          </button>
        </form>
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
