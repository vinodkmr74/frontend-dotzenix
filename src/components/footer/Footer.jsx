import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../config";
import { Link } from "react-router-dom";
import { appData } from "../../data/appData";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

export default function Footer() {
  return (
    <>
      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-grid1">
            {/* COMPANY */}
            <div className="comp">
              <h2 className="footer-heading">Company</h2>
              <ul className="footer-list">
                {appData.company.map((item, index) => (
                  <li key={index}>
                    <Link to={item.company_path} className="footer-link">
                      {item.company}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* INDUSTRIES */}
            <div className="comp">
              <h2 className="footer-heading">Industries</h2>
              <ul className="footer-list">
                {appData.Industries.map((item, index) => (
                  <li key={index}>
                    <a href={item.industries_path} className="footer-link">
                      {item.Industries}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* PRODUCTS */}
            <div className="comp">
              <p className="footer-heading">Products</p>
              <ul className="footer-list">
                {appData.Product.map((item) => (
                  <li key={item.id}>
                    <Link to={item.product_path} className="footer-link">
                      {item.product}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            {/* <div className="comp12"> */}
            <div className="comp">
              {appData.menuproduct
                .filter((item) => [1].includes(item.id))
                .map((item) => (
                  <div key={item.id}>
                    <p className="footer-heading">{item.title}</p>
                    <ul className="footer-list">
                      {item.items.map((sub) => (
                        <li key={sub.name}>
                          <Link to={sub.path} className="footer-link">
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
            {/* </div> */}
            <div className="comp">
              {appData.menuproduct
                .filter((item) => [2].includes(item.id))
                .map((item) => (
                  <div key={item.id}>
                    <p className="footer-heading">{item.title}</p>
                    <ul className="footer-list">
                      {item.items.map((sub) => (
                        <li key={sub.name}>
                          <Link to={sub.path} className="footer-link">
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
            <div className="comp">
              {appData.menuproduct
                .filter((item) => [6].includes(item.id))
                .map((item) => (
                  <div key={item.id}>
                    <p className="footer-heading">{item.title}</p>
                    <ul className="footer-list">
                      {item.items.map((sub) => (
                        <li key={sub.name}>
                          <Link to={sub.path} className="footer-link">
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>

          {/* CONTACT */}

          <div className="footer-contact">
            <h1>Contacts</h1>

            <div className="footer-contact-text">
              <div className="footer-contact-text-in">
                <AiOutlineMail id="iconfcon1" />
                <p>dotzenixtechnologies@gmail.com</p>
              </div>
              <div className="footer-contact-text-in">
                <MdPhone id="iconfcon2" />
                <p>+91 6206030752</p>
              </div>
              <div className="footer-contact-text-in">
                <GrLocation id="iconfcon3" />
                <p>Sector-62, Noida, Uttar Pradesh, India</p>
              </div>
              <div className="map-box">
                <iframe
                  title="IThum Tower Location"
                  src="https://www.google.com/maps?q=IThum+Tower+Sector+62+Noida&output=embed"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-copy">
        ©Copyright 2026 DotZenix-Technologies All Rights Reserved
      </div>
    </>
  );
}
