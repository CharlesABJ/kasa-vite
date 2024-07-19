import React from "react";

function ModalForImage({
  isModalOpen,
  modalSrc,
  modalAlt,
  openModal,
  closeModal,
}) {
  if (!isModalOpen || window.innerWidth <= 768) return null;
  return (
    <>
      <div onClick={closeModal} className="overlay for-modal"></div>
      <div className="ModalForImage">
        <i onClick={closeModal} className="fa-solid fa-xmark close-modal"></i>
        <img src={modalSrc} alt={modalAlt} />
      </div>
    </>
  );
}

export default ModalForImage;
