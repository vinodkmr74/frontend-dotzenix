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

export default function Frontend() {
     useEffect(() => {
      Aos.init();
    }, []);
    
  return (
    <>
      <Service_hero
        heading={"Frontend Development Services"}
        text={
          "We build responsive, custom, high-performance, and user-friendly web applications using modern frontend technologies such as React.js,Next.js, JavaScript, and UI"
        }
        image={"image/frontend.png"}
        btn={"Get start"}
      />

      <Service_abouts
        heading={"What is Frontend Development?"}
        text={
          "Frontend development focuses on creating visually attractive,responsive, and interactive user interfaces for websites and web applications. We create fast, scalable, and modern digital solutions that enhance user experience."
        }
        image={"image/web-image.png"}
        title={"Transforming Ideas Into Powerful Digital Solutions"}
        subtext={
          "We create modern, scalable, and user-friendly applications with advanced technology and robust architecture that help businesses grow."
        }
      />

      <div className="why-chose">
        <div className="why-chose-heading">
          <h1>Why Choose Our Frontend Development Services?</h1>
        </div>
        {serviceData.whyData.map((item, index) => (
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
            <h1>Our Frontend Services</h1>
          </div>

          <div className="our_frontend_service_card_main">
            {serviceData.ourServiceCard.map((item, index) => (
              <div className="our_frontend_service_card"
              data-aos="zoom-in"
               key={index}>
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
            html={"image/react-js-training-igmguru_1474547454_l.jpg"}
            css={"image/html.png"}
            javascript={"image/images_js.png"}
            react={"image/css.jpg"}
            bootstrap={"image/bootstrap.jpg"}
            nextjs={"image/nexjs.png"}
          />
        </div>
      </div>

      <Dev_process />
      <Service_img_card />
      <Cta />
    </>
  );
}
