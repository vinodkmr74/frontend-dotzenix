import React from "react";
import Service_hero from "../../../component/Service_hero";
import { serviceData } from "../../../../data/serviceData";
import Technologies from "../../../slider/Technologies";
import { ImArrowRight2 } from "react-icons/im";
import Dev_process from "../../../component/Dev_process";
import Cta from "../../../component/Cta";
import Service_abouts from "../../../component/Service_abouts";

export default function Database() {
  return (
    <>
      <Service_hero
        heading={"Database Services"}
        text={
          "We provide secure, scalable, and high-performance database solutions for efficient data storage, management, optimization, and seamless business operations."
        }
        image={"image/database.png"}
        btn={"Get start"}
      />

      <Service_abouts
        heading={"What is Database?"}
        text={
          "A database is an organized collection of data that is stored, managed, and accessed electronically. It helps businesses securely store information, manage records efficiently, and retrieve data quickly for websites, applications, and software systems."
        }
        image={"image/dataimg.png"}
        title={"Transforming Ideas Into Powerful Digital Solutions"}
        subtext={
          "We create modern, scalable, and user-friendly applications with advanced technology and robust architecture that help businesses grow."
        }
      />

      <div className="why-chose">
        <div className="why-chose-heading">
          <h1>Why Choose Our Database Services?</h1>
        </div>
        {serviceData.Database.map((item, index) => (
          <div className="why-chose-in" key={index}>
            <div className="why-heding">
              <ImArrowRight2 className="arro-icon" />
              <p>
                <span>{item.title} : </span> {item.subtext}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="our_frontend_service">
        <div className="our_fron_service_in">
          <div className="our_frontend_service_text">
            <h1>Our Database Services</h1>
          </div>

          <div className="our_frontend_service_card_main">
            {serviceData.databaseServiceCard.map((item, index) => (
              <div className="our_frontend_service_card" key={index}>
                <div className="img-icon"></div>

                <h1>{item.heading}</h1>
                <p>{item.text}</p>
                <img src={item.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="frontend_slider">
        <div className="frontend_tech_heading">
          <h1>Technologies We Use</h1>
        </div>
        <div className="frontend_slider_in">
          <Technologies
            html={"image/mysql.png"}
            css={"image/mongo.png"}
            javascript={"image/post.png"}
            react={"image/sql_se.png"}
            bootstrap={"image/cloud.png"}
            nextjs={"image/backup.png"}
          />
        </div>
      </div>

      <Dev_process />
      <Cta />
    </>
  );
}
