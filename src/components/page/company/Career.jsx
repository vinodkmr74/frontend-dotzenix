import React, { useRef, useState } from "react";
import CardAllImage from "../../component/CardAllImage";
import { careersData } from "../../../data/careers";
import Media_content from "../../component/Media_contact";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../../config";

export default function Career() {
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();
  const [massage, setMassage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {

        setMassage(true);

        setTimeout(() => {
          setMassage(false);
        }, 5000);
      },

      (error) => {
        console.error("Failed to send email:", error);
      },
    );

    e.target.reset();
  };

  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    jobtitle: "",
    experience: "",
    resume_link: "",
    GitHub_link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // only 10 digits allow
    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "");
      if (onlyNumbers.length > 10) return;
      setFormData({
        ...formData,
        phone: onlyNumbers,
      });

      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
    // typing par error remove
    setError({
      ...error,
      [name]: "",
    });
  };

  const validateForm = () => {
    let newError = {};

    if (!formData.fullname.trim()) {
      newError.fullname = "Full Name is required";
    }
    if (!formData.email.trim()) {
      newError.email = "Email is required";
    }
    if (!formData.phone.trim()) {
      newError.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newError.phone = "Enter valid 10 digit number";
    }
    if (!formData.address.trim()) {
      newError.address = "Address is required";
    }
    if (!formData.gender.trim()) {
      newError.gender = "Gender is required";
    }
    if (!formData.jobtitle.trim()) {
      newError.jobtitle = "Job Title is required";
    }
    if (!formData.experience.trim()) {
      newError.experience = "Experience is required";
    }
    if (!formData.resume_link.trim()) {
      newError.resume_link = "Resume Link is required";
    }
    if (!formData.GitHub_link.trim()) {
      newError.GitHub_link = "GitHub Link is required";
    }
    setError(newError);
    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      // first error field ka name
      const firstError = Object.keys(errors)[0];
      // us field par scroll
      const element = document.getElementsByName(firstError)[0];
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        element.focus();
      }
      return;
    }

    sendEmail(e);

    setFormData(
      Object.fromEntries(Object.keys(formData).map((key) => [key, ""])),
    );
  };
  return (
    <>
      <CardAllImage image="/image/vector.avif" title="Careers" />
      <div className="career-main">
        {careersData.careerAbout.map((item, index) => (
          <div key={index} className="career-about">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="career-opportunities">
        <div className="career-opportunities-content">
          {careersData.careerjob.map((item, index) => (
            <div key={index} className="career-opportunities-header">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="card-job-box">
          {careersData.careerCard.map((item, index) => (
            <div key={index} className="job-card">
              <div className="job-card-header">
                <h2>{item.title}</h2>
                <p>
                  <strong>Post Date :</strong> {item.postDate}
                </p>
              </div>

              <div className="job-card-details">
                <div className="job-card-description">
                  <h1>Role:</h1>
                  <h1>Experience:</h1>
                  <h1>Requirement:</h1>
                  <h1>Description:</h1>
                </div>

                <div className="job-card-description">
                  <p>{item.role}</p>
                  <p>{item.experience}</p>
                  <p>{item.Requirement}</p>
                  <p>{item.description}</p>
                </div>
              </div>

              <div className="job-card-apply">
                <button onClick={() => setShowPopup(true)}>Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form">
            <div className="popup-header">
              <h2>Job Apply</h2>

              <span onClick={() => setShowPopup(false)}>✕</span>
            </div>

            <div className="form-content">
              <form
                className="application-form"
                ref={form}
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  value={formData.fullname}
                  onChange={handleChange}
                />

                {error.fullname ? (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {error.fullname}
                  </p>
                ) : null}

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address "
                  value={formData.email}
                  onChange={handleChange}
                />
                {error.email ? (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {error.email}
                  </p>
                ) : null}

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {error.phone ? (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {error.phone}
                  </p>
                ) : null}

                <input
                  type="text"
                  name="address"
                  placeholder="Address "
                  value={formData.address}
                  onChange={handleChange}
                />
                {error.address ? (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {error.address}
                  </p>
                ) : null}

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option id="select" value="">
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {error.gender ? (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {error.gender}
                  </p>
                ) : null}

                <input
                  type="text"
                  name="jobtitle"
                  placeholder="job title"
                  value={formData.jobtitle}
                  onChange={handleChange}
                />
                {error.jobtitle ? (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {error.jobtitle}
                  </p>
                ) : null}

                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option id="select" value="">
                    Select Experience
                  </option>
                  <option value="Fresher">Fresher</option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 Years">2 Years</option>
                  <option value="3 Years">3 Years</option>
                  <option value="4+ Years">4+ Years</option>
                </select>

                {error.experience ? (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {error.experience}
                  </p>
                ) : null}

                <input
                  type="text"
                  name="resume_link"
                  placeholder="Resume_link"
                  value={formData.resume_link}
                  onChange={handleChange}
                />
                {error.resume_link ? (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {error.resume_link}
                  </p>
                ) : null}

                <input
                  type="text"
                  name="GitHub_link"
                  placeholder="GitHub_link"
                  value={formData.GitHub_link}
                  onChange={handleChange}
                />
                {error.GitHub_link ? (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {error.GitHub_link}
                  </p>
                ) : null}

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                ></textarea>

                <div className="sub-btn">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {massage && (
        <div className="massage">Application Submitted Successfully</div>
      )}

      <Media_content />
    </>
  );
}
