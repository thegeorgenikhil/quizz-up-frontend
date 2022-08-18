import { ResultType } from "./results.types";

export type QuestionType = {
  _id: string;
  question: string;
  questionOptions: string[];
};

export type QuizInfoType = {
  currentCategoryId: string;
  questions: QuestionType[];
  categoryName: string;
};

export type UserAuthInfoType = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  termsAndConditions?: string;
  rememberMe?: boolean;
};

export type UserAnswerType = {
  questionId: string;
  answer: string;
};

export type DataStateType = {
  quizInfo: QuizInfoType;
  currentQuestionIndex: number;
  userAnswers: UserAnswerType[];
  results: ResultType;
  finalScore: number;
};

export type DataActionType = {
  type: string;
  payload?: any;
};

export type UserContextType = {
  dataState: DataStateType;
  dataDispatch: (action: DataActionType) => void;
  submitQuiz: (categoryId: string, userAnswers: UserAnswerType[]) => void;
};
