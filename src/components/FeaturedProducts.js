import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Nissan 350 Z Fairlady',
      image: '/images/card1.jpeg',
      price: '$20,000',
    },
    {
      id: 2,
      name: 'Car Model B',
      image: '/images/card1.jpeg',
      price: '$18,000',
    },
    {
      id: 3,
      name: 'Car Model C',
      image: '/images/card1.jpeg',
      price: '$22,500',
    },
    {
      id: 4,
      name: 'Car Model D',
      image: '/images/card1.jpeg',
      price: '$19,500',
    },
  ];

  return (
    <section className="bg-dark py-5 text-white">
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