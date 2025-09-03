import React from "react";
import "../Footer/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaPinterest,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer" id="foot">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2>
            <span className="highlight">Tya </span>Marketing Group
          </h2>
          <p>
            Transforming outdoor spaces with elegant pools and fountains.
            Experience innovation and craftsmanship that lasts.
          </p>
        </div>

        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li>Home</li>
            <li>Service</li>
            <li>About Us</li>
            <li>Testimonial</li>
            <li>Clients</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            <FaPhoneAlt /> +971 52 336 5001
          </p>
          <p>
            <FaEnvelope /> tyagroup545@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt /> International city, Dubai
          </p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaGoogle />
            <FaPinterest />
            <FaInstagram />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Tya Marketing Group. All rights reserved.</p>
        <p>
          Made by <span className="highlight">BrandFlair</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
