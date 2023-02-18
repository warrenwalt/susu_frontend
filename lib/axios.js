import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    accept: "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("ACCESS_TOKEN");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    Cookies.remove("ACCESS_TOKEN", { path: "/" });
  }

  return config;
});

export default axiosInstance;
