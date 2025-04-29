"use client";
import { useEffect, useState } from "react";
import InstSrorCard from "./InstSrorCard";

const stories = [
    {
      "image": "/InstagramStories/image1.png",
      "InstagramLink": "https://www.instagram.com/"
    },
    {
      "image": "/InstagramStories/image2.png",
     "InstagramLink": "https://www.instagram.com/"
    },
    {
      "image": "/InstagramStories/image3.png",
     "InstagramLink": "https://www.instagram.com/"
    },
    {
     "image": "/InstagramStories/image4.png",
     "InstagramLink": "https://www.instagram.com/"
    }
  ]
const InstagramStories = () => {
  return (
    <div className="container lg:my-[120px] md:my-[90px] my-[60px]">
      <h1 className="title text-center mb-3 sm:mb-5 md:mb-10 lg:mb-[50px]">
        Our Instagram Stories
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4  xl:gap-[30px] gap-3 justify-between mt-7 md:mt-[50px] ">
        {stories.map((instStories, idx) => (
          <InstSrorCard key={idx} instStories={instStories}></InstSrorCard>
        ))}
      </div>
    </div>
  );
};

export default InstagramStories;
