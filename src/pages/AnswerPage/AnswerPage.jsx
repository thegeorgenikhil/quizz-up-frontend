import React from "react";
import "./AnswerPage.css";

export const AnswerPage = () => {
  return (
    <>
      <header className="header">
        <p className="text-lg font-bold text-center">Topic: Javascript</p>
      </header>
      <main className="quiz-container">
        <div className="quiz-info-container">
          <p>
            Question: <span className="font-bold">1</span>/
            <span className="font-bold">10</span>
          </p>
          <p>
            Score: <span className="font-bold">-2</span>
          </p>
        </div>
        <div className="quiz-question-container">
          <div className="quiz-question">
            A variable in Javascript is declared with which of the following
            keyword?
          </div>
          <ul className="quiz-option-list">
            <li className="quiz-option">new</li>
            <li className="quiz-option">int</li>
            <li className="quiz-option option-wrong">string</li>
            <li className="quiz-option option-correct">var</li>
          </ul>
        </div>
      </main>
    </>
  );
};
