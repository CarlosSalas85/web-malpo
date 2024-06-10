"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Ctrl_codigo_web_pay } from '@/app/controllers/Ctrl_codigo_web_pay';
import { Ctrl_email_pagar_reserva } from '@/app/controllers/Ctrl_email_pagar_reserva';
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import { useRouter } from 'next/navigation';



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


const Page = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  var captcha_key = process.env.NEXT_PUBLIC_SMTP_API_CAPTCHA_CONTACTO_KEY;
  const [captchaToken, setCaptchaToken] = useState("");

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
    if (modalOpen === true) {
      setSuccessMessage(null);
      setErrorMessage(null);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);
  };


  const [codigoWebpay, setCodigoWebpay] = useState(null);
  const [showCodigoWebpay, setShowCodigoWebpay] = useState(false);
  const [rut_cliente, setRutCliente] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [ejecutivas, setEjecutivas] = useState([]);
  const [nombreEjecutiva, setNombreEjecutiva] = useState('');
  const [lote, setLote] = useState('');
  const [linkGetnet, setLinkGetnet] = useState(null);
  const [habilitarCampos, setHabilitarCampos] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setSuccessMessage('');
  };


  // Función para validar codigoWebPay
  const handleLupaClick = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      // Enviar el formulario a la API
      const response = await Ctrl_codigo_web_pay(codigoWebpay);
      if (response === null) {
        throw new Error('Error con el codigo de Reserva');
        setErrorMessage("Ha ocurrido un con el código para realizar el pago de la reserva");
      } else {
        setHabilitarCampos(true);
        setEjecutivas(response?.datos?.ejecutivas);
        setNombreProyecto(response?.datos?.nombreWebProyecto);
        setLinkGetnet(response?.datos?.urlReservaProyecto);
        if (linkGetnet === null) {
          setErrorMessage("Este formulario no tiene link de Getnet asociado");
          setLinkGetnet(null);
          setEjecutivas(null);
          setNombreProyecto(null);
          setHabilitarCampos(false);
        }
      }
      // Realizar cualquier otra acción después de enviar el formulario
    } catch (error) {
      setErrorMessage("Ha ocurrido un error al ingresar el código de la reserva, sino cuenta con uno, por favor,contacte con ejecutiva");
      // setSuccessMessage("");
    }
  };



  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    if (!captchaToken) {
      setErrorMessage("Por favor, completa el captcha.");
      setSuccessMessage("");
      return;
    }
    // Validar el formulario antes de enviar
    const validationErrors = validateForm({
      rut_cliente,
      ciudad,
      telefono,
      nombreProyecto,
      nombreEjecutiva,
      lote,
    });

    if (Object.keys(validationErrors).length === 0) {
      // Crear un objeto con todos los datos del formulario
      const formData = {
        rut_cliente,
        ciudad,
        telefono,
        nombreProyecto,
        nombreEjecutiva,
        lote,
      };

      try {
        // Enviar el formulario a la API
        const response = await Ctrl_email_pagar_reserva(formData);
        if (!response) {
          throw new Error('Error al enviar el formulario');
        }
        // Realizar cualquier otra acción después de enviar el formulario
        setSuccessMessage("¡El correo se ha enviado con éxito!");
        setErrorMessage("");
        // setModalOpen(false);
        setRutCliente("");
        setCiudad("");
        setTelefono("");
        setNombreProyecto("");
        setNombreEjecutiva("");
        setLote("");
        if (linkGetnet) {
          window.open(linkGetnet, '_blank')
        }
      } catch (error) {
        // console.error('Error al enviar el formulario:', error.message);
        setErrorMessage("Ha ocurrido un error al enviar el formulario");
        setSuccessMessage("");
      }
    } else {
      // Mostrar errores si el formulario no es válido
      setErrors(validationErrors);
    }
  };



  // Función para validar el RUT chileno
  const validarRut = (rut_cliente) => {
    if (rut_cliente.length < 9 || rut_cliente.length > 10) return false; // Verificar longitud
    if (!/^[0-9]+-[0-9kK]{1}$/.test(rut_cliente)) return false;
    let tmp = rut_cliente.split('-');
    let digv = tmp[1];
    let rutSinDigito = tmp[0];
    if (digv === 'K') digv = 'k';
    //AL HACER IGUALDAD ES ESTRICTA, ES DECIR, === SE CAIA, EN LA CONSOLA SE VE NUMERO NEGRO Y AZUL, AL QUITAR ESA IGUALDAD ESTRICTA Y DEJAR SOLO == FUNCIONA BIEN
    return dv(rutSinDigito) == digv;
  }
  // Función para calcular el dígito verificador
  const dv = (T) => {
    let M = 0, S = 1;
    for (; T; T = Math.floor(T / 10))
      S = (S + T % 10 * (9 - M++ % 6)) % 11;
    return S ? S - 1 : 'k';
  }

  // Función para manejar cambios en el campo de RUT
  const handleRutChange = (e) => {
    let nuevoRut = e.target.value.replace(/[^\dkK]/g, ''); // Permitir solo números y la letra 'k' en cualquier caso
    // Agregar guion al final si la longitud es 9 o 10
    if (nuevoRut.length >= 8 && nuevoRut.length <= 10) {
      nuevoRut = nuevoRut.substring(0, nuevoRut.length - 1) + '-' + nuevoRut.substr(-1);
    }
    // Convertir a minúsculas para permitir la letra 'k' en cualquier caso
    nuevoRut = nuevoRut.toLowerCase();
    // Validar el nuevo RUT
    setRutValido(validarRut(nuevoRut));
    // Actualizar el estado del RUT
    setRut(nuevoRut);
  };



  // Función para validar el formulario
  const validateForm = (data) => {
    const errors = {};
    if (!data.rut_cliente.trim()) {
      errors.rut_cliente = 'El RUT es requerido';
    } else if (!validarRut(data.rut_cliente)) {
      errors.rut_cliente = 'El RUT ingresado es inválido';
    }
    if (!data.ciudad.trim()) {
      errors.ciudad = 'La ciudad es requerida';
    }
    if (!data.telefono.trim()) {
      errors.telefono = 'El teléfono es requerido';
    } else if (!/^[0-9]*$/.test(data.telefono.trim())) {
      errors.telefono = 'El teléfono solo puede contener números';
    }
    if (!data.nombreProyecto.trim()) {
      errors.nombreProyecto = 'El nombre del proyecto es requerido';
    }
    if (!data.nombreEjecutiva.trim()) {
      errors.nombreEjecutiva = 'El nombre de la ejecutiva es requerida';
    }
    if (!data.lote) {
      errors.lote = 'Selecciona al menos un lote';
    }
    return errors;
  };





  return (
    <>
      <div className="mt-4 w-full px-4 md:mt-0 md:w-2/3 xl:w-1/3">
        <a className="cursor-pointer"
          onClick={handleModalToggle}>
          <div className="flex h-36 items-center justify-between rounded-xl border bg-grisMalpo px-2 text-white shadow-xl">
            <span className="text-3xl font-normal hover:text-gray-400">
              Pagar Reserva
            </span>
            <img className="h-12 w-12" alt="icono" src="https://c.animaapp.com/K6aqUhg9/img/real-estate-agent@2x.png" />
          </div>
        </a>
      </div>
      {modalOpen && (
        <Modal onClose={handleModalToggle}>
          <div className="container mx-auto px-4 py-2">
            <div className="mb-3">
              <img
                src="/logos/logoRojoMalpo.png"
                alt="Logo"
                className="mr-4 h-6 w-auto"
              />
            </div>
            <form onSubmit={handleSubmit} className="mx-auto max-w-full">
              <div className="mb-4">
                {!habilitarCampos && errorMessage && (
                  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">¡ERROR!</span> {errorMessage}
                  </div>
                )}
                <div className="flex justify-center items-center h-full">
                  <div className="w-1/2">
                    <label htmlFor="CodReserva" className="mb-2 flex justify-start">
                      Codigo para pagar reserva:
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type={showCodigoWebpay ? 'text' : 'password'}
                        id="codigoWebpay"
                        name="codigoWebpay"
                        value={codigoWebpay}
                        onChange={(e) => setCodigoWebpay(e.target.value)}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        disabled={habilitarCampos}
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-8 flex items-center pr-3 cursor-pointer"
                        onClick={handleLupaClick}
                      >
                        <Image
                          src="/iconos/pagarReserva/ICONOS WEB_Lupa.png"
                          width={20} // Ancho del ícono en píxeles
                          height={20} // Altura del ícono en píxeles
                          alt="Icono de lupa"
                        />
                      </button>
                      <span
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={() => setShowCodigoWebpay(!showCodigoWebpay)}
                      >
                        <Image
                          src={showCodigoWebpay ? '/iconos/pagarReserva/ojo_abierto.png' : '/iconos/pagarReserva/ojo_cerrado.png'}
                          width={20} // Ancho del ícono en píxeles
                          height={20} // Altura del ícono en píxeles
                          alt={showCodigoWebpay ? 'Ojo abierto' : 'Ojo cerrado'}
                        />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
              <div className="mb-8 mt-8 text-center">
                <h1 className="text-lg font-bold">Pagar Reserva</h1>
              </div>
              {habilitarCampos && successMessage && (
                <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                  <span className="font-medium"></span> {successMessage}
                </div>
              )}
              {habilitarCampos && errorMessage && (
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  <span className="font-medium">¡ERROR!</span> {errorMessage}
                </div>
              )}
              <h1 className="text-l flex justify-start py-4 font-bold">
                1. Datos del comprador
              </h1>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="mb-4">
                  <label htmlFor="rut_cliente" className="mb-2 flex justify-start">
                    Rut:
                  </label>
                  <input
                    type="text"
                    id="rut_cliente"
                    name="rut_cliente"
                    value={rut_cliente}
                    onChange={handleInputChange(setRutCliente)}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    required
                  />
                  {errors.rut_cliente && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.rut_cliente}</span>}
                </div>
                <div className="mb-4">
                  <label htmlFor="ciudad" className="mb-2 flex justify-start">
                    Ciudad:
                  </label>
                  <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    value={ciudad}
                    onChange={handleInputChange(setCiudad)}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="telefono" className="mb-2 flex justify-start">
                    Teléfono:
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={telefono}
                    onChange={handleInputChange(setTelefono)}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    required
                  />
                  {errors.telefono && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.telefono}</span>}
                </div>
              </div>
              <h1 className="text-l flex justify-start py-4 font-bold">
                2. Datos de la Ejecutiva
              </h1>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="mb-4">
                  <label htmlFor="nombreProyecto" className="mb-2 flex justify-start">
                    Nombre del proyecto
                  </label>
                  <input
                    type="text"
                    id="nombreProyecto"
                    name="nombreProyecto"
                    value={nombreProyecto}
                    onChange={handleInputChange(setNombreProyecto)}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    disabled
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="nombreEjecutiva" className="mb-2 flex justify-start">
                    Nombre Ejecutiva:
                  </label>
                  <select
                    id="nombreEjecutiva"
                    name="nombreEjecutiva"
                    value={nombreEjecutiva}
                    onChange={handleInputChange(setNombreEjecutiva)}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    required
                  >
                    <option value="" disabled>Seleccione una ejecutiva</option>
                    {ejecutivas?.length > 0 && ejecutivas.map((ejecutiva) => (
                      <option key={ejecutiva.idUsuarioInnova} value={ejecutiva.usuarioNombre}>
                        {ejecutiva.usuarioNombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="lote" className="mb-2 flex justify-start">
                    Manzana o Lote
                  </label>
                  <input
                    type="text"
                    id="lote"
                    name="lote"
                    value={lote}
                    onChange={handleInputChange(setLote)}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey={captcha_key}
                  onChange={handleCaptchaChange}
                  className="mx-auto mt-4"
                /></div>
              <div className="text-center">
                <button
                  type="submit"
                  className={`focus:shadow-outline rounded bg-rojoMalpo px-4 py-2 text-white focus:outline-none ${habilitarCampos ? 'hover:bg-gray-400 mt-4' : 'cursor-not-allowed opacity-50 mt-4'}`}
                  disabled={!habilitarCampos}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  )
};

export default Page;
