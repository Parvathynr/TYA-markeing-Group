import React, { useEffect, useState } from "react";
import { PoolList } from "../utils/productData";
import ProductCard from "../Components/Products/ProductCard";

export default function Light() {
  const [sort, setSort] = useState("All");

  const [list, setList] = useState(PoolList);

  useEffect(() => {
    if (sort === "All") {
      setList(PoolList);
    } else {
      const filtered = PoolList.filter((item) => item.subcategory === sort);
      setList(filtered);
    }
  }, [sort]);
  return (
    <div>
      <div className="sort-box">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value={"All"}>ALL</option>
          <option value={"pool-nozzle"}>Pool Nozzle</option>
          <option value={"pool-light"}>Pool Lights</option>
          <option value={"test-kit"}>Chlorine & Test Kit</option>
          <option value={"pool-ladder"}>Pool Ladder</option>
          <option value={"pool-filter"}>Pool Filter</option>
          <option value={"pool-cleaning-kit"}>Pool Cleaning Kit</option>
          <option value={"pool-rescue"}>Rescue Items</option>
          <option value={"outdoor-light"}>Others</option>
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
