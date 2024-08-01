import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

const ProgrammeModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasVisited = sessionStorage.getItem("hasVisited");

      if (!hasVisited) {
        setIsModalOpen(true);
        sessionStorage.setItem("hasVisited", "true");
        // Prevent body scrolling when modal is open
        document.body.style.overflow = "hidden";
      }
      // // Prevent body scrolling when modal is open
      // document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    // Allow body scrolling when modal is closed
    document.body.style.overflow = "auto";
  };

  const modalDetails = {
    title: "Register for our Online Summer Bootcamp",
    detail:
      "Don't miss out on our Online Summer Tech Bootcamp, where young innovators can dive into the world of technology and creativity! Register now to secure your spot and give your child a summer of learning, fun, and future-ready skills!",
  };

  return (
    <div className="App">
      {isModalOpen && (
        <Modal
          title={modalDetails.title}
          content={modalDetails.detail}
          buttonText="Register for Bootcamp"
          link="/summerbootcamp"
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProgrammeModal;
