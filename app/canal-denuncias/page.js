"use client";
import React from "react";
import { useState } from "react";

import BannerImage from "@/app/componets/banner/banner-imagen";
import ModalCorreos from "@/app/componets/modal/modal-correos";

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
          <ModalCorreos titulo="Formulario de Denuncia" asunto="Denuncia" />
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
        imagenMobile="https://c.animaapp.com/Hw46ChtP/img/hero-image.png"
        imagenDesktop="https://c.animaapp.com/Hw46ChtP/img/hero-image.png"
      />

      <div className="mx-auto mb-4 mt-10 w-11/12 md:w-10/12">
        <h1 className="mb-2 text-3xl sm:text-center">Canal de Denuncias</h1>
        <p className="text-18px pt-4 sm:text-center">
          En MALPO nos esforzamos por ofrecer a nuestros clientes el mejor
          servicio y la mayor transparencia en nuestras operaciones. Por eso,
          hemos habilitado un canal de denuncias a través de un formulario en
          nuestra página web, donde podrán reportar cualquier situación
          irregular, sospechosa o ilegal que hayan detectado o sufrido en
          relación con nuestra empresa.
        </p>
        <p className="text-18px pt-4 sm:text-center">
          El canal de denuncias es confidencial, seguro y gratuito. Todas las
          denuncias serán analizadas y tratadas con la debida diligencia y
          respeto. Nuestro objetivo es garantizar el cumplimiento de la
          normativa vigente y los principios éticos que rigen nuestra actividad.
          Les invitamos a hacer uso de este canal siempre que lo consideren
          necesario. Su colaboración es fundamental para mejorar nuestra gestión
          y prevenir posibles riesgos. Gracias por confiar en MALPO.
        </p>

        <div className="mx-auto mt-8 flex w-full justify-center">
          <div className="mt-4 w-full px-4 md:mt-0 md:w-2/3 xl:w-2/5">
            <button
              onClick={handleModalToggle}
              className="flex h-36 items-center justify-between rounded-xl border bg-grisMalpo px-2 text-white shadow-xl"
            >
              <span className="text-3xl font-normal hover:text-gray-400">
                Formulario de denuncias
              </span>

              <img
                className="h-12 w-12"
                alt="icono"
                src="https://c.animaapp.com/uUjeA2wJ/img/google-forms.svg"
              />
            </button>
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
