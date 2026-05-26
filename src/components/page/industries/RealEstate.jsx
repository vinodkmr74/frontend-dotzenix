import React, { useEffect } from "react";
import CardAllImage from "../../component/CardAllImage";
import { industries } from "../../../data/industries";
import Cta from "../../component/Cta";
import Aos from "aos";

export default function RealEstate() {
      useEffect(() => {
      Aos.init();
    }, []);
    
  return (
    <>
      <CardAllImage
        image="image/realstate.png"
        title="Real Estate"
        text={
          "Dotzenix Technologies provides smart and secure real estate software solutions for property businesses, brokers, builders, and real estate agencies."
        }
      />

      <div className="overview">
        <div className="overview-in">
          <div className="overview-heading">
            <h1>OverView</h1>
          </div>
          <div className="overview-text">
            <p>
              Real Estate solutions help property businesses manage property
              listings, customer interactions, sales, rentals, and business
              operations efficiently through smart digital systems. These
              solutions streamline processes such as property management, lead
              tracking, appointment scheduling, billing, document management,
              and communication to improve productivity and customer experience.
              Real Estate software automates daily business workflows, reduces
              manual work, and provides real-time access to property and
              customer data for better decision-making. Businesses can manage
              agents, clients, property details, reports, and transactions
              through a centralized platform. Modern real estate systems are
              secure, scalable, and suitable for real estate agencies, builders,
              brokers, and property management companies. With advanced
              automation, analytics, cloud integration, and real-time monitoring
              features, real estate solutions help organizations improve sales
              performance, customer engagement, and long-term business growth.
            </p>
          </div>
        </div>
      </div>

      <div className="our_frontend_service">
        <div className="our_fron_service_in">
          <div className="our_frontend_service_text">
            <h1> Our Services</h1>
          </div>

          <div className="our_frontend_service_card_main">
            {industries.manufacturing.map((item, index) => (
              <div className="our_frontend_service_card"
              data-aos="zoom-in"

              key={index}>
                <div className="img-icon"></div>

                <h1>{item.heading}</h1>
                <p>{item.text}</p>
                <img src={item.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Cta />
    </>
  );
}
