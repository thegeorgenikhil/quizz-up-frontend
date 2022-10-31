import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api";
import { useAppSelector } from "../../app/hooks";
import { Loader } from "../../components";
import { useDataContext } from "../../context";
import { actionTypes } from "../../reducers";
import "./Rules.css";

export const Rules = () => {
  const { token } = useAppSelector((state) => state.auth);
  const { dataState, dataDispatch } = useDataContext();
  const { currentCategoryId } = dataState.quizInfo;
  const { SET_QUIZ_QUESTIONS } = actionTypes;
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getQuestionsById = async (categoryId: string) => {
      setLoading(true);
      try {
        const res = await api.get(`/quiz/get/${categoryId}/questions`, {
          headers: {
            authorization: `Bearer ${token}`,
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
      setLoading(false);
    };

    if (token && currentCategoryId) getQuestionsById(currentCategoryId);
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
      {loading ? (
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
      )}
    </>
  );
};
