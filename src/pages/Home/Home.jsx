import React from "react";
import { GrReactjs } from "react-icons/gr";
import { SiJavascript } from "react-icons/si";
import "./Home.css";
import { useAuth, useDataContext } from "../../context";
import { actionTypes } from "../../reducers";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { auth } = useAuth();
  const { dataDispatch } = useDataContext();
  const { SET_CATEGORY_ID } = actionTypes;
  const navigate = useNavigate();

  const categoryClickHandler = (categoryId) => {
    if (!auth.token) return navigate("/login");
    dataDispatch({ type: SET_CATEGORY_ID, payload: { categoryId } });
    navigate("/rules");
  };
  return (
    <>
      <header className="header">
        <p className="font-bold text-center">
          Find Out If You Are Really Good at Javascript🤯
        </p>
      </header>
      <main className="category-container">
        <div
          className="category-card category-js"
          onClick={() => categoryClickHandler("62876fbee8b1e0d9eb564910")}
        >
          <div className="category-details">
            <p className="category-name">Javascript</p>
            <p className="category-level">Level-1</p>
            <div className="category-icon">
              <SiJavascript />
            </div>
          </div>
        </div>
        <div
          className="category-card category-react"
          onClick={() => categoryClickHandler("6287c06285041c07a1255b8f")}
        >
          <div className="category-details">
            <p className="category-name">ReactJS</p>
            <p className="category-level">Level-1</p>
            <div className="category-icon">
              <GrReactjs />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
