import React, { useEffect, useState } from "react";
import { PoolList } from "../utils/productData";
import ProductCard from "../Components/Products/ProductCard";

export default function Filter() {
  const [filteredItem, setFilteredItems] = useState([]);

  useEffect(() => {
    if (PoolList.length > 0) {
      const filtered = PoolList.filter((item) => item.category === "filter");
      setFilteredItems(filtered);
    }
  }, [ProductList]);
  return (
    <div className="">
      {filteredItem.map((item) => (
        <ProductCard
          key={item.id}
          src={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}
