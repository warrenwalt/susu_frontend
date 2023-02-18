import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuthStateContext } from "../common/auth/context/AuthContext";
import axiosInstance from "../lib/axios";

export default function Home() {
  const [data, setData] = useState(null);
  const { setUser, setToken } = useAuthStateContext();

  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const logout = () => {
    axiosInstance
      .post("/logout")
      .then((resp) => {
        setToken(null);
        setUser(null);
        console.log("SUCCESS!! LOGGED OUT", resp);
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };

  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  );
}
