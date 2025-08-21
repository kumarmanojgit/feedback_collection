import axios from "axios";

const API = axios.create({
  baseURL: "https://feedback-collection-94rs.vercel.app/api",
});

// Add Authorization token to every request if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
