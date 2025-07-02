import React from "react";
import ProductCard from "./Productcard";
import "./Productlist.css";

const ProductList = ({ products }) => {
  return (
    <section className="product-list">
      {products.length === 0 ? (
        <h2 className="no-products">No products found matching your criteria.</h2>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </section>
  );
};

export default ProductList;
