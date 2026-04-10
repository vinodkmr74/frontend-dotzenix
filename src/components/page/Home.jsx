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
import { appData } from "../../data/appData";

export default function Home() {
  const [ourexpertise, setOurexpertise] = useState([]);
  const [exploreour, setExploreour] = useState([]);

  useEffect(() => {
    hendelHeader();
  }, []);
  const hendelHeader = async () => {
    try {
      const [ourexpertiseRef, exploreourRef] = await Promise.all([
        fetch(`${BASE_URL}/api/ourexpertise/`),
        fetch(`${BASE_URL}/api/exploreour/`),
      ]);

      const [ourexpertise, exploreour] = await Promise.all([
        ourexpertiseRef.json(),
        exploreourRef.json(),
      ]);

      setOurexpertise(ourexpertise);
      setExploreour(exploreour);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Image_slider />

      <div className="text-container">
        {appData.TextData.filter((item) => item.id === 1).map((item) => (
          <div key={item.id} className="text-wrapper">
            <div className="heading-box">
              <h1 className="heading">{item.hedding}</h1>
            </div>
            <div className="subheading-box">
              <h3 className="subheading">{item.subhedding}</h3>
            </div>
          </div>
        ))}
      </div>

      {appData.TextData.filter((item) => item.id == 2).map((item) => (
        <div key={item.id} className="banner-container">
          <h1 className="banner-heading">{item.hedding}</h1>
          <h2 className="banner-subheading">{item.subhedding}</h2>
        </div>
      ))}
      <ServiceCard />

      <div className="product-main-container">
        <div className="pro-in-container">
          <div className="leftsection">
            <p>
              <span>
                Integrated business platforms including CRM, ERP, HRM, AI
                solutions
              </span>{" "}
              {}
              and analytics tools built to optimize performance and drive
              innovation.
            </p>

            <img
              className="image-style"
              src="image/crm-software-examples.jpg"
              alt=""
            />
          </div>

          <div className="rightsection">
            <ProductCard />
          </div>
        </div>
      </div>

      <div className="maim-growth" style={{backgroundImage: "url('image/depositphotos.jpg')" , backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="text-box">
          <h1>
            DotZenix Technologies Empowering Growth and Transformation at Speed
            and Scale.
          </h1>
        </div>
        <div className="scale-card">
          <Scale />
        </div>
      </div>

      <div className="gap-space"></div>

      <div className="mt-8">
        <Certified />
      </div>

      <div
        className="w-full h-140 flex justify-center mt-8 p-4 relative "
        style={{ backgroundImage: "url('public/image/vector.avif')" }}
      >
        <div className="absolute inset-0 bg-[#f0f5f786]"></div>

        <div className="w-[90%] flex flex-col md:flex-row relative justify-between">
          {appData.TextData.filter((item) => item.id == 3).map((item) => (
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
        {appData.TextData.filter((item) => item.id == 4).map((item) => (
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
        {appData.TextData.filter((item) => item.id == 5).map((item) => (
          <div
            key={item.id}
            className="w-[90%] flex flex-col justify-center items-center text-white gap-4"
          >
            <h1 className="text-2xl md:text-4xl font-bold">{item.hedding}</h1>
            <p className="text-md md:text-xl font-semibold ">
              {item.subhedding}
            </p>
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
