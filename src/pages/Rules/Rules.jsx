import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api";
import { useAuth, useDataContext } from "../../context";
import { actionTypes } from "../../reducers";
import "./Rules.css";

export const Rules = () => {
  const { auth } = useAuth();
  const { dataState, dataDispatch } = useDataContext();
  const { currentCategoryId } = dataState.quizInfo;
  const { SET_QUIZ_QUESTIONS } = actionTypes;

  useEffect(() => {
    const getQuestionsById = async (categoryId) => {
      try {
        const res = await api.get(`/quiz/get/${categoryId}/questions`, {
          headers: {
            authorization: `Bearer ${auth.token}`,
          },
        });
        const data = await res.data;
        if (res.status === 200) {
          dataDispatch({
            type: SET_QUIZ_QUESTIONS,
            payload: {
              questions: data.category.questions,
              categoryName: data.category.categoryName,
            },
          });
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (auth.token) getQuestionsById(currentCategoryId);
    // eslint-disable-next-line
  }, [currentCategoryId]);

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
      <Link
        to={auth.token ? "/quiz/question" : "/login"}
        className="start-quiz-btn"
      >
        <button className="btn bg-warning text-center btn-bg-yellow">
          Start Quiz
        </button>
      </Link>
    </>
  );
};
