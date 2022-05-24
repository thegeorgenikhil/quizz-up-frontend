import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { actionTypes, dataReducer } from "../reducers";
import { useAuth } from "./auth-context";

const UserContext = createContext();

export const DataProvider = ({ children }) => {
  const { auth } = useAuth();
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    quizInfo: {
      currentCategoryId: null,
      questions: [],
      categoryName: "",
    },
    currentQuestionIndex: 0,
    userAnswers: [],
    results: {},
    finalScore: 0,
  });
  const { SET_RESULTS } = actionTypes;
  const navigate = useNavigate();

  const submitQuiz = async (categoryId, userAnswers) => {
    const res = await api.post(
      "/quiz/submit",
      {
        userAnswers,
        categoryId,
      },
      {
        headers: {
          authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const data = await res.data;
    if (res.status === 200) {
      dataDispatch({ type: SET_RESULTS, payload: { results: data.results } });
      navigate("/results");
    }
  };
  return (
    <UserContext.Provider value={{ dataState, dataDispatch, submitQuiz }}>
      {children}
    </UserContext.Provider>
  );
};

export const useDataContext = () => useContext(UserContext);
