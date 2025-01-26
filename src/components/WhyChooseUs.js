import { FaAward, FaHeadset, FaTags, FaLeaf, FaMapMarkerAlt, FaPaintBrush } from "react-icons/fa";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const WhyChooseUs = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <section className={isDarkMode ? "bg-dark text-white py-5" : "bg-light text-dark py-5"}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Why Choose ATA Motors?</h2>
        <div className="row">
          {/* Quality Assurance */}
          <div className="col-md-6 mb-4">
            <div className="d-flex align-items-center">
              <div className="me-4">
                <FaAward className="text-success" size={32} />
              </div>
              <div>
                <h5 className="mb-2">Uncompromised Quality</h5>
                <p className="mb-0">
                  Every vehicle undergoes rigorous testing to ensure top-notch quality and performance, making your driving experience smooth and safe.
                </p>
              </div>
            </div>
          </div>

          {/* Customer Support */}
          <div className="col-md-6 mb-4">
            <div className="d-flex align-items-center">
              <div className="me-4">
                <FaHeadset className="text-info" size={32} />
              </div>
              <div>
                <h5 className="mb-2">24/7 Customer Support</h5>
                <p className="mb-0">
                  Our friendly customer support team is always available to assist you with queries, ensuring a hassle-free ownership experience.
                </p>
              </div>
            </div>
          </div>

          {/* Affordable Pricing */}
          <div className="col-md-6 mb-4">
            <div className="d-flex align-items-center">
              <div className="me-4">
                <FaTags className="text-warning" size={32} />
              </div>
              <div>
                <h5 className="mb-2">Competitive Pricing</h5>
                <p className="mb-0">
                  Get the best value for your money with our affordable pricing plans, offering high-quality vehicles within your budget.
                </p>
              </div>
            </div>
          </div>

          {/* Eco-Friendly */}
          <div className="col-md-6 mb-4">
            <div className="d-flex align-items-center">
              <div className="me-4">
                <FaLeaf className="text-success" size={32} />
              </div>
              <div>
                <h5 className="mb-2">Eco-Friendly Solutions</h5>
                <p className="mb-0">
                  We are committed to sustainability by offering fuel-efficient and eco-friendly vehicle options to reduce your carbon footprint.
                </p>
              </div>
            </div>
          </div>

          {/* Nationwide Network */}
          <div className="col-md-6 mb-4">
            <div className="d-flex align-items-center">
              <div className="me-4">
                <FaMapMarkerAlt className="text-danger" size={32} />
              </div>
              <div>
                <h5 className="mb-2">Nationwide Presence</h5>
                <p className="mb-0">
                  With a strong network of showrooms and service centers across the country, you are never far from ATA Motors.
                </p>
              </div>
            </div>
          </div>

          {/* Customization */}
          <div className="col-md-6 mb-4">
            <div className="d-flex align-items-center">
              <div className="me-4">
                <FaPaintBrush className="text-primary" size={32} />
              </div>
              <div>
                <h5 className="mb-2">Customizable Options</h5>
                <p className="mb-0">
                  Make your vehicle truly yours with a wide range of customizable features, from interiors to exteriors.
                </p>
              </div>
            </div>
          </div>

          {/* Customer Satisfaction */}
          <div className="col-md-12">
            <p className="text-center mt-4">
              At ATA Motors, we aim to deliver excellence, from product quality to customer service, ensuring every interaction leaves you satisfied and confident in your choice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;