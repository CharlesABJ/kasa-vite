import React, { useEffect, useState } from "react";
import useImageModal from "@/hooks/useImageModal";
import ModalForImage from "@components/ModalForImage/ModalForImage";

function Cover({ dataCover }) {
  const { isModalOpen, modalSrc, modalAlt, openModal, closeModal } =
    useImageModal();
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  // Affchage de l'image précédente
  const handlePrevPicture = () => {
    if (currentPictureIndex === 0) {
      setCurrentPictureIndex(dataCover.pictures.length - 1);
    } else {
      setCurrentPictureIndex(currentPictureIndex - 1);
    }
  };
  // Affichage de l'image suivante
  const handleNextPicture = () => {
    if (currentPictureIndex === dataCover.pictures.length - 1) {
      setCurrentPictureIndex(0);
    } else {
      setCurrentPictureIndex(currentPictureIndex + 1);
    }
  };

  // Affichage des images toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isModalOpen) {
        handleNextPicture();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentPictureIndex, isModalOpen]);

  const keybordNavigation = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keybordNavigation);
    return () => {
      window.removeEventListener("keydown", keybordNavigation);
    };
  }, [currentPictureIndex]);

  const translateEffect = {
    transform: `translateX(-${currentPictureIndex * 100}%)`,
  };

  return (
    <>
      <div className="Cover">
        {dataCover.pictures.map((picture, index) => (
          <img
            onClick={() => openModal(picture, dataCover.title)}
            style={translateEffect}
            className={`cover${index === currentPictureIndex ? " active" : ""}`}
            key={index}
            src={picture}
            alt={dataCover.title}
          />
        ))}

        {dataCover.pictures.length > 1 && (
          <>
            <span className="nb-of-pictures">{`${currentPictureIndex + 1}/${
              dataCover.pictures.length
            }`}</span>
            <div
              tabIndex="0"
              title="Afficher l'image précédente"
              className="arrow left"
              onClick={handlePrevPicture}
            >
              <i className="fa-solid fa-chevron-up prev"></i>
            </div>
            <div
              tabIndex="0"
              title="Afficher l'image suivante"
              className="arrow right"
              onClick={handleNextPicture}
            >
              <i className="fa-solid fa-chevron-up next"></i>
            </div>
          </>
        )}
      </div>
      <ModalForImage
        isModalOpen={isModalOpen}
        modalSrc={modalSrc}
        modalAlt={modalAlt}
        openModal={openModal}
        closeModal={closeModal}
      />
    </>
  );
}

export default Cover;
