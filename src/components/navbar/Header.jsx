import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { appData } from "../../data/appData";
import Logo from "../component/Logo";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [disableHover, setDisableHover] = useState(false);

  useEffect(() => {
    setOpen(false);
    setDisableHover(false);
    handleScroll();
  }, [location]);

  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 100) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="navbar-contact">
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
              {open ? "✖" : "☰"}
            </div>

            <div>
              <Logo />
            </div>
            <div className={`nav-links ${open ? "show" : ""}`}>
              <div
                className={`dropdown ${disableHover ? "no-hover" : ""}`}
                onMouseLeave={() => setDisableHover(false)}
              >
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <div className="underline"></div>
              </div>

              <div
                className={`dropdown ${disableHover ? "no-hover" : ""}`}
                onMouseLeave={() => setDisableHover(false)}
              >
                <span className="nav-link">
                  Company
                  <IoIosArrowDown className="arroup" />
                </span>

                <div className="dropdown-menu">
                  <ul>
                    {appData.company.map((item) => (
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
                <div className="underline"></div>
              </div>

              <div
                className={`dropdown ${disableHover ? "no-hover" : ""}`}
                onMouseLeave={() => setDisableHover(false)}
              >
                <span className="nav-link">
                  Service
                  <IoIosArrowDown className="arroup" />
                </span>
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
                <div className="underline"></div>
              </div>
              <div
                className={`dropdown ${disableHover ? "no-hover" : ""}`}
                onMouseLeave={() => setDisableHover(false)}
              >
                <span className="nav-link">
                  Products
                  <IoIosArrowDown className="arroup" />
                </span>
                <div className="dropdown-menu">
                  <ul>
                    {appData.Product.map((item) => (
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
                <div className="underline"></div>
              </div>
              <div
                className={`dropdown ${disableHover ? "no-hover" : ""}`}
                onMouseLeave={() => setDisableHover(false)}
              >
                <span className="nav-link">
                  Industries
                  <IoIosArrowDown className="arroup" />
                </span>
                <div className="dropdown-menu">
                  <ul>
                    {appData.Industries.map((item) => (
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
                <div className="underline"></div>
              </div>
            </div>
            <button className="quote-btn">Request Quote</button>
          </div>
        </nav>
      </div>
    </>
  );
}
