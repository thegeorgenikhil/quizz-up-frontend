import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Leaderboard,
  QuizPage,
  ResultPage,
  Rules,
  Signin,
  Signup,
} from "./pages";
import { Navbar, PrivateRoutes } from "./components";
import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";

export const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route
                path="/results"
                element={
                  <PrivateRoutes>
                    <ResultPage />
                  </PrivateRoutes>
                }
              />
              <Route path="/login" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/quiz/question"
                element={
                  <PrivateRoutes>
                    <QuizPage />
                  </PrivateRoutes>
                }
              />
            </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
};
