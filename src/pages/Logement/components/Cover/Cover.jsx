import React, { useState } from "react";
import arrow from "@/assets/images/arrow.svg";

function Cover({ dataCover }) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const handlePrevPicture = () => {
    setCurrentPictureIndex(currentPictureIndex - 1);
    if (currentPictureIndex === 0) {
      setCurrentPictureIndex(dataCover.pictures.length - 1);
    }
  };
  const handleNextPicture = () => {
    setCurrentPictureIndex(currentPictureIndex + 1);
  };
  let coverStyle = {
    transform: `translateX(-${currentPictureIndex * 100}%)`,
  };

  return (
    <div className="Cover">
      {dataCover.pictures.map((picture, index) => (
        <img
          style={coverStyle}
          className={`cover${index === currentPictureIndex ? " active" : ""}`}
          key={index}
          src={picture}
          alt={dataCover.title}
        />
      ))}

      {dataCover.pictures.length > 1 && (
        <>
          <span className="nb-of-pictures">{`${currentPictureIndex}/${dataCover.pictures.length}`}</span>
          <div
            title="Afficher l'image précédente"
            className="arrow left"
            onClick={handlePrevPicture}
          >
            <img src={arrow} alt="fleche gauche" />
          </div>
          <div
            title="Afficher l'image suivante"
            className="arrow right"
            onClick={handleNextPicture}
          >
            <img src={arrow} alt="fleche droite" />
          </div>
        </>
      )}
    </div>
  );
}

export default Cover;
