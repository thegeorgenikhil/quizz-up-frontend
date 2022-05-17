import React from "react";
import { GrReactjs } from "react-icons/gr";
import { SiJavascript } from "react-icons/si";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <header className="header">
        <p className="font-bold text-center">
          Find Out If You Are Really Good at Javascript🤯
        </p>
      </header>
      <main className="category-container">
        <Link to="/rules" className="category-card category-js">
          <div className="category-details">
            <div className="category-name">Javascript</div>
            <div className="category-level">Level-1</div>
            <div className="category-icon">
              <SiJavascript />
            </div>
          </div>
        </Link>
        <Link to="/rules" className="category-card category-react">
          <div className="category-details">
            <div className="category-name">ReactJS</div>
            <div className="category-level">Level-1</div>
            <div className="category-icon">
              <GrReactjs />
            </div>
          </div>
        </Link>
      </main>
    </>
  );
};
