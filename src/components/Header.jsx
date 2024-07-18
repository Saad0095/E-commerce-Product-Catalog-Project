import React from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
 
  return (
    <div>
      <nav className="flex justify-between items-center bg-cyan-900 border-b-2 h-12 text-white px-3 w-full">
        <div className="logo">
          <h1>E-Buy</h1>
        </div>
        <ul className="flex justify-center items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/cart" className="flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="" />
          </NavLink>
        </ul>
      </nav>

    </div>
  );
};

export default Header;
