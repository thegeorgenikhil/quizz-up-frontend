import axios from "axios";

export const api = axios.create({
  baseURL: "https://quizz-up-backend.herokuapp.com/api",
});
