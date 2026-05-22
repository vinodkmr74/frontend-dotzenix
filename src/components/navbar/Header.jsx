import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { appData } from "../../data/appData";
import Logo from "../component/Logo";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [disableHover, setDisableHover] = useState(false);
  const navigate = useNavigate();

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
                <div className="emailadd">
 <div className="item">
                  <MdOutlineEmail className="icon" />
                  <Link
                   to={`mailto:${item.email}`}>
                    {item.email}
                  </Link>
                </div>
                <div className="item">
                  <IoLocationSharp className="icon" />
                  <Link to="#">{item.address}</Link>
                </div>

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
                      <li
                        key={item.id}
                        onClick={() => {
                          setDisableHover(true);
                          navigate(item.company_path);
                        }}
                      >
                        <Link to={item.company_path}>{item.company}</Link>
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
                            <li
                              key={sub.name}
                              onClick={() => {
                                setDisableHover(true);
                                navigate(sub.path);
                              }}
                            >
                              <Link to={sub.path}>{sub.name}</Link>
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
                      <li
                        key={item.id}
                        onClick={() => {
                          setDisableHover(true);
                          navigate(item.product_path);
                        }}
                      >
                        <Link to={item.product_path}>{item.product}</Link>
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
                      <li
                        key={item.id}
                        onClick={() => {
                          setDisableHover(true);
                          navigate(item.industries_path);
                        }}
                      >
                        <Link to={item.industries_path}>{item.Industries}</Link>
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
