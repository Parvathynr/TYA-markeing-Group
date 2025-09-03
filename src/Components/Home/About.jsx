import React from "react";
import "../Home/About.css";
import about from "../../assets/about.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      {/* Left Section */}
      <div className="about-left">
        <h2>Who We Are?</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          At Collective Pools & Fountains, we specialize in premium materials
          and solutions for swimming pool and fountain projects. With years of
          experience and a passion for excellence, we help bring elegant,
          reliable water features to life. From advanced filtration systems to
          sleek fountain setups, we deliver only the best — built to last,
          designed to impress.
        </p>

        <h3> Turning Water into Art — One Project at a Time</h3>
        <button className="read-button" onClick={() => navigate("/about")}>
          Explore Our Story
        </button>
      </div>

      {/* Right Section */}
      <div className="about-right">
        <img src={about} alt="Truck" className="about-image" />
      </div>
    </div>
  );
};

export default About;
