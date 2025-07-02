import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const el = useRef(null);

  useEffect(()=> {

    const typed = new Typed (el.current , {
        strings: ['Welcome to my catalogue', 'Find the Best Deals Online', "Explore a World of Quality Finds","Best Prices, Just a Click Away"],
      typeSpeed: 90,
      backSpeed: 10,
      loop: true
    });

    return () =>{
        typed.destroy();
    };
    },[el]);



  
  return (
    <section className="home-container">
      <div className="home-text">
        <h1 >
          <span ref={el}></span>
        </h1>

        <p>
          Discover a wide range of quality products including electronics,
          books, and apparel. Easily filter, sort, and search items to find
          exactly what you're looking for.
        </p>
        <button className="shop-btn" onClick={() => navigate("/products")}>
          Shop Now
        </button>
      </div>

      <div className="home-image">
        <img src="/cart1.svg" alt="Shopping Illustration" />
      </div>
    </section>
  );
};

export default Home;
