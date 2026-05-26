import React from "react";
import Service_hero from "../../../component/Service_hero";
import { serviceData } from "../../../../data/serviceData";
import Technologies from "../../../slider/Technologies";
import { ImArrowRight2 } from "react-icons/im";
import Dev_process from "../../../component/Dev_process";
import Cta from "../../../component/Cta";
import Service_abouts from "../../../component/Service_abouts";
import Service_img_card from "../../../component/Service_img_card";

export default function OTT_appd_evelopment() {
  return (
    <>
      <Service_hero
        heading={"OTT App Development"}
        text={
          "We develop secure and high-performance OTT streaming applications with seamless video playback and modern user experience."
        }
        image={"image/ott6.png"}
        btn={"Get start"}
      />

      <Service_abouts
        heading={"What is OTT App Development?"}
        text={
          "OTT App Development is the process of designing and developing streaming applications that deliver video, audio, and live content directly to users over the internet across mobile, web, and smart devices. We build high-performance OTT streaming applications with modern UI design, seamless video streaming, secure architecture, and multi-device compatibility to help businesses grow their digital streaming platforms."
        }
        image={"image/web-image.png"}
        title={"Transforming Ideas Into Powerful Digital Solutions"}
        subtext={
          "We create modern, scalable, and user-friendly applications with advanced technology and robust architecture that help businesses grow."
        }
      />

      <div className="why-chose">
        <div className="why-chose-heading">
          <h1>Why Choose Our OTT App Development Services?</h1>
        </div>
        {serviceData.whyottService.map((item, index) => (
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
            <h1>Our OTT App Developmen Services</h1>
          </div>

          <div className="our_frontend_service_card_main">
            {serviceData.ottservicecard.map((item, index) => (
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
          <h1>Technologies We Use in OTT App Development</h1>
        </div>
        {serviceData.ottusetech.map((item, index) => (
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
            html={"image/flutter.png"}
            css={"image/python.png"}
            javascript={"image/mysql.png"}
            react={"image/firebase.png"}
            bootstrap={"image/node.png"}
            nextjs={"image/reactjs.png"}
          />
        </div>
      </div>

      <Dev_process />
      <Service_img_card />
      <Cta />
    </>
  );
}
