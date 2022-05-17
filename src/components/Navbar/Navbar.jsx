import React from "react";
import "./Navbar.css";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-brand">
        <Link to="/" className="format-link">
          QuizzUp
        </Link>
      </div>
      <ul className="navbar-group">
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
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">
            <FaUserAlt />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
