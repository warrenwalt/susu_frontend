import Head from "next/head";
import NavBar from "./navbar";
import Footer from "./footer";
import { use, useEffect, useState } from "react";
import { useAuthStateContext } from "../auth/context/AuthContext";
import axiosInstance from "../../lib/axios";

export default function DefaultLayout({ children }) {
  const { user, token, setUser, setToken, notification } =
    useAuthStateContext();
  const [loading, setLoading] = useState(true);

  const logout = (e) => {
    e.preventDefault();

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

  useEffect(() => {
    axiosInstance
      .get("/user")
      .then(({ data }) => {
        setUser(data);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setUser(null);
        }
      });
  }, []);

  return (
    <div className="container">
      <Head />
      <NavBar user={user} logout={logout} />
      {children}
      <Footer />
    </div>
  );
}
