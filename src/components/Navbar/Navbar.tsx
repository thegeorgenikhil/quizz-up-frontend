import "./Navbar.css";
import { Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authActions } from "../../features/auth/authSlice";
import { quizActions } from "../../features/quiz/quizSlice";

export const Navbar: FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const { signout } = authActions;
  const { resetQuiz } = quizActions;

  const signoutHandler = () => {
    localStorage.removeItem("token");
    dispatch(resetQuiz());
    dispatch(signout());
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-brand">
        <Link to="/" className="format-link">
          QuizzUp
        </Link>
      </div>
      <ul className="navbar-group">
        {isAuthenticated ? (
          <>
            <li className="navbar-item">
              <Link to="/leaderboard" className="navbar-link">
                Leaderboard
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/rules" className="navbar-link">
                Rules
              </Link>
            </li>
            <li className="navbar-item" onClick={signoutHandler}>
              <Link to={"/"} className="navbar-link">
                <GoSignOut />
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="navbar-item">
              <Link to="/login" className="navbar-link">
                Signin
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
