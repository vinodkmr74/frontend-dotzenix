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

      <div
        className="maim-growth"
        style={{
          backgroundImage: "url('image/depositphotos.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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

      <div className="our-success">
        <div className="ourcolor"></div>

        <div className="our-success-box">
          {appData.TextData.filter((item) => item.id == 3).map((item) => (
            <div key={item.id} className="success-text">
              <h1>{item.hedding}</h1>
              <p>{item.subhedding}</p>
            </div>
          ))}

          <div className="banner-scroll">
            <div className="column">
              {appData.ourexpertise.slice(0, 3).map((item) => (
                <ServiceCloud
                  key={item.id}
                  image={item.image}
                  title={item.tital}
                  desc={item.text}
                  buttonlink={item.buttonlink}
                />
              ))}
            </div>

            <div className="column column-offset">
              {appData.ourexpertise.slice(3, 6).map((item) => (
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

      <div className="explore-main">
        {appData.TextData.filter((item) => item.id == 4).map((item) => (
          <div key={item.id} className="explore-header">
            <h1>{item.hedding}</h1>
            <p>{item.subhedding}</p>
          </div>
        ))}

        <div className="explore-content">
          {/* LEFT SIDE */}
          <div className="explore-left">
            {appData.exploreour
              .filter((item) => item.id === 5)
              .map((item) => (
                <div key={item.id} className="explore-left1">
                  <img src={item.image} alt="" />

                  <h1>{item.tital}</h1>

                  <div className="explore-text">
                    {item.text.split(". ").map((para, index) => (
                      <p key={index}>{para}.</p>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="explore-right">
            {appData.exploreour
              .filter((item) => item.id === 6 || item.id === 7)
              .map((item) => (
                <div key={item.id} className="explore-right2">
                  <img src={item.image} alt="" />
                  <h1>{item.tital}</h1>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="partners-slider">
        <div className="partners-slidet-title">
          <h1>Our partners</h1>
        </div>
        <div className="partners-content">
          <Company_image />
        </div>
      </div>

      <div className="cta-main">
        {appData.TextData.filter((item) => item.id == 5).map((item) => (
          <div key={item.id} className="cta-content">
            <h1>{item.hedding}</h1>
            <p>{item.subhedding}</p>
          </div>
        ))}
      </div>

      <div className="media-contact-main">
        <div className="media-contact1">
          <div className="my-logo">
            <Link to="/">
              <img src="/image/comany_logo1.png" alt="logo" />{" "}
            </Link>
          </div>
          <div className="media-contact2">
            <FaInstagramSquare />
            <FaLinkedin />
            <BsFacebook />
            <FaXTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}
