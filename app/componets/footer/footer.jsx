"use client";
import React from "react";
import { useState } from "react";

import ModalCorreos from "@/app/componets/modal/modal-correos";

import "./styleFooter.css";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex overflow-auto bg-gray-800 bg-opacity-75">
      <div className="relative m-auto w-full max-w-md rounded bg-white p-8 shadow-lg">
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
        <div className="mt-4">
          <ModalCorreos titulo="Formulario de Contacto" />
        </div>
      </div>
    </div>
  );
};

const Footer = ({redes}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <footer className="bg-grisMalpo px-4 py-8 text-white">
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className="text-left md:mr-8 md:text-center">
            {" "}
            {/* Texto centrado en md */}
            <a href="/">
              <img
                src="https://c.animaapp.com/g9H7zkhE/img/logo-malpo---blanco.svg"
                className="logo-malpo-blanco mx-0 sm:mx-auto sm:mb-6" // Centrado horizontalmente en sm, alineado a la izquierda en otros tamaños
                alt="Logo malpo blanco"
              />
            </a>
            <div className="mt-10 flex flex-col items-start sm:flex-row sm:justify-between">
              <div className="text-left sm:mb-0 sm:mr-4 sm:pr-12">
                <p className="mb-4">
                  <a href="/nosotros" className="hover:text-gray-400">
                    Nosotros
                  </a>
                </p>
                <p className="mb-4">
                  <button
                    href="#"
                    className="hover:text-gray-400"
                    onClick={handleModalToggle}
                  >
                    Contacto
                  </button>
                </p>
                <p className="mb-4">
                  <a
                    href="/trabaja-con-nosotros"
                    className="hover:text-gray-400"
                  >
                    Trabaja en Malpo
                  </a>
                </p>
                <p className="mb-0">
                  <a href="/canal-denuncias" className="hover:text-gray-400">
                    Canal de denuncias
                  </a>
                </p>
              </div>
              <div className="mt-10 flex items-center text-left sm:mt-0 sm:pl-12">
            {redes.datos.map((redSocial) => (
              <a key={redSocial.idRrss} href={redSocial.urlRrss} target="_blank" className="mr-2 hover:text-gray-400">
                <img
                  className="img-rrss mr-2"
                  alt={`Icon ${redSocial.nombreRrss}`}
                  src={redSocial.logoRrss}
                />
              </a>
               ))}
            </div>
            </div>
          </div>
        </div>

        <div className="pt-10 text-xs md:text-center">
          @ 2024 Malpo.- Las imágenes y textos contenidos en este sitio web son
          meramente ilustrativos y referenciales, por lo que podrían no
          representar la realidad. La empresa se reserva la facultad de efectuar
          cambios en los proyectos. Los precios están sujetos a disponibilidad
          de los productos. Exija su cotización en las salas y puntos de ventas.
        </div>
      </footer>
      {/* modal */}
      {modalOpen && <Modal onClose={handleModalToggle}></Modal>}
      {/* modal */}
    </>
  );
};

export default Footer;
