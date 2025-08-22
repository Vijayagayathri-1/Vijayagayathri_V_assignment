import React, { useState } from 'react';
import './imageCarousel.css'; 

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="image-carousel">
      <img
        src={images[currentImageIndex]}
        alt={`Gallery image ${currentImageIndex + 1}`}
        className="carousel-image"
      />
      {images.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={handlePrev}>
            &#10094;
          </button>
          <button className="carousel-btn next" onClick={handleNext}>
            &#10095;
          </button>
        </>
      )}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;