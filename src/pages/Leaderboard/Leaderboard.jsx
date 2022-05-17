import React from "react";
import "./Leaderboard.css";

export const Leaderboard = () => {
  return (
    <>
      <header className="header">
        <p className="text-xl font-bold text-center">Leaderboard 🏆</p>
      </header>
      <section className="leaderboard-container">
        <div className="leaderboard-sort-container">
          <label htmlFor="category-sort">Category</label>
          <select className="category-sort" name="category-sort">
            <option value="all">All</option>
            <option value="javascript">Javascript</option>
            <option value="react">React</option>
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
            <tr>
              <td>1</td>
              <td>Nikhil George</td>
              <td>366</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Nikhil George</td>
              <td>366</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Nikhil George</td>
              <td>366</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Nikhil George</td>
              <td>366</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Nikhil George</td>
              <td>366</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Nikhil George</td>
              <td>366</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Nikhil George</td>
              <td>366</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};
