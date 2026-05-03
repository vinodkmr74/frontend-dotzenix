import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Team() {
  const teamData = [
    {
      id: 1,
      name: "Vinod Kumar",
      role: "Python Developer",
      about:
        "Experienced Python developer with expertise in FastAPI, MySQL, and backend systems.",
      img: "image/vinod.png",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "Frontend Developer",
      about: "Skilled in React, JavaScript, and modern UI design.",
      img: "image/vinod.png",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Vinod Kumar",
      role: "Python Developer",
      about:
        "Experienced Python developer with expertise in FastAPI, MySQL, and backend systems.",
      img: "image/vinod.png",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      id: 4,
      name: "Rahul Sharma",
      role: "Frontend Developer",
      about: "Skilled in React, JavaScript, and modern UI design.",
      img: "image/vinod.png",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <div className="team-main">
      <div>
        {" "}
        <h1 className="meet">Meet Our Team</h1>
      </div>
      <div className="team-in">
        {teamData.map((item) => (
          <div key={item.id} className="team-card">
            <div className="team-img">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="team-text">
              <h1>{item.name}</h1>
              <p className="role">{item.role}</p>
              <p className="about">{item.about}</p>
            </div>

            <div className="social-icons-container">
              <div className="social-icons-container">
                <div className="social-icons">
                  <p>Contact</p>

                  <div className="social-icons-links">
                    <Link to ={item.social.facebook}>
                      <FaFacebookF />
                    </Link>
                    <Link to={item.social.instagram}>
                      <FaInstagram />
                   </Link>
                    <Link to={item.social.twitter}>
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
