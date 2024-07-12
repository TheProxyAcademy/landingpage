import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

const ProgrammeModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
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

{
  /*
    import { useState, useEffect } from 'react';

      const Modal = () => { 
          const [showModal, setShowModal] = useState(false);

          useEffect(() => {
            const timer = setTimeout(() => {
              setShowModal(true);
            }, 3000);

            // Disables Background Scrolling whilst the Modal is open
            // if (typeof window != 'undefined' && window.document) {
            //     document.body.style.overflow = 'hidden';
            // }

            // document.body.style.overflow = 'unset';

            return () => {
              clearTimeout(timer);
              
            }
          }, []);
        
          useEffect(() => {
            
          },[])

          if (!showModal) {
            return null;
          }
        
          return (
            <div className='z-[200000] fixed inset-0 backdrop-blur-md w-screen h-screen bg-white bg-opacity-30 grid place-items-center'>
              <div className='fixed min-h-4/5 lg:p-5 p-2 w-4/5 text-left sm:text-center opacity-100 rounded-lg bg-white shadow-lg transition-transform duration-1000 ease-in-out scroll-auto'>
                <h2 className='font-bold flex flex-col items-center justify-center text-blue-900 lg:py-10 py-5 text-[14px] lg:text-[22px] lg:w-3/5 w-full mx-auto'>ADMISSION FORM FOR 2023/2024 IS IN PROGRESS AT CARIBBEAN SCHOOL OF HEALTH TECHNOLOGY, OGIJO, OGUN STATE!</h2>
                <hr />
                <p className='lg:py-10 py-5 lg:w-3/5 w-full mx-auto text-[12px] lg:text-[14px]'>Applications are invited from suitably qualified candidates into the following programs mounted on Caribbean School of Health Technology, Ogijo-Sagamu, Ogun State.
                </p>
                <ol className='lg:pb-10 pb-5 lg:w-3/5 w-full mx-auto leading-loose text-[12px]'>
                  <li>Diploma in Health Information Management (HIM) <br className='lg:hidden block' /> <b>Duration: 3 years</b></li>
                  <li>Diploma in Community health(CHEW) <br className='lg:hidden block' /> <b>Duration: 3 years</b></li>
                  <li>Diploma in Dental Surgery Technician <br className='lg:hidden block' /> <b>Duration: 3 years</b></li>
                  <li>Diploma in Medical Laboratory Technician <br className='lg:hidden block' /> <b>Duration: 3 years</b></li>
                  <li>Certificate in Junior Community Health (JCHEW) <br className='lg:hidden block' /> <b>Duration: 2 years</b></li>
                  <li>Direct entry into CHEW by JCHEW certificate holders <br className='lg:hidden block' /> <b>Duration: 2 years</b></li>
                </ol>
                <p className='font-bold lg:w-3/5 w-full text-slate-700 mx-auto italic lg:text-[14px] text-[12px]'>For further enquiries, visit us at our temporary site at 2, Greenfield/CRT Road, Abafon bye-pass, Ogijo,Ogun State or call <span className='text-blue-700'>08028122394</span>
                </p>
                <button onClick={() => setShowModal(false)} className='my-5 bg-blue-900 rounded-md lg:w-[300px] w-[150px] text-white py-3 px-5 hover:opacity-90'>Close</button>
            </div>
            
            </div>
        )
      }

      export default Modal

  */
}
