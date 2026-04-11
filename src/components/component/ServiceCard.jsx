import React, { useEffect, useState } from "react";
import { appData } from "../../data/appData";
export default function ServiceCard() {
  return (
    <div className="services-container">
      <div className="services-wrapper">
        {appData.servicesCard.map((item) => (
          <div key={item.id} className="service-card">
            <div className="service-image-box">
              <img
                src={item.iconpath}
                alt={item.title}
                className="service-image"
              />
            </div>
            <h1 className="service-title">{item.title}</h1>
            {item.subitems.map((sub) => (
              <h3 key={sub.id} className="service-subitem">
                {sub.subitem}
              </h3>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
