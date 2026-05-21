import React from "react";
import CardAllImage from "../../component/CardAllImage";
import { industries } from "../../../data/industries";
import Cta from "../../component/Cta";
export default function Healthcare() {
  return (
    <>
      <CardAllImage
        image="image/new-hospital3.png"
        title="Healthcare "
        text={
          "Smart and secure healthcare software solutions for hospitals,clinics, and medical businesses."
        }
      />

      <div className="overview">
        <div className="overview-in">
          <div className="overview-heading">
            <h1>OverView</h1>
          </div>
          <div className="overview-text">
            <p>
              Healthcare solutions help hospitals, clinics, and medical
              organizations manage healthcare operations efficiently through
              smart digital systems. These solutions streamline processes such
              as patient management, appointment scheduling, billing, medical
              records, pharmacy management, and doctor coordination to improve
              healthcare services and operational efficiency. Healthcare
              software automates daily tasks, reduces manual work, and provides
              secure access to patient data for better decision-making and
              patient care. Businesses and healthcare providers can manage
              reports, staff activities, communication, and healthcare workflows
              through a centralized platform. Modern healthcare systems are
              secure, scalable, and suitable for hospitals, clinics, diagnostic
              centers, and healthcare startups. With advanced automation,
              analytics, cloud integration, and real-time monitoring features,
              healthcare solutions help organizations improve patient
              experience, increase productivity, and support long-term
              healthcare growth.
            </p>
          </div>
        </div>
      </div>

      <div className="our_frontend_service">
        <div className="our_fron_service_in">
          <div className="our_frontend_service_text">
            <h1> Our Healthcare Services</h1>
          </div>

          <div className="our_frontend_service_card_main">
            {industries.healthcard.map((item, index) => (
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
