import React, { useEffect, useState } from "react";
import { MdOutlineAddTask } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FcMindMap } from "react-icons/fc";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { appData } from "../../data/appData";

export default function Certified() {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    appData.Satisfied.forEach((item) => {
      startCounter(item.id, item.number);
    });
  }, []); 

  const startCounter = (id, target) => {
    let current = 0;
    const interval = setInterval(() => {
      current++;

      setCounts((prev) => ({
        ...prev,
        [id]: current,
      }));

      if (current >= target) {
        clearInterval(interval);
      }
    }, 30);
  };

  return (
   <div className="certified-section">
  <div className="certified-container">
    {appData.Satisfied.map((item) => (
      <div key={item.id} className="certified-item">
        <div className="certified-card">
          {item.id == 5 && <MdOutlineAddTask className="icon" />}
          {item.id == 6 && <PiBuildingOfficeLight className="icon" />}
          {item.id == 7 && <GiTrophyCup className="icon" />}
          {item.id == 8 && <FaRegCircleCheck className="icon" />}
          {item.id == 9 && <FcMindMap className="icon" />}
          <h1 className="title">{item.text}</h1>
          <h1 className="count">
            {counts[item.id] || 0}+
          </h1>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}
