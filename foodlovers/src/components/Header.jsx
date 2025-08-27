import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu if click is outside nav or hamburger
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Foodie</Link>
      </div>

      <nav ref={navRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/foods">Foods</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        <Link to="/about">About</Link>
      </nav>

      <div ref={hamburgerRef} className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "change1" : ""}`}></div>
        <div className={`bar ${menuOpen ? "change2" : ""}`}></div>
        <div className={`bar ${menuOpen ? "change3" : ""}`}></div>
      </div>
    </header>
  );
};

export default Header;
