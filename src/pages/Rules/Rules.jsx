import React from "react";
import { Link } from "react-router-dom";
import "./Rules.css";

export const Rules = () => {
  return (
    <>
      <header className="header">
        <p className="text-xl font-bold text-center">Rules📝</p>
      </header>
      <div className="rules-card">
        <ul className="rules-list">
          <li className="list-rule-item">
            1.There are a total of 10 questions.
          </li>
          <li className="list-rule-item">2.Every question is of 10 points.</li>
          <li className="list-rule-item">
            3.For every wrong answer, 2 points is deducted.
          </li>
          <li className="list-rule-item">
            4.Every question has a time limit of 45 seconds.
          </li>
          <li className="list-rule-item">
            5.Your progress gets lost if you quit in-between the questions.
          </li>
        </ul>
        <p className="text-center font-bold">HAPPY QUIZZING!</p>
      </div>
      <Link to="/rules" className="start-quiz-btn">
        <button className="btn bg-warning text-center btn-bg-yellow">
          Start Quiz
        </button>
      </Link>
    </>
  );
};
