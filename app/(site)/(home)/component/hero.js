import { Button } from "@/app/component/common/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="header_top">
      <div className="container flex justify-between items-center w-full xl:h-[784px] md:h-[604px] sm:h-[470px] h-[250px]">
        <div className="w-[55%] md:w-[50%]">
          <h3 className="xl:text-[40px] md:text-[30px] sm:text-2xl text-lg  font-normal">
            Classic Exclusive
          </h3>
          <h1 className="xl:text-[60px] md:text-[40px] sm:text-[30px] text-[24px] font-bold py-1">
            Women’s Collection
          </h1>
          <p className="sm:pb-[50px] pb-[25px] xl:text-3xl md:text-xl sm:text-base text-sm font-normal">
            UPTO 40% OFF
          </p>
          <Button text={"Shop Now"} href={"/shop"} />
        </div>
        <div className="w-[45%] md:w-[50%] ">
          <Image
            src="/hero.png"
            alt="heroImage"
            width={900}
            height={900}
            className="xl:h-[784px] md:h-[604px] sm:h-[470px] h-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;