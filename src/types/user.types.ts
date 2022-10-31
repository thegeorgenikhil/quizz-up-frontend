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