import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

const InstSrorCard = ({ instStories }) => {
  const { image, InstagramLink } = instStories;

  return (
    <div>
      <div className="group  relative flex justify-center items-center border shadow-sm hover:shadow-lg rounded-md ">
        <Image
          src={image}
          alt="image"
          width={900}
          height={900}
          className="w-full lg:h-[262px] h-[180px] rounded-md"
        />

        <div className="absolute inset-0 rounded-md group-hover:bg-black group-hover:translate group-hover:duration-300 opacity-50"></div>

        <div className=" absolute">
          <Link href={InstagramLink}>
            <div className="hover:bg-[#174A9B] hover:text-white text-black sm:p-[10px] p-[7px] rounded-full bg-white hidden group-hover:inline-block opacity-95">
              <FaInstagram className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstSrorCard;
