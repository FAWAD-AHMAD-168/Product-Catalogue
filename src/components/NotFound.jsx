import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1>404 - Page Not Found</h1>
      <p>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <button onClick={() => navigate("/")} className="home-btn">
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
