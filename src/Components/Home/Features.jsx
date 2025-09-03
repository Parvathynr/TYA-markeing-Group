import React from "react";
import { motion } from "framer-motion";
import "./Features.css";

const features = [
  "Premium-grade pool & fountain materials",
  "Advanced filtration systems",
  "Custom design consultation",
  "On-time project delivery",
  "Long-lasting durability",
  "Eco-friendly and safe solutions",
];

const Features = () => {
  return (
    <div className="features-container">
      <h2 className="features-title">Our Features</h2>
      <div className="features-list">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="feature-item"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <span className="feature-bullet">✓</span>
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
