import React, { useContext, useEffect, useState } from "react";
import MapComponent from "./MapComponent";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const ContactUs = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".fixed-top");
    if (header) {
      // Update the height dynamically
      setHeaderHeight(header.offsetHeight);
    }

    // Update on window resize
    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section
      className={
        isDarkMode ? "bg-dark text-white py-5" : "bg-light text-dark py-5"
      }
      style={{ marginTop: `${headerHeight}px` }}
    >
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row g-4">
          {/* Contact Details */}
          <div className="col-md-6">
            <h4>Get in Touch</h4>
            <p>If you have any questions, feel free to reach out to us!</p>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FaPhoneAlt className="me-2" /> +1 123 456 7890
              </li>
              <li className="mb-3">
                <FaEnvelope className="me-2" /> support@atamotors.com
              </li>
              <li>
                <FaMapMarkerAlt className="me-2" /> 58 Mary Street, Balsall Heath, Birmingham, England, B12 9ST
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <MapComponent />
          </div>

          {/* Contact Form */}
          <div className="col-md-6 mx-auto">
            <h4>Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
