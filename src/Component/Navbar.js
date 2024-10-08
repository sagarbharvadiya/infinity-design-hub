import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import footerData from "../Data/footerData.json"; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const services = footerData.services; // Get services from JSON data

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <nav className="py-4 px-10 relative z-10">
        <div className="mx-auto flex justify-between items-center source-code-pro">
          <div className="font-bold text-xl" data-aos="fade-right">
            <Link to="/">
              <img src="/images/infinity.png" alt="logo" className="logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex space-x-8 gap-4 uppercase items-center font-bold text-center"
            data-aos="fade-up"
          >
            {["Home", "About", "Services", "Portfolio", "Blog"].map((item, index) => (
              <div
                key={index}
                className={
                  item === "Services"
                    ? "dropdown relative"
                    : "relative arimo-bold text-[14px] tracking-[2px]"
                }
              >
                {item === "Home" ? (
                  <Link
                    className="nav-link no-underline arimo-bold text-[14px] tracking-[2px]"
                    to="/"
                  >
                    Home
                    <span className="menu-item_dots"></span>
                  </Link>
                ) : item === "Services" ? (
                  <>
                    <Link
                      className="nav-link relative dropdown-toggle no-underline arimo-bold !text-[14px] tracking-[2px]"
                      to="#!"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                      <span className="menu-item_dots"></span>
                      <div className="dropdown-menu absolute transition-[0.4s] bg-transparent">
                        <div className="capitalize !p-7 bg-white mt-4">
                          {services.map((service, index) => (
                            <Link
                              key={index}
                              className="dropdown-item text-[#232323] bg-white my-1 relative text-[16px] font-medium tracking-[1px] hover:!text-[#ec008c]"
                              to={`/${service.link}`}
                            >
                              {service.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </>
                ) : (
                  <Link
                    className="nav-link no-underline arimo-bold text-[14px] tracking-[2px]"
                    to={`/${item.toLowerCase()}`}
                  >
                    {item}
                    <span className="menu-item_dots"></span>
                  </Link>
                )}
              </div>
            ))}
            {/* Contact Us Button */}
          
            <Link
              to="/contact"
              className="inline-block px-8 sm:px-10 lg:px-[20px] hover:bg-custom-btn text-[16px]  text-center font-[400] bg-[#393939] text-white py-1 rounded-full tracking-wide transition duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 pt-4 bg-black text-white">
            {["Home", "About", "Portfolio", "Blog"].map((item) => (
              <div key={item} className="relative">
                <Link
                  className="hover:text-[#ec008c] uppercase pr-7 pl-3"
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  <span className="menu-item_dots"></span>
                </Link>
              </div>
            ))}
            <div className="dropdown relative">
              <button
                className="nav-link dropdown-toggle no-underline"
                onClick={() => setIsOpen(!isOpen)}
              >
                Services
                <span className="menu-item_dots"></span>
              </button>
              {isOpen && (
                <div className="dropdown-menu capitalize bg-black text-white">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      className="dropdown-item text-[#232323] bg-white hover:text-[#ec008c] relative text-[14px] tracking-[2px]"
                      to={`/${service.link}`}
                    >
                      {service.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Mobile Contact Us Button */}
            <Link
              to="/contact"
              className="inline-block px-8 sm:px-10 lg:px-[20px] hover:bg-custom-btn text-[16px]  text-center font-[400] bg-[#393939] text-white py-1 rounded-full tracking-wide transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
