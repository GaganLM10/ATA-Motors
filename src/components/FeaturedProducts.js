import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Volkswagen Golf (Mk8)',
      image: '/images/featured/img1.jpg',
      price: '$30,000',
    },
    {
      id: 2,
      name: 'Toyota Corolla',
      image: '/images/featured/img2.jpg',
      price: '$18,000',
    },
    {
      id: 3,
      name: 'Honda Civic',
      image: '/images/featured/img3.webp',
      price: '$22,500',
    },
    {
      id: 4,
      name: 'Volvo X60',
      image: '/images/featured/img4.jpg',
      price: '$19,500',
    },
  ];

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className={isDarkMode ? "bg-dark text-white py-5" : "bg-light text-dark py-5"}>
      <div className="container">
        <h2 className="text-center mb-4">Featured Cars</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <a href={`/product/${product.id}`} className="btn btn-primary mt-2">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;