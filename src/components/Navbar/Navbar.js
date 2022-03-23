import React from "react";
import data from "../api/data";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();

  return (
    <nav className="navbar__container">
      <div className="navbar">
        {Object.entries(data).map(([key, { name }]) => (
          <p key={key} onClick={() => navigate(`?genre=${key}`)}>
            {name}
          </p>
        ))}
      </div>
      <div className="navbar__fade"></div>
    </nav>
  );
}

export default Navbar;
