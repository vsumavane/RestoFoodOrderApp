import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlidingImages.css'; // Custom CSS for styling the slider

const SlidingImages = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://i.ibb.co/k3tZS9H/Pav-bhaji.png" alt="Slide 1" />
        </div>
        <div>
          <img src="https://i.ibb.co/TbHw0hz/Vada-pav-Fast-food.png" alt="Slide 2" />
        </div>
        <div>
          <img src="https://i.ibb.co/PGnSj3k/Sweet.png" alt="Slide 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default SlidingImages;