import React from "react";
import { NavLink } from "react-router-dom";
export default function Header({ headerDatas }) {
  return (
    <header className="Header">
      <div className="logo">
        <img src={headerDatas.logo} alt="logo Kasa" />
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
