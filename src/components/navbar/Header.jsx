import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {appData} from "../../data/appData";



export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [disableHover, setDisableHover] = useState(false);

  useEffect(() => {
    setOpen(false);
    setDisableHover(false);
  }, [location]);

  return (
    <>
      <div className="fixe top-0 left-0 w-full z-50 bg-gray-200 shadow-4xl">
        <div className="contact">
          {appData.contact.map((item) => (
            <div key={item.id} className="contact-wrapper">
              <div className="left-section">
                <div className="item">
                  <MdOutlineEmail className="icon" />
                  <Link
                    to={`https://makil.google.com/mail/?view=cm&fs=1&to=${item.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.email}
                  </Link>
                </div>
                <div className="item">
                  <IoLocationSharp className="icon" />
                  <Link to="#">{item.address}</Link>
                </div>
              </div>
              <div className="right-section">
                <div className="item">
                  <FaWhatsapp className="icon" />
                  <Link
                    to={`https://wa.me/${item.mob}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 {item.mob}
                  </Link>
                </div>
                <div className="item">
                  <FaLinkedin className="icon" />
                  <Link
                    to={`https://www.linkedin.com/in/${item.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <nav className="navbar">
          <div className="navbar-container">
            <div className="menu-icon" onClick={() => setOpen(!open)}>
              ☰
            </div>
            <div className="logo">
              <img src="/public/image/comany_logo1.png" alt="logo" />
            </div>
            <div className={`nav-links ${open ? "show" : ""}`}>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <div
                className={`dropdown ${disableHover ? "no-hover" : ""}`}
                onMouseLeave={() => setDisableHover(false)}
              >
                <span>Company</span>
                <div className="dropdown-menu">
                  <ul>
                    {appData.CompanyIndustriesProduct.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={item.company_path}
                          onClick={() => {
                            setDisableHover(true);
                          }}
                        >
                          {item.company}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={`dropdown ${disableHover ? "no-hover" : ""}`}
                onMouseLeave={() => setDisableHover(false)}
              >
                <span>Service</span>
                <div className="dropdown-menu large">
                  <div className="grid">
                    {appData.menuproduct.map((item) => (
                      <div key={item.id}>
                        <p className="menu-title">{item.title}</p>
                        <ul>
                          {item.items.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                to={sub.path}
                                onClick={() => {
                                  setDisableHover(true);
                                }}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`dropdown ${disableHover ? "no-hover" : ""}`}
                onMouseLeave={() => setDisableHover(false)}
              >
                <span>Products</span>
                <div className="dropdown-menu">
                  <ul>
                    {appData.CompanyIndustriesProduct.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={item.product_path}
                          onClick={() => {
                            setDisableHover(true);
                          }}
                        >
                          {item.product}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={`dropdown ${disableHover ? "no-hover" : ""}`}
                onMouseLeave={() => setDisableHover(false)}
              >
                <span>Industries</span>
                <div className="dropdown-menu">
                  <ul>
                    {appData.CompanyIndustriesProduct.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={item.industries_path}
                          onClick={() => {
                            setDisableHover(true);
                          }}
                        >
                          {item.Industries}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <button className="quote-btn">Request Quote</button>
          </div>
        </nav>
      </div>
    </>
  );
}
