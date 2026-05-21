import React from "react";
import CardAllImage from "../../component/CardAllImage";
import { industries } from "../../../data/industries";
import Cta from "../../component/Cta";
export default function Education() {
  return (
    <>
      <CardAllImage
        image="image/education.avif"
        title="Education"
        text={
          "Dotzenix Technologies provides smart and secure education software solutions for schools, colleges, coaching institutes, and online learning platforms."
        }
      />

      <div className="overview">
        <div className="overview-in">
          <div className="overview-heading">
            <h1>OverView</h1>
          </div>
          <div className="overview-text">
            <p>
              Education solutions help schools, colleges, coaching institutes,
              and e-learning platforms manage academic operations efficiently
              through smart digital systems. These solutions streamline
              processes such as student management, online classes, attendance
              tracking, fee management, examinations, and communication to
              improve learning experiences and administrative efficiency.
              Education software automates daily academic tasks, reduces manual
              work, and provides secure access to student and staff information
              for better management and decision-making. Institutions can manage
              courses, assignments, reports, schedules, and learning activities
              through a centralized platform. Modern education systems are
              secure, scalable, and suitable for schools, universities, coaching
              centers, and online learning platforms. With advanced automation,
              analytics, cloud integration, and real-time monitoring features,
              education solutions help organizations improve learning quality,
              increase productivity, and support long-term educational growth.
            </p>
          </div>
        </div>
      </div>

      <div className="our_frontend_service">
        <div className="our_fron_service_in">
          <div className="our_frontend_service_text">
            <h1> Our Education Services</h1>
          </div>

          <div className="our_frontend_service_card_main">
            {industries.educationthcard.map((item, index) => (
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
