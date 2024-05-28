'use client';
import React, { useState } from "react";
import { Ctrl_contacto } from "@/app/controllers/Ctrl_contacto";
import "./styleFooter.css";

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

const Footer = ({ redes }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formularioEnviado, setFormularioEnviado] = useState(null);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
    setSendSuccess(false); // Reset success message when opening the modal
    setSendError(false);   // Reset error message when opening the modal
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      formData.subject = "Contacto";
      const response = await Ctrl_contacto(formData);
      if (response && !response.ok) {
        throw new Error('Error al enviar el formulario', response);
      }
      setSendSuccess(true);
      setSendError(false);
    } catch (error) {
      console.error('Error al enviar el formulario:', error.message);
      setSendSuccess(false);
      setSendError(true);
    }
  };

  return (
    <>
      <footer className="bg-grisMalpo px-4 py-8 text-white">
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className="text-left md:mr-8 md:text-center">
            <img
              src="https://c.animaapp.com/g9H7zkhE/img/logo-malpo---blanco.svg"
              className="logo-malpo-blanco mx-0 sm:mx-auto sm:mb-6"
              alt="Logo malpo blanco"
            />
            <div className="mt-10 flex flex-col items-start sm:flex-row sm:justify-between">
              <div className="text-left sm:mb-0 sm:mr-4 sm:pr-12">
                <p className="mb-4">
                  <a href="#" className="hover:text-gray-400">
                    Nosotros
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#" className="hover:text-gray-400" onClick={handleModalToggle}>
                    Contacto
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#" className="hover:text-gray-400">
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

        <div className="md:text-center pt-10 text-xs">
          @ 2024 Malpo.- Las imágenes y textos contenidos en este sitio web son
          meramente ilustrativos y referenciales, por lo que podrían no
          representar la realidad. La empresa se reserva la facultad de efectuar
          cambios en los proyectos. Los precios están sujetos a disponibilidad de
          los productos. Exija su cotización en las salas y puntos de ventas.
        </div>
      </footer>

      {modalOpen && (
        <Modal onClose={handleModalToggle}>
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <img
                src="/logos/logoRojoMalpo.png"
                alt="Logo"
                className="mr-4 h-6 w-auto"
              />
            </div>
            <h1 className="text-center text-lg font-bold">
              Formulario de Contacto
            </h1>
            {sendSuccess && (
              <div className="bg-green-500 text-white text-center py-2 mb-4 rounded">
                ¡El correo se ha enviado con éxito!
              </div>
            )}
            {sendError && (
              <div className="bg-red-500 text-white text-center py-2 mb-4 rounded">
                Error al enviar el correo. Inténtalo de nuevo.
              </div>
            )}
            <form onSubmit={handleSubmit} className="mx-auto max-w-md">
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 block">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block">
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="mb-2 block">
                  Teléfono:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block">
                  Mensaje:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="focus:shadow-outline rounded bg-rojoMalpo px-4 py-2 text-white hover:bg-gray-400 focus:outline-none"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Footer;
