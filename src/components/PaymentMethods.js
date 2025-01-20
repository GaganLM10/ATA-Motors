import React from "react";
import { FaCreditCard, FaPaypal, FaApplePay, FaCcMastercard, FaCcVisa, FaCcAmex } from "react-icons/fa";

const PaymentMethods = () => {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-warning text-center mb-4">
          <FaCreditCard className="me-2" />
          Accepted Payment Methods
        </h2>
        
        <div className="row mt-5">
          <div className="col-12 col-md-3 mb-4 text-center">
            <FaCcVisa className="text-primary display-4 mb-3" />
            <p>Visa</p>
          </div>
          
          <div className="col-12 col-md-3 mb-4 text-center">
            <FaCcMastercard className="text-danger display-4 mb-3" />
            <p>MasterCard</p>
          </div>
          
          <div className="col-12 col-md-3 mb-4 text-center">
            <FaCcAmex className="text-success display-4 mb-3" />
            <p>American Express</p>
          </div>
          
          <div className="col-12 col-md-3 mb-4 text-center">
            <FaPaypal className="text-primary display-4 mb-3" />
            <p>PayPal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;