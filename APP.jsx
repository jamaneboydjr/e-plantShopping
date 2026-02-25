import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

import AboutUs from "./pages/AboutUs";
import ProductList from "./pages/ProductList";
import CartItem from "./pages/CartItem";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landing-overlay">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-subtitle">
          Discover beautiful indoor plants to refresh your space. Browse categories,
          add favorites to your cart, and manage quantities in real time.
        </p>

        <button className="primary-btn" onClick={() => navigate("/plants")}>
          Get Started
        </button>

        <div style={{ marginTop: 18 }}>
          <button
            className="small-btn"
            onClick={() => navigate("/about")}
            style={{ background: "transparent", color: "white", borderColor: "rgba(255,255,255,0.4)" }}
          >
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}
