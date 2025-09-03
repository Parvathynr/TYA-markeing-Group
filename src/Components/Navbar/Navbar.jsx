import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navbar_container">
      {/* <div className="navbar_logo">
        <span className="brand_highlight">Tya</span>
      </div> */}

      <div className="navbar_logo">
        <Link to={"/"}>
          <img src={logo} alt="Tya Logo" className="logo_img" />
        </Link>
      </div>

      <nav className="navbar_menu">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <div className="dropdown">
          <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
            Products ▼
          </button>
          {isOpen && (
            <div className="dropdown-content" onClick={() => setIsOpen(false)}>
              <NavLink to={"/light"}>Lights</NavLink>
              {/* <NavLink to={"/filter"}>Filters</NavLink> */}
              <NavLink to={"/pump"}>Pool</NavLink>
            </div>
          )}
        </div>
        <a href="#foot">Contact</a>
      </nav>

      <div className="navbar_call">📞</div>
    </header>
  );
};

export default Navbar;
