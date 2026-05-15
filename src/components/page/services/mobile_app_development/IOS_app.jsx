import React from "react";
import Service_hero from "../../../component/Service_hero";
import { serviceData } from "../../../../data/serviceData";
import Technologies from "../../../slider/Technologies";
import { ImArrowRight2 } from "react-icons/im";
import Dev_process from "../../../component/Dev_process";
import Cta from "../../../component/Cta";
import Service_abouts from "../../../component/Service_abouts";

export default function IOS_app() {
  return (
      <>
          <Service_hero
            heading={"UI/UX Design Services"}
            text={
              "We create modern, user-friendly, and visually engaging UI/UX designs that deliver seamless digital experiences. Our design solutions focus on usability, creativity, responsiveness, and user satisfaction to help businesses build impactful products and stronger customer engagement."
            }
            image={"image/ui.png"}
            btn={"Get start"}
          />
    
          <Service_abouts
            heading={"What is UI/UX Design?"}
            text={
              "UI/UX design focuses on creating visually appealing, user-friendly, and interactive digital experiences using modern design tools like Figma, Adobe XD, Sketch, Framer, Photoshop, and Illustrator. UI (User Interface) design enhances the visual look and feel of applications, while UX (User Experience) design improves usability, accessibility, and overall user satisfaction."
            }
            image={"image/web-image.png"}
            title={"Transforming Ideas Into Powerful Digital Solutions"}
            subtext={
              "We create modern, scalable, and user-friendly applications with advanced technology and robust architecture that help businesses grow."
            }
          />
    
          <div className="why-chose">
            <div className="why-chose-heading">
              <h1>Why Choose Our UI/UX Design Services?</h1>
            </div>
            {serviceData.uiux.map((item, index) => (
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
                <h1>Our UI/UX Services</h1>
              </div>
    
              <div className="our_frontend_service_card_main">
                {serviceData.uiuxCard.map((item, index) => (
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
                html={"image/figma.png"}
                css={"image/dx.png"}
                javascript={"image/sketch.png"}
                react={"image/framer.png"}
                bootstrap={"image/iiiust.png"}
                nextjs={"image/ps.png"}
              />
            </div>
          </div>
    
          <Dev_process />
          <Cta />
        </>
  )
}
