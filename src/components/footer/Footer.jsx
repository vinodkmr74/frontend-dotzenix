import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../config";
import { Link } from "react-router-dom";

export default function Footer() {
  const [companyIndustryData, setCompanyIndustryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    handleFooter();
  }, []);

  const handleFooter = async () => {
    try {
      const [companyIndustryRes, productRes, serviceRes] = await Promise.all([
        fetch(`${BASE_URL}/api/menucompany_industries/`),
        fetch(`${BASE_URL}/api/menuproduct/`),
        fetch(`${BASE_URL}/api/menuservice/`),
      ]);

      const [companyIndustry, product, service] = await Promise.all([
        companyIndustryRes.json(),
        productRes.json(),
        serviceRes.json(),
      ]);

      setCompanyIndustryData(companyIndustry);
      setProductData(product);
      setServiceData(service);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
     <div className="flex w-full justify-center p-4 mt-2 bg-gray-100">
  <div className="w-[95%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 p-4">

    {/* COMPANY */}
    <div>
      <h2 className="font-bold text-base md:text-lg mb-3">Company</h2>
      <ul className="space-y-2">
        {companyIndustryData.map((item, index) => (
          <li key={index}>
            <Link
              to={item.company_path}
              className="text-sm md:text-base font-semibold text-[#213349] hover:text-[#4c8b81]"
            >
              {item.company}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* INDUSTRIES */}
    <div>
      <h2 className="font-bold text-base md:text-lg mb-3">Industries</h2>
      <ul className="space-y-2">
        {companyIndustryData.map((item, index) => (
          <li key={index}>
            <a
              href={item.industries_path}
              className="text-sm md:text-base font-semibold text-[#213349] hover:text-[#4c8b81]"
            >
              {item.industries}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* SERVICES */}
    {serviceData
      .filter((item) => [60, 61, 65].includes(item.id))
      .map((item) => (
        <div key={item.id}>
          <p className="font-bold text-base md:text-lg mb-3">{item.title}</p>
          <ul className="space-y-2">
            {item.items.map((sub) => (
              <li key={sub.name}>
                <Link
                  to={sub.path}
                  className="text-sm md:text-base font-semibold text-[#213349] hover:text-[#4c8b81]"
                >
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

    {/* PRODUCTS */}
    <div>
      <p className="font-bold text-base md:text-lg mb-3">Products</p>
      <ul className="space-y-2">
        {productData.map((item) => (
          <li key={item.id}>
            <Link
              to={item.product_path}
              className="text-sm md:text-base font-semibold text-[#123a6c] hover:text-[#4c8b81]"
            >
              {item.product}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* CONTACT */}
    <div className=" p-4 ">
      <h1 className="font-bold text-base md:text-lg mb-3">Contacts</h1>

      <div className="flex flex-col gap-2 text-sm md:text-base text-[#123a6c]">
        <p><span className="font-semibold">Email:</span> dotzenix96@gmail.com</p>
        <p><span className="font-semibold">Phone:</span> +91 6206030752</p>
        <p><span className="font-semibold">Address:</span> Noida, Uttar Pradesh</p>
      </div>
    </div>

  </div>
</div>

{/* COPYRIGHT */}
<div className="text-center p-4 font-semibold text-sm md:text-base text-[#484a4b]">
  ©Copyright 2026 DotZenix-Technologies All Rights Reserved
</div>
    </>
  );
}
