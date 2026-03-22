import React, { useEffect, useState } from "react";
import Image_slider from "../slider/Image_slider";
import ServiceCard from "../component/ServiceCard";
import ProductCard from "../component/ProductCard";
import Scale from "../component/Scale";
import Certified from "../component/Certified";
import ServiceCloud from "../component/ServiceCloud";
import { Link } from "react-router-dom";
import Company_image from "../slider/Company_image";

import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BASE_URL } from "../../config";

export default function Home() {
  const [headingdata, setHeadingData] = useState([]);
  const [ourexpertise, setOurexpertise] = useState([]);
  const [exploreour, setExploreour] = useState([]);

  useEffect(() => {
    hendelHeader();
  }, []);
  const hendelHeader = async () => {
    try {
      const [headdingRef, ourexpertiseRef, exploreourRef] = await Promise.all([
        fetch(`${BASE_URL}/api/heddingsunhedding/`),
        fetch(`${BASE_URL}/api/ourexpertise/`),
        fetch(`${BASE_URL}/api/exploreour/`),
      ]);

      const [headingdata, ourexpertise, exploreour] = await Promise.all([
        headdingRef.json(),
        ourexpertiseRef.json(),
        exploreourRef.json(),
      ]);

      setHeadingData(headingdata);
      setOurexpertise(ourexpertise);
      setExploreour(exploreour);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="mt-2 w-full">
        <Image_slider />
      </div>

      <div className="flex flex-col w-full p-2 bg-white justify-center items-center mt-4">
        {headingdata
          .filter((item) => item.id === 1)
          .map((item) => (
            <div key={item.id} className="flex flex-col items-center w-full">
              <div className="flex w-[56%] p-4">
                <h1 className="text-[#092241] font-bold text-2xl font-serif">
                  {item.hedding}
                </h1>
              </div>

              <div className="flex w-[70%] p-2">
                <h3 className="text-[#092241d2] font-semibold text-xl">
                  {item.subhedding}
                </h3>
              </div>
            </div>
          ))}
      </div>

      {headingdata
        .filter((item) => item.id == 2)
        .map((item) => (
          <div
            key={item.id}
            className=" full justify-center items-center mt-6  w-full bg-[#022d62] p-6 "
          >
            <h1 className="text-center text-white font-bold text-4xl">
              {item.hedding}
            </h1>
            <h2 className="text-center text-white font-bold text-xl mt-4">
              {item.subhedding}
            </h2>
          </div>
        ))}

      <div className="flex w-full p-2 bg-white justify-center items-center mt-4">
        <div className="flex gap-4 w-[90%]">
          <ServiceCard />
        </div>
      </div>

      <div className="flex full mt-8 bg-[#f1f4fc] w-full justify-center">
        <div className="flex flex-col md:flex-row  w-[90%] md:p-8 p-4 gap-4  ">
          <div className="w-full md:w-150 p-4 mt-2 md:mt-24 ">
            <p className="font-semibold">
              <span className="font-bold text-[18px] text-[#37558d]">
                Integrated business platforms including CRM, ERP, HRM, AI
                solutions {}
              </span>
              and analytics tools built to optimize performance and drive
              innovation.
            </p>
            <img
              className="w-100 md:w-120 h-60 rounded-4xl mt-6 "
              src="/public/image/crm-software-examples.jpg"
              alt=""
            />
          </div>
          <div className="flex w-full md:w-[40%]">
            <ProductCard />
          </div>
        </div>
      </div>

      <div className="flex  h-110 mt-200 md:mt-8 w-full relative justify-center items-center">
        <img
          className="w-full  md:h-110 h-480"
          src="public/image/depositphotos.jpg"
          alt="depositphotos"
        />
        <div className="flex justify-center w-[90%] absolute -top-180 md:top-4 p-4 gap-8">
          <div className="flex w-[70%] justify-center items-center">
            <h1 className="text-white font-bold md:text-4xl text-xl">
              DotZenix Technologies Empowering Growth and Transformation at
              Speed and Scale.
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-[60%] md:w-[90%] absolute  -top-130 md:top-60 p-4 gap-4">
          <Scale />
        </div>
      </div>
      <div className="w-full bg-white  md:mt-90 mt-190"></div>
      <div className="mt-8">
        <Certified />
      </div>

      <div
        className="w-full h-140 flex justify-center mt-8 p-4 relative "
        style={{ backgroundImage: "url('public/image/vector.avif')" }}
      >
        <div className="absolute inset-0 bg-[#f0f5f786]"></div>

        <div className="w-[90%] flex flex-col md:flex-row relative justify-between">
          {headingdata
            .filter((item) => item.id == 3)
            .map((item) => (
              <div key={item.id} className="w-full md:w-[30%] mt-10">
                <h1 className="text-[#022d62] font-bold text-2xl md:text-4xl">
                  {item.hedding}
                </h1>
                <p className="mt-4 font-semibold text-xl">{item.subhedding}</p>
              </div>
            ))}

          <div className="flex w-full md:w-[60%] gap-6 mt-10 h-[450px] overflow-y-auto scrollbar-hide rounded-2xl">
            <div className="flex flex-col gap-6 rounded-2xl">
              {ourexpertise.slice(0, 3).map((item) => (
                <ServiceCloud
                  key={item.id}
                  image={item.image}
                  title={item.tital}
                  desc={item.text}
                  buttonlink={item.buttonlink}
                />
              ))}
            </div>
            <div className="flex flex-col gap-6 mt-20 rounded-2xl">
              {ourexpertise.slice(3, 6).map((item) => (
                <ServiceCloud
                  key={item.id}
                  image={item.image}
                  title={item.tital}
                  desc={item.text}
                  buttonlink={item.buttonlink}
                />
              ))}
            </div>
          </div>
        </div>
      </div>







      <div className="w-full flex flex-col  justify-center items-center mt-8 ">
        {headingdata
          .filter((item) => item.id == 4)
          .map((item) => (
            <div
              key={item.id}
              className="w-[90%] flex flex-col justify-center items-center gap-2"
            >
              <h1 className="text-2xl md:text-3xl text-[#022d62] font-bold">
                {item.hedding}
              </h1>
              <p className="text-xl font-semibold text-[#4e4d4d]">
                {item.subhedding}
              </p>
            </div>
          ))}

        <div className="w-[90%] flex flex-col md:flex-row gap-8 justify-between mt-8 p-6 border-b border-gray-400">
          <div className="w-full md:w-[60%]">
            {exploreour
              .filter((item) => item.id === 5)
              .map((item) => (
                <div key={item.id}>
                  <img
                    className="w-full h-[100%] rounded-2xl object-cover"
                    src={`${BASE_URL}${item.image}`}
                    alt=""
                  />

                  <h1 className="text-md md:text-xl font-bold text-[#4c8b81] mt-4">
                    {item.tital}
                  </h1>

                  <div className="space-y-4 mt-4 text-[#4e4d4d]">
                    {item.text.split(". ").map((para, index) => (
                      <p key={index} className="leading-relaxed">
                        {para}.
                      </p>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="w-full md:w-[35%]  flex flex-col gap-6">
            {exploreour
              .filter((item) => item.id === 6 || item.id === 7)
              .map((item) => (
                <div key={item.id}>
                  <img
                    className="w-full h-[180px] rounded-xl object-cover"
                    src={`${BASE_URL}${item.image}`}
                    alt=""
                  />

                  <h1 className="text-md font-bold text-[#4c8b81] mt-2">
                    {item.tital}
                  </h1>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col mt-10 p-4 justify-center items-center bg-[#e0e4e76c]">
        <div>
          <h1 className="text-xl text-[#4c8b81] font-bold">Our partners</h1>
        </div>
        <div className="w-[90%] p-4 mt-4  rounded-xl">
          <Company_image />
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-8 p-4 bg-[#022d62]">
        {headingdata
          .filter((item) => item.id == 5)
          .map((item) => (
            <div
              key={item.id}
              className="w-[90%] flex flex-col justify-center items-center text-white gap-4"
            >
              <h1 className="text-2xl md:text-4xl font-bold">{item.hedding}</h1>
              <p className="text-md md:text-xl font-semibold ">{item.subhedding}</p>
            </div>
          ))}
      </div>

      <div className="w-full flex justify-center items-center mt-8 bg-[#bebbbb69] ">
        <div className="w-[90%] flex p-2 justify-between ">
          <div className="flex">
            <img
              className="w-50 rounded-xl"
              src="/public/image/comany_logo1.png"
              alt=""
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <FaInstagramSquare size={30} />
            <FaLinkedin size={30} />
            <BsFacebook size={30} />
            <FaXTwitter size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
