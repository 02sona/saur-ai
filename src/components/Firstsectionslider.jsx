import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../assets/images/Car Dina Copy.jpg';
import img2 from '../assets/images/Masal Dina.jpg';
import img3 from '../assets/images/Chopper.jpg';
import img4 from '../assets/images/Trading Dina.jpg';

const Firstsectionslider = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    appendDots: dots => <ul className="firstsection-slick-dots">{dots}</ul>,
    customPaging: () => <button />,

     responsive: [
      {
        breakpoint: 1024, // for tablets and small laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
         breakpoint: 768, // for mobile 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ] 
  };

  const images = [img1, img2, img3, img4];

  return (
    <div className="first-section-slider" style={{ width: '39vw', padding: '40px 0', overflow: 'hidden', marginLeft:"36px"}}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className="firstsection-slick-slide" key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="firstsection-slick-slide-img"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Firstsectionslider;
