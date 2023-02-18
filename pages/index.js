import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import axiosInstance from "../lib/axios";

export default function Home() {
  const [data, setData] = useState(null);

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

  console.log(data);
  return (
    <>
      On Yah
      <p>Niktia </p>
    </>
  );
}
