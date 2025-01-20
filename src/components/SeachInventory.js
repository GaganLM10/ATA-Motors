import React, { useState } from "react";
import { FaSearch, FaRedo } from "react-icons/fa";

const SearchInventory = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState(50000);

  const brands = {
    Volkswagen: ["Golf", "Passat", "Tiguan"],
    Toyota: ["Corolla", "Camry", "RAV4"],
    Honda: ["Civic", "Accord", "CR-V"],
    Volvo: ["XC60", "S60", "V90"],
    Nissan: ["Altima", "Rogue", "Sentra"],
    Audi: ["A4", "Q5", "A6"],
  };

  const resetFilters = () => {
    setBrand("");
    setModel("");
    setPrice(50000);
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log({ brand, model, price });
  };

  return (
    <section className="bg-dark py-4">
      <div className="container">
        <h2 className="text-white text-center mb-3"> <FaSearch className="me-2" />Search Inventory</h2>
        <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 p-3 bg-dark rounded">
          {/* Brand Selector */}
          <div className="form-group mb-0">
            <select
              className="form-select text-white bg-secondary border-secondary"
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
                setModel(""); // Reset model when brand changes
              }}
            >
              <option value="">Choose Brand</option>
              {Object.keys(brands).map((brandOption) => (
                <option key={brandOption} value={brandOption}>
                  {brandOption}
                </option>
              ))}
            </select>
          </div>

          {/* Model Selector */}
          <div className="form-group mb-0">
            <select
              className="form-select text-white bg-secondary border-secondary"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              disabled={!brand}
            >
              <option value="">Choose Model</option>
              {brand &&
                brands[brand].map((modelOption) => (
                  <option key={modelOption} value={modelOption}>
                    {modelOption}
                  </option>
                ))}
            </select>
          </div>

          {/* Price Selector */}
          <div className="form-group mb-0">
            <select
              className="form-select text-white bg-secondary border-secondary"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="">Max Price</option>
              {[10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000].map(
                (priceOption) => (
                  <option key={priceOption} value={priceOption}>
                    Up to £ {priceOption}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-primary d-flex align-items-center"
              onClick={handleSearch}
            >
              <FaSearch className="me-2" /> Search
            </button>
            <button
              type="button"
              className="btn btn-danger d-flex align-items-center"
              onClick={resetFilters}
            >
              <FaRedo className="me-2" /> Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchInventory;