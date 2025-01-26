import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const PopularBrands = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const brands = [
    {
      name: "Audi",
      image: "/images/brand-logo/audi.png",
      carsCount: 10,
    },
    {
      name: "Honda",
      image: "/images/brand-logo/honda.png",
      carsCount: 10,
    },
    { name: "Nissan", image: "/images/brand-logo/nissan.png", carsCount: 20 },
    {
      name: "Volkswagen",
      image: "/images/brand-logo/volkswagen.png",
      carsCount: 20,
    },
    {
      name: "Volvo",
      image: "/images/brand-logo/volvo.png",
      carsCount: 10,
    },
  ];

  return (
    <section
      className={`${
        isDarkMode ? "bg-dark text-white" : "bg-light text-dark"
      } py-5`}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Explore Popular Brands</h2>
        <div className="row g-3 justify-content-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center text-center"
            >
              <div
                className={`${
                  isDarkMode ? "bg-secondary" : "bg-light"
                } p-3 rounded shadow-sm d-flex flex-column align-items-center`}
                style={{
                  borderRadius: "12px",
                  width: "100%",
                  maxWidth: "150px",
                  height: "150px",
                }}
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="img-fluid mb-2"
                  style={{ maxHeight: "50px", objectFit: "contain" }}
                />
                <p className="mt-1 fw-bold mb-0">{brand.name}</p>
                <p className="text-info fw-bold mb-0">
                  {brand.carsCount}+ cars
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a
            href="/all-cars"
            className={`btn fw-bold ${
              isDarkMode ? "btn-outline-light" : "btn-outline-dark"
            }`}
          >
            View All Cars
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;