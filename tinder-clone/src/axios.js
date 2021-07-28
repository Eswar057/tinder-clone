import axios from "axios";

const instance = axios.create({
  baseURL: "https://git.heroku.com/mysterious-eyrie-67510.git",
});

export default instance;
