import React from "react";
import Service_hero from "../../../component/Service_hero";
import { serviceData } from "../../../../data/serviceData";
import Technologies from "../../../slider/Technologies";
import { ImArrowRight2 } from "react-icons/im";
import Dev_process from "../../../component/Dev_process";
import Cta from "../../../component/Cta";
import Service_abouts from "../../../component/Service_abouts";

export default function Android_app() {
  return (

      <>
          <Service_hero
            heading={"Mobile App Development"}
            text={
              "Our mobile app solutions focus on scalability, security, responsiveness, and smooth user experiences to help businesses grow digitally."
            }
            image={"image/mob.png"}
            btn={"Get start"}
          />
    
          <Service_abouts
            heading={"What is Mobile App Development?"}
            text={
              "Mobile App Development is the process of designing, developing, and maintaining applications for Android smartphones and tablets. It focuses on creating fast, user-friendly, secure, and responsive mobile solutions that improve customer engagement and business growth."
            }
            image={"image/web-image.png"}
            title={"Transforming Ideas Into Powerful Digital Solutions"}
            subtext={
              "We create modern, scalable, and user-friendly applications with advanced technology and robust architecture that help businesses grow."
            }
          />
    
          <div className="why-chose">
            <div className="why-chose-heading">
              <h1>Why Choose Our Mobile App Development?</h1>
            </div>
            {serviceData.mobApp.map((item, index) => (
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
                <h1>Our Mobile App Development Services</h1>
              </div>
    
              <div className="our_frontend_service_card_main">
                {serviceData.mobservicecard.map((item, index) => (
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
              <h1>Technologies We Use in Android App Development</h1>
            </div>
            {serviceData.usetech.map((item, index) => (
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
                html={"image/java.png"}
                css={"image/python.png"}
                javascript={"image/mysql.png"}
                react={"image/firebase.png"}
                bootstrap={"image/reactjs.png"}
                nextjs={"image/flutter.png"}
              />
            </div>
          </div>
    
          <Dev_process />
          <Cta />
        </>

  )
}
