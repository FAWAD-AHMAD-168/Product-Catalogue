import React from "react";
import "./Filterbar.css";

const FilterBar = ({onSortChange}) => {
  return (
    <section className="filter-bar">
      <input type="text" placeholder="Search products..." disabled />
      <select >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
        <option value="Apparel">Apparel</option>
      </select>

       <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Price: Low → High</option>
        <option value="desc">Price: High → Low</option>
      </select>


    </section>
  );
};

export default FilterBar;
