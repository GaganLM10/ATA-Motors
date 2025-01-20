import React from "react";
import MapComponent from "./MapComponent";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  return (
    <section className="bg-dark py-5 text-white">
      <div className="container my-5">
        <h1 className="text-center mb-4">Contact Us</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
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
              placeholder="Your Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <MapComponent />
    </section>
  );
};

export default ContactUs;
