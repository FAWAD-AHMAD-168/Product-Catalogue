import React from "react";
import ProductCard from "./Productcard";
import "./Productlist.css";

const ProductList = ({ products }) => {
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
