import React from 'react';

const Carousel = () => {
  return (
    <section className="hero-section">
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ height: '50vh', overflow: 'hidden' }}
      >
        <div className="carousel-inner h-100">
          {/* Slide 1 */}
          <div className="carousel-item active h-100">
            <img
              src="/images/hero3.png"
              className="d-block w-100"
              alt="Car 1"
              style={{
                height: '100%',
                objectFit: 'cover', // Ensures image fits within the container without getting cut
              }}
            />
            <div className="carousel-caption d-block">
              <h5>Welcome to ATA Motors</h5>
              <p>Find your dream car with us!</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item h-100">
            <img
              src="/images/hero4.png"
              className="d-block w-100"
              alt="Car 2"
              style={{
                height: '100%',
                objectFit: 'cover', // Ensures image fits within the container without getting cut
              }}
            />
            <div className="carousel-caption d-block">
              <h5>Wide Range of Used Cars</h5>
              <p>Quality cars at competitive prices!</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item h-100">
            <img
              src="/images/hero3.png"
              className="d-block w-100"
              alt="Car 3"
              style={{
                height: '100%',
                objectFit: 'cover', // Ensures image fits within the container without getting cut
              }}
            />
            <div className="carousel-caption d-block">
              <h5>Apply for Financing</h5>
              <p>Easy financing options to own your car!</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <a
          className="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </section>
  );
};

export default Carousel;
