"use client";
import React, { useState } from "react";
import Image from "next/image";

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-75">
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

const Banner = (props) => {
  const imagenLoteo = props.imagenLoteo;
  const imagenLoteoZoom = props.imagenLoteoZoom;

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="pb-6 pt-6">
      <h1 className="ml-4 text-3xl sm:text-center">Loteo</h1>

      <div className="flex items-center justify-center">
        <div className="flex w-5/6 items-center justify-center bg-gray-50">
          <Image
            src={imagenLoteo}
            alt="Descripción de la imagen"
            width={500}
            height={500}
            onClick={handleModalToggle} // Abrir modal al hacer clic en la imagen
          />
        </div>
      </div>

      {modalOpen && (
        <Modal onClose={handleModalToggle}>
          <div className="pb-6 pt-6">
            <h1 className="ml-4 text-3xl sm:text-center">Loteo</h1>
            <div className="relative flex items-center justify-center">
              <picture>
                {/* Imagen de fondo para dispositivos pequeños */}
                <source srcSet={props.imagenLoteo} media="(max-width: 640px)" />
                {/* Imagen de fondo para dispositivos grandes */}
                <source
                  srcSet={props.imagenLoteoZoom}
                  media="(min-width: 641px)"
                />
                {/* Imagen de fondo por defecto */}
                <img
                  className="block h-full w-full object-cover"
                  src="/imagenNoDisponible/no_disponible.webp" // Ruta de la imagen de fondo por defecto para navegadores que no admiten <picture>
                  alt="Loteo"
                />
              </picture>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Banner;
