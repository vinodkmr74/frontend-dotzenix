import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../config";

export default function ServiceCard() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/ourservicecard/`);
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.log("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="flex w-full p-2 bg-white justify-center items-center mt-4">
      <div className="flex gap-4 w-[90%] flex-wrap justify-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="group flex flex-col md:w-[255px] w-full space-y-4 p-2 bg-white hover:bg-[#022d62] hover:text-white justify-center items-center mt-4 border border-gray-400 rounded-md shadow-xl transition duration-300"
          >
            <di className="flex justify-center items-center">
               <img
              src={`${BASE_URL}${service.iconpath}`}
              alt={service.title}
              className="w-20 h-16 p-1 rounded-2xl cursor-pointer"
            />
            </di>
           

            <h1 className="text-[#022d62] group-hover:text-white font-bold text-[18px]">
              {service.title}
            </h1>

            {service.subitems.map((item) => (
              <h3 className=" text-[16px] font-medium mb-3"
              key={item.id}>{item.subitem}</h3>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
