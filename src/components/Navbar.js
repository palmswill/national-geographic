import "../styles/Navbar.css";

import React from "react";
import logo from "../assets/images/logo.png";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  let location = useLocation().pathname.split("/")[1];

  const navList = [
    { text: "Home", link: "/" },
    { text: "Show", link: "/show" },
    { text: "Special", link: "/special" },
    { text: "Live TV", link: "/live" },
  ];

  const renderNavList = () => {
    return (
      <ul>
        {navList.map((navItem) => {
          const { text, link } = navItem;
          const isActive = link === "/" + location ? "active" : "";
          return (
            <li className={`nav-item ${isActive}`} key={text + link}>
              <Link to={link}>{text}</Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav>
      <img src={logo} alt="" />
      {renderNavList()}
      <input placeholder="Search" />
      <i className="fas fa-search"></i>
    </nav>
  );
};

export default Navbar;
