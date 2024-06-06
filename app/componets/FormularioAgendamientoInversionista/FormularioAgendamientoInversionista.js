'use client';
import React, { useState, useEffect } from "react";
import BannerImage from "@/app/componets/banner/banner-imagen";
import { Ctrl_inversionista } from "@/app/controllers/Ctrl_inversionista";
import { Ctrl_aplicar_filtros } from "@/app/controllers/Ctrl_aplicar_filtros";
import ReCAPTCHA from "react-google-recaptcha";

const FormularioAgendamientoInversionista = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    date: "",
    message: "",
  });
  const currentDate = new Date().toLocaleDateString('en-CA').split('/').reverse().join('-');
  const [captchaToken, setCaptchaToken] = useState("");
  var captcha_key = process.env.NEXT_PUBLIC_SMTP_API_CAPTCHA_CONTACTO_KEY;
  const [errorMessage, setErrorMessage] = useState("");
  const [proyectos, setProyectos] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  useEffect(() => {
    const ids = {
      estadoInversion: 0,
      etapaId: 0,
      ciudadId: 0,
      tipoProyectoId: 0,
      subsidioId: 0,
      dormitorioId: 0,
      banoId: 0,
    };

    Ctrl_aplicar_filtros(ids)
      .then(data_proyectos => {
        setProyectos(data_proyectos.datos);
      })
      .catch(error => {
        console.error("Error al obtener proyectos:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProjectChange = (e) => {
    const projectValue = e.target.value;
    setSelectedProject(projectValue);
    setFormData({ ...formData, project: projectValue }); // Actualiza formData.project
  };


  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setAlert({
        type: "danger",
        message: "Por favor, complete el CAPTCHA.",
      });
      return;
    }

    try {
      const response = await Ctrl_inversionista({ ...formData, captchaToken });


      if (response.success) {
        setAlert({
          type: "success",
          message: "¡El correo se ha enviado con éxito!",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          project: "",
          message: "",
        });
      } else {
        throw new Error(response.message || 'Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error.message);
      setAlert({
        type: "danger",
        message: `Ha ocurrido un error al enviar el formulario: ${error.message}`,
      });
    }
  };

  return (
    <>
         <div className="mx-auto mb-4 mt-10 w-11/12 md:w-10/12">
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
            {alert.message && (
              <div
                className={`p-4 mb-4 text-sm rounded-lg ${alert.type === "success" ? "text-green-800 bg-green-50" : "text-red-800 bg-red-50"}`}
                role="alert"
              >
                <span className="font-medium"></span> {alert.message}
              </div>
            )}
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
                min={currentDate}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="project" className="mb-2 block">
                Proyecto:
              </label>
              <select
                id="project"
                name="project"
                value={selectedProject}
                onChange={handleProjectChange}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                required
              >
                <option value="" disabled>
                  Selecciona un proyecto
                </option>
                {proyectos.map((proyecto) => (
                  <option key={proyecto.idProyecto} value={proyecto.nombreWebProyecto}>
                    {proyecto.nombreWebProyecto}
                  </option>
                ))}
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
            <ReCAPTCHA
              sitekey={captcha_key}
              onChange={handleCaptchaChange}
              className="mx-auto"
            />
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
    </>
  );
};

export default FormularioAgendamientoInversionista;