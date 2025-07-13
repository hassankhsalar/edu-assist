"use client";
import React, { useEffect, useState } from "react";
//import reviews from "@/data/reviews.json";
import { FaQuoteLeft, FaQuoteRight, FaRegStar, FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Testimonial = () => {

   const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error loading reviews:", err));
  }, []);


  return (
    <div className="w-full overflow-hidden py-10">
      <Marquee pauseOnHover gradient={false} speed={40}>
        <div className="flex gap-6">
          {reviews.map((reviews) => (
            <div key={reviews.id}
            className="w-full border border-[#3B9DF8] shadow-2xl rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-16">
            <img
                src={reviews.image}
                className="w-[180px] h-[180px] object-cover rounded-full"
            />

            <div className="w-full md:w-[65%] relative">
                <div className="flex flex-col md:flex-row flex-wrap gap-y-2 items-center justify-between relative">
                    <FaQuoteRight
                        className=" absolute top-[-550%] md:top-[-150%] left-[0%] text-[2rem] text-[#3B9DF8]"/>
                    <div className="flex items-center gap-2">
                        <h2 className="text-[1rem] dark:text-[#abc2d3] font-[500]">
                            {reviews.name}
                        </h2>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaStar className="text-[1.1rem] text-[#ffba24]"/>
                        <FaStar className="text-[1.1rem] text-[#ffba24]"/>
                        <FaStar className="text-[1.1rem] text-[#ffba24]"/>
                        <FaStar className="text-[1.1rem] text-[#ffba24]"/>
                        <FaRegStar className="text-[#ffba24] text-[1.1rem]"/>
                    </div>
                </div>
                <h2 className="text-[1.5rem] dark:text-[#abc2d3] font-[500] capitalize mt-3">
                    {reviews.title}
                </h2>
                <p className="text-justify dark:text-[#abc2d3] text-[0.9rem] my-3 text-[#424242]">
                    {reviews.description}
                </p>
                <FaQuoteLeft className="absolute bottom-[-10%] right-[0%] text-[2rem] text-[#3B9DF8]"/>
            </div>
        </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonial;
