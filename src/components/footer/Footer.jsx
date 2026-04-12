import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../config";
import { Link } from "react-router-dom";
import { appData } from "../../data/appData";

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
                {appData.CompanyIndustriesProduct.map((item, index) => (
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
                {appData.CompanyIndustriesProduct.map((item, index) => (
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
                {appData.CompanyIndustriesProduct.map((item) => (
                  <li key={item.id}>
                    <Link to={item.product_path} className="footer-link">
                      {item.product}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            {appData.menuproduct
              .filter((item) => [1, 2, 6].includes(item.id))
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

          {/* CONTACT */}
          <div className="footer-contact">
            <h1>Contacts</h1>

            <div className="footer-contact-text">
              <p>
                <span>Email:</span> dotzenix96@gmail.com
              </p>
              <p>
                <span>Phone:</span> +91 6206030752
              </p>
              <p>
                <span>Address:</span> Noida, Uttar Pradesh
              </p>
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
