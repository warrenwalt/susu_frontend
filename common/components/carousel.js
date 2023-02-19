import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: <PrevArrow className="text-black text-xl" />,
    // nextArrow: <NextArrow />,
  };

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", border: "solid 2px #fff" }}
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ ...style, display: "flex", border: "solid 2px #fff" }}
        />
      </div>
    );
  }

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    );
  }

  return (
    <div className="relative mt-44">
      {/* FIRST CAROUSEL  */}
      <Slider {...settings}>
        <div className="w-10/12 bg-slate-300">
          <div className="w-6/12">
            <Image src="/bag.jpg" alt="My bag" width={1000} height={200} />
          </div>
          {/* <div className="absolute right-20 top-52">
            <button>Next</button>
          </div> */}
        </div>
        <div className="w-10/12 bg-slate-300">
          <div className="w-6/12">
            <Image src="/bag.jpg" alt="My bag" width={1000} height={200} />
          </div>
          {/* <div className="absolute right-20 top-52">
            <button>Next</button>
          </div> */}
        </div>
      </Slider>
    </div>
  );
}
