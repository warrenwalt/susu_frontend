import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuthStateContext } from "../common/auth/context/AuthContext";
import Carousel from "../common/components/carousel";
import Chat from "../common/components/chat";
import FeaturedProducts from "../common/components/FeaturedProducts";
import Hero from "../common/components/Hero";
import InfoCard from "../common/components/infoCards";
import DefaultLayout from "../common/components/layout";
import NewArrivals from "../common/components/newArrivals";
import Socials from "../common/components/socials";
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

  return (
    <DefaultLayout>
      <main>
        <Hero />
        <FeaturedProducts />
        <Carousel />
        <NewArrivals />
        <Socials />
        <Chat />
        <InfoCard />
      </main>
    </DefaultLayout>
  );
}
