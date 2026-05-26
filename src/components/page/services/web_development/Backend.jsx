import React, { useEffect } from "react";
import Service_hero from "../../../component/Service_hero";
import { serviceData } from "../../../../data/serviceData";
import Technologies from "../../../slider/Technologies";
import { ImArrowRight2 } from "react-icons/im";
import Dev_process from "../../../component/Dev_process";
import Cta from "../../../component/Cta";
import Service_abouts from "../../../component/Service_abouts";
import Service_img_card from "../../../component/Service_img_card";
import Aos from "aos";

export default function Backend() {
      useEffect(() => {
      Aos.init();
    }, []);
    
  return (<>
      <Service_hero
        heading={"Backend Development Services"}
        text={
          "We build secure, scalable, and high-performance backend solutions using Node.js, Python, Java, Spring Boot, PHP, FastAPI, and Django to deliver reliable APIs, databases, and server-side applications security and scalability for your business."
        }
        image={"image/backend2.png"}
        btn={"Get start"}
      />

      <Service_abouts
        heading={"What is Backend Development?"}
        text={
          "Backend development focuses on building the server-side logic, databases, APIs, and application architecture that power websites and web applications. We create secure, scalable, and high-performance backend solutions that ensure smooth functionality, data management, and seamless user experiences."
        }
        image={"image/codeimage.png"}
        title={"Transforming Ideas Into Powerful Digital Solutions"}
        subtext={"We create modern, scalable, and user-friendly applications with advanced technology and robust architecture that help businesses grow."}
      />

      <div className="why-chose">
        <div className="why-chose-heading">
          <h1>Why Choose Our Backend Development Services?</h1>
        </div>
        {serviceData.backendpointData.map((item, index) => (
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
            <h1>Our Backend Services</h1>
          </div>

          <div className="our_frontend_service_card_main">
            {serviceData.ourbackendServiceCard.map((item, index) => (
              <div className="our_frontend_service_card"
          data-aos="zoom-in"
              key={index}>
                <div className="img-icon"></div>
                <h1>{item.heading}</h1>
                <p>{item.text}</p>
                {/* <img src={item.image} alt="" /> */}
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
            html={"image/java.png"}
            css={"image/spring.png"}
            javascript={"image/python.png"}
            react={"image/node.png"}
            bootstrap={"image/laravel.png"}
            nextjs={"image/php.png"}
          />
        </div>
      </div>

      <Dev_process />
      <Service_img_card />
      <Cta />



</>  )
}
