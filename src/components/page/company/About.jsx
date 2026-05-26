import React from "react";
import CardAllImage from "../../component/CardAllImage";
import Certified from "../../component/Certified";
import Mission_vision from "../../component/Mission_vision";
import Team from "../../component/Team";
import Cta from "../../component/Cta";
import Service_img_card from "../../component/Service_img_card";

const About = () => {
  return (
    <>
      <div>
        <CardAllImage image="image/vector.avif" title="About Us" />
      </div>

      <div className="Who-are-we">
        <div className="Who-are-we-in">
          <div>
            <h1>Who are we?</h1>
            <p>
              Dotzenix Technologies, established in 2026, is a rapidly growing
              IT company providing reliable web and digital solutions to clients
              across multiple industries. Our reputation is built on innovation,
              strong technical expertise, and a commitment to excellence and
              professionalism. We build modern, scalable, and high-performance
              applications that support business growth.
            </p>
            <p>
              We offer services including design and development, software
              development, AI development, and custom software solutions. Using
              modern technologies, we deliver secure, scalable, and
              user-friendly digital experiences that drive business growth.
            </p>
            <p>
              With continuous improvement and a customer-focused approach,
              Dotzenix Technologies is committed to helping businesses achieve
              digital transformation and sustainable growth. Our goal is to
              build long-term partnerships by delivering reliable solutions,
              maintaining transparency, and providing consistent support.
            </p>
          </div>
          <div className="Who-are-we-image">
            <h1>Custom Web Development Process</h1>
            <img src="image/ffff.png" alt="" />
          </div>
        </div>
      </div>

      <Mission_vision />
      <Certified />
      <Team />
      <Service_img_card />
      <Cta />
    </>
  );
};

export default About;
