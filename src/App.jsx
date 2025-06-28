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

  const handleSortChange = (order) => {
    setSortOrder(order);
  };


  const getSortedProducts = () => {
    const sorted = [...productsData];
    if (sortOrder === "asc") {
      return sorted.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      return sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  };


  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={ <>  <FilterBar onSortChange={handleSortChange}/> 
        <ProductList products={getSortedProducts()} />  

        </>
        
        }     />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

       <Footer />
    </div>
  );
};

export default App;

