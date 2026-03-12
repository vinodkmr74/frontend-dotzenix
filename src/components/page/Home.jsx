import React from "react";
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

export default function Home() {
  return (
    <div>
      <div className="mt-2">
        <Image_slider />
      </div>

      <div className="flex flex-col w-full p-2 bg-white justify-center items-center mt-4">
        <div className="flex w-[56%] p-4">
          <h1 className="text-[#092241] font-bold text-2xl font-serif ">
            Empowering Businesses Through Smart Digital Engineering and
            Excellence for a Smarter Tomorrow
          </h1>
        </div>

        <div className="flex w-[70%] p-2">
          <h3 className="text-[#092241d2] font-semibold text-xl">
            At <span className="text-[#4c8b81]"> DotZenix Technologies,</span>{" "}
            we design and develop scalable, secure, and high-performance digital
            solutions that help businesses innovate, compete, and grow in
            today's fast-changing digital landscape.
          </h3>
        </div>
      </div>

      <div className=" full justify-center items-center mt-6  w-full bg-[#022d62] p-6 ">
        <h1 className="text-center text-white font-bold text-4xl">
          Our Services
        </h1>
        <h2 className="text-center text-white font-bold text-xl mt-4">
          Delivering enterprise-grade software Development trusted by growing
          businesses and established brands.
        </h2>
      </div>

      <div className="flex w-full p-2 bg-white justify-center items-center mt-4">
        <div className="flex gap-4 w-[90%]">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>

      <div className="flex full mt-6 bg-[#f1f4fc] w-full justify-center">
        <div className=" flex w-[90%] p-2 ">
          <div className="w-150 p-4 ">
            <p className="font-semibold">
              <span className="font-bold text-[18px] text-[#37558d]">
                Integrated business platforms including CRM, ERP, HRM, AI
                solutions {}
              </span>
              and analytics tools built to optimize performance and drive
              innovation.
            </p>
            <img
              className="w-80 h-40 rounded-4xl "
              src="/public/image/crm.png"
              alt=""
            />
          </div>
          <div className="flex p-2 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>

      <div className="flex  h-110 mt-8 w-full relative justify-center items-center">
        <img
          className="w-full h-110"
          src="public/image/depositphotos.jpg"
          alt="depositphotos"
        />
        <div className="flex justify-center w-[90%] absolute top-4 p-4 gap-8">
          <div className="flex w-[70%] justify-center items-center">
            <h1 className="text-white font-bold text-4xl">
              DotZenix Technologies Empowering Growth and Transformation at
              Speed and Scale.
            </h1>
          </div>
        </div>

        <div className="flex w-[90%] absolute top-60 p-4 gap-4">
          <Scale />
          <Scale />
          <Scale />
        </div>
      </div>
      <div className="w-full bg-white mt-60"></div>

      <div className="mt-8">
        <Certified />
      </div>

      <div
        className="w-full h-120 flex justify-center mt-8 p-4 relative "
        style={{ backgroundImage: "url('public/image/vector.avif')" }}
      >
        <div className="absolute inset-0 bg-[#f0f5f786]"></div>

        <div className="w-[90%] flex relative justify-between">
          <div className="w-[30%] mt-10">
            <h1 className="text-[#022d62] font-bold text-4xl">
              Our Expertise, Your Success
            </h1>
            <p className="mt-4 font-semibold text-xl">
              Offring modern technology solutions to transform your business.
            </p>
          </div>
          <div className="flex w-[60%] gap-4 h-100 overflow-y-auto scrollbar-hide">
            <div className="flex flex-col gap-4">
              <ServiceCloud />
              <ServiceCloud />
              <ServiceCloud />
            </div>
            <div className="flex flex-col mt-30 gap-4">
              <ServiceCloud />
              <ServiceCloud />
              <ServiceCloud />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col  justify-center items-center mt-8 ">
        <diiv className="w-[90%] flex flex-col justify-center items-center gap-2">
          <h1 className="text-3xl text-[#022d62] font-bold">
            Explore Our Latest Blogs & Insights
          </h1>
          <p className="text-xl font-semibold text-[#4e4d4d]">
            Learn about new technologies, industry trends, and important updates
            through our blogs and articles.
          </p>
        </diiv>

        <div className="w-[90%] flex justify-between mt-8 p-6 border-b border-gray-400">
          <div className="w-[60%]">
            <img
              className="w-2xl h-100 rounded-4xl"
              src="public/image/codeimage.png"
              alt="codeimage"
            />
            <h1 className="text-xl font-bold text-[#4c8b81] mt-4">
              Why Choose AI, ML, and Java & Python Development Services?
            </h1>
            <p className="mt-2 font-semibold">
              Java and Python are powerful programming languages used to build
              secure, scalable, and high-performance applications. They help
              businesses develop web applications, AI solutions, enterprise
              software, and modern digital platforms efficiently.
            </p>
            <p className="mt-4 font-semibold">
              Python is widely used for Artificial Intelligence, Machine
              Learning, and Data Analytics because of powerful libraries like
              TensorFlow, Pandas, and Scikit-Learn. It helps companies build AI
              chatbots, automation tools, and predictive systems.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-90 h-50">
              <img
                className="w-90 h-40 rounded-xl border border-[#e4e3e3]"
                src="public/image/software-developer-ai.jpg"
                alt=""
              />

              <Link to="/#" className="text-[#37558d]">
                Why DotZenix Technologies is Leading AI & ML Company in Noida
              </Link>
            </div>
            <div>
              <img
                className="w-90 h-40 rounded-xl"
                src="public/image/web.png"
                alt=""
              />
              <Link to="/#" className="text-[#37558d]">
                Why Choose Java & Python Development Services?
              </Link>
            </div>
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
        <div className="w-[90%] flex flex-col justify-center items-center text-white gap-4">
          <h1 className="text-4xl font-bold">
            Share your vision and we will make it our mission
          </h1>
          <p className="text-xl font-semibold ">
            For efficient and customized digital marketing solutions connect
            with us now
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-8 bg-[#bebbbb69] ">
        <div className="w-[90%] flex p-2 justify-between ">
          <div className="flex">
            <img className="w-50 rounded-xl"
            src="/public/image/comany_logo1.png" alt="" />
          </div>
          <div className="flex justify-center items-center gap-4">
            <FaInstagramSquare size={30} />
            <FaLinkedin size={30}/>
            <BsFacebook size={30}/>
            <FaXTwitter size={30}/>
          </div>
        </div>
      </div>
    </div>
  );
}
