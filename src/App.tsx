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
import { AuthProvider, DataProvider } from "./context";
import { FC } from "react";

export const App : FC = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <DataProvider>
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
          </DataProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};
