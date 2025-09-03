import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Hero.css";
import { handleChatClick } from "../../utils/Whatsapp";

/* images */

import hero6 from "../../assets/hero6.jpg";
import hero7 from "../../assets/hero7.jpg";
import hero10 from "../../assets/hero10.jpg";
// import hero11 from "../../assets/hero11.jpg";
import hero12 from "../../assets/hero12.jpg";

const Hero = () => {
  const slides = [hero6, hero7, hero10, hero12];

  return (
    <Swiper
      className="hero_slider"
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 5000 }}
      loop
    >
      {slides.map((image, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero_slide"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="overlay"></div>
            <div className="hero_content">
              <h1>
                Explore Our Premium <br />
                <span className="highlight">Pool & Fountain</span> <br />
                Accessories
              </h1>
              <p>Top-quality products designed for durability and elegance.</p>
              <button className="quote_button" onClick={handleChatClick}>
                GET A FREE QUOTE
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
