import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../api";
import {
  QuizState,
  FetchQuestionsParams,
  FetchQuestionsResponse,
  SubmitQuizResponse,
  QuizData,
  AuthToken,
  SetCurrentAnswerPayload,
} from "../../types";

const initialState: QuizState = {
  quizInfo: {
    currentCategoryId: "",
    questions: [],
    categoryName: "",
  },
  currentQuestionIndex: 0,
  userAnswers: [],
  results: { compareAnswer: [], finalScore: 0 },
  isSubmitting: false,
  isQuestionsLoaded: false,
};

export const fetchQuestions = createAsyncThunk<
  FetchQuestionsResponse,
  FetchQuestionsParams
>(
  "quiz/fetchQuestions",
  async ({ currentCategoryId, token }, { rejectWithValue }) => {
    try {
      const res = await api.get(`/quiz/get/${currentCategoryId}/questions`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      return data;
    } catch (err) {
      console.log(err);
      rejectWithValue({
        message: "Not able to fetch question at the moment. Please try again.",
        error: err,
      });
    }
  }
);

export const submitQuiz = createAsyncThunk<
  SubmitQuizResponse,
  QuizData & AuthToken
>("quiz/submit", async (quizData, { rejectWithValue }) => {
  try {
    const { categoryId, userAnswers, token } = quizData;
    const res = await api.post(
      "/quiz/submit",
      {
        userAnswers,
        categoryId,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
    rejectWithValue({
      message: "Couldn't submit your quiz. Please try again.",
      error: err,
    });
  }
});

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCurrentCategoryId: (state, action: PayloadAction<string>) => {
      state.quizInfo.currentCategoryId = action.payload;
    },
    setCurrentAnswer: (
      state,
      action: PayloadAction<SetCurrentAnswerPayload>
    ) => {
      state.userAnswers.push(action.payload.userAnswer);
    },
    incrementCurrentQuestionIndex: (state) => {
      state.currentQuestionIndex++;
    },
    resetQuiz: (state) => {
      state.quizInfo.currentCategoryId = "";
      state.quizInfo.questions = [];
      state.quizInfo.categoryName = "";
      state.currentQuestionIndex = 0;
      state.userAnswers = [];
      state.results = { compareAnswer: [], finalScore: 0 };
      state.isSubmitting = false;
      state.isQuestionsLoaded = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      // reseting the quiz data
      state.quizInfo.questions = [];
      state.quizInfo.categoryName = "";
      state.currentQuestionIndex = 0;
      state.userAnswers = [];
      state.results = { compareAnswer: [], finalScore: 0 };
      state.isSubmitting = false;
      state.isQuestionsLoaded = false;
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.quizInfo.questions = action.payload.category.questions;
      state.quizInfo.categoryName = action.payload.category.categoryName;
      state.isQuestionsLoaded = true;
    });
    builder.addCase(fetchQuestions.rejected, (state, action) => {
      state.isQuestionsLoaded = false;
    });
    builder.addCase(submitQuiz.pending, (state) => {
      state.isSubmitting = true;
    });
    builder.addCase(submitQuiz.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.isSubmitting = false;
    });
    builder.addCase(submitQuiz.rejected, (state, action) => {
      state.isSubmitting = false;
    });
  },
});

export const quizActions = quizSlice.actions;
export default quizSlice.reducer;
