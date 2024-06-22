import React from "react";
import { Link } from "react-router-dom";

function Card({ dataCard }) {
  return (
    <Link
      to={`/logements${
        dataCard.country
          ? `/${dataCard.country.toLowerCase().split(" ").join("")}`
          : ""
      }${
        dataCard.city
          ? `/${dataCard.city.toLowerCase().split(" ").join("")}`
          : ""
      }/${dataCard.id}`}
      className="Card"
    >
      <div className="overlay"></div>
      <img className="cover" src={dataCard.cover} alt={dataCard.title} />
      <h2>{dataCard.title}</h2>
    </Link>
  );
}

export default Card;
