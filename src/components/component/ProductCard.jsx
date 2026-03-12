import React from "react";

export default function ProductCard() {
  return (
    <div className=" bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition duration-300 p-6 text-center">
      
      {/* Image */}
      <img
        className="w-50 h-30 mx-auto mb-4"
        src="/image/crm.png"
        alt="CRM"
      />

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        CRM
      </h2>

      {/* Link */}
      <a
        href="#"
        className="text-blue-600 font-medium hover:underline"
      >
        Learn More →
      </a>

    </div>
  );
}