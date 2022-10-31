import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Loader } from "../../components";
import { fetchQuestions } from "../../features/quiz/quizSlice";
import "./Rules.css";

export const Rules = () => {
  const {
    auth: { token },
    quiz: { quizInfo, isQuestionsLoaded },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { currentCategoryId } = quizInfo;

  useEffect(() => {
    if (token && currentCategoryId) {
      dispatch(fetchQuestions({ currentCategoryId, token }));
    }
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
          <li className="list-rule-item">2.Every question is of 2 points.</li>
          <li className="list-rule-item">
            3.No points are deducted for wrong answers.
          </li>
          <li className="list-rule-item">
            4.Your progress gets lost if you quit in-between the questions.
          </li>
          <li className="list-rule-item">
            5.Your final score can be viewed after clicking on the submit
            button.
          </li>
        </ul>
        <p className="text-center font-bold">HAPPY QUIZZING!</p>
      </div>
      {currentCategoryId ? (
        !isQuestionsLoaded ? (
          <button className="start-quiz-btn btn bg-warning text-center btn-bg-yellow">
            <Loader />
          </button>
        ) : (
          <Link
            to={token ? (currentCategoryId ? "/quiz/question" : "/") : "/login"}
            className="start-quiz-btn"
          >
            <button className="btn bg-warning text-center btn-bg-yellow">
              Start Quiz
            </button>
          </Link>
        )
      ) : null}
    </>
  );
};
