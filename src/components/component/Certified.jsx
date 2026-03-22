import React, { useEffect, useState } from "react";
import { MdOutlineAddTask } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FcMindMap } from "react-icons/fc";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { BASE_URL } from "../../config";

export default function Certified() {
  const [data, DataSet] = useState([]);
  const [counts, setCounts] = useState({});

  useEffect(() => {
    hendelData();
  }, []);

  const hendelData = async () => {
    try {
      const request = await fetch(`${BASE_URL}/api/satisfied/`);
      const response = await request.json();
      DataSet(response);

      // start counter
      response.forEach((item) => startCounter(item.id, item.number));
    } catch (error) {
      console.log(error);
    }
  };

  const startCounter = (id, target) => {
    let current = 0;
    const interval = setInterval(() => {
      current++;

      setCounts((prev) => ({
        ...prev,
        [id]: current,
      }));

      if (current >= target) {
        clearInterval(interval);
      }
    }, 30);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#022d62]">
      <div className="w-[90%] flex flex-wrap justify-between items-center gap-8 p-8 ">
        {data.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-2">
            {item.id == 5 && (
              <div className="flex flex-col items-center gap-2">
                <MdOutlineAddTask className="text-[#4c8b81] text-6xl" />
                <h1 className="text-white text-xl font-semibold">
                  {item.text}
                </h1>
                <h1 className="text-white text-5xl font-medium">
                  {counts[item.id] || 0}+
                </h1>
              </div>
            )}

            {item.id == 6 && (
              <div className="flex flex-col items-center gap-2">
                <PiBuildingOfficeLight className="text-[#4c8b81] text-6xl" />
                <h1 className="text-white text-xl font-semibold">
                  {item.text}
                </h1>
                <h1 className="text-white text-5xl font-medium">
                  {counts[item.id] || 0}+
                </h1>
              </div>
            )}

            {item.id == 7 && (
              <div className="flex flex-col items-center gap-2">
                <GiTrophyCup className="text-[#4c8b81] text-6xl" />
                <h1 className="text-white font-semibold text-xl">
                  {item.text}
                </h1>
                <h1 className="text-white text-5xl font-medium">
                  {counts[item.id] || 0}+
                </h1>
              </div>
            )}

            {item.id == 8 && (
              <div className="flex flex-col items-center gap-2">
                <FaRegCircleCheck className="text-[#4c8b81] text-6xl" />
                <h1 className="text-white font-semibold text-xl">
                  {item.text}
                </h1>
                <h1 className="text-white text-5xl font-medium">
                  {counts[item.id] || 0}+
                </h1>
              </div>
            )}

            {item.id == 9 && (
              <div className="flex flex-col items-center gap-2">
                <FcMindMap className="text-[#4c8b81] text-6xl" />
                <h1 className="text-white font-semibold text-xl">
                  {item.text}
                </h1>
                <h1 className="text-white text-5xl font-medium">
                  {counts[item.id] || 0}+
                </h1>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
