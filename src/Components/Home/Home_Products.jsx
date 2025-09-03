import React from "react";
import { LightList } from "../../utils/productData";
import HomeProductCard from "./HomeProductCard";

export default function Home_Products() {
  return (
    <section className="home-products">
      <h2 className="featured-products-title">Featured Products</h2>
      <div className="product-grid">
        {LightList.slice(0, 4).map((item) => (
          <HomeProductCard
            key={item.id}
            src={item.image}
            // name={item.name}
            price={item.price}
            subcategory={item.subcategory}
          />
        ))}
      </div>

      {/* <div className="view-all">
        <button
          className="view-all-btn"
          onClick={() => (window.location.href = "/products")}
        >
          View All Products
        </button>
      </div> */}
    </section>
  );
}
