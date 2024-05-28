"use client";
import { useState } from "react";

import BannerImage from "@/app/componets/banner/banner-imagen";
import BannerProyectos from "@/app/componets/banner-proyectos/banner-proyectos";
import NavComoComprar from "@/app/componets/banner-como-comprar/nav-como-comprar";
import ButtonComoComprar from "@/app/componets/banner-como-comprar/button-como-comprar";

const Modal = ({ onClose, children }) => {
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
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log(formData);
  };

  return (
    <>
      <BannerImage
        imagenMobile="https://c.animaapp.com/ldNQXCM1/img/hero-image.png"
        imagenDesktop="https://c.animaapp.com/ldNQXCM1/img/hero-image.png"
      />
      <div className="flex flex-col justify-center pb-6 md:flex-row">
        <NavComoComprar activo="1" />
        <div className="mr-auto flex w-full flex-col md:w-5/6">
          <div className="w-11/12">
            <div className="pb-6 pt-6">
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

            <div className="pb-6 pt-6">
              <h1 className="ml-4 pb-8 text-xl">
                ¿Dudas respecto del proceso? contacta a nuestra ejecutiva
              </h1>
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
      <BannerProyectos
        texto="Proyectos por región"
        titulo="región"
        filtro="region"
      />
      {/* modal */}
      {modalOpen && (
  <Modal onClose={handleModalToggle}>
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg overflow-y-auto max-h-screen w-1100px">
        <div className="flex justify-between items-center px-4 py-2 bg-redMalpo">
          <div className="font-bold text-rojoMalpo text-2xl">Cotización</div>
          <img src="/logos/logoRojoMalpo.png" alt="Imagen de cotización" className="w-168px h-auto" />
          <button className="text-gray-600 text-lg" onClick={handleModalToggle}>
            <img src="https://c.animaapp.com/o0ROixJd/img/cancel@2x.png" alt="Cancel" className="w-12 h-12" />
          </button>
        </div>
        <div className="bg-rojoMalpo text-white text-center font-bold py-4">
          Proyecto {proyectoData?.datos?.proyecto?.nombreWebProyecto}
        </div>
        <div className="px-4 py-2">
          <div className="mb-4 font-bold">1. Tus Datos</div>
          <form className="flex flex-wrap" onSubmit={handleSubmit}>
            <div className="w-full md:w-1/3 mb-4">
              <label htmlFor="nombre" className="block mb-1">Nombre:</label>
              <input type="text" id="nombre" name="nombre" className="w-full border border-gray-300 rounded px-4 py-2" />
              <span className="error">{errors.nombre}</span>
            </div>
            <div className="w-full md:w-1/3 mb-4">
              <label htmlFor="rut_cliente" className="block mb-1">Rut:</label>
              <input type="text" id="rut_cliente" name="rut_cliente" className="w-full border border-gray-300 rounded px-4 py-2" />
              <span className="error">{errors.rut_cliente}</span>
            </div>
            <div className="w-full md:w-1/3 mb-4">
              <label htmlFor="email" className="block mb-1">Correo:</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-4 py-2" />
              <span className="error">{errors.email}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Modal>
)}

      {/* modal */}
    </>
  );
};

export default Page;
