import React from "react";
import Service_hero from "../../../component/Service_hero";
import { serviceData } from "../../../../data/serviceData";
import Technologies from "../../../slider/Technologies";
import { ImArrowRight2 } from "react-icons/im";
import Dev_process from "../../../component/Dev_process";
import Cta from "../../../component/Cta";
import Service_abouts from "../../../component/Service_abouts";
import Service_img_card from "../../../component/Service_img_card";
export default function AI_and_mL() {
  return (
    <>
      <Service_hero
        heading={"AI and ML"}
        text={
          "We provide intelligent AI and Machine Learning solutions to automate business processes, improve decision-making, and deliver smart digital experiences."
        }
        image={"image/ai_ml.png"}
        btn={"Get start"}
      />

      <Service_abouts
        heading={"What is AI and ML?"}
        text={
          "AI (Artificial Intelligence) and ML (Machine Learning) are technologies that enable systems to learn from data, automate tasks, analyze patterns, and make intelligent decisions without manual intervention."
        }
        image={"image/web-image.png"}
        title={"Transforming Ideas Into Powerful Digital Solutions"}
        subtext={
          "We create modern, scalable, and user-friendly applications with advanced technology and robust architecture that help businesses grow."
        }
      />

      <div className="why-chose">
        <div className="why-chose-heading">
          <h1>Why Choose Our AI and ML?</h1>
        </div>
        {serviceData.whyChooseAIML.map((item, index) => (
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
            <h1>Our AI and ML Services</h1>
          </div>

          <div className="our_frontend_service_card_main">
            {serviceData.aiMlServices.map((item, index) => (
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
          <h1>Technologies We Use in AI and ML </h1>
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
            html={"image/python.png"}
            css={"image/php.png"}
            javascript={"image/html.png"}
            react={"image/java.png"}
            bootstrap={"image/css.jpg"}
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
