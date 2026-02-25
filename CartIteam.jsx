import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../redux/CartSlice";

export default function Navbar() {
  const totalItems = useSelector(selectTotalItems);
  const location = useLocation();

  const linkStyle = (path) => ({
    textDecoration: "none",
    fontWeight: location.pathname === path ? 800 : 600,
  });

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "white",
        borderBottom: "1px solid #eee",
        padding: "12px 18px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <span style={{ fontWeight: 900 }}>Paradise Nursery</span>
        <Link to="/" style={linkStyle("/")}>Home</Link>
        <Link to="/plants" style={linkStyle("/plants")}>Plants</Link>
        <Link to="/cart" style={linkStyle("/cart")}>
          Cart 🛒 <strong>({totalItems})</strong>
        </Link>
      </div>

      <Link to="/about" style={{ textDecoration: "none", fontWeight: 600 }}>
        About
      </Link>
    </div>
  );
}
