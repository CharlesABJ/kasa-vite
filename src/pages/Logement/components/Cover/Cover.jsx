import React from "react";

function Cover({ dataCover }) {
  return (
    <div className="Cover">
      <img src={dataCover.cover} alt={dataCover.title} />
    </div>
  );
}

export default Cover;
