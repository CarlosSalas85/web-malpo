"use client";
import React from "react";
import { useState } from "react";

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
      <button
        onClick={handleModalToggle}
        className="fondo-malpo-rojo text-l my-2 w-[270px] rounded py-5 text-white hover:text-gray-400"
      >
        Cotizar
      </button>

      {/* modal */}
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
      {/* modal */}
    </>
  );
};

export default Page;
