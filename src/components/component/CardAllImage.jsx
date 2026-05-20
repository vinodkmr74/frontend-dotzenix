import React from "react";

export default function CardAllImage({ image, title,title1 ,title2,text }) {
  return (
    <div
      // className=" flex w-full h-80 mt-4 relative justify-center items-center no-repeat bg-cover  "
        className="flex flex-col  w-full h-100 mt-4 relative justify-center items-center bg-no-repeat bg-center bg-cover"

      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-[#ededf74d]"></div>
      <h1 className="text-[#ffffff] font-bold text-5xl "> {title}</h1>
      <h1 className="text-[#ffffff] font-bold text-5xl "> {title1}</h1>
      <p className="text-[#ffffff] font- text-xl font-bold w-[50%] "> {text}</p>


    </div>
  );
}
