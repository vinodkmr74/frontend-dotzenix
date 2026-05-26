import React, { useEffect } from "react";
import CardAllImage from "../../component/CardAllImage";
import { industries } from "../../../data/industries";
import Cta from "../../component/Cta";
import Aos from "aos";

export default function ECommerce() {
      useEffect(() => {
      Aos.init();
    }, []);
  return (
    <>
      <CardAllImage
        image="image/e-commarce.png"
        title="ECommerce"
        text={
          "Dotzenix Technologies provides smart and secure eCommerce solutions for online stores, marketplaces, retailers, and digital businesses."
        }
      />

      <div className="overview">
        <div className="overview-in">
          <div className="overview-heading">
            <h1>OverView</h1>
          </div>
          <div className="overview-text">
            <p>
              eCommerce solutions help businesses create and manage online
              stores efficiently through smart digital platforms. These
              solutions streamline processes such as product management,
              inventory tracking, order processing, payment integration,
              customer management, and online sales to improve business growth
              and customer experience. eCommerce platforms automate daily
              operations, reduce manual work, and provide secure access to
              products, orders, and customer data for better business
              management. Businesses can manage catalogs, offers, transactions,
              shipping, analytics, and customer interactions through a
              centralized system. Modern eCommerce solutions are secure,
              scalable, and suitable for startups, retailers, wholesalers, and
              enterprise businesses. With advanced automation, SEO optimization,
              cloud integration, and real-time analytics features, eCommerce
              systems help organizations increase online sales, improve customer
              engagement, and support long-term digital growth.
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
            {industries.e_comcard.map((item, index) => (
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
