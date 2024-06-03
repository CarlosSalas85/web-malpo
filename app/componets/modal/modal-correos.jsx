"use client";
import React, { useState } from "react";
import { Ctrl_contacto } from "@/app/controllers/Ctrl_contacto";
import ReCAPTCHA from "react-google-recaptcha";

const Modal = (props) => {
  var captcha_key = process.env.NEXT_PUBLIC_SMTP_API_CAPTCHA_CONTACTO_KEY;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Por favor, completa el captcha.");
      return;
    }

    try {
      const formDataWithCaptcha = { ...formData, subject: "Denuncia", captchaToken };
      const success = await Ctrl_contacto(formDataWithCaptcha);

      if (success) {
        setSuccessMessage("¡El correo se ha enviado con éxito!");
        setErrorMessage("");
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error.message);
      setErrorMessage("Ha ocurrido un error al enviar el formulario");
      setSuccessMessage("");
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
      {successMessage && (
        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
          <span className="font-medium"></span> {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">¡ERROR!</span> {errorMessage}
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
          <ReCAPTCHA 
            sitekey={captcha_key}
            onChange={handleCaptchaChange}
            className="mx-auto"
          />
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


