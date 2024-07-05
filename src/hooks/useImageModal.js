import React, { useState } from "react";

function useImageModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const openModal = (src, alt) => {
    if (isModalOpen) {
      closeModal();
    } else {
      setModalSrc(src);
      setModalAlt(alt);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return { isModalOpen, modalSrc, modalAlt, openModal, closeModal };
}

export default useImageModal;
