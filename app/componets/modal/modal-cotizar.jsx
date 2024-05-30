"use client";
import React from "react";
import { useState } from "react";

const Modal = ({ onClose, children }) => {
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
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const handleModalToggle2 = () => {
    setModalOpen2(!modalOpen2);
  };

  const [formData, setFormData] = useState({
    name: "",
    rut: "",
    email: "",
    phone: "",
    city: "",
    referral: "",
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
    setModalOpen(!modalOpen);
    setModalOpen2(!modalOpen2);
  };

  return (
    <>
      <butt
        on
        onClick={handleModalToggle}
        className="fondo-malpo-rojo text-l my-2 w-[270px] rounded py-5 text-white hover:text-gray-400"
      >
        Cotizar
      </butt>

      {modalOpen && (
        <Modal onClose={handleModalToggle}>
          <div className="container mx-auto w-full px-4 py-2">
            <div className="mb-3">
              <img
                src="/logos/logoRojoMalpo.png"
                alt="Logo"
                className="mr-4 h-6 w-auto"
              />
            </div>
            <h1 className="text-lg font-bold">Proyecto</h1>
            <form onSubmit={handleSubmit} className="mx-auto max-w-full">
              {/*  <h1 className="text-l flex justify-start py-4 font-bold">
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

              <h1 className="text-l flex justify-start py-4 font-bold">
                2. Simula
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
              </div> */}

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

      {modalOpen2 && (
        <Modal onClose={handleModalToggle2}>
          <div className="container mx-auto w-full px-4 py-2">
            <div className="mb-3 flex items-center justify-between">
              <h1 className="text-lg font-bold">Cotización</h1>
              <img
                src="/logos/logoRojoMalpo.png"
                alt="Logo"
                className="h-6 w-auto"
              />
            </div>

            <div className="mx-auto mb-4 mt-4">
              <p className="text-18px pt-4 sm:text-center">
                En MALPO nos esforzamos por ofrecer a nuestros clientes el mejor
                servicio y la mayor transparencia en nuestras operaciones. Por
              </p>
            </div>

            <div className="mx-auto mb-4 mt-4 flex h-28 flex-col items-center justify-center bg-rojoMalpo text-white">
              <span>texto</span>
              <span>texto</span>
            </div>

            <div className="mt-4 flex justify-end pr-4 text-rojoMalpo">
              <button className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 9V2h12v7M6 18h12v4H6v-4zM6 14h12v-4H6v4zM18 9H6M4 18h2M18 18h2M18 6h2M6 6H4"
                  />
                </svg>
                <span className="ml-2">Imprimir</span>
              </button>
            </div>

            <div className="mx-auto mb-4 mt-4 flex h-2 flex-col items-center justify-center bg-rojoMalpo text-white"></div>

            <div className="mx-auto mb-4 mt-4">
              <p className="text-18px pt-4 sm:text-center">
                En MALPO nos esforzamos por ofrecer a nuestros clientes el mejor
                servicio y la mayor transparencia en nuestras operaciones. Por
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Page;
