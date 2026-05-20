import React from "react";
import CardAllImage from "../../component/CardAllImage";
import { product } from "../../../data/product";
import { ImArrowRight2 } from "react-icons/im";
import Dev_process from "../../component/Dev_process";
import Cta from "../../component/Cta";

export default function Hrm() {
  return (
    <>
      <CardAllImage
        image="image/a.png"
        title1="HRM"
        text="We build smart and scalable HRM solutions that help businesses manage employees, automate HR workflows, and improve workforce productivity. Our HRM systems streamline recruitment, payroll, attendance, and employee management while providing real-time insights for better decision-making."
      />

      <div className="overview">
        <div className="overview-in">
          <div className="overview-heading">
            <h1>OverView</h1>
          </div>
          <div className="overview-text">
            <p>
              HRM (Human Resource Management) is a powerful software solution
              that helps businesses manage employee information, HR operations,
              and workforce activities efficiently in one centralized system. It
              streamlines processes such as recruitment, attendance tracking,
              payroll management, leave management, performance evaluation, and
              employee communication to improve productivity and organizational
              efficiency. HRM systems automate daily HR tasks, reduce manual
              work, and provide real-time access to employee data for better
              decision-making. Businesses can monitor workforce performance,
              manage employee records, track attendance, and generate detailed
              HR reports through a single platform. HRM software also improves
              collaboration between employees and HR teams by providing secure
              and organized access to important information. Modern HRM
              solutions are secure, scalable, and suitable for startups, small
              businesses, and large enterprises. With advanced automation,
              analytics, and integration features, HRM systems help
              organizations improve employee management, increase operational
              efficiency, and support long-term business growth.
            </p>
          </div>
        </div>
      </div>

      <div className="business-automation">
        <div className="business-automation-in">
          <p>
            Business Automation helps companies automate and manage HR
            operations efficiently through smart HRM solutions. It streamlines
            processes like employee management, attendance tracking, payroll
            processing, recruitment, leave management, reporting, and team
            collaboration to improve productivity, reduce manual work, and
            enhance overall workforce efficiency.
          </p>
        </div>
      </div>

      <div className="why-chose">
        <div className="why-chose-heading">
          <h1>Why Choose Our HRM Services?</h1>
        </div>
        {product.whyhrmService.map((item, index) => (
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
        {product.faqhrmService.map((item, index) => (
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
