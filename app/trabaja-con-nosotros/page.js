"use client";
import React from "react";
import { useState } from "react";

import BannerImage from "@/app/componets/banner/banner-imagen";
import ModalPostulacion from "@/app/componets/modal/modal-postulacion";

const Modal = ({ onClose }) => {
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
        <div className="mt-4">
          <ModalPostulacion titulo="Formulario de Denuncia" />
        </div>
      </div>
    </div>
  );
};

const page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <BannerImage
        imagenMobile="https://c.animaapp.com/6zKkMTgT/img/hero-image.png"
        imagenDesktop="https://c.animaapp.com/6zKkMTgT/img/hero-image.png"
      />

      <div className="mx-auto mb-4 mt-10 w-11/12 md:w-10/12">
        <h1 className="mb-2 text-3xl sm:text-center">Trabaja con nosotros</h1>
        <p className="text-18px pt-4 sm:text-center">
          Bienvenido a la página de postulación de Malpo. Aquí podrás encontrar
          las ofertas de trabajo disponibles y los requisitos para postular.
          También puedes seguirnos en LinkedIn para estar al tanto de las
          novedades y oportunidades laborales. Si te interesa formar parte de
          nuestro equipo, te invitamos a revisar las vacantes y enviar tu
          currículum. Esperamos contar con tu talento y experiencia.
        </p>

        <h1 className="mb-2 mt-10 text-3xl sm:text-center">
          Revisa las ofertas de trabajo disponibles
        </h1>
        <div className="mx-auto mt-8 flex w-full flex-col justify-center md:flex-row">
          <div className="mt-4 w-full px-4 md:mt-0 md:w-2/3 xl:w-2/5">
            <a
              onClick={handleModalToggle}
              className="flex h-32 items-center justify-between rounded-xl border bg-grisMalpo px-2 text-white shadow-xl"
            >
              <span className="text-3xl font-normal hover:text-gray-400">
                Formulario de postulación
              </span>

              <img
                className="h-12 w-12"
                alt="icono"
                src="https://c.animaapp.com/uUjeA2wJ/img/google-forms.svg"
              />
            </a>
          </div>
          <div className="mt-4 w-full px-4 md:mt-0 md:w-2/3 xl:w-2/5">
            <a
              href="https://www.linkedin.com/company/constructora-malpo-spa"
              target="_blank"
              className="flex h-32 items-center justify-between rounded-xl border bg-grisMalpo px-2 text-white shadow-xl"
            >
              <span className="text-3xl font-normal hover:text-gray-400">
                Linkedin
              </span>

              <img
                className="h-12 w-12"
                alt="icono"
                src="https://c.animaapp.com/TY17tEwG/img/frame-72.svg"
              />
            </a>
          </div>
        </div>
      </div>
      {/* modal */}
      {modalOpen && <Modal onClose={handleModalToggle}></Modal>}
      {/* modal */}
    </>
  );
};

export default page;
