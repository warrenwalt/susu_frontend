import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentIndex(next),
    // centerPadding: "100%",
  };

  const images = ["/slider image 1.jpg", "/slider image 2.jpg"];

  return (
    <div className="carousel-container mt-40">
      <div className="flex justify-center space-x-20 uppercase text-xs">
        <p>home</p>
        <p>shop</p>
        <p className="font-bold border-b-2 pb-1 border-black">dresses</p>
        <p>contact</p>
        <p>cart</p>
      </div>
      <Slider {...settings} className="border-none mt-16">
        {images.map((image, index) => (
          <div key={index} className="items-center">
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={700}
              height={400}
            />
          </div>
        ))}
      </Slider>
      {/* <div className="current-index">
        {currentIndex + 1} / {images.length}
      </div> */}
    </div>
  );
};

export default Carousel;
