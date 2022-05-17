import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AnswerPage,
  ForgotPassword,
  Home,
  Leaderboard,
  QuizPage,
  Rules,
  Signin,
  Signup,
} from "./pages";
import { Navbar } from "./components";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/quiz/question" element={<QuizPage />} />
          <Route path="/quiz/answer" element={<AnswerPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
