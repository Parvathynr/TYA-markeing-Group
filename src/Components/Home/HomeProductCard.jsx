import React from "react";
import Home_Products from "./Home_Products";
import "./Home_Products.css";

export default function HomeProductCard({ src, name, price, subcategory }) {
  return (
    <div className="item-box">
      <img className="item-photo" src={src} alt={name} />
      <div className="item-info">
        <p className="item-name">{name}</p>
        <p className="item-price">{price}</p>
        <p className="item-name">{subcategory}</p>
        <button className="know-more-btn">Know More</button>
      </div>
    </div>
  );
}
