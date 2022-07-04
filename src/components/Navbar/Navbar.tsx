import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import { GoSignOut } from "react-icons/go";
import { FC } from "react";

export const Navbar: FC = () => {
  const { signout, auth } = useAuth();
  return (
    <nav className="navbar-container">
      <div className="navbar-brand">
        <Link to="/" className="format-link">
          QuizzUp
        </Link>
      </div>
      <ul className="navbar-group">
        {auth.isAuthenticated ? (
          <>
            <li className="navbar-item">
              <Link to="/leaderboard" className="navbar-link">
                Leaderboard
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/rules" className="navbar-link">
                Rules
              </Link>
            </li>
            <li className="navbar-item" onClick={signout}>
              <Link to="/rules" className="navbar-link">
                <GoSignOut />
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="navbar-item">
              <Link to="/login" className="navbar-link">
                Signin
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
