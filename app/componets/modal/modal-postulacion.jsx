"use client";
import React from "react";
import { useState } from "react";

const Modal = (props) => {
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
  };

  return (
    <div className="container mx-auto w-full px-4 py-2">
      <div className="mb-3">
        <img
          src="/logos/logoRojoMalpo.png"
          alt="Logo"
          className="mr-4 h-6 w-auto"
        />
      </div>
      <h1 className="text-lg font-bold text-center">Proyecto</h1>
      <form onSubmit={handleSubmit} className="mx-auto max-w-full">
        <h1 className="text-l flex justify-start py-4 font-bold">
          1. Tus Datos
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 flex justify-start">
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
            <label htmlFor="rut" className="mb-2 flex justify-start">
              RUT:
            </label>
            <input
              type="text"
              id="rut"
              name="rut"
              value={formData.rut}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 flex justify-start">
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
            <label htmlFor="phone" className="mb-2 flex justify-start">
              Teléfono:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="mb-2 flex justify-start">
              Ciudad:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="referral" className="mb-2 flex justify-start">
              ¿Cómo te enteraste?
            </label>
            <select
              id="referral"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              <option value="internet">Internet</option>
              <option value="tv">Televisión</option>
              <option value="radio">Radio</option>
              <option value="amigo">Amigo</option>
              <option value="otros">Otros</option>
            </select>
          </div>
        </div>

        <h1 className="text-l flex justify-start py-4 font-bold">2. Simula</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 flex justify-start">
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
            <label htmlFor="rut" className="mb-2 flex justify-start">
              RUT:
            </label>
            <input
              type="text"
              id="rut"
              name="rut"
              value={formData.rut}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 flex justify-start">
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
            <label htmlFor="phone" className="mb-2 flex justify-start">
              Teléfono:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="mb-2 flex justify-start">
              Ciudad:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="referral" className="mb-2 flex justify-start">
              ¿Cómo te enteraste?
            </label>
            <select
              id="referral"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              <option value="internet">Internet</option>
              <option value="tv">Televisión</option>
              <option value="radio">Radio</option>
              <option value="amigo">Amigo</option>
              <option value="otros">Otros</option>
            </select>
          </div>
        </div>

        <h1 className="text-l flex justify-start py-4 font-bold">
          3. Tu Dividendo
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 flex justify-start">
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
            <label htmlFor="rut" className="mb-2 flex justify-start">
              RUT:
            </label>
            <input
              type="text"
              id="rut"
              name="rut"
              value={formData.rut}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 flex justify-start">
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
            <label htmlFor="phone" className="mb-2 flex justify-start">
              Teléfono:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="mb-2 flex justify-start">
              Ciudad:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="referral" className="mb-2 flex justify-start">
              ¿Cómo te enteraste?
            </label>
            <select
              id="referral"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              <option value="internet">Internet</option>
              <option value="tv">Televisión</option>
              <option value="radio">Radio</option>
              <option value="amigo">Amigo</option>
              <option value="otros">Otros</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="mb-4">
            <label htmlFor="referral" className="mb-2 flex justify-start">
              ¿Cómo te enteraste?
            </label>
            <select
              id="referral"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              <option value="internet">Internet</option>
              <option value="tv">Televisión</option>
              <option value="radio">Radio</option>
              <option value="amigo">Amigo</option>
              <option value="otros">Otros</option>
            </select>
          </div>
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
