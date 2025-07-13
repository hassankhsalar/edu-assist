// src/components/BannerCards.jsx
"use client";

import React from "react";
import colleges from "@/data/colleges.json";
import Link from "next/link";

const BannerCards = () => {
  return (
    <div className="w-11/12 mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Colleges</h2>
      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
        {colleges.slice(0, 3).map((college) => (

            
        <div key={college.id}
            className="w-full  h-[350px] relative overflow-hidden group cursor-pointer rounded-md">

            {/*  image  */}
            <img
                src={college.image}
                alt={college.name}
                className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"/>

            {/*  text  */}
            <div
                className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col gap-1">
                <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">{college.name}</h1>
                <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]"><strong>Admission Dates:</strong> {college.admissionDates}</p>
                <p className="text-sm">
                <strong>Events:</strong> {college.events.slice(0, 2).join(", ")}...
              </p>
              <p className="text-sm ">
                <strong>Research Papers:</strong> {college.researchCount}
              </p>
              <p className="text-sm">
                <strong>Sports:</strong> {college.sports.slice(0, 2).join(", ")}...
              </p>
              <Link href={`/colleges/${college.id}`}>
              <button
                    className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                    Details
                </button>
              </Link>
                
            </div>

            {/*  bottom shadow  */}
            <div
                className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgba(0,0,0,0.58)] to-[rgba(0,0,0,0.82)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>
    
        ))}
      </div>
    </div>
  );
};

export default BannerCards;
