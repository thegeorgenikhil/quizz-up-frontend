import React, { useEffect, useState } from "react";
import { api } from "../../api";
import "./Leaderboard.css";

export const Leaderboard = () => {
  const [leaderboardInfo, setLeaderboardInfo] = useState([]);
  const [filterByCategory, setFilterByCategory] = useState("all");
  const userScoreReducer = (arr) => {
    return arr.reduce((acc, curr) => {
      return acc + curr.userScore;
    }, 0);
  };
  useEffect(() => {
    const getLeaderboardInfo = async () => {
      const res = await api.get("/quiz/leaderboard");
      const data = await res.data;
      setLeaderboardInfo(data.leaderboard);
    };
    getLeaderboardInfo();
  }, []);
  return (
    <>
      <header className="header">
        <p className="text-xl font-bold text-center">Leaderboard 🏆</p>
      </header>
      <section className="leaderboard-container">
        <div className="leaderboard-sort-container">
          <label htmlFor="category-sort">Category</label>
          <select
            className="category-sort"
            name="category-sort"
            onChange={(e) => setFilterByCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="628b224b0773d1a29b88db02">Javascript</option>
            <option value="628b22550773d1a29b88db04">React</option>
          </select>
        </div>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <td>Rank</td>
              <td>Name</td>
              <td>Points</td>
            </tr>
          </thead>
          <tbody>
            {leaderboardInfo
              ?.filter((user) => {
                return (
                  filterByCategory === "all" ||
                  filterByCategory === user.categoryId
                );
              })
              .sort((userOne, userTwo) => {
                return userScoreReducer(userTwo) - userScoreReducer(userOne);
              })
              .map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user[0].name}</td>
                    <td>{userScoreReducer(user)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </>
  );
};
