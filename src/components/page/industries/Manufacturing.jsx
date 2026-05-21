import React from "react";
import CardAllImage from "../../component/CardAllImage";
import { industries } from "../../../data/industries";
import Cta from "../../component/Cta";
export default function Manufacturing() {
  return (
    <>
      <CardAllImage
        image="image/manufacturing.avif"
        title="Manufacturing"
        text={
          "Dotzenix Technologies provides smart and secure manufacturing software solutions for factories, industries, warehouses, and production businesses."
        }
      />

      <div className="overview">
        <div className="overview-in">
          <div className="overview-heading">
            <h1>OverView</h1>
          </div>
          <div className="overview-text">
            <p>
              Manufacturing solutions help industries manage production
              processes, inventory, supply chain operations, and workforce
              activities efficiently through smart digital systems. These
              solutions streamline processes such as production planning, raw
              material tracking, quality control, warehouse management, billing,
              and reporting to improve operational efficiency and productivity.
              Manufacturing software automates daily industrial workflows,
              reduces manual work, and provides real-time access to production
              and inventory data for better decision-making. Businesses can
              manage machines, orders, suppliers, employees, and production
              reports through a centralized platform. Modern manufacturing
              systems are secure, scalable, and suitable for small factories,
              medium industries, and large manufacturing enterprises. With
              advanced automation, analytics, cloud integration, and real-time
              monitoring features, manufacturing solutions help organizations
              reduce operational costs, improve production efficiency, and
              support long-term industrial growth.
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
      <Cta />
    </>
  );
}
