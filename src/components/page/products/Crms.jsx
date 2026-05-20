import React from "react";
import CardAllImage from "../../component/CardAllImage";
import { product } from "../../../data/product";
import { ImArrowRight2 } from "react-icons/im";
import Dev_process from "../../component/Dev_process";
import Cta from "../../component/Cta";

export default function Crms() {
  return (
    <>
      <CardAllImage
        image="image/crmbg4.png"
        title1="CRM"
        text="We build smart and scalable CRM solutions that help businesses manage customers, automate workflows, and improve sales performance."
      />

      <div className="overview">
        <div className="overview-in">
          <div className="overview-heading">
            <h1>OverView</h1>
          </div>
          <div className="overview-text">
            <p>
              CRM (Customer Relationship Management) is a powerful software
              solution that helps businesses manage customer data, sales
              activities, and communication processes efficiently. It
              centralizes customer information, making it easier to track leads,
              manage interactions, and improve customer relationships. CRM
              systems automate daily business operations such as follow-ups,
              task management, and sales tracking to increase productivity and
              efficiency. Businesses can monitor customer behavior, analyze
              sales performance, and generate detailed reports for better
              decision-making. CRM software also improves team collaboration by
              allowing departments to access shared customer data in real time.
              Modern CRM solutions provide secure, scalable, and user-friendly
              platforms suitable for startups, small businesses, and
              enterprises. With advanced analytics, automation, and integration
              features, CRM systems help businesses improve customer
              satisfaction and drive long-term growth.
            </p>
          </div>
        </div>
      </div>

      <div className="business-automation">
        <div className="business-automation-in">
          <p>
            Business Automation helps companies automate daily operations,
            improve workflow management, and increase overall productivity
            through smart digital solutions. It streamlines processes like
            customer management, sales tracking, reporting, task management, and
            team coordination to save time and improve business efficiency.
          </p>
        </div>
      </div>

      <div className="why-chose">
        <div className="why-chose-heading">
          <h1>Why Choose Our CRM Services?</h1>
        </div>
        {product.crmservicecard.map((item, index) => (
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

      <div className="why-chose">
        <div className="why-chose-heading">
          <h1>Frequently Asked Questions</h1>
        </div>
        {product.faqcrmService.map((item, index) => (
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

      <Dev_process />
      <Cta />
    </>
  );
}
