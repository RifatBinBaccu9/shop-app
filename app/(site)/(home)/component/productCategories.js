"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ProductCateCard from "./productCateCard";

const shopCategoriesData = [
  { 
    id: 1,
    image: "/image1.png",
  },
  {
    id: 2,
    image: "/image2.png",
  },
  {
    id: 3,
    image: "/image3.png",
  },
  {
    id: 4,
    image: "/image4.png",
  },
  {
    id: 5,
    image: "/image3.png",
  },
];
export default function ProductCategories() {
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
    <div className="relative container mt-[50px] md:mt-[100px] px-4">
      <div className="flex justify-between mb-3 sm:mb-5 md:mb-10 lg:mb-[50px]">
        <h1 className="title">Shop by Categories</h1>
        <div className="flex gap-2 mb-4 ">
          <button className="slider_button" onClick={handleNextSlide}>
            <FaArrowLeft className="slider_button_icon" />
          </button>
          <button className="slider_button" onClick={handlePrevSlide}>
            <FaArrowRight className="slider_button_icon" />
          </button>
        </div>
      </div>
      <Swiper
        loop={true}
        spaceBetween={10}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1240: { slidesPerView: 4, spaceBetween: 20 },
        }}
        modules={[Navigation]}
      >
        {shopCategoriesData.map((category, idx) => (
          <SwiperSlide key={idx}>
            <ProductCateCard category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
