import React from "react";
import CardAllImage from "../../component/CardAllImage";
import { product } from "../../../data/product";
import { ImArrowRight2 } from "react-icons/im";
import Dev_process from "../../component/Dev_process";
import Cta from "../../component/Cta";
export default function Erp() {
  return (
    <>
      <CardAllImage
        image="image/erp3.png"
        title1="ERP"
        text="We build smart and scalable ERP solutions that help businesses manage operations, automate workflows, and improve overall productivity. Our ERP systems streamline business processes, enhance team collaboration, and provide real-time insights for better decision-making."
      />

      <div className="overview">
        <div className="overview-in">
          <div className="overview-heading">
            <h1>OverView</h1>
          </div>
          <div className="overview-text">
            <p>
              ERP (Enterprise Resource Planning) is a powerful software solution
              that helps businesses manage and integrate core business processes
              efficiently in one centralized system. It streamlines operations
              such as finance, inventory, human resources, sales, procurement,
              and project management to improve productivity and business
              performance. ERP systems automate daily workflows, reduce manual
              tasks, and provide real-time access to important business data for
              better decision-making. Businesses can monitor operations, track
              resources, manage customer and employee information, and generate
              detailed reports through a single platform. ERP software also
              improves collaboration between departments by allowing teams to
              access shared data in real time. Modern ERP solutions are secure,
              scalable, and suitable for startups, small businesses, and large
              enterprises. With advanced automation, analytics, and integration
              features, ERP systems help organizations optimize operations,
              reduce costs, and achieve long-term business growth.
            </p>
          </div>
        </div>
      </div>

      <div className="business-automation">
        <div className="business-automation-in">
          <p>
            Business Automation helps companies automate and manage core
            business operations efficiently through smart ERP solutions. It
            streamlines processes like inventory management, finance, HR, sales,
            reporting, procurement, and team collaboration to improve
            productivity, reduce manual work, and enhance overall business
            efficiency.
          </p>
        </div>
      </div>

      <div className="why-chose">
        <div className="why-chose-heading">
          <h1>Why Choose Our CRM Services?</h1>
        </div>
        {product.whyerpService.map((item, index) => (
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
        {product.faqerpSection.map((item, index) => (
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
