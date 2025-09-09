import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",s
  withCredentials: true,s
});

export default api;
s
