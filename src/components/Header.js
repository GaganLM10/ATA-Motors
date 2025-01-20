import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaCalendarAlt, FaFacebook, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed-top">
      {/* Top bar */}
      <div className="custom-bg text-white py-2 d-none d-lg-flex">
        <div className="container d-flex justify-content-between align-items-center">
          {/* For large screens */}
          <div className="d-flex align-items-center">
            <FaPhoneAlt /> Your Contact Number &nbsp;
            <FaMapMarkerAlt /> 58 Mary Street, Balsall Heath, Birmingham, England, B12 9ST
          </div>
          <div className="d-flex align-items-center">
            <FaCalendarAlt /> MON - SUN 09:30AM - 06:00PM &nbsp;
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <FaFacebook />
            </a>
            &nbsp;
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="/images/logo1.png"
              alt="Logo"
              className="me-2"
              style={{ width: "100px", height: "100px" }}
            />
            <span className="fw-bold">ATA MOTORS</span>
          </a>

          {/* Navbar toggler (hamburger) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar and contact info collapsible section */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item fw-bold">
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item fw-bold">
                <a className="nav-link" href="/about">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item dropdown fw-bold">
                <a
                  className="nav-link dropdown-toggle"
                  href="/used-cars"
                  id="usedCarsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  USED CARS
                </a>
                <ul className="dropdown-menu" aria-labelledby="usedCarsDropdown">
                  <li>
                    <a className="dropdown-item" href="/sedan">
                      Sedans
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/suv">
                      SUVs
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown fw-bold">
                <a
                  className="nav-link dropdown-toggle"
                  href="/services"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li>
                    <a className="dropdown-item" href="/finance_form">
                      Finance Form
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/finance_calculator">
                      Finance Calculator
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item fw-bold">
                <a className="nav-link" href="/reviews">
                  REVIEWS
                </a>
              </li>
              <li className="nav-item fw-bold">
                <a className="nav-link" href="/finance">
                  APPLY FINANCE
                </a>
              </li>
              <li className="nav-item fw-bold">
                <a className="nav-link" href="/contact">
                  CONTACT US
                </a>
              </li>
            </ul>

            {/* Contact info for mobile view inside the navbar */}
            <div className="navbar-nav ms-auto d-lg-none">
              <div className="d-flex flex-column align-items-start text-white py-2">
                <p>
                  <FaPhoneAlt /> Your Contact Number
                </p>
                <p>
                  <FaMapMarkerAlt /> 58 Mary Street, Balsall Heath, Birmingham, England, B12 9ST
                </p>
                <p>
                  <FaCalendarAlt /> MON - SUN 09:30AM - 06:00PM
                </p>
                <div>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <FaFacebook />
                  </a>
                  &nbsp;
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

            {/* Flag */}
            <div>
              <img
                src="/images/uk_flag.gif"
                alt="UK Flag"
                style={{
                  width: "80px",
                  height: "80px",
                  animation: "wave 1s infinite",
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;