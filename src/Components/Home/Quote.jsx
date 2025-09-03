import React, { useState } from "react";
import "./quote.css";
import map from "../../assets/map.png";
import { handleQuoteRequest } from "../../utils/Whatsapp";

const Quote = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    location: "",
    destination: "",
    contact: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    handleQuoteRequest(formData); // send form data to WhatsApp function
  };

  return (
    <div className="map-container">
      {/* Left Section */}
      <div className="quote-left">
        <img src={map} alt="map" className="map-image" />
      </div>

      {/* Right Section */}
      <div className="quote-right">
        <h2>Request a Quote</h2>
        <form className="quote-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={formData.destination}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="Email or Phone"
            value={formData.contact}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="quote-button">
            Get a Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default Quote;
