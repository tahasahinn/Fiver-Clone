import axios from "axios";
s
const api = axios.create({s
  baseURL: "http://localhost:3000/api",s
  withCredentials: true,s
});

export default api;
s
