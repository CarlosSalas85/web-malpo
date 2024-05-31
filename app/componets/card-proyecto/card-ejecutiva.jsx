'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";


const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-75 fixed inset-0"></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="relative bg-white p-8 shadow-lg rounded">
            <button
              className="absolute top-0 right-0 m-4 text-rojoMalpo hover:text-gray-400"
              onClick={onClose}
            >
              <img
                className="h-8 w-8"
                alt={`icono`}
                src={`https://c.animaapp.com/o0ROixJd/img/cancel@2x.png`}
              />
            </button>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cards = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

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
        <a href="#">
            <h1 className="text-lg font-semibold">{props.nombre}</h1>
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
            <div className="flex">
              {/* Sección de la imagen */}
              <div className="w-1/3">
                <Image
                  src={props.imagen}
                  alt="usuario"
                  width={120}
                  height={120}
                  className="inset-0 h-full w-full object-cover"
                />
              </div>
              {/* Sección del nombre y los iconos */}
              <div className="w-2/3 pl-2 flex flex-col justify-between">
                <div className="flex flex-col items-center justify-center h-full">
                  <h1 className="text-lg font-semibold">{props.nombre}</h1>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-around">
                  {/* Enlace para enviar correo electrónico */}
                  <a href={`mailto:${props.email}`} target="_blank">
                    <img
                      className="h-8 w-8"
                      alt={`icono`}
                      src={`../../iconos/ejecutivas/mail.png`}
                    />
                  </a>
                  {/* Enlace para llamar */}
                  <a href={`tel:+56${props.telefono}`} target="_blank">
                    <img
                      className="h-8 w-8"
                      alt={`icono`}
                      src={`../../iconos/ejecutivas/llamar.png`}
                    />
                  </a>
                  {/* Enlace de WhatsApp */}
                  <a href={`https://api.whatsapp.com/send?phone=56${props.telefono}`} target="_blank">
                    {/* Sustituye {icon} con el icono de WhatsApp si es necesario */}
                    {/* {icon} */}
                    <img
                      className="h-8 w-8"
                      alt={`icono`}
                      src={`../../iconos/ejecutivas/whatssap.png`}
                    />
                  </a>
                </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleModalToggle}
                className="focus:shadow-outline rounded bg-rojoMalpo px-4 py-2 text-white hover:bg-gray-400 focus:outline-none"
              >
                Cerrar
              </button>
            </div>
          </Modal>
        )}
      </>
    </>
  );
};

export default Cards;
