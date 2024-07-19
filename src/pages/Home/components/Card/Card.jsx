import React from "react";
import { Link } from "react-router-dom";

// importation des assets
import imagePlaceHolder from "@assets/images/logo.svg";

function Card({ dataCard }) {
  const handlePicturePlaceHolder = (e) => {
    e.target.src = imagePlaceHolder;
  };
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
      <div className="overlay half"></div>
      <img
        loading="lazy"
        className="cover"
        src={dataCard.cover}
        alt={dataCard.title}
        onError={handlePicturePlaceHolder}
      />
      <h2>{dataCard.title}</h2>
    </Link>
  );
}

export default Card;
