import React from "react";

export default function Service_hero({ heading, text, image,btn }) {
  return (
    <>
      <div className="service_hero">
        <div className="service_hero_content">
          <div className="service_hero_text">
            <h1>{heading}</h1>
            <p>{text}</p>

          </div>
          <div className="service_hero_image">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="service_hero_button">
            <button className='f-btn'>{btn}</button>

        </div>

      </div>
    </>
  );
}
