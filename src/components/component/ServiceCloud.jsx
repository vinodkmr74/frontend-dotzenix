import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config";
import { FaArrowRight } from "react-icons/fa6";

export default function ServiceCloud({
  bgimage,
  image,
  desc,
  title,
  buttonlink,
}) {
  return (
    <div className="flex w-full rounded-2xl">
      <div className="bg-amber-50 rounded-2xl overflow-hidden group hover:bg-black/0  hover:opacity-100 transition duration-300 ">
        <div
          className="relative flex flex-col gap-2 p-4 text-[#4c8b81]
          transition duration-300 ease-in-out
          group-hover:-translate-y-18 group-hover:text-white group-hover:shadow-xl "
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 
            group-hover:opacity-100 transition duration-300 "
            style={{ backgroundImage: `url(${bgimage})` }}
          ></div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></div>
          <div className="relative z-10 p-4 space-y-2  ">
            <img
              className="w-16 h-16 rounded-2xl"
              src={`${BASE_URL}${image}`}
              alt={title}
            />
            <h1 className="font-bold text-lg mt-2">{title}</h1>
            <p className="text-md leading-6 ">{desc}</p>
            <Link
              to={buttonlink}
              className="inline-block mt-3 px-4 py-2 group-hover:bg-[#4c8b81] hover:bg-[#022d62]  text-white rounded-2xl"
            >
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
