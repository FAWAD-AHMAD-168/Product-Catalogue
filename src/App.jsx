import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import productsData from "./data/products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import FilterBar from "./components/Filterbar";
import Footer from "./components/footer";

const App = () => {
    const [sortOrder, setSortOrder] = useState("");

  const [category, setCategory] = useState(""); 

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const getSortedProducts = () => {
    let filtered = [...productsData];

    
    if (category && category !== "") {
      filtered = filtered.filter((p) => p.category === category);
    }

    
    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

//RESSETTING THE FILTERS

  const handleResetFilters = () => {
  setSortOrder("");
  setCategory("");
};

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <FilterBar sortvalue={sortOrder} categoryValue={category}
               onSortChange={handleSortChange} onCategoryChange={handleCategoryChange} onReset={handleResetFilters}/>
              <ProductList products={getSortedProducts()} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
