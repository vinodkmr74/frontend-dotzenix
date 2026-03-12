import React from "react";

export default function Scale() {
  return (
    <div className="flex flex-col w-full border border-gray-400 rounded-md p-4 bg-white shadow-lg hover:shadow-2xl transition-all duration-200 hover:-translate-y-8 ">
      <div className="flex justify-center items-center mt-4 ">
        Mission and Vision
      </div>

      <div className="flex justify-center items-center mt-4 bg-[#022d62] border border-gray-400 rounded-md ">
        <img className="rounded-xl" src="/public\image\target.png" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center mt-4 ">
        <div>Our Mission</div>
        <div>Out Vision</div>
        <div></div>
      </div>
    </div>
  );
}
