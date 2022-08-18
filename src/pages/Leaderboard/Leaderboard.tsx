import { useEffect, useState } from "react";
import { api } from "../../api";
import "./Leaderboard.css";
import { UserScoreInfoType, LeaderboardType } from "../../types";

export const Leaderboard = () => {
  const [leaderboardInfo, setLeaderboardInfo] = useState<
    Array<UserScoreInfoType[]>
  >([]);
  const [filterByCategory, setFilterByCategory] = useState<string>("all");

  const leaderboardReducer = (
    leaderboard: LeaderboardType[],
    data: UserScoreInfoType[]
  ) => {
    const userInfo = { name: data[0].name, userScore: 0 };
    data.forEach((user) => {
      if (filterByCategory === "all" || user.categoryId === filterByCategory) {
        userInfo.userScore += user.userScore;
      }
    });
    leaderboard.push(userInfo);
    return leaderboard;
  };
  useEffect(() => {
    const getLeaderboardInfo = async () => {
      const res = await api.get("/quiz/leaderboard");
      const data = await res.data;
      console.log(data.leaderboard);
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
              .reduce(leaderboardReducer, [])
              .sort(
                (userOne: LeaderboardType, userTwo: LeaderboardType) =>
                  userTwo.userScore - userOne.userScore
              )
              .map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.userScore}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </>
  );
};
