import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config";
import { FaArrowRight } from "react-icons/fa6";

export default function ServiceCloud({
  bgimage,
  image,
  desc,
  title,
  buttonlink,
}) {
  return (
    <div className="cloud-main">
      <div className="cloud-g">
        <div className="cloud-content">
          <div
            className="c-bg"
            style={{ backgroundImage: `url(${bgimage})` }}
          ></div>
          <div className="ovcole"></div>
          <div className="imgcloud">
            <img src={`${BASE_URL}${image}`} alt={title} />
            <h1>{title}</h1>
            <p>{desc}</p>
            <Link to={buttonlink} className="cloud-btn">
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
