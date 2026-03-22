import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../config";
import { Link } from "react-router-dom";

export default function ProductCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    try {
      const request = await fetch(`${BASE_URL}/api/productcard/`);
      const response = await request.json();
      setData(response);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 md:gap-6 w-full mx-auto">
      
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition duration-300 p-4 text-center"
        >
          <img
            className="w-40 h-20 mx-auto mb-4 rounded-2xl"
            src={`${BASE_URL}${item.image}`}
            alt={item.title}
          />

          <h2 className="text-md md:xl font-semibold text-gray-800 mb-2">
            {item.title}
          </h2>

          <Link 
            to={item.path}
            className="text-blue-600 font-medium hover:underline hover:text-blue-800"
          >
            Learn More →
          </Link>
        </div>
      ))}

    </div>
  );
}