"use client";
import React from "react";
import { useState } from "react";

import BannerImage from "@/app/componets/banner/banner-imagen";
import BannerBlog from "@/app/componets/banner-blog/banner-blog";

const page = () => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log(formData);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <>
      <BannerImage
        imagenMobile="https://c.animaapp.com/ldNQXCM1/img/hero-image.png"
        imagenDesktop="https://c.animaapp.com/ldNQXCM1/img/hero-image.png"
      />

      <div className="mx-auto mb-4 mt-10 w-11/12 md:w-10/12">
        <h1 className="mb-2 text-3xl sm:text-center">
          Atención virtual para Inversionistas
        </h1>
        <p className="text-18px pt-4 sm:text-center">
          ¿Estás pensando en comprar una casa o un departamento como inversión?
          ¿Quieres conocer las mejores opciones del mercado, los beneficios
          tributarios y las proyecciones de rentabilidad? Entonces, no te
          pierdas la oportunidad de agendar una videollamada con una ejecutiva
          de asesoramiento de Malpo.
        </p>

        <p className="text-18px pt-4 sm:text-center">
          Nuestra ejecutiva te orientará y resolverá todas tus dudas, sin que
          tengas que salir de tu casa u oficina. Solo tienes que ingresar tus
          datos, elegir el día y la hora que más te acomode, y listo.
        </p>

        <p className="text-18px pt-4 font-semibold sm:text-center">
          *confirmaremos la hora mediante llamada telefonica.
        </p>

        <div className="mt-6">
          <h1 className="mb-2 text-3xl sm:text-center">
            Formulario de agendamiento
          </h1>
          <p className="text-18px sm:text-center">
            Necesitamos su email y/o teléfono para confirmar la fecha y hora de
            la visita. Así podremos reagendarla si tiene algún inconveniente.
            Por favor, ingrese sus datos en el formulario que aparece a
            continuación.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md">
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
            <div className="mb-4">
              <label htmlFor="date" className="mb-2 block">
                Fecha:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="option" className="mb-2 block">
                Opción:
              </label>
              <select
                id="option"
                name="option"
                value={formData.option}
                onChange={handleChange}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                required
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="option1">Opción 1</option>
                <option value="option2">Opción 2</option>
                <option value="option3">Opción 3</option>
              </select>
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
      </div>

      <BannerBlog />
    </>
  );
};

export default page;
