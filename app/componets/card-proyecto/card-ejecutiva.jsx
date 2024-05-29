'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";


const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex overflow-auto bg-gray-800 bg-opacity-75">
      <div className="relative m-auto w-full max-w-4xl rounded bg-white p-8 shadow-lg">
        <button
          className="absolute right-0 top-0 m-4 text-rojoMalpo hover:text-gray-400"
          onClick={onClose}
        >
          <img
            className="mr-3 h-8 w-8"
            alt={`icono`}
            src={`https://c.animaapp.com/o0ROixJd/img/cancel@2x.png`}
          />
        </button>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};


const Cards = (props) => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  console.log("El valor de usuarioEjecutiva es:", props);

  return (
  <>
    <div className="mx-2 my-2 flex w-full justify-center border shadow md:my-0 md:w-1/3 dark:border-gray-700 dark:bg-gray-800">
      {/* Primera sección */}
      <div className="w-1/3">
        <Image
          src={props.imagen}
          alt="usuario"
          width={120}
          height={120}
          className="inset-0 h-full w-full object-cover"
        />
      </div>
      {/* Segunda sección */}
      <div className="w-2/3 pl-2">
        <a>
          <h1 className=" text-lg font-semibold">{props.nombre}</h1>
          <span className="mt-4 flex items-center text-center">
            <img
              className="mr-3 h-8 w-8"
              alt={`icono`}
              src={`https://c.animaapp.com/DeOuMZYz/img/touch-app@2x.png`}
              onClick={handleModalToggle}
            />
            <span className="text-l text-rojoMalpo hover:text-gray-400">
              Contactar
            </span>
          </span>
        </a>
      </div>
    </div>
    <>
      {modalOpen && (
        <Modal onClose={handleModalToggle}>
        <div className="mx-2 my-2 flex w-full justify-center border shadow md:my-0 md:w-1/3 dark:border-gray-700 dark:bg-gray-800">
      {/* Primera sección */}
      <div className="w-1/3">
        <Image
          src={props.imagen}
          alt="usuario"
          width={120}
          height={120}
          className="inset-0 h-full w-full object-cover"
        />
      </div>
      {/* Segunda sección */}
      <div className="w-2/3 pl-2">
        <a>
          <h1 className=" text-lg font-semibold">{props.nombre}</h1>
          <span className="mt-4 flex items-center text-center">
            <img
              className="mr-3 h-8 w-8"
              alt={`icono`}
              src={`https://c.animaapp.com/DeOuMZYz/img/touch-app@2x.png`}
              onClick={handleModalToggle}
            />
            <span className="text-l text-rojoMalpo hover:text-gray-400">
              Contactar
            </span>
          </span>
        </a>
      </div>
    </div>
        </Modal>
      )}
    </>
  </>
  );
};

export default Cards;
