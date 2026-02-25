import React, { useState } from "react";
import ProductList from "./ProductList"; // adjust path if needed

export default function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div>
      {!showProducts ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <button onClick={() => setShowProducts(true)}>Get Started</button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}
