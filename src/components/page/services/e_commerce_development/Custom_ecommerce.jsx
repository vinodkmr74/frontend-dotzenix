import React from "react";
import Service_hero from "../../../component/Service_hero";
import { serviceData } from "../../../../data/serviceData";
import Technologies from "../../../slider/Technologies";
import { ImArrowRight2 } from "react-icons/im";
import Dev_process from "../../../component/Dev_process";
import Cta from "../../../component/Cta";
import Service_abouts from "../../../component/Service_abouts";
import Service_img_card from "../../../component/Service_img_card";
export default function Custom_ecommerce() {
  return (
    <>
          <Service_hero
            heading={"ECommerce Development"}
            text={
              "We build secure, scalable, and user-friendly eCommerce solutions using platforms like Shopify, PrestaShop, WooCommerce, and custom technologies to help businesses grow online sales and customer engagement."
            }
            image={"image/ecommerce-website.png"}
            btn={"Get start"}
          />
    
          <Service_abouts
            heading={"What is ECommerce Development? "}
            text={
              "ECommerce Development is the process of designing, developing, and managing online stores and digital shopping platforms that allow businesses to sell products and services online. It includes secure payment integration, product management, responsive design, and user-friendly shopping experiences to improve online sales and customer engagement."
            }
            image={"image/web-image.png"}
            title={"Transforming Ideas Into Powerful Digital Solutions"}
            subtext={
              "We create modern, scalable, and user-friendly applications with advanced technology and robust architecture that help businesses grow."
            }
          />
    
          <div className="why-chose">
            <div className="why-chose-heading">
              <h1>Why Choose Our ECommerce Development Services?</h1>
            </div>
            {serviceData.whyecomService.map((item, index) => (
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
                <h1>Custom ECommerce Development</h1>
              </div>
    
              <div className="our_frontend_service_card_main">
                {serviceData.ecomservicecard.map((item, index) => (
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
              <h1>Technologies We Use in ECommerce Development</h1>
            </div>
            {serviceData.ecomusetech.map((item, index) => (
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
                html={"image/html.png"}
                css={"image/python.png"}
                javascript={"image/css.jpg"}
                react={"image/php.png"}
                bootstrap={"image/node.png"}
                nextjs={"image/reactjs.png"}
              />
            </div>
          </div>
    
          <Dev_process />
          <Service_img_card />
          <Cta />
        </>  )
}
