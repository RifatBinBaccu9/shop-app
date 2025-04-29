"use client";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Button } from "@/app/component/common/button";

const DealsOfTime = () => {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    let targetDate = localStorage.getItem("countdownTarget");

    if (!targetDate) {
      targetDate = (new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toString();
      localStorage.setItem("countdownTarget", targetDate);
    }

    function calculateTimeLeft() {
      const now = new Date().getTime();
      const difference = parseInt(targetDate) - now;

      if (difference <= 0) {
        localStorage.removeItem("countdownTarget");
        return { d: 0, h: 0, m: 0, s: 0 };
      }
      return {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / (1000 * 60)) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="container lg:my-[120px] md:my-[90px] my-[60px]">
      <div className="md:grid md:grid-cols-2 flex flex-col-reverse w-full md:h-[500px] gap-[32px]">
        <div className="flex items-center">
          <div>
            <h1 className="title">Deals of the Month</h1>
            <p className="description pt-[10px] pb-[30px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>

            <div className="flex sm:gap-5 gap-3">
              <div className="countTimeParent">
                <span className="timeLeft">{timeLeft.d}</span>
                <span className="timeTitle">Days</span>
              </div>
              <div className="countTimeParent">
                <span className="timeLeft">{timeLeft.h}</span>
                <span className="timeTitle">Hours</span>
              </div>
              <div className="countTimeParent">
                <span className="timeLeft">{timeLeft.m}</span>
                <span className="timeTitle">Mins</span>
              </div>
              <div className="countTimeParent">
                <span className="timeLeft">{timeLeft.s}</span>
                <span className="timeTitle">Secs</span>
              </div>
            </div>

            <div className="sm:mt-[50px] mt-[30px]">
              <Button
                text={"View All Products"}
                href={"/shop"}
                icon={<FaArrowRightLong />}
              ></Button>
            </div>
          </div>
        </div>
        <div className="bg-[#F3F4F6]">
          <Image
            src={"/DealsOfMonthImage.png"}
            alt="DealsOfMonthImage"
            width={900}
            height={900}
            className="w-full lg:h-[500px] h-[350px]"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default DealsOfTime;
