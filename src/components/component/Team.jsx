import React, { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Aos from "aos";


export default function Team() {
  const teamData = [
    {
      id: 1,
      name: "Vinod Kumar",
      role: "Python, java Developer",
      about:
        "Experienced Python,java developer with expertise in FastAPI, SpringBoot MySQL, and backend systems.",
      img: "image/vinod.png",
      social: {
        email: "vinodstm74@gmail.com",
        Whatsapp: "6206030752",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Rajan kumar",
      role: " Flutter, Dart React Native Developer",
      about: "Skilled in Flutter, Dart React Native and modern App Development.",
      img: "image/vinod.png",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },

    {
      id: 3,
      name: "Avinash kumar",
      role: "FullStack Developer",
      about:
        "Skilled in JavaScript, React, Nextjs Nodejs and modern UI design.",
      img: "image/vinod.png",
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
  ];

      useEffect(() => {
      Aos.init();
    }, []);
    

  return (
    <div className="team-main">
      <div>
        {" "}
        <h1 className="meet">Meet Our Team</h1>
      </div>
      <div className="team-in"
      >
        {teamData.map((item) => (
          <div key={item.id} className="team-card"
                data-aos="zoom-in"

          >
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
                    <Link to={item.social.email}>
                      <MdOutlineEmail className="icon" />
                    </Link>

                    <Link to={item.social.Whatsapp}>
                      <FaWhatsapp className="icon" />
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
