import React, { use } from "react";
import { useState, useEffect } from "react";
import { appData } from "../../data/appData";

export default function Scale() {
  return (
    <>
      {appData.missionvission.map((item) => (
        <div key={item.id} className="mv-card">
          <div className="mv-heading">
            <h1>{item.heading}</h1>
          </div>
          <div className="mv-image-box">
            <img src={item.image} alt="" />
          </div>
          <div className="mv-content">
            <h1 className="mv-title">{item.title}</h1>
            <div className="mv-text">
              <p>{item.subtext}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
