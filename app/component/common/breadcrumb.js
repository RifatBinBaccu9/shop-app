import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoHome } from "react-icons/io5";

const Breadcrumb = ({ title, page }) => {
  return (
    <div className="bg-[#F6F5FF] py-6 md:py-8 lg:py-10 xl:py-12">
      <div className="container">
      <h1 className=" text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-semibold font-jost">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-[7px] mt-3">
          {page.map((item, index) => (
            <div key={index} className="flex flex-row items-center gap-[7px]">
              <span className="flex flex-row items-center gap-[7px] font-jost font-normal text-sm md:text-base">
                <IoHome className={`text-sm md:text-base ${ index == 0 ? "" : "hidden"}`} />
                <Link href={item.link}>{item.title}</Link>
              </span>
              <div className={` ${page.length == index + 1 ? "hidden" : ""}`}>
                <IoIosArrowForward className="text-sm md:text-base" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;