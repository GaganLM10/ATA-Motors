import { FaQuoteLeft, FaStar } from "react-icons/fa";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Testimonials = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <section className={isDarkMode ? "bg-dark text-white py-5" : "bg-light text-dark py-5"}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4">What Our Customers Say</h2>
        <div className="row">
          {/* Testimonial Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100 border-0 bg-secondary text-light">
              <div className="card-body d-flex flex-column text-center">
                <FaQuoteLeft className="text-warning mb-3" size={24} />
                <p className="card-text mb-4" style={{ minHeight: "90px" }}>
                  "ATA Motors exceeded my expectations! Their customer service
                  was exceptional, and I drove away in the perfect car for my
                  needs. Thank you for making it so seamless."
                </p>
                <div className="mt-auto d-flex justify-content-center align-items-center">
                  <img
                    src="/images/default-profile.webp"
                    alt="Customer"
                    className="rounded-circle me-3"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <div>
                    <h6 className="mb-0">Alex Carter</h6>
                    <small className="text-info">Verified Buyer</small>
                    <div className="text-warning">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100 border-0 bg-secondary text-light">
              <div className="card-body d-flex flex-column text-center">
                <FaQuoteLeft className="text-warning mb-3" size={24} />
                <p className="card-text mb-4" style={{ minHeight: "90px" }}>
                  "I was blown away by the wide selection of vehicles and the
                  helpfulness of the staff. They made sure every detail was
                  covered. Highly recommended!"
                </p>
                <div className="mt-auto d-flex justify-content-center align-items-center">
                  <img
                    src="/images/default-profile.webp"
                    alt="Customer"
                    className="rounded-circle me-3"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <div>
                    <h6 className="mb-0">Sophia Williams</h6>
                    <small className="text-info">Verified Buyer</small>
                    <div className="text-warning">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100 border-0 bg-secondary text-light">
              <div className="card-body d-flex flex-column text-center">
                <FaQuoteLeft className="text-warning mb-3" size={24} />
                <p className="card-text mb-4" style={{ minHeight: "90px" }}>
                  "Buying my car from ATA Motors was the best decision! The
                  process was smooth, and the staff ensured I was confident in
                  my purchase. 5-star experience!"
                </p>
                <div className="mt-auto d-flex justify-content-center align-items-center">
                  <img
                    src="/images/default-profile.webp"
                    alt="Customer"
                    className="rounded-circle me-3"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <div>
                    <h6 className="mb-0">Michael Brown</h6>
                    <small className="text-info">Verified Buyer</small>
                    <div className="text-warning">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;