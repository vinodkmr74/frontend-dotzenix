import React, { useRef, useState } from "react";
import { appData } from "../../data/appData";

export default function Scale() {
  const data = appData.missionvission;
  return (
    <>
      <div className="main-mv-card">
        {data
          .filter((item) => item.id === 1)
          .map((item) => (
            <div className="mv-card" key={item.id}>
              <h1>{item.heading}</h1>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <p>{item.subtext}</p>
            </div>
          ))}

        {data
          .filter((item) => item.id === 2)
          .map((item) => (
            <div className="mv-card" key={item.id}>
              <h1>{item.heading}</h1>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <p>{item.subtext}</p>
            </div>
          ))}

        {data
          .filter((item) => item.id === 3)
          .map((item) => (
            <div className="mv-card" key={item.id}>
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
