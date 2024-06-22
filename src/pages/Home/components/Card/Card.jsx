import React from "react";

function Card({ cardData }) {
  return (
    <div className="Card">
      <div className="overlay"></div>
      <img className="cover" src={cardData.cover} alt={cardData.title} />
      <h2>{cardData.title}</h2>
    </div>
  );
}

export default Card;
