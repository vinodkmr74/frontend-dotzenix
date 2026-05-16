import React from "react";
import Service_hero from "../../../component/Service_hero";
import { serviceData } from "../../../../data/serviceData";
import Technologies from "../../../slider/Technologies";
import { ImArrowRight2 } from "react-icons/im";
import Dev_process from "../../../component/Dev_process";
import Cta from "../../../component/Cta";
import Service_abouts from "../../../component/Service_abouts";
export default function Smo() {
  return (
    <>
      <Service_hero
        heading={"SMO Services"}
        text={
          "We provide result-driven Social Media Optimization services to improve brand awareness, audience engagement, and online presence across multiple social media platforms."
        }
        image={"image/smo5.png"}
        btn={"Get start"}
      />

      <Service_abouts
        heading={"What is SMO?"}
        text={
          "SMO (Social Media Optimization) is the process of optimizing social media profiles, content, and marketing strategies to increase brand visibility, audience engagement, and business growth through platforms like Facebook, Instagram, LinkedIn, and Twitter."
        }
        image={"image/web-image.png"}
        title={"Transforming Ideas Into Powerful Digital Solutions"}
        subtext={
          "We create modern, scalable, and user-friendly applications with advanced technology and robust architecture that help businesses grow."
        }
      />

      <div className="why-chose">
        <div className="why-chose-heading">
          <h1>Why Choose Our SMO Services?</h1>
        </div>
        {serviceData.whyChooseSMO.map((item, index) => (
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
            <h1>Our SMO Services</h1>
          </div>

          <div className="our_frontend_service_card_main">
            {serviceData.smoServices.map((item, index) => (
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

      <div className="why-chose">
        <div className="why-chose-heading">
          <h1>Technologies We Use in SMO</h1>
        </div>
        {serviceData.technologiesWeUse.map((item, index) => (
          <div className="why-chose-in" key={index}>
            <div className="why-heding">
              <ImArrowRight2 className="arro-icon" />
              <p>
                <span>{item.heading} : </span> {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="frontend_slider">
        <div className="frontend_tech_heading">
          <h1>Technologies We Use</h1>
        </div>
        <div className="frontend_slider_in">
          <Technologies
            html={"image/shopify.png"}
            css={"image/php.png"}
            javascript={"image/html.png"}
            react={"image/firebase.png"}
            bootstrap={"image/css.jpg"}
            nextjs={"image/reactjs.png"}
          />
        </div>
      </div>

      <Dev_process />
      <Cta />
    </>
  );
}
