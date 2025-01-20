import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".fixed-top");
    if (header) {
      // Update the height dynamically
      setHeaderHeight(header.offsetHeight);
    }

    // Update on window resize
    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slides = [
    {
      image: '/images/hero3.png',
      alt: 'Car 1',
      title: 'Welcome to ATA Motors',
      caption: 'Find your dream car with us!',
    },
    {
      image: '/images/hero4.png',
      alt: 'Car 2',
      title: 'Wide Range of Used Cars',
      caption: 'Quality cars at competitive prices!',
    },
    {
      image: '/images/hero3.png',
      alt: 'Car 3',
      title: 'Apply for Financing',
      caption: 'Easy financing options to own your car!',
    },
  ];

  return (
    <section
      className="hero-section"
      style={{ marginTop: `${headerHeight}px` }}
    >
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ height: '50vh', overflow: 'hidden' }}
      >
        <div className="carousel-inner h-100">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item h-100 ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={slide.image}
                className="d-block w-100"
                alt={slide.alt}
                style={{
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div className="carousel-caption d-block">
                <h5>{slide.title}</h5>
                <p>{slide.caption}</p>
              </div>
            </div>
          ))}
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