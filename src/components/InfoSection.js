import React, { useContext } from "react";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const InfoSection = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <section className={isDarkMode ? "bg-dark text-white py-5" : "bg-light text-dark py-5"}>
      <div className="container">
        <div className="row">
          {/* First Box */}
          <div className="col-md-6 mb-4">
            <div className="card text-white bg-primary h-100">
              <div className="card-body text-center">
                <FaSearch className="mb-3" style={{ fontSize: "3rem" }} />
                <h5 className="card-title">Are You looking for a car?</h5>
                <p className="card-text">
                  Our cars are delivered fully-registered with all requirements
                  completed. We’ll deliver your car wherever you are.
                </p>
                <a href="#showroom" className="btn btn-danger">
                  <FaSearch className="me-2" />
                  Showroom
                </a>
              </div>
            </div>
          </div>

          {/* Second Box */}
          <div className="col-md-6 mb-4">
            <div className="card text-white bg-danger h-100">
              <div className="card-body text-center">
                <FaPhoneAlt className="mb-3" style={{ fontSize: "3rem" }} />
                <h5 className="card-title">Do You want to sell a car?</h5>
                <p className="card-text">
                  What’s your car worth? Receive the absolute best value for
                  your trade-in vehicle. We even handle all paperwork. Schedule
                  your appointment today!
                </p>
                <a href="#callnow" className="btn btn-dark">
                  <FaPhoneAlt className="me-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;