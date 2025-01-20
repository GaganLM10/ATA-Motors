import React from "react";
import { FaCar, FaFlag, FaHandshake, FaShieldAlt } from "react-icons/fa";

const Introduction = () => {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container text-center">
        {/* Title Section */}
        <h1 className="text-light fw-bold mb-4">
          ATA MOTORS LTD
        </h1>
        <p className="text-muted fst-italic">
          Excellence in Japanese and local car imports, tailored for the UK market.
        </p>

        {/* Introduction Text */}
        <div className="text-start mt-4">
          <p className="fs-5">
            At <span className="text-warning">ATA MOTORS LTD</span>, we specialize in importing high-quality Japanese and locally sourced cars. 
            Our vehicles are acquired directly from trusted manufacturer auctions in Japan, ensuring genuine certified mileage for every car.
          </p>
          <p className="fs-5">
            We understand that purchasing a car is a significant investment. As a proud member of the 
            <span className="text-warning"> London Chamber of Commerce & Industry</span>, we are committed to delivering a seamless and trustworthy 
            experience. Our accreditations make us one of the most reliable motor trade businesses in Europe.
          </p>
          <p className="fs-5">
            Visit our showroom for part exchange, insurance, and financing options in collaboration 
            with reputable UK financial institutions.
          </p>
        </div>

        {/* Features Section */}
        <div className="row mt-5">
          <div className="col-12 col-md-3 mb-4">
            <FaCar className="text-warning display-4 mb-3" />
            <h5>Certified Mileage</h5>
            <p className="text-muted">Guaranteed mileage for every imported vehicle.</p>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <FaFlag className="text-primary display-4 mb-3" />
            <h5>UK Accredited</h5>
            <p className="text-muted">Proud member of the London Chamber of Commerce.</p>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <FaHandshake className="text-success display-4 mb-3" />
            <h5>Trusted Partners</h5>
            <p className="text-muted">Collaborating with reputable finance companies.</p>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <FaShieldAlt className="text-danger display-4 mb-3" />
            <h5>Secure Transactions</h5>
            <p className="text-muted">Providing safe and reliable car purchase options.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;