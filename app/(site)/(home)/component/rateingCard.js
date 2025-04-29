import { Rate } from "antd";
import Image from "next/image";
import React from "react";

const RateingCard = ({ratings}) => {
    const { image, title, profession, rating, description } = ratings;
  return (
    <div className="bg-[#ffffff]  rounded-lg p-[30px] border border-[#dedee0] shadow-sm hover:shadow-lg transition duration-300 ease-in-out">
      <div>
        <Rate allowHalf disabled defaultValue={rating} />
      </div>
      <p className="description pt-3 pb-[30px] line-clamp-4">
        {description}
      </p>
      <div className="flex gap-[10px]">
        <div>
          <Image
            src={image}
            alt={title || "image"}
            width={900}
            height={900}
            className="w-[48px] h-[48px]"
          />
        </div>
        <div>
          <h1 className="text-base  font-bold">{title}</h1>
          <p className="pt-1  font-normal text-sm text-[#A4A2AA]">
            {profession}
          </p>
        </div>
      </div>
    </div>
  );
};
export default RateingCard;
