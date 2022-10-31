export type ResultType = {
  compareAnswer: CompareAnswerArrType[];
  finalScore: number;
};

export type CompareAnswerArrType = {
  question: string;
  questionAnswer: string;
  questionOptions: string[];
  userAnswered: string;
  _id: string;
};
