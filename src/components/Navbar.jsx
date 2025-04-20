import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar">
      <div className="logo">
        <img src="Logo.png" alt="logo" />
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <div className={`links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>HOME</Link>
        <Link to="/About" onClick={closeMenu}>ABOUT US</Link>
        <Link to="/Service" onClick={closeMenu}>OUR SERVICE</Link>
        <Link to="/Contact" onClick={closeMenu}>CONTACT US</Link>
      </div>
    </div>
  );
}

export default Navbar;
