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
        <div className="w-[96%] md:flex p-4 gap-6 border-t border-[#595a5a]">
          <div className="flex gap-6 ">
            <div>
              <h2 className="font-bold text-md mb-3  ">Company</h2>
              <ul className="space-y-1">
                {companyIndustryData.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.company_path}
                      className="font-semibold cursor-pointer text-[#213349] hover:bg-[#f0f4f5] hover:text-[#4c8b81] rounded"
                    >
                      {item.company}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <h2 className="font-bold text-md mb-3 ">Industries</h2>
              <ul className="space-y-1">
                {companyIndustryData.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.industries_path}
                      className="font-semibold cursor-pointer text-[#213349] hover:bg-[#f0f4f5] hover:text-[#4c8b81] rounded"
                    >
                      {item.industries}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:flex gap-6">
            {serviceData.filter((item) => [60,61,65].includes(item.id)).map((item) => (
              <div key={item.id}>
                <p className="text-md font-bold">{item.title}</p>

                <ul className="space-y-1">
                  {item.items.map((sub) => (
                    <li
                      key={sub.name}
                      className="font-semibold cursor-pointer text-[#213349] hover:bg-[#f0f4f5] hover:text-[#4c8b81] rounded "
                    >
                      <Link to={sub.path}>{sub.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="font-bold text-md mb-3">Products</p>
            <ul className="space-y-2">
              {productData.map((item) => (
                <li
                  key={item.id}
                  className="font-semibold cursor-pointer text-[#123a6c] hover:bg-[#f0f4f5] hover:text-[#4c8b81] rounded "
                >
                  <Link to={item.product_path}>{item.product}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-2">
            <div className="flex justify-center font-bold">
              <h1>Contacts</h1>
            </div>
            <div className="flex font-semibold md:gap-8 md:mt-4 cursor-pointer text-[#123a6c]">
            <ul className="space-y-4 ">
              <li>Email:</li>
              <li>Phone: </li>
              <li>Address: </li>
            </ul>
            <ul className="space-y-4">
              <li>dotzenix96@gmail.com</li>
              <li>+91 6206030752</li>
              <li>Noida Uttar Pradesh</li>
            </ul>
          </div>
          </div>
          
        </div>
      </div>

       <div className="flex mt-4 p-4 font-bold text-[#484a4b] justify-center">
            <p>©Copyright 2026 DotZenix-Technologies All Rights Reserved</p>
          </div>
    </>
  );
}
