import React, { use } from "react";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../config";

export default function Scale() {
  const [data, setData] = useState([]);

  useEffect(() => {
    hendelData();
  }, []);

  const hendelData = async () => {
    try {
      const request = await fetch(`${BASE_URL}/api/missionvission/`);
      const response = await request.json(); 
      setData(response);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col w-full border border-gray-400 rounded-md p-4 bg-white shadow-lg hover:shadow-2xl transition-all duration-200 hover:-translate-y-8 "
        >
          <div className="flex justify-center items-center mt-4 ">
            <h1 className=" md:text-xl text-xl text-[#4c8b81] font-semibold">{item.heading}</h1>
          </div>
          <div className="flex justify-center items-center mt-4 bg-[#022d62] border border-gray-400 rounded-md ">
            <img
              className="rounded-xl"
              src={`${BASE_URL}${item.image}`}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-4 ">
            <div>
              <h1 className="md:text-xl text-xl text-[#4c8b81] font-semibold">{item.title}</h1>
            </div>
            <div className="flex mt-4 justify-center items-center ">
              <p className=" text-sm md:text-sm leading-relaxed">{item.subtext}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
