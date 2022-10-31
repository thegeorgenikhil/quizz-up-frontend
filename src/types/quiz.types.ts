import { ResultType } from "./results.types";
import { UserAnswerType } from "./user.types";

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

export interface QuizState {
  quizInfo: QuizInfoType;
  currentQuestionIndex: number;
  userAnswers: UserAnswerType[];
  results: ResultType;
  isSubmitting: boolean;
  isQuestionsLoaded: boolean;
}

export type AuthToken = {
  token: string;
};

export interface QuizData {
  categoryId: string;
  userAnswers: UserAnswerType[];
}

export interface FetchQuestionsParams extends AuthToken {
  currentCategoryId: string;
}

export interface FetchQuestionsResponse {
  category: {
    questions: QuestionType[];
    categoryName: string;
  };
}

export interface SubmitQuizResponse {
  msg: string;
  results: ResultType;
}

export type SetCurrentAnswerPayload = {
  userAnswer: UserAnswerType;
};
