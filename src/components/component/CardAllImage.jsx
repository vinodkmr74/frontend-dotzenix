import React from "react";

export default function CardAllImage({ image, title }) {
  return (
    <div
      className=" flex w-full h-100 mt-4 relative justify-center items-center "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-[#f0f5f746]"></div>
      <h1 className="text-white font-bold text-5xl "> {title}</h1>
    </div>
  );
}
