import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Modal = ({ onClose, title, content, buttonText, link }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FontAwesomeIcon icon="times" />
        </button>
        <h2 className="text-2xl font-bold mb-4 font-title">{title}</h2>
        <p className="mb-4">{content}</p>
        <Link to={link}>
          <button
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90"
            onClick={onClose}
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
