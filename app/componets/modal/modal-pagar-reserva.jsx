"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Ctrl_cotizador } from '@/app/controllers/Ctrl_cotizador';
import { Ctrl_codigo_web_pay } from '@/app/controllers/Ctrl_codigo_web_pay';
import { Ctrl_como_te_enteraste } from '@/app/controllers/Ctrl_como_te_enteraste';
import { Ctrl_atributos_importantes } from '@/app/controllers/Ctrl_atributos_importantes';
import generatePDF from '@/app/componets/PDFGenerator/PDFGenerator'; // Importa la función generatePDF desde el archivo donde la defines
import ReCAPTCHA from "react-google-recaptcha";
import { Ctrl_email_pagar_reserva } from '@/app/controllers/Ctrl_email_pagar_reserva';


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
  const [modalOpen2, setModalOpen2] = useState(false);
  const [cotizarDeNuevo, setCotizarDeNuevo] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  // const handleCaptchaChange = (value) => {
  //   setCaptchaToken(value);
  // };



  //Volver a Cotizar se muestra en el modal del resultado del dividendo
  //Permite volver a abrir el modal de cotización, sin modificar los inputs
  const volverACotizar = () => {
    setCotizarDeNuevo(true);
    handleModalToggle2();
    setModalOpen(!modalOpen);
    setErrors({});
    setSuccessMessage("");
    setErrorMessage("");
    // setCaptchaToken("");
  }

  const NumeroFormateado = ({ numero }) => {
    const numeroFormateado = numero.toLocaleString(); // Formatea el número con separadores de miles
  }


  // console.log("props de Pagar Reserva",props.ejecutivas);
  const [codigoWebpay, setCodigoWebpay] = useState('');
  const [showCodigoWebpay, setShowCodigoWebpay] = useState(false);
  const [nombre, setNombre] = useState('');
  const [rut_cliente, setRutCliente] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [ejecutivas, setEjecutivas] = useState([]);
  const [nombreEjecutiva, setNombreEjecutiva] = useState('');
  const [lote, setLote] = useState('');
  const [habilitarCampos, setHabilitarCampos] = useState(false);
  const [errors, setErrors] = useState({});
  // Función para validar codigoWebPay
  const handleLupaClick = async (event) => {
    event.preventDefault();
    try {
      // Enviar el formulario a la API
      const response = await Ctrl_codigo_web_pay(codigoWebpay);
      console.log("La respuesta de la API es:", response);
      // if (response && !response.ok) {
      //   throw new Error('Error');
      // }
      setHabilitarCampos(true);
      setEjecutivas(response?.datos?.ejecutivas);
      setNombreProyecto(response?.datos?.nombreWebProyecto);
      console.log("habilitarCampos", "ejecutivas", habilitarCampos, ejecutivas);
      // Ctrl_email_pagar_reserva();
      // Realizar cualquier otra acción después de enviar el formulario
    } catch (error) {
      console.error('Error al enviar el formularioooo:', error.message);
      setErrorMessage("Ha ocurrido un error al enviar el formulario");
      // setSuccessMessage("");
    }

    // Mostrar errores si el formulario no es válido
    // setErrors(validationErrors);

    console.log("Lupa clickeada, código Webpay:", codigoWebpay);
  };



  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    // if (!captchaToken) {
    //   setErrorMessage("Por favor, completa el captcha.");
    //   setSuccessMessage("");
    //   return;
    // }
    // Validar el formulario antes de enviar
    const validationErrors = validateForm({
      nombre,
      rut_cliente,
      email,
      telefono,
      ciudad,
    });

    if (Object.keys(validationErrors).length === 0) {
      // Crear un objeto con todos los datos del formulario
      const formData = {
        nombre,
        email,
        telefono,
        rut_cliente,
        ciudad,
        contacto,
        cod_unysoft,
        modelo_vivienda,
        valorUFModelo,
        subsidio,
        montoSubsidio,
        atributos,
        otros_atributos,
        porcentajeCredito,
        plazo,
        montoCreditoHipotecario,
        ahorroMinimo,
        pieReserva,
        edad,
        estado_civil,
        genero,
        hijos,
        motivo_compra,
        otroMotivoCompra,
        residente_vivienda,
        otroQuienesHabitaran
      };

      try {
        // Enviar el formulario a la API
        const response = await Ctrl_cotizador(formData);
        if (response && !response.ok) {
          throw new Error('Error al enviar el formulario');
        }
        // Realizar cualquier otra acción después de enviar el formulario
        setModalOpen(false);
        setErrorMessage("");
        setModalOpen2(true);

      } catch (error) {
        console.error('Error al enviar el formulario:', error.message);
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

  // Función para manejar el cambio en la selección del contacto
  const handleContactoChange = (e) => {
    const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
    setComoTeEnteraste(selectedValues);
  };


  const handleSelectChangeAtributos = (event) => {
    const value = Array.from(event.target.selectedOptions, option => option.value);

    // Obtener los nombres de los NombresAtributos seleccionados
    const selectedValuesAtributos = optionsAtributosImportantes
      .filter((atributo) => value.includes(atributo.nombre))
      .map((atributo) => atributo.nombre);

    // Actualizar el estado de los NombresAtributos seleccionados
    setAtributosImportantes(selectedValuesAtributos);

    const selectedValuesAtributosIds = optionsAtributosImportantes
      .filter((atributo) => value.includes(atributo.nombre))
      .map((atributo) => (atributo.nombre === "OTRO" ? "OTRO" : atributo.cod_atributo));

    // Actualizar el estado de los atributos seleccionados
    setAtributos(selectedValuesAtributosIds);

    // Verificar si se ha seleccionado "OTRO" y ajustar el estado en consecuencia
    if (selectedValuesAtributos.includes("OTRO")) {
      setOtrosAtributos(''); // Restablece el estado de otrosAtributos si "OTRO" está seleccionado
      setIsSelectDisabledOtrosAtributos(false); // Asegura que el select no esté deshabilitado
    } else {
      setIsSelectDisabledOtrosAtributos(false); // Permite que el select esté habilitado si "OTRO" no está seleccionado
    }
  };

  const handleOtrosAtributosChange = (e) => {
    const value = e.target.value;
    setOtrosAtributos(value);
    if (value.trim() !== '') {
      setIsSelectDisabledOtrosAtributos(true); // Deshabilita el select si el textarea contiene texto
    } else {
      setIsSelectDisabledOtrosAtributos(false); // Habilita el select si el textarea está vacío
    }
  };

  const handleOtrosMotivosChange = (e) => {
    const value = e.target.value;
    setOtroMotivoCompra(value);
    if (value.trim() !== '') {
      setIsSelectDisabledMotivoCompra(true); // Deshabilita el select si el textarea contiene texto
    } else {
      setIsSelectDisabledMotivoCompra(false); // Habilita el select si el textarea está vacío
    }
  };

  // Función para validar el formulario
  const validateForm = (data) => {
    const errors = {};
    if (!data.nombre.trim()) {
      errors.nombre = 'El nombre es requerido';
    }
    if (!data.rut_cliente.trim()) {
      errors.rut_cliente = 'El RUT es requerido';
    } else if (!validarRut(data.rut_cliente)) {
      errors.rut_cliente = 'El RUT ingresado es inválido';
    }
    if (!data.email.trim()) {
      errors.email = 'El correo electrónico es requerido';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'El correo electrónico es inválido';
    }
    if (!/^[0-9]*$/.test(data.telefono.trim())) {
      errors.telefono = 'El teléfono solo puede contener números';
    }
    if (!data.telefono.trim()) {
      errors.telefono = 'El teléfono es requerido';
    }
    if (!data.ciudad.trim()) {
      errors.ciudad = 'La ciudad es requerida';
    }
    if (!data.contacto || data.contacto.length === 0) {
      errors.contacto = 'Selecciona al menos una opción de cómo te enteraste';
    }

    if (typeof data.plazo === 'undefined' || !data.plazo.trim()) {
      errors.plazo = 'Plazo de crédito es requerido';
    }
    if (typeof data.edad === 'undefined' || !data.edad.trim()) {
      errors.edad = 'Edad es requerida';
    }
    if (typeof data.estado_civil === 'undefined' || !data.estado_civil.trim()) {
      errors.estado_civil = 'Estado civil es requerido';
    }
    if (typeof data.genero === 'undefined' || !data.genero.trim()) {
      errors.genero = 'Género es requerido';
    }
    if (typeof data.hijos === 'undefined' || !data.hijos.trim()) {
      errors.hijos = 'Campo requerido';
    }
    if (!data.NombresAtributos || data.NombresAtributos.length === 0) {
      errors.NombresAtributos = 'Campo requerido';
    }
    if (!data.NombresAtributos || data.NombresAtributos.length > 3) {
      errors.NombresAtributos = 'Por favor solo seleccione hasta 3 NombresAtributos';
    }
    // if (typeof data.motivo_compra === 'undefined' || !data.motivo_compra.trim()) {
    //   errors.motivo_compra = 'Motivo de compra es requerido';
    // }
    // if (typeof data.residente_vivienda === 'undefined' || !data.residente_vivienda.trim()) {
    //   errors.residente_vivienda = 'Campo requerido';
    // }
    return errors;
  };

  // Función para validar el correo electrónico
  const isValidEmail = (email) => {
    // Validación simple de dirección de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };


  //VALIDAR FORMULARIO POR SECCION:


  // Función para validar los campos del formulario
  const validarCampos = (seccion) => {

    const errors = {}; // Objeto para almacenar los errores

    // Realiza la validación según la sección del formulario
    switch (seccion) {
      case 1:
        // Realiza todas las validaciones necesarias aquí
        if (!nombre.trim()) {
          errors.nombre = 'El nombre es requerido';
        }
        if (!rut_cliente.trim()) {
          errors.rut_cliente = 'El RUT es requerido';
        } else if (!validarRut(rut_cliente)) {
          errors.rut_cliente = 'El RUT ingresado es inváaaaalido';
        }
        if (!email.trim()) {
          errors.email = 'El correo electrónico es requerido';
        } else if (!isValidEmail(email)) {
          errors.email = 'El correo electrónico es inválido';
        }
        if (!telefono.trim()) {
          errors.telefono = 'El teléfono es requerido';
        } else if (!/^[0-9]*$/.test(telefono.trim())) {
          errors.telefono = 'El teléfono solo puede contener números';
        }
        if (!ciudad.trim()) {
          errors.ciudad = 'La ciudad es requerida';
        }
        // Repite este proceso para todos los campos del formulario

        // Actualiza el estado de los errores

        // Si no hay errores, realiza la acción deseada (en este caso, avanzar a la siguiente sección)
        break;
      case 2:
        // Realiza todas las validaciones necesarias aquí
        if (typeof plazo === 'undefined' || !plazo.trim()) {
          errors.plazo = 'Plazo de crédito es requerido';
        }
      case 3:
        if (typeof edad === 'undefined' || !edad.trim()) {
          errors.edad = 'Edad es requerida';
        }
        if (typeof estado_civil === 'undefined' || !estado_civil.trim()) {
          errors.estado_civil = 'Estado civil es requerido';
        }
        if (typeof genero === 'undefined' || !genero.trim()) {
          errors.genero = 'Género es requerido';
        }
        if (typeof hijos === 'undefined' || !hijos.trim()) {
          errors.hijos = 'Campo requerido';
        }
        if (!NombresAtributos || NombresAtributos.length === 0) {
          errors.NombresAtributos = 'Campo requerido';
        }
        if (!NombresAtributos || NombresAtributos.length > 3) {
          errors.NombresAtributos = 'Por favor solo seleccione hasta 3 NombresAtributos';
        }
        break;
      default:
        break;
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
                <label htmlFor="codigoWebpay" className="mb-2 flex justify-start">
                  {/* Código Webpay: ("En caso de no contar con codigo webpay, contactar ejecutiva") */}
                </label>
                <div className="relative">
                  <input
                    type={showCodigoWebpay ? 'text' : 'password'}
                    id="codigoWebpay"
                    name="codigoWebpay"
                    value={codigoWebpay}
                    onChange={(e) => setCodigoWebpay(e.target.value)}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-8 flex items-center pr-3 cursor-pointer"
                    onClick={handleLupaClick} // Quita los paréntesis ()
                  >
                    🔍
                  </button>
                  <span
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={() => setShowCodigoWebpay(!showCodigoWebpay)}
                  >
                    {showCodigoWebpay ? '👁️' : '👁️‍🗨️'}
                  </span>
                </div>
              </div>
              <div className="mb-8 mt-8 text-center">
                <h1 className="text-lg font-bold">Pagar Reserva</h1>
              </div>
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
                    onChange={(e) => setRutCliente(e.target.value)}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    // disabled={!habilitarCampos}
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
                    onChange={(e) => setCiudad(e.target.value)}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    // disabled={!habilitarCampos}
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
                    onChange={(e) => setTelefono(e.target.value)}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    // disabled={!habilitarCampos}
                    required
                  />
                  {errors.telefono && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.telefono}</span>}
                </div>
              </div>
              <h1 className="text-l flex justify-start py-4 font-bold">
                2. Datos del proyecto
              </h1>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="mb-4">
                  <label htmlFor="rut_cliente" className="mb-2 flex justify-start">
                    Nombre del proyecto
                  </label>
                  <input
                    type="text"
                    id="nombreProyecto"
                    name="nombreProyecto"
                    value={nombreProyecto}
                    onChange={(e) => setRutCliente(e.target.value)}
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
                    onChange={(e) => setNombreEjecutiva(e.target.value)}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    // disabled={!habilitarCampos}
                    required
                  >
                    <option value="" disabled>Seleccione una ejecutiva</option>
                    {ejecutivas.length > 0 && ejecutivas.map((ejecutiva) => (
                      <option key={ejecutiva.idUsuarioInnova} value={ejecutiva.usuarioNombre}>
                        {ejecutiva.usuarioNombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="telefono" className="mb-2 flex justify-start">
                    Manzana o Lote
                  </label>
                  <input
                    type="text"
                    id="lote"
                    name="lote"
                    value={lote}
                    onChange={(e) => setLote(e.target.value)}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    // disabled={!habilitarCampos}
                    required
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className={`focus:shadow-outline rounded bg-rojoMalpo px-4 py-2 text-white focus:outline-none ${habilitarCampos ? 'hover:bg-gray-400' : 'cursor-not-allowed opacity-50'}`}
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


//ROUTES.PHP : $route['pagarReserva/(:any)']['get'] = 'proyectos/pagarReserva/$a';

//FUNCION EN PROYECTOS.PHP


// public function pagarReserva_get($codWebPay)
// {
//     $datos = new stdClass();

//     $datos->proyecto = $this->proyectos_model->listarProyecto($idProyecto);
// }


/* ARCHIVO PROYECTOSMODEL public function ProyectopagarReserva($codWebPay)
    {
        $this->db->select('
            A.nombreWebProyecto,
            A.imagenCabecera,
            A.imagenMobile,
            A.imagenLoteo,
            A.imagenMiniatura,
            A.urlUbicacionProyecto,
            A.urlLinkProyecto,
            A.direccionProyecto,
            A.tituloProyecto,
            A.informacionProyecto,
            A.idComuna,
            A.idRegion,
            A.idEtapa,  
            A.idSubsidio,
            A.codigoUnisoft,
            B.nombreEtapa,
            B.colorEtapa,         
            C.valorTasa,         
            C.bancoTasa,         
            C.fechaTasa      
        ')
            ->from('proyecto A')
            ->where('idProyecto', $idProyecto);

        $consulta = $this->db->get();
        return $consulta->num_rows() > 0 ? $consulta->row() : null;
    }*/