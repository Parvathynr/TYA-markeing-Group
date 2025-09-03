import React, { useEffect, useState } from "react";
import { LightList } from "../utils/productData";
import ProductCard from "../Components/Products/ProductCard";

export default function Light() {
  const [sort, setSort] = useState("All");

  const [list, setList] = useState(LightList);

  useEffect(() => {
    if (sort === "All") {
      setList(LightList);
    } else {
      const filtered = LightList.filter((item) => item.subcategory === sort);
      setList(filtered);
    }
  }, [sort]);
  return (
    <div>
      <div className="sort-box">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value={"All"}>ALL</option>
          <option value={"classic-lights"}>Classic Lights</option>
          <option value={"indoor-spotlight"}>Indoor SpotLights</option>
          <option value={"portable-light"}>Portable Lights</option>
          <option value={"outdoor-light"}>Outdoor Lights</option>
        </select>
      </div>
      <div className="item-container">
        {list.map((item) => (
          <ProductCard
            key={item.id}
            src={item.image}
            // name={item.name}
            price={item.price}
            subcategory={item.subcategory}
          />
        ))}
      </div>
    </div>
  );
}
