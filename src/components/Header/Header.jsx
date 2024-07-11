import React from "react";
import { NavLink } from "react-router-dom";
export default function Header({ dataHeader }) {
  return (
    <header className="Header">
      <div className="logo">
        <NavLink to="/">
          <img src={dataHeader.logo} alt="logo Kasa" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">À propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
