// App.jsx
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import productsData from "./data/products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./components/Home";
import FilterBar from "./components/Filterbar";
import Footer from "./components/footer";
import NotFound from "./components/Notfound"; // optional

import { useState } from "react";

const AppWrapper = () => {
  const [searchInput, setSearchInput] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value) => setSearchInput(value);
  const handleSearchSubmit = () => setSearchTerm(searchInput.toLowerCase());
  const handleSortChange = (order) => setSortOrder(order);
  const handleCategoryChange = (selectedCategory) => setCategory(selectedCategory);

  const handleResetFilters = () => {
    setSortOrder("");
    setCategory("");
    setSearchInput("");
    setSearchTerm("");
  };

  const getFilteredAndSortedProducts = () => {
    let filtered = [...productsData];

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/products",
    element: <AppWrapper />,
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Navbar />
        <NotFound />
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
