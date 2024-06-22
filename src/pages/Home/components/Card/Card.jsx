import React from "react";
import { Link } from "react-router-dom";

function Card({ cardData }) {
  return (
    <Link
      to={`/logements${
        cardData.city
          ? `/${cardData.city.toLowerCase().split(" ").join("")}`
          : ""
      }/${cardData.id}`}
      className="Card"
    >
      <div className="overlay"></div>
      <img className="cover" src={cardData.cover} alt={cardData.title} />
      <h2>{cardData.title}</h2>
    </Link>
  );
}

export default Card;
