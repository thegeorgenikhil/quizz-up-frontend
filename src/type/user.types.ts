export type QuizInfoType = {
  currentCategoryId: string;
  questions: Array<any>;
  categoryName: string;
};

export type UserInfoType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAndConditions?: boolean;
  rememberMe?: boolean;
};

export type DataStateType = {
  quizInfo: QuizInfoType;
  currentQuestionIndex: number;
  userAnswers: Array<any>;
  results: object;
  finalScore: number;
};

export type DataActionType = {
  type: string;
  payload?: any;
};

export type UserContextType = {
  dataState: DataStateType;
  dataDispatch: (action : DataActionType) => void;
  submitQuiz: (categoryId: string, userAnswers: Array<any>) => void;
};
