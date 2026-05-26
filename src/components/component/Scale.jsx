import React, { useEffect, useRef, useState } from "react";
import { appData } from "../../data/appData";
import Aos from "aos";

export default function Scale() {
  const data = appData.missionvission;
      useEffect(() => {
      Aos.init();
    }, []);
  return (
    <>
      <div className="main-mv-card"
      
      >
        {data
          .filter((item) => item.id === 1)
          .map((item) => (
            <div className="mv-card"
            data-aos="zoom-in"
            key={item.id}>
              <h1>{item.heading}</h1>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <p>{item.subtext}</p>
            </div>
          ))}

        {data
          .filter((item) => item.id === 2)
          .map((item) => (
            <div className="mv-card"
            data-aos="zoom-in"
            key={item.id}>
              <h1>{item.heading}</h1>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <p>{item.subtext}</p>
            </div>
          ))}

        {data
          .filter((item) => item.id === 3)
          .map((item) => (
            <div className="mv-card"
            data-aos="zoom-in"
            key={item.id}>
              <h1>{item.heading}</h1>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <p>{item.subtext}</p>
            </div>
          ))}
      </div>
    </>
  );
}
