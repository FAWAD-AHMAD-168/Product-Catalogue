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
import Home from "./components/Home";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const [category, setCategory] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value) => {
    setSearchInput(value);
  };

  const handleSearchSubmit = () => {
    setSearchTerm(searchInput.toLowerCase());
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const getFilteredAndSortedProducts = () => {
    let filtered = [...productsData];

    // ✅ Filter by category (if selected)
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    // ✅ Filter by search term (name or description)
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );
    }

    // ✅ Sort by price
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

    setSearchInput("");

    setSearchTerm("");
  };

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />

        <Route
          path="/products"
          element={
            <>
              {" "}
              <FilterBar
                sortvalue={sortOrder}
                categoryValue={category}
                searchValue={searchInput}
                onSearchChange={handleSearchChange}
                onSearchSubmit={handleSearchSubmit}
                onSortChange={handleSortChange}
                onCategoryChange={handleCategoryChange}
                onReset={handleResetFilters}
              />
              <ProductList products={getFilteredAndSortedProducts()} />
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
