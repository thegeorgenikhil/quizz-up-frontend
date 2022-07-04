import React, { useEffect, useState } from "react";
import { Loader } from "../../components";
import { useDataContext } from "../../context";
import { actionTypes } from "../../reducers";
import "./QuizPage.css";

export const QuizPage = () => {
  const { dataState, dataDispatch, submitQuiz } = useDataContext();
  const { categoryName, questions, currentCategoryId } = dataState.quizInfo;
  const { currentQuestionIndex, userAnswers } = dataState;
  const { INCREMENT_CURRENT_QUESTION_INDEX, SET_ANSWER } = actionTypes;

  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const nextQuestionHandler = () => {
    dataDispatch({
      type: SET_ANSWER,
      payload: {
        userAnswer: { questionId: currentQuestion._id, answer: answer },
      },
    });
    dataDispatch({ type: INCREMENT_CURRENT_QUESTION_INDEX });
  };

  const submitQuizHandler = async () => {
    setLoading(true);
    dataDispatch({
      type: SET_ANSWER,
      payload: {
        userAnswer: { questionId: currentQuestion._id, answer: answer },
      },
    });
    await submitQuiz(currentCategoryId, [
      ...userAnswers,
      { questionId: currentQuestion._id, answer: answer },
    ]);
    setLoading(false);
  };

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex, questions]);

  return (
    <>
      <header className="header">
        <p className="text-lg font-bold text-center">Topic: {categoryName}</p>
      </header>
      <main className="quiz-container">
        <div className="quiz-info-container">
          <p>
            Question:{" "}
            <span className="font-bold">{currentQuestionIndex + 1}</span>/
            <span className="font-bold">{questions.length}</span>
          </p>
        </div>
        <div className="quiz-question-container">
          <div className="quiz-question">{currentQuestion.question}</div>
          <ul className="quiz-option-list">
            {currentQuestion?.questionOptions?.map((option, index) => (
              <li
                className={`quiz-option ${
                  answer === option ? "option-selected" : ""
                }`}
                key={index}
                onClick={() => setAnswer(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          {answer &&
            (currentQuestionIndex !== questions.length - 1 ? (
              <button
                className="btn bg-warning text-center btn-bg-yellow"
                onClick={nextQuestionHandler}
              >
                {"Next ->"}
              </button>
            ) : (
              <button
                className="btn bg-warning text-center btn-bg-yellow"
                onClick={submitQuizHandler}
              >
                {loading ? <Loader /> : "Submit Quiz"}
              </button>
            ))}
        </div>
      </main>
    </>
  );
};
