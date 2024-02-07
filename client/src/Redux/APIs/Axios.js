import axios from "axios";

const Axios = axios.create({
  baseURL: "https://netflixo-cqp1.onrender.com/api",
});

export default Axios;
