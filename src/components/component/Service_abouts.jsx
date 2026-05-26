import React, { useEffect } from "react";
import { serviceData } from "../../data/serviceData";
import Aos from "aos";

export default function Service_abouts({ heading, text, image,title,subtext }) {
      useEffect(() => {
      Aos.init();
    }, []);
    
  return (
    <>
      <div className="service_about">
        <div className="service_about_in">
          <div className="service_about_text">
            <h1>{heading}</h1>
            <p>{text}</p>
          </div>
          <div className="service_about_img">
            <div className="service_web_img"
            data-aos="zoom-in"
            >
              <img src={image} alt="" />
            </div>
            <div className="service_groth_text">
              <h1>{title}</h1>
              <p>{subtext}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
