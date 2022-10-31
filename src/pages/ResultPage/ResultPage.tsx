import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { quizActions } from "../../features/quiz/quizSlice";

export const ResultPage = () => {
  const navigate = useNavigate();
  const { results } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  const { resetQuiz } = quizActions;

  const takeAnotherQuizHandler = () => {
    dispatch(resetQuiz());
    navigate("/");
  };
  return (
    <>
      <header className="header">
        <p className="text-lg font-bold text-center">
          You have scored a total of: {results?.finalScore}/
          {results?.compareAnswer.length * 2} points
        </p>
        <button
          className="btn bg-info text-center my-auto"
          onClick={takeAnotherQuizHandler}
        >
          Take Another Quiz
        </button>
      </header>
      {results &&
        results.compareAnswer.map((answer, index) => {
          return (
            <div className="quiz-container" key={index}>
              <div className="quiz-info-container">
                <p>
                  Question: <span className="font-bold">{index + 1}</span>/
                  <span className="font-bold">
                    {results?.compareAnswer.length}
                  </span>
                </p>
                <p>
                  Score:{" "}
                  <span className="font-bold">
                    {answer.userAnswered === answer.questionAnswer ? 2 : 0}
                  </span>
                </p>
              </div>
              <div className="quiz-question-container">
                <div className="quiz-question">{answer.question}</div>
                <ul className="quiz-option-list">
                  {answer.questionOptions.map((option, index) => {
                    const isOptionUserSelected = option === answer.userAnswered;
                    const isOptionCorrect = option === answer.questionAnswer;
                    let optionClass = isOptionUserSelected
                      ? isOptionCorrect
                        ? "quiz-option option-correct"
                        : "quiz-option option-wrong"
                      : isOptionCorrect
                      ? "quiz-option option-correct"
                      : "quiz-option";
                    return (
                      <li className={optionClass} key={index}>
                        {option}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
    </>
  );
};
