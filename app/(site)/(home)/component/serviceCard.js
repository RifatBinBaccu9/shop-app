import React from "react";

const ServiceCard = ({ service }) => {
  const { imgIcon, title, paragraph } = service;
  return (
    <div className="hover:border-[#D96936] border-b-2 hover:shadow-lg hover:shadow-[#c7c7c9] flex flex-col items-center text-center p-4 rounded-lg shadow-md">
      <div className="text-3xl md:text-4xl text-bgButton">{imgIcon}</div>
      <h3 className="font-semibold sm:font-bold  text-lg sm:text-xl pt-4 pb-1">
        {title}
      </h3>
      <p className="text-gray-600  text-sm sm:text-base font-normal ">
        {paragraph}
      </p>
    </div>
  );
};

export default ServiceCard;
