import { Button } from "@/app/component/common/button";
import Image from "next/image";

const ProductCateCard = ({ category }) => {
  const { id, image, name } = category;
  return (
    <div className="bg-secondary relative group p-3 rounded-[10px] border border-[#dbd9d9] h-[180px] sm:h-[280px]">
      <Image
        src={image}
        alt={name || "Shop Category"}
        width={900}
        height={900}
        className="w-full h-[180px] sm:h-[280px] "
      />
      <div className="absolute inset-0 rounded-md group-hover:bg-black group-hover:transition-colors group-hover:duration-300 opacity-20"></div>

      <div className="rounded-md inset-x-0 text-center absolute bottom-3 md:bottom-4 justify-center">
        <Button
          text={"Add to Cart"}
          href={`/shop/${id}`}
          className="!opacity-95 !py-2 !w-10/12 !mx-auto !block"
        />
      </div>
    </div>
  );
};

export default ProductCateCard;
