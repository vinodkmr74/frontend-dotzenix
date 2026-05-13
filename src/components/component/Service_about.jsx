import React from "react";
import { serviceData } from "../../data/serviceData";

export default function Service_about({ heading, text, image, }) {
  return (
    <>
      <div className="service_about">
        <div className="service_about_in">
          <div className="service_about_text">
            <h1>{heading}</h1>
            <p>{text}</p>
          </div>
          {/* <div className="service_img">
            <img src={image} alt="" />
          </div> */}
        </div>
      </div>




    </>
  );
}
