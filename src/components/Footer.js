import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Logo and Tagline */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center">
              <img
                src="/images/logo1.png"
                alt="ATA Motors Logo"
                style={{ width: '60px', marginRight: '10px' }}
              />
              <h5 className="mb-0">ATA Motors</h5>
            </div>
            <p className="mt-3">
              Explore the finest collection of vehicles with unmatched customer service. Drive your dream today!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/inventory" className="text-white">
                  View Inventory
                </a>
              </li>
              <li>
                <a href="/services" className="text-white">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p>
              <FaMapMarkerAlt className="me-2" /> 58 Mary Street, Balsall Heath, Birmingham, England, B12 9ST
            </p>
            <p>
              <FaPhoneAlt className="me-2" /> +1 123 456 7890
            </p>
            <p>
              <FaEnvelope className="me-2" /> support@atamotors.com
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-4">
          <h6>Follow Us</h6>
          <a href="https://facebook.com" className="text-white me-3">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="text-white me-3">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-white">
            <FaInstagram />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <small>© {new Date().getFullYear()} ATA Motors. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;