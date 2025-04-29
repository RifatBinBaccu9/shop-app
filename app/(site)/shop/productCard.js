import { Button } from "@/app/component/common/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

const ProductCard = ({ bestSellers }) => {
  const { id, image, title, price, discount, description } = bestSellers;
  return (
    <div className="border border-[#dedee0] rounded-md">
      <div className="bg-[#FAFAFB] sm:py-[55px] py-[30px] sm:px-[22px] px-3 group relative border rounded-md">
        <Image
          src={image}
          alt="image"
          width={900}
          height={900}
          className="w-full h-[120px] md:h-[160px] xl:h-[180px]"
        />

        <div className="absolute inset-0 rounded-md group-hover:bg-black group-hover:translate group-hover:duration-500 opacity-30"></div>

        <div>
          <div className="flex flex-col absolute top-7 right-3 md:right-7">
            <Link href={"/"}>
              <div className="product_card_icon">
                <FaRegStar className="text-base sm:text-xl" />
              </div>
            </Link>
            <Link href={"/"}>
              <div className="product_card_icon">
                <GoArrowSwitch className="text-base sm:text-xl" />
              </div>
            </Link>
            <Link href={`/shop/${id}`}>
              <div className="product_card_icon">
                <IoEyeOutline className="text-base sm:text-xl" />
              </div>
            </Link>
          </div>

          <div className=" rounded-md inset-x-0 text-center hidden group-hover:block absolute bottom-3 md:bottom-4 justify-center">
            <Button
              text={"Add to Cart"}
              href={`/shop/${id}`}
              className="!opacity-95 !py-2 !w-10/12 !mx-auto !block"
            />
          </div>
        </div>
      </div>

      <div className="px-2 py-2 md:py-5">
        <h3 className="text-base font-jost font-bold cursor-pointer hover:text-textHover">
          {title}
        </h3>
        <p className="text-base font-jost font-normal py-[5px]">
          {description}
        </p>

        <div className="sm:text-base text-sm font-jost font-normal flex gap-2">
          <span>{price}</span>
          <span className="text-[#A4A2AA] line-through">{discount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
