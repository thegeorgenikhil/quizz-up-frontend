import { actionTypes } from "./actionTypes";
import { DataStateType, DataActionType } from "../types";
const {
  SET_CATEGORY_ID,
  SET_QUIZ_QUESTIONS,
  INCREMENT_CURRENT_QUESTION_INDEX,
  SET_ANSWER,
  SET_RESULTS,
  TAKE_ANOTHER_QUIZ,
} = actionTypes;

export const dataReducer = (state: DataStateType, action: DataActionType) => {
  switch (action.type) {
    case SET_CATEGORY_ID:
      return {
        ...state,
        quizInfo: {
          ...state.quizInfo,
          currentCategoryId: action.payload.categoryId,
        },
      };
    case SET_QUIZ_QUESTIONS:
      return {
        ...state,
        quizInfo: {
          ...state.quizInfo,
          questions: action.payload.questions,
          categoryName: action.payload.categoryName,
        },
      };
    case INCREMENT_CURRENT_QUESTION_INDEX:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case SET_ANSWER:
      return {
        ...state,
        userAnswers: [...state.userAnswers, action.payload.userAnswer],
      };
    case SET_RESULTS: {
      return {
        ...state,
        results: action.payload.results,
      };
    }
    case TAKE_ANOTHER_QUIZ:
      return {
        ...state,
        quizInfo: {
          currentCategoryId: "",
          questions: [],
          categoryName: "",
        },
        currentQuestionIndex: 0,
        userAnswers: [],
        results: {},
        finalScore: 0,
      };
    default:
      return state;
  }
};
