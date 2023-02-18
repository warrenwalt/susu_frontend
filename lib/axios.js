import axios from "axios";
import { parseCookies } from "nookies";
import { GetServerSidePropsContext } from "next";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    accept: "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem("ACCESS_TOKEN");
  }

  return config;
});

export default axiosInstance;
