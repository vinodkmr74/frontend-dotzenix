import React, { useState, useEffect } from "react";
import { appData } from "../../data/appData";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

export default function Scale() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const data = appData.missionvission;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setItemsPerView(1);
      } else if (window.innerWidth <= 768) {
        setItemsPerView(1);
      } // else {
      //   setItemsPerView(3);
      // }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < data.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(data.length - itemsPerView);
    }
  };

  return (
    <>
      <div className="mv-slider">
        <div
          className="mv-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {data.map((item) => (
            <div className="mv-card" key={item.id}>
              <h1>{item.heading}</h1>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <p>{item.subtext}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mv-buttons">
        <button className="mv-btn-pre" onClick={prevSlide}>
          <GrPrevious />
        </button>
        <button className="mv-btn-next" onClick={nextSlide}>
          <GrNext />
        </button>
      </div>
    </>
  );
}
