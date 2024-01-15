import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="bg-[#00a8db]">
      <div className="nav max-w-6xl mx-auto px-2 lg:px-0">
        <a href="#" className="nav__brand">
          <img src="https://i.ibb.co/m6psJVd/Logo-1.png" alt="" />
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Landings
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Pages
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Docs
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Help
            </a>
          </li>
          <li className="nav__item">
            <button className="bg-gradient-to-l from-blue-800 to-blue-400 px-4 py-1 rounded text-white">Login</button>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
