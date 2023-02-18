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
  const cookies = parseCookies(undefined, config.headers.cookie);
  const token = cookies.ACCESS_TOKEN;
  console.log("ACCESS_TOKEN", token);
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
});

export default axiosInstance;
