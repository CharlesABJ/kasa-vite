import React, { lazy } from "react";
import "./Header.scss";
export default function Header() {
  return (
    <header>
      <div className="logo"></div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
