import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../config";
import { Link } from "react-router-dom";
import { appData } from "../../data/appData";
import Aos from "aos";

export default function ProductCard() {
      useEffect(() => {
      Aos.init();
    }, []);
    
  return (
    <div className="product-grid">
      {appData.productCard.map((item) => (
        <div key={item.id} className="product-card"
         data-aos="zoom-in"
        >
          <img className="card-image" src={item.image} alt={item.title} />
          <h2 className="card-title">{item.title}</h2>
          <Link to={item.path} className="card-link">
            Learn More →
          </Link>
        </div>
      ))}
    </div>
  );
}
