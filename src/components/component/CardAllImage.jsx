import React from "react";

export default function CardAllImage({ image, title,title1 ,title2,text }) {
  return (
    // <div
    //   // className=" flex w-full h-80 mt-4 relative justify-center items-center no-repeat bg-cover  "
    //     className="flex flex-col  w-full h-100 mt-4 relative justify-center items-center bg-no-repeat bg-center bg-cover"

    //   style={{ backgroundImage: `url(${image})` }}
    // >
    //   <div className="absolute inset-0 bg-linear-to-r from-[#022147b0] to-[rgba(134,173,231,0.22)]"></div>
      
    //   <h1 className="text-white  font-bold text-5xl opacity-50 "> {title}</h1>
    //   <h1 className="text-[#ffffff] font-bold text-5xl "> {title1}</h1>
    //   <p className="text-[#ffffff] font- text-xl font-bold w-[60%] "> {text}</p>


    // </div>

    <div
  className="card-image-head"
  style={{ backgroundImage: `url(${image})`, height: "400px",width:"100%" }}
>
  <div className="card-content-hlay">
    <h1>{title}</h1>
    <h2>{title1}</h2>
    <p>{text}</p>
  </div>
</div>
  );
}
