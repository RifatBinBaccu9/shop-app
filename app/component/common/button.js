import Link from "next/link";
export const Button = ({ text, href, icon, icons, click, className = "" }) => {
  const button = (
    <button
      type="submit"
      onClick={click}
      className={`flex items-center gap-2 w-fit md:text-base text-sm font-normal text-white hover:text-[#E16639] bg-bgButton hover:bg-bgBHover rounded-md cursor-pointer transition-colors duration-300 sm:px-[30px] px-[15px] sm:py-[10px] py-[5px] ${className}`}
    >
     {icons} {text} {icon}
    </button>
  );
  return href ? <Link href={href}>{button}</Link> : button;
};
