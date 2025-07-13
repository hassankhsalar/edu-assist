"use client";

import graduates from "@/data/graduates.json";

const Gallery = () => {
  return (
    <div className="w-11/12 mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">College Image Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {graduates.map((graduates) => (
          <img
            key={graduates.id}
            src={graduates.image}
            alt={graduates.name}
            className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
