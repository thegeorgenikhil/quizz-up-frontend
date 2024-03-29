import { GrReactjs } from "react-icons/gr";
import { SiJavascript } from "react-icons/si";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { quizActions } from "../../features/quiz/quizSlice";

export const Home = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { setCurrentCategoryId } = quizActions;

  const categoryClickHandler = (categoryId: string) => {
    if (!isAuthenticated) return navigate("/login");
    dispatch(setCurrentCategoryId(categoryId));
    navigate("/rules");
  };

  return (
    <>
      <header className="header">
        <p className="font-bold text-center">
          Find Out If You Are Really Good at Javascript🤯
        </p>
      </header>
      <main className="category-container">
        <div
          className="category-card category-js"
          onClick={() => categoryClickHandler("628b224b0773d1a29b88db02")}
        >
          <div className="category-details">
            <p className="category-name">Javascript</p>
            <p className="category-level">Level-1</p>
            <div className="category-icon">
              <SiJavascript />
            </div>
          </div>
        </div>
        <div
          className="category-card category-react"
          onClick={() => categoryClickHandler("628b22550773d1a29b88db04")}
        >
          <div className="category-details">
            <p className="category-name">ReactJS</p>
            <p className="category-level">Level-1</p>
            <div className="category-icon">
              <GrReactjs />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
