import React from "react";
import CardAllImage from "../../component/CardAllImage";
import { product } from "../../../data/product";
import { ImArrowRight2 } from "react-icons/im";
import Dev_process from "../../component/Dev_process";
import Cta from "../../component/Cta";
import Technologies from "../../slider/Technologies";

export default function Website_bulder() {
  return (
    <>
      <CardAllImage
        image="image/wd.png"
        title1="Website Builder"
        text="We build smart and scalable Website Builder solutions that help businesses create, manage, and customize professional websites with ease. Our Website Builder platforms streamline website design, content management, SEO optimization, and user experience while providing modern, responsive, and high-performance website solutions."
      />

      <div className="overview">
        <div className="overview-in">
          <div className="overview-heading">
            <h1>OverView</h1>
          </div>
          <div className="overview-text">
            <p>
              Website Builder is a powerful platform that helps businesses and
              individuals create professional, responsive, and user-friendly
              websites without complex development processes. It simplifies
              website creation through customizable templates, drag-and-drop
              functionality, and easy content management features. Website
              builders allow users to design business websites, portfolios,
              eCommerce stores, blogs, and landing pages efficiently while
              reducing development time and cost. These platforms include
              features like SEO optimization, mobile responsiveness, analytics,
              hosting integration, and secure performance management for better
              online visibility and user experience. Businesses can manage
              website content, images, pages, and customer interactions through
              a centralized dashboard. Modern website builders are scalable,
              secure, and suitable for startups, small businesses, and
              enterprises. With advanced customization, automation, and
              integration capabilities, website builder solutions help
              businesses establish a strong digital presence and support
              long-term growth.
            </p>
          </div>
        </div>
      </div>

      <div className="business-automation">
        <div className="business-automation-in">
          <p>
            Business Automation helps companies automate and manage website
            operations efficiently through smart Website Builder solutions. It
            streamlines processes like website design, content management, page
            customization, SEO optimization, user management, analytics, and
            team collaboration to improve productivity, reduce manual work, and
            enhance overall website performance.
          </p>
        </div>
      </div>

      <div className="why-chose">
        <div className="why-chose-heading">
          <h1>Why Choose Our Website Builder Services?</h1>
        </div>
        {product.whywebService.map((item, index) => (
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
          <h1>Technologies We Use in Website Builder</h1>
        </div>
        {product.webtechuse.map((item, index) => (
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
            html={"image/java.png"}
            css={"image/python.png"}
            javascript={"image/mysql.png"}
            react={"image/html.png"}
            bootstrap={"image/reactjs.png"}
            nextjs={"image/css.jpg"}
          />
        </div>
      </div>

      <Dev_process />
      <Cta />
    </>
  );
}
