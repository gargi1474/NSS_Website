// src/components/ImageCarousel.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import img1 from './images/image1.jpg';
import img2 from './images/image2.jpg';
import img3 from './images/image3.jpg';

const ImageCarousel = () => {
  const imgstyle = {
    height: "200px",
    width: "200px",
    overflow: "hidden"
  }
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="image1.jpg" alt="Image 1" style={imgstyle} />
      </div>
      <div>
        <img src="image2.jpg" alt="Image 2" style={imgstyle} />
      </div>
      <div>
        <img src="image3.jpg" alt="Image 3" style={imgstyle} />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
