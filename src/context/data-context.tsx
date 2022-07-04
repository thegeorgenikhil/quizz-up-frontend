import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { actionTypes, dataReducer } from "../reducers";
import { useAuth } from "./auth-context";
import { DataStateType,UserContextType } from "../type";

const UserContext = createContext({} as UserContextType);

const initialDataState: DataStateType = {
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

export const DataProvider = ({ children }: PropsWithChildren) => {
  const { auth } = useAuth();
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);
  const { SET_RESULTS } = actionTypes;
  const navigate = useNavigate();

  const submitQuiz = async (categoryId: string, userAnswers: Array<any>) => {
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
