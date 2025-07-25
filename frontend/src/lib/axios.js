import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_API_BASE_URL || "http://localhost:4001/api",
  withCredentials: true,
});

export default axiosInstance;
