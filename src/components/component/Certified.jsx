import React from "react";
import { MdOutlineAddTask } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FcMindMap } from "react-icons/fc";
import { PiBuildingOfficeLight } from "react-icons/pi";

export default function Certified() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#022d62]">
      <div className="w-[90%] flex flex-col gap-8 p-8 ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center gap-2">
            <MdOutlineAddTask className="text-[#4c8b81] text-6xl " />

            <h1 className="text-white  text-xl font-semibold ">
              Satisfied Clients
            </h1>
            <h1 className="text-white text-5xl font-medium  ">200+</h1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PiBuildingOfficeLight className="text-[#4c8b81] text-6xl " />

            <h1 className="text-white text-xl font-semibold  ">
              INDUSTRY EXPERTISE
            </h1>
            <h1 className="text-white text-5xl font-medium ">10+</h1>
          </div>
          <div className="flex flex-col items-center  gap-2">
            <GiTrophyCup className="text-[#4c8b81] text-6xl " />
            <h1 className="text-white font-semibold text-xl ">
              Awards & Achievement
            </h1>
            <h1 className="text-white text-5xl font-medium   ">15+</h1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaRegCircleCheck className="text-[#4c8b81] text-6xl " />

            <h1 className="text-white font-semibold text-xl ">
              Finished Projects
            </h1>
            <h1 className="text-white text-5xl font-medium   ">250+</h1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FcMindMap className="text-[#4c8b81] text-6xl " />

            <h1 className="text-white font-semibold text-xl  ">
              Skilled Experts
            </h1>
            <h1 className="text-white text-5xl font-medium  ">40+</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
