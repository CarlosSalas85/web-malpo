"use client";
import React from "react";
import { useState } from "react";

import BannerImage from "@/app/componets/banner/banner-imagen";
import NavComoComprar from "@/app/componets/banner-como-comprar/nav-como-comprar";
import ButtonComoComprar from "@/app/componets/banner-como-comprar/button-como-comprar";

import BannerRegiones from "@/app/function/banner-regiones-cliente";

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
          <ModalCorreos titulo="Formulario de Contacto Compra" />
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);



  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <BannerImage
        imagenMobile="https://c.animaapp.com/ldNQXCM1/img/hero-image.png"
        imagenDesktop="https://c.animaapp.com/ldNQXCM1/img/hero-image.png"
      />
      <div className="flex flex-col justify-center pb-6 md:flex-row">
        <NavComoComprar activo="1" />
        <div className="mr-auto flex flex-col md:w-5/6">
          <div className="pb-3 pt-6">
            <div className="w-11/12">
              <h1 className="ml-4 pb-8 text-3xl">
                Cómo comprar tu casa o departamento
              </h1>
              <p className="text-18px ml-4">
                Aprende aquí los pasos necesarios para comprar tu propiedad en
                Malpo
              </p>
            </div>

            <div className="mx-auto flex w-full flex-col justify-start pb-6 pt-6 md:flex-row">
              <ButtonComoComprar
                url="/como-comprar/con-subsidio?val=2"
                titulo="Comprar con subsidio"
                icono="https://c.animaapp.com/ln1kRZUg/img/expand-circle-down.png"
              />

              <ButtonComoComprar
                url="/como-comprar/con-hipotecario?val=3"
                titulo="Con crédito hipotecario"
                icono="https://c.animaapp.com/ln1kRZUg/img/expand-circle-down.png"
              />
            </div>

            <div className="pb-2 pt-2">
              <div className="w-11/12">
                <h1 className="ml-4 pb-8 text-xl">
                  ¿Dudas respecto del proceso? contacta a nuestra ejecutiva
                </h1>
              </div>
            </div>

            <div className="pb-2 pt-2">
              <div className="mx-auto ml-0 flex justify-center md:ml-4 md:justify-start">
                <button
                  onClick={handleModalToggle}
                  className="fondo-malpo-rojo text-l my-2 w-[270px] rounded py-5 text-white hover:text-gray-400"
                >
                  Contáctanos Aquí
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BannerRegiones />
      {/* modal */}
      {modalOpen && <Modal onClose={handleModalToggle}></Modal>}
      {/* modal */}
    </>
  );
};

export default Page;
