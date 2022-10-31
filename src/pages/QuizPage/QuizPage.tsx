import { useEffect, useState } from "react";
import { Loader } from "../../components";
import "./QuizPage.css";
import { QuestionType } from "../../types";
import { quizActions, submitQuiz } from "../../features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

export const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>({
    _id: "",
    question: "",
    questionOptions: [],
  });
  const [answer, setAnswer] = useState<string>("");
  const {
    auth: { token },
    quiz: { currentQuestionIndex, userAnswers, quizInfo, isSubmitting },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { setCurrentAnswer, incrementCurrentQuestionIndex } = quizActions;
  const { categoryName, questions, currentCategoryId } = quizInfo;

  const nextQuestionHandler = () => {
    dispatch(
      setCurrentAnswer({
        userAnswer: { questionId: currentQuestion._id, answer: answer },
      })
    );
    dispatch(incrementCurrentQuestionIndex());
  };

  const submitQuizHandler = async () => {
    try {
      dispatch(
        setCurrentAnswer({
          userAnswer: { questionId: currentQuestion._id, answer: answer },
        })
      );
      const quizResults = await dispatch(
        submitQuiz({
          categoryId: currentCategoryId,
          userAnswers: [
            ...userAnswers,
            { questionId: currentQuestion._id, answer: answer },
          ],
          token: token,
        })
      ).unwrap();
      if (quizResults.results) navigate("/results");
    } catch (err) {
      console.log(err);
    }
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
                {isSubmitting ? <Loader /> : "Submit Quiz"}
              </button>
            ))}
        </div>
      </main>
    </>
  );
};
