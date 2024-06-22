import React from "react";
import { NavLink } from "react-router-dom";
export default function Header({ dataHeader }) {
  return (
    <header className="Header">
      <div className="logo">
        <NavLink to="/home">
          <img src={dataHeader.logo} alt="logo Kasa" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">À propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
