import React from "react";
import Service_hero from "../../../component/Service_hero";
import { serviceData } from "../../../../data/serviceData";
import Technologies from "../../../slider/Technologies";
import { ImArrowRight2 } from "react-icons/im";
import Dev_process from "../../../component/Dev_process";
import Cta from "../../../component/Cta";
import Service_abouts from "../../../component/Service_abouts";
import Service_img_card from "../../../component/Service_img_card";

export default function IOS_app() {
  return (
    <>
      <Service_hero
        heading={"iOS App Development"}
        text={
          "We build secure, high-performance, and user-friendly iOS applications with modern design and seamless functionality."
        }
        image={"image/ios.png"}
        btn={"Get start"}
      />

      <Service_abouts
        heading={"What is UI/UX Design?"}
        text={
          "iOS App Development is the process of designing, developing, and maintaining applications for Apple devices like iPhone and iPad using modern technologies and user-friendly interfaces. We create high-performance and user-friendly iOS applications with modern UI design, seamless functionality, and secure architecture. Our custom iOS app solutions help businesses improve customer engagement, enhance user experience, and accelerate digital growth."
        }
        image={"image/web-image.png"}
        title={"Transforming Ideas Into Powerful Digital Solutions"}
        subtext={
          "We create modern, scalable, and user-friendly applications with advanced technology and robust architecture that help businesses grow."
        }
      />

      <div className="why-chose">
        <div className="why-chose-heading">
          <h1>Why Choose Our iOS App Development Services?</h1>
        </div>
        {serviceData.whyiosService.map((item, index) => (
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
            <h1>Our iOS App Development Services</h1>
          </div>

          <div className="our_frontend_service_card_main">
            {serviceData.iosservicecard.map((item, index) => (
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
          <h1>Technologies We Use in iOS App Development</h1>
        </div>
        {serviceData.iosusetech.map((item, index) => (
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
            html={"image/swift.png"}
            css={"image/python.png"}
            javascript={"image/mysql.png"}
            react={"image/firebase.png"}
            bootstrap={"image/uikit.png"}
            nextjs={"image/apple.png"}
          />
        </div>
      </div>

      <Dev_process />
      <Service_img_card />
      <Cta />
    </>
  );
}
