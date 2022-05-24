import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ForgotPassword,
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

export const App = () => {
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
              <Route path="/forgot" element={<ForgotPassword />} />
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
