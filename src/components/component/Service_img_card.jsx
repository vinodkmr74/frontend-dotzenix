import React, { useEffect } from "react";
import { appData } from "../../data/appData";
import { GiCheckMark } from "react-icons/gi";
import "aos/dist/aos.css";
import Aos from "aos";


export default function Service_img_card() {

  useEffect(() => {
  Aos.init();
}, []);

  return (
    <>
      <div className="service-img-card">
        <div className="service-img-card-in">
          <h1>Our offerings include web development, digital transformation, and software solutions for modern business needs.</h1>
          <p>We provide a wide range of services including web development, digital solutions, mobile app development, and software testing to help businesses grow digitally.</p>

          {appData.seviceImgCard.map((item, index) => (
            <div key={index} className="service-img-card-item"
            data-aos="zoom-in"
            
            >
              <img src={item.img} alt="" />
               <h1>{item.web}</h1>
              <div className="service-img-card-item-text">
               
                  {item.webitems.map((webItem) => (
                  <p  key={webItem.id}>
                    <GiCheckMark  id="cheak"/>
                   {webItem.subitem || webItem.item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
