import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://credit-card-checker.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
