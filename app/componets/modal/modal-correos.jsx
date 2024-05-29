"use client";
import React, { useState } from "react";
import { Ctrl_contacto } from "@/app/controllers/Ctrl_contacto";

const Modal = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // const [sendSuccess, setSendSuccess] = useState(false);
  // const [sendError, setSendError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      formData.subject = "Denuncia";
      const success = await Ctrl_contacto(formData);
      if (success) {
        alert('¡El correo se ha enviado con éxito!');
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error.message);
      alert('Ha ocurrido un error al enviar el formulario');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <img
          src="/logos/logoRojoMalpo.png"
          alt="Logo"
          className="mr-4 h-6 w-auto"
        />
      </div>
      <h1 className="text-center text-lg font-bold">{props.titulo}</h1>
      {/* {sendSuccess && (
        <div className="bg-green-500 text-white text-center py-2 mb-4 rounded">
          ¡El correo se ha enviado con éxito!
        </div>
      )}
      {sendError && (
        <div className="bg-red-500 text-white text-center py-2 mb-4 rounded">
          Error al enviar el correo. Inténtalo de nuevo.
        </div>
      )} */}
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
  );
};

export default Modal;

