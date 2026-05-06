import React from "react";
import CardAllImage from "../../component/CardAllImage";
import { blogsData } from "../../../data/blogsData";
import { Link } from "react-router-dom";
import Media_contact from "../../component/Media_contact";

export default function Blogs() {
  return (
    <>
      <CardAllImage image="/image/vector.avif" title="Blogs" />

      <div className="blog-main">
        <div className="blog-in">
     
          
          {blogsData.blogs.map((item) => (

          <div key={item} className="blog-card">
            <div className="image">
              <img src={item.Image} alt="" />
            </div>

            <div className="blog-name-date">
              <h3>{item.Company}</h3>
              <p>{item.data}</p>
            </div>
            <div className="blog-title-description">
              <h2>{item.title}</h2>
              <p>
               {item.description}
              </p>

            <div className="read-more">
            <Link to={item.readmore}>Read More →</Link>
            </div>
            </div>
          </div>
          ))}

        </div>
      </div>
      
      <Media_contact />
    </>
  );
}
