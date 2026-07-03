import React, { useRef, useState } from "react";
import Media_contact from "../component/Media_contact";

export default function Request_quote() {
  const form = useRef();

  const [massage, setMassage] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {};

    if (!formData.fullname)
      newError.fullname = "Full Name is required";

    if (!formData.email)
      newError.email = "Email is required";

    if (!formData.phone)
      newError.phone = "Phone Number is required";

    if (!formData.address)
      newError.address = "Address is required";

    setError(newError);

    if (Object.keys(newError).length === 0) {
      console.log(formData);

      setMassage(true);


  setTimeout(() => {
    setMassage(false);
  }, 3000); // 3 seconds


      setFormData({
        fullname: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    }
  };

  return (
    <>
      <div className="request-quote">
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
          {error.fullname && (
            <p style={{ color: "red" }}>
              {error.fullname}
            </p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && (
            <p style={{ color: "red" }}>
              {error.email}
            </p>
          )}

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {error.phone && (
            <p style={{ color: "red" }}>
              {error.phone}
            </p>
          )}

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          {error.address && (
            <p style={{ color: "red" }}>
              {error.address}
            </p>
          )}

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />

          <div className="sub-btn">
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      {massage && (
        <div className="massage">
          Request Quote Submitted Successfully
        </div>
      )}

      <Media_contact />
    </>
  );
}