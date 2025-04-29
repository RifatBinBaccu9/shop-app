"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";
import RateingCard from "./rateingCard";

const ratings = [
  {
    "id": 1,
    "rating": 4.5,
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .",
    "title": "Leslie Alexander",
    "profession": "Model",
    "image": "/Rating/image1.png"
  },
  {
    "id": 2,
    "rating": 3.8,
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .",
    "title": "Jacob Jones",
    "profession": "Co-Founder",
    "image": "/Rating/image2.png"
  },
  {
    "id": 3,
    "rating": 5.0,
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .",
    "title": "Jenny Wilson",
    "profession": "Fashion Designer",
    "image": "/Rating/image3.png"
  },
  {
    "id": 4,
    "rating": 4.5,
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .",
    "title": "Leslie Alexander",
    "profession": "Model",
    "image": "/Rating/image1.png"
  },
]
export default function Rateing() {
  const swiperRef = useRef(null);
  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  return (
    <div className="bg-[#FAFAFB] py-5 sm:py-7 lg:py-10 xl:py-[50px]">
      <div className="relative container  px-4">
        <div className="flex sm:justify-between justify-center sm:gap-2 mb-3 sm:mb-5 md:mb-10 lg:mb-[50px]">
          <h1 className="title ">What our Customer say’s</h1>
          <div className="flex gap-2 mb-4 ">
            <button
              className="slider_button"
              onClick={handleNextSlide}
            >
              <FaArrowLeft className="slider_button_icon" />
            </button>
            <button
              className="slider_button"
              onClick={handlePrevSlide}
            >
              <FaArrowRight className="slider_button_icon" />
            </button>
          </div>
        </div>
        <Swiper
          loop={true}
          spaceBetween={10}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            550: { slidesPerView: 2, spaceBetween: 10 },
            968: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Navigation]}
        >
          {ratings.map((ratings, idx) => (
            <SwiperSlide key={idx}>
              <RateingCard ratings={ratings}></RateingCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
