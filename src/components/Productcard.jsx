import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <span className="category">{product.category}</span>
      </div>
    </div>
  );
};

export default ProductCard;
