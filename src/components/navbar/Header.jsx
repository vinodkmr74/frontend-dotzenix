import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { BASE_URL } from "../../config";

export default function Header() {
  const [contact, setContact] = useState([]);
  const [menucompanyIndustry, setMenuCompanyIndustry] = useState([]);
  const [menuproduct, setMenuProduct] = useState([]);
  const [menuservice, setMenuService] = useState([]);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();
  const [disableHover, setDisableHover] = useState(false);
  

  useEffect(() => {
    handleContact();
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setOpen(false);
    setDisableHover(false);
  }, [location]);

  const handleContact = async () => {
    try {
      const [contactRes, companyIndustryRes, productRes, serviceRes] =
        await Promise.all([
          fetch(`${BASE_URL}/api/getcontact/`),
          fetch(`${BASE_URL}/api/menucompany_industries/`),
          fetch(`${BASE_URL}/api/menuproduct/`),
          fetch(`${BASE_URL}/api/menuservice/`),
        ]);

      const [contact, menucompanyIndustry, menuproduct, menuservice] =
        await Promise.all([
          contactRes.json(),
          companyIndustryRes.json(),
          productRes.json(),
          serviceRes.json(),
        ]);

      setContact(contact);
      setMenuCompanyIndustry(menucompanyIndustry);
      setMenuProduct(menuproduct);
      setMenuService(menuservice);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>

    <div className="fixe top-0 left-0 w-full z-50 bg-gray-200 shadow-4xl" >

     <div className="flex md:w-full w-full md:h-12 bg-[#cfdff1] justify-center">
        {contact.map((item) => (
          <div
            key={item.id}
            className="md:flex justify-between w-[90%] items-center"
          >
            {/* LEFT SIDE */}
            <div className="flex gap-4 items-center text-[#123a6c] text-sm font-semibold">
              <div className="flex gap-2 items-center">
                <MdOutlineEmail className="text-[16px]" />
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${item.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.email}
                </a>
              </div>

              <div className="flex gap-2 items-center">
                <IoLocationSharp className="text-[16px]" />
                <p>{item.address}</p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex gap-4 items-center text-[#123a6c] text-sm font-semibold ">
              <div className="flex gap-2 items-center">
                <FaWhatsapp className="text-[16px]" />
                <a
                  href={`https://wa.me/${item.mob}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4c8b81]"
                >
                  +91 {item.mob}
                </a>
              </div>

              <div className="flex gap-2 items-center">
                <FaLinkedin className="text-[16px]" />
                <a
                  href={`https://www.linkedin.com/in/${item.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav className="flex w-full justify-center bg-gray-200 shadow-4xl">
        <div className="flex relative justify-between w-[90%]">
          <IoReorderThree
            onClick={() => setOpen(!open)}
            className="block text-[#123a6c] text-4xl cursor-pointer md:hidden"
          />

          <div className="flex items-center">
            <img
              src="/public/image/comany_logo1.png"
              alt=""
              className="w-52 h-12 p-1 rounded-xl cursor-pointer"
            />
          </div>

          <div
            className={`${open ? "block" : "hidden"} absolute md:static top-full -left-5 z-90 bg-gray-200 md:flex p-3  gap-8 text-[18px] font-semibold rounded`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-[#4c8b81] ${
                  isActive ? "text-[#4c8b81]" : "text-[#123a6c]"
                }`
              }
            >
              Home
            </NavLink>

            <div className="relative group">
              <span
                onClick={() =>
                  setOpenMenu(openMenu === "company" ? null : "company")
                }
                className="cursor-pointer text-[#123a6c] hover:text-[#4c8b81]"
              >
                Company
              </span>

              <div
                className={`
                 ${openMenu === "company" ? "block" : "hidden"}
                 ${!disableHover ? "md:group-hover:block" : ""}
                   md:absolute
                    md:top-full
                    md:left-0
                   bg-white
                     shadow-lg
                     rounded-lg
                      p-4
                      w-40
                      text-sm
                     `}
              >
                <ul
                  onClick={() => {
                    setOpenMenu(null);
                    setOpen(false);
                    setDisableHover(true);
                  }}
                  className="space-y-2"
                >
                  {menucompanyIndustry.map((item) => (
                    <li
                      className="cursor-pointer text-[#123a6c] hover:bg-[#f0f4f5] hover:text-[#4c8b81] rounded hover:translate-x-2 duration-200 transition-all"
                      key={item.id}
                    >
                      <Link to={item.company_path}>{item.company}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group">
              <span
                onClick={() =>
                  setOpenMenu(openMenu === "service" ? null : "service")
                }
                className="cursor-pointer text-[#123a6c] hover:text-[#4c8b81]"
              >
                Service
              </span>

              <div
                className={`
                ${openMenu === "service" ? "block" : "hidden"}
               ${!disableHover ? "md:group-hover:block" : ""}  
                md:absolute md:top-full md:-left-50
               bg-white shadow-lg rounded-lg p-6 w-180 text-sm
                 `}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {menuservice.map((item) => (
                    <div key={item.id}>
                      <p className="text-[18px]">{item.title}</p>

                      <ul
                        className="space-y-1"
                        onClick={() => {
                          setOpenMenu(null);
                          setOpen(false);
                          setDisableHover(true);
                        }}
                      >
                        {item.items.map((sub) => (
                          <li
                            key={sub.name}
                            className=" cursor-pointer text-[#123a6c] hover:bg-[#f0f4f5] hover:text-[#4c8b81] rounded hover:translate-x-2 duration-200 transition-all"
                          >
                            <Link to={sub.path}>{sub.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <span
                onClick={() =>
                  setOpenMenu(openMenu === "products" ? null : "products")
                }
                className="cursor-pointer text-[#123a6c] hover:text-[#4c8b81]"
              >
                Products
              </span>
              <div
                className={` ${openMenu === "products" ? "block" : "hidden"}
                 ${!disableHover ? "md:group-hover:block" : ""}                 
                  md:absolute md:top-full md:left-0
                bg-white shadow-lg rounded-lg p-4 w-48 text-sm
                `}
              >
                <ul
                  className="space-y-2"
                  onClick={() => {
                    setOpenMenu(null);
                    setOpen(false);
                    setDisableHover(true);
                  }}
                >
                  {menuproduct.map((item) => (
                    <li
                      key={item.id}
                      className="cursor-pointer text-[#123a6c] hover:bg-[#f0f4f5] hover:text-[#4c8b81] rounded hover:translate-x-2 duration-200 transition-all"
                    >
                      <Link to={item.product_path}>{item.product}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group">
              <span
                onClick={() =>
                  setOpenMenu(openMenu === "industries" ? null : "industries")
                }
                className="cursor-pointer text-[#123a6c] hover:text-[#4c8b81]"
              >
                Industries
              </span>
              <div
                className={`
                   ${openMenu === "industries" ? "block" : "hidden"}
                      ${!disableHover ? "md:group-hover:block" : ""}  
                    md:absolute md:top-full md:left-0
                  bg-white shadow-lg rounded-lg p-4 w-48 text-sm
                         `}
              >
                <ul
                  className="space-y-2"
                  onClick={() => {
                    setOpenMenu(null);
                    setOpen(false);
                    setDisableHover(true);
                  }}
                >
                  {menucompanyIndustry.map((item) => (
                    <li
                      key={item.id}
                      className="cursor-pointer text-[#123a6c] hover:bg-[#f0f4f5] hover:text-[#4c8b81] rounded hover:translate-x-2 duration-200 transition-all"
                    >
                      <Link to={item.industries_path}>{item.industries}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className=" flex items-center">
            <button className="bg-[#4c8b81] hover:bg-[#123a6c] text-white text-sm font-semibold px-3  h-10 cursor-pointer rounded-xl">
              Request Quote
            </button>
          </div>
        </div>
      </nav>
    </div>
 
    </>
  );
}
