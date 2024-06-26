"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Ctrl_cotizador } from '@/app/controllers/Ctrl_cotizador';
import { Ctrl_como_te_enteraste } from '@/app/controllers/Ctrl_como_te_enteraste';
import { Ctrl_atributos_importantes } from '@/app/controllers/Ctrl_atributos_importantes';
import generatePDF from '@/app/componets/PDFGenerator/PDFGenerator'; // Importa la función generatePDF desde el archivo donde la defines
import ReCAPTCHA from "react-google-recaptcha";

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center overflow-auto bg-gray-800 bg-opacity-75">
    <div className="relative w-full max-w-4xl rounded bg-white p-8 shadow-lg">
      <div className="flex justify-between items-center">
        <img
          src="/logos/logoRojoMalpo.png"
          alt="Logo"
          className="h-6 w-auto"
        />
        <button
          className="text-rojoMalpo hover:text-gray-400"
          onClick={onClose}
        >
          <img
            className="mr-3 h-8 w-8"
            alt={`icono`}
            src={`https://c.animaapp.com/o0ROixJd/img/cancel@2x.png`}
          />
        </button>
      </div>
            <span className="text-rojoMalpo font-bold text-lg">Cotización</span>
      <div className="mt-4">{children}</div>
    </div>
  </div>
  
  );
};

const Page = (props) => {
  var captcha_key = process.env.NEXT_PUBLIC_SMTP_API_CAPTCHA_CONTACTO_KEY;
  const [seccionFormulario, setSeccionFormulario] = useState(1);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const proyectoData = props.proyecto;
  const modelosData = props.modelos;
  const nombreProyecto = proyectoData?.datos?.proyecto?.nombreWebProyecto;
  const tasa = proyectoData?.datos?.proyecto?.valorTasa;
  const fechaTasa = proyectoData?.datos?.proyecto?.fechaTasa;
  const [tasaAnual, setTasaAnual] = useState(parseFloat(tasa));
  const formRef = useRef(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const handleDownloadPDF = async () => {
    await generatePDF(fechaConsulta, nombreProyecto, nombre, rut_cliente, telefono, email, modelosData[0].Modelos.nombreModelo, montoSubsidio, porcentajeCredito, montoCreditoHipotecario, ahorroMinimo, pieReserva, tasaAnual / 12, plazo, cotizacionCLP, fechaTasa); // Llama a la función generatePDF para generar el PDF
    setPdfUrl('/cotizacion.pdf'); // Establece la URL del PDF generado
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [cotizarDeNuevo, setCotizarDeNuevo] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
    if (modalOpen) {
      setSeccionFormulario(1);
    }
    setCotizarDeNuevo(false);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);
  };


  const handleModalToggle2 = () => {
    setModalOpen2(!modalOpen2);
  };

  //Volver a Cotizar se muestra en el modal del resultado del dividendo
  //Permite volver a abrir el modal de cotización, sin modificar los inputs
  const volverACotizar = () => {
    setSeccionFormulario(1);
    setCotizarDeNuevo(true);
    handleModalToggle2();
    setModalOpen(!modalOpen);
    setErrors({});
    setSuccessMessage("");
    setErrorMessage("");
    setCaptchaToken("");
  }

  const NumeroFormateado = ({ numero }) => {
    const numeroFormateado = numero.toLocaleString(); // Formatea el número con separadores de miles
  }
  const [optionsComoTeEnteraste, setOptionsComoTeEnteraste] = useState([]);
  const [optionsAtributosImportantes, setOptionsAtributosImportantes] = useState([]);
  const [isSelectDisabledOtrosAtributos, setIsSelectDisabledOtrosAtributos] = useState(false);
  const [nombre, setNombre] = useState('');
  const [rut_cliente, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [contacto, setComoTeEnteraste] = useState('');
  const [cod_unysoft, setCodUnysoft] = useState(proyectoData?.datos?.proyecto?.codigoUnisoft);
  const [modelo_vivienda, setModeloNombre] = useState(modelosData ? modelosData[0]?.Modelos?.idModelo : null);
  const [valorUFModelo, setValorUFModelo] = useState(modelosData ? modelosData[0]?.Modelos?.valorUfModelo : 0);
  const [subsidio, setTipoSubsidio] = useState(modelosData ? modelosData[0].nombreSubsidio : null);
  const [montoSubsidio, setMontoSubsidio] = useState(modelosData ? modelosData[0].ufSubsidio : null);
  const [porcentajeCredito, setPorcentajeCredito] = useState('80');
  const [plazo, setPlazoCredito] = useState('');
  const [montoCreditoHipotecario, setMontoCreditoHipotecario] = useState(0);
  const [enteroMontoCreditoHipotecario, setEnteroMontoCreditoHipotecario] = useState(Math.floor(montoCreditoHipotecario));
  const [ahorroMinimo, setAhorroMinimo] = useState(modelosData ? modelosData[0].ahorroMinimo : null);
  const [pieReserva, setPieReserva] = useState('');
  const [edad, setEdad] = useState('');
  const [estado_civil, setEstadoCivil] = useState('');
  const [genero, setGenero] = useState('');
  const [hijos, setTieneHijos] = useState('');
  const [NombresAtributos, setAtributosImportantes] = useState('');
  const [atributos, setAtributos] = useState('');
  const [otros_atributos, setOtrosAtributos] = useState('');
  const [motivo_compra, setMotivoCompra] = useState('');
  const [isSelectDisabledMotivoCompra, setIsSelectDisabledMotivoCompra] = useState(false);
  const [otroMotivoCompra, setOtroMotivoCompra] = useState('');
  const [residente_vivienda, setQuienesHabitaran] = useState('');
  const [otroQuienesHabitaran, setOtroQuienesHabitaran] = useState('');
  const [tasaMensual, setTasaMensual] = useState(0);
  const [cotizacionUF, setCotizacionUF] = useState(0);
  const [cotizacionCLP, setCotizacionCLP] = useState('');
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  // Estado para validar el RUT
  const [rutValido, setRutValido] = useState(true);
  const [selectedEtapa, setSelectedEtapa] = useState(0);
  const [personName, setPersonName] = useState(['TODOS']);
  // Estado para almacenar los errores del formulario
  const [errors, setErrors] = useState({});

  const [valorUFActual, setValorUFActual] = useState(null);

  const obtenerFechaActual = () => {
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString().padStart(2, '0');
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Los meses van de 0 a 11
    const año = fechaActual.getFullYear();
    return `${dia}-${mes}-${año}`;
  };

  const [fechaConsulta, setFechaConsulta] = useState(obtenerFechaActual());

  const resetForm = () => {
    setNombre('');
    setRut('');
    setEmail('');
    setTelefono('');
    setCiudad('');
    setComoTeEnteraste('');
    setEdad('');
    setEstadoCivil('');
    setGenero('');
    setTieneHijos('');
    setAtributos('');
    setAtributosImportantes('');
    setOtrosAtributos('');
    setMotivoCompra('');
    setOtroMotivoCompra('');
    setQuienesHabitaran('');
    setOtroQuienesHabitaran('');
    setPlazoCredito('');
  };


  function formatoNumero(elemento) {
    // Verifica si el número tiene decimales
    if (elemento % 1 !== 0) {
      return new Intl.NumberFormat("es-CL", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(elemento);
    } else {
      // Si el número es entero, simplemente lo devuelve sin formato
      return parseInt(elemento.toLocaleString("es-CL"));
    }
  }


  useEffect(() => {
    obtenerValorUF();
    setTasaMensual(parseFloat(tasaAnual / 12).toFixed(4));
  }, []);

  const obtenerValorUF = async () => {
    try {
      const response = await fetch(`https://mindicador.cl/api/uf/${fechaConsulta}`);
      if (!response.ok) {
        throw new Error('No se pudo obtener el valor de la UF');
      }
      const data = await response.json();
      setValorUFActual(data.serie[0].valor);
    } catch (error) {
    }
  };


  // Definir la función para calcular el monto del crédito hipotecario
  function calcularMontoCreditoHipotecario() {
    // Calcula el monto del crédito hipotecario y lo retorna
    if (subsidio === "Sin Subsidio") {
      return (((((valorUFModelo) * (80)) / 100)));
    } else {
      var porcentaje = parseFloat((((valorUFModelo) - montoSubsidio - ahorroMinimo) / valorUFModelo) * 100).toFixed(2);
      if (porcentaje >= 80) {
        setPorcentajeCredito(80);
        return (((((valorUFModelo) * (80)) / 100)).toFixed(2));
      } else {
        if (porcentaje < 80) {
          setPorcentajeCredito(parseFloat(porcentaje).toFixed(2));
        }
      }

      return ((valorUFModelo) - montoSubsidio - ahorroMinimo);
    }
  }

  // Efecto para calcular el monto del crédito hipotecario cuando los campos cambien
  useEffect(() => {
    // Verifica si los campos necesarios están completados
    if (valorUFModelo && porcentajeCredito) {
      // Calcula el monto del crédito hipotecario y actualiza el estado
      setMontoCreditoHipotecario(parseFloat(calcularMontoCreditoHipotecario()).toFixed(2));
      setEnteroMontoCreditoHipotecario(Math.floor(montoCreditoHipotecario));
    }
  }, [valorUFModelo, porcentajeCredito]); // Se ejecutará cuando cambien valorUFModelo o porcentajeCredito

  function calcularPieReserva() {
    // Calcula el monto del pie Reserva
    if (subsidio === "Sin Subsidio") {
      return (((((valorUFModelo)) - (montoCreditoHipotecario))));
    } else {
      const pieReserva = valorUFModelo - montoCreditoHipotecario - montoSubsidio - ahorroMinimo;
      return (pieReserva);
    }
  }

  // Efecto para calcular el monto del crédito hipotecario cuando los campos cambien
  useEffect(() => {
    // Verifica si los campos necesarios están completados
    if (valorUFModelo && montoCreditoHipotecario) {
      //Calcula el monto del crédito hipotecario y actualiza el estado
      setPieReserva(parseFloat(calcularPieReserva()).toFixed(2));
    }
  }, [valorUFModelo, montoCreditoHipotecario]);
  // Función para manejar el cambio en la selección del modelo_vivienda
  const handleModeloChange = (event, opcion) => {
    const selectedModeloNombre = event.target.value;
    const selectedModelo = modelosData.find(modelo_vivienda => modelo_vivienda.idModelo === selectedModeloNombre);
    if (selectedModelo) {
      setModeloNombre(selectedModelo.idModelo);
      setValorUFModelo(selectedModelo.valorUfModelo); // Guarda el valorUF correspondiente al modelo_vivienda seleccionado
      setTipoSubsidio(selectedModelo.nombreSubsidio);
      setMontoSubsidio(selectedModelo.ufSubsidio);
    }
  }

  useEffect(() => {
    if (modalOpen) {

      if (formRef.current && !cotizarDeNuevo) { //si no está cotizando de nuevo se resetea el form
        formRef.current.reset();
        resetForm();
      }

      // Llamada a ambas APIs
      Promise.all([
        Ctrl_como_te_enteraste(),
        Ctrl_atributos_importantes(),
      ])
        .then(([comoTeEnterasteData, atributosImportantesData]) => {
          // Procesar los datos obtenidos y actualizar el estado
          setOptionsComoTeEnteraste(comoTeEnterasteData.datos);
          setOptionsAtributosImportantes(atributosImportantesData.datos);
          // setComoTeEnteraste([comoTeEnterasteData.datos[0].cod_contacto]);
          // setAtributos([atributosImportantesData.datos[0].cod_atributo]);
          // setAtributosImportantes([atributosImportantesData.datos[0].nombre]);
        })
        .catch(error => {
        });


    }
  }, [modalOpen]);




  useEffect(() => {
    if (valorUFModelo && tasaMensual && plazo) {
      const nuevaCotizacionUF = formulaCotizadorUF(valorUFModelo, tasaMensual, plazo);
      setCotizacionUF(nuevaCotizacionUF);
      formulaCotizadorCLP(nuevaCotizacionUF);
    }
  }, [valorUFModelo, tasaMensual, plazo]);

  //Formula del cotizador
  function formulaCotizadorUF() {
    const operacion1 = (parseFloat(montoCreditoHipotecario)) * (parseFloat(tasaMensual) / 100);
    const tasaMensualT = (1 + ((parseFloat(tasaMensual) / 100)));
    const plazoT = ((parseInt(plazo)) * 12);
    const operacion2 = Math.pow(tasaMensualT, plazoT);
    const operacion3 = operacion2 - 1;
    const resultado = ((operacion1 * operacion2)) / parseFloat(operacion3);
    return resultado;
  }


  function formulaCotizadorCLP(nuevaCotizacion) {
    setCotizacionCLP(parseInt(nuevaCotizacion * parseFloat(valorUFActual)));
  }

  const replacePointWithComma = (number) => {
    // Verifica si el número es un número finito
    if (!Number.isFinite(number)) {
      return ''; // Retorna una cadena vacía si el número no es válido
    }

    // Convierte el número a una cadena y reemplaza los puntos con comas
    const stringWithCommas = number.toString().replace(/\./g, ',');

    return stringWithCommas;
  };

  // Función para formatear un número con separadores de miles
  const formatNumberWithCommas = (number) => {
    return number.toLocaleString('es-ES'); // Puedes ajustar 'es-ES' según tu preferencia de idioma
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    if (!captchaToken && seccionFormulario != 1 && seccionFormulario != 2
    ) {
      setErrorMessage("Por favor, completa el captcha.");
      setSuccessMessage("");
      return;
    }
    // Validar el formulario antes de enviar
    const validationErrors = validateForm({
      nombre,
      rut_cliente,
      email,
      telefono,
      ciudad,
      contacto,
      cod_unysoft,
      modelo_vivienda,
      valorUFModelo,
      subsidio,
      montoSubsidio,
      NombresAtributos,
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
        //  const response = await Ctrl_cotizador(formData);
        // console.log("Los datos son:", formData);
        // if (response && !response.ok) {  
        //  throw new Error('Error al enviar el formulario');
        // }   
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
        if (Object.keys(errors).length === 0) {
          setSeccionFormulario(2);
        }
        break;
      case 2:
        // Realiza todas las validaciones necesarias aquí
        if (typeof plazo === 'undefined' || !plazo.trim()) {
          errors.plazo = 'Plazo de crédito es requerido';
        }
        if (Object.keys(errors).length === 0) {
          setSeccionFormulario(3);
        }
        break;
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

      <div className="relative">
        <button
          onClick={handleModalToggle}
          className="fondo-malpo-rojo text-l my-2 w-[270px] rounded py-5 text-white hover:text-gray-400 relative"
          disabled={modelo_vivienda === null}
          data-tooltip="Proyecto sin modelos disponibles para cotizar"
        >
          Cotizar
        </button>
        <style jsx>{`
        button[disabled] {
          cursor: not-allowed;
          position: relative;
        }

        button[disabled]::after {
          content: attr(data-tooltip);
          display: none;
          position: absolute;
          bottom: 120%;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          background-color: rgba(0, 0, 0, 0.75);
          color: #fff;
          padding: 8px;
          border-radius: 4px;
          font-size: 14px;
          z-index: 1;
        }

        button[disabled]:hover::after {
          display: block;
        }
      `}</style>
      </div>
      {modalOpen && (
        <Modal onClose={handleModalToggle}>
          <div className="container mx-auto px-4 py-2">

            <p className="mb-8 mt-8">
              <h1 className="text-lg font-bold bg-rojoMalpo text-white">Proyecto {proyectoData?.datos?.proyecto?.nombreWebProyecto}</h1>
            </p>
            <div className="flex justify-between">
              <span className={`flex items-center justify-center px-2 py-1 rounded-md ${seccionFormulario === 1 ? 'bg-red-800' : 'bg-gray-900'}`}>
                <span className="text-white font-bold">Tus Datos</span>
              </span>
              <span className={`flex items-center justify-center px-2 py-1 rounded-md ${seccionFormulario === 2 ? 'bg-red-800' : 'bg-gray-900'}`}>
                <span className="text-white font-bold">Simula</span>
              </span>
              <span className={`flex items-center justify-center px-2 py-1 rounded-md ${seccionFormulario === 3 ? 'bg-red-800' : 'bg-gray-900'}`}>
                <span className="text-white font-bold">Tu Dividendo</span>
              </span>
            </div>

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
            <form onSubmit={handleSubmit} ref={formRef} className="mx-auto max-w-full">
              {seccionFormulario == 1 && (
                <>
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
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="rut_cliente" className="mb-2 flex justify-start">
                        Rut:
                      </label>
                      <input
                        type="text"
                        id="rut_cliente"
                        name="rut_cliente"
                        value={rut_cliente} onChange={handleRutChange}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        required
                      />
                      {errors.rut_cliente && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.rut_cliente}</span>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="mb-2 flex justify-start">
                        Correo electrónico:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setTelefono(e.target.value)}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        required
                      />
                      {errors.telefono && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.telefono}</span>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="ciudad" className="mb-2 flex justify-start">
                        Ciudad:
                      </label>
                      <input
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        value={ciudad} onChange={(e) => setCiudad(e.target.value)}
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
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        value={contacto}
                        onChange={handleContactoChange}
                        required // El atributo required se coloca aquí
                      >
                        <option value="" disabled>
                          Seleccione una opción
                        </option>
                        {optionsComoTeEnteraste.map((opcion, index) => (
                          <option key={index} value={opcion.cod_contacto}>{opcion.nombre}</option>
                        ))}
                      </select>
                    </div>
                    <input
                      type="text"
                      id="codigoUnisoft"
                      name="codigoUnisoft"
                      className="form-control" // O la clase que corresponda en tu CSS
                      defaultValue={cod_unysoft}
                      hidden
                    />
                  </div>
                  <button
                    onClick={() => validarCampos(1)} // Aquí envuelve la llamada a validarCampos(1) en una función
                    className="focus:shadow-outline rounded bg-rojoMalpo px-4 py-2 text-white hover:bg-gray-400 focus:outline-none"
                  >
                    Siguiente
                  </button>
                </>
              )}
              {seccionFormulario == 2 && (
                <>
                  <h1 className="text-l flex justify-start py-4 font-bold">
                    2. Simula
                  </h1>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="mb-4">
                      <label htmlFor="modelo_vivienda" className="mb-2 flex justify-start">
                        Modelo:
                      </label>
                      <select
                        id="modelo_vivienda"
                        name="modelo_vivienda"
                        value={modelo_vivienda}
                        onChange={(event) => handleModeloChange(event, modelo_vivienda)}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      > {modelosData?.map(modelo_vivienda => (
                        <option key={modelo_vivienda.idModelo} value={modelo_vivienda.idModelo} onChange={(e) => handleModeloChange(e)}>{modelo_vivienda.nombreModelo}</option>
                      ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="valorUF" className="mb-2 flex justify-start">
                        Valor (UF)
                      </label>
                      <input
                        input type="text" id="valorUF" name="valorUF"
                        value={formatoNumero(formatNumberWithCommas(valorUFModelo))} onChange={(e) => setValorUFModelo(e.target.value)}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        disabled
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="subsidio" className="mb-2 flex justify-start">
                        Tipo Subsidio
                      </label>
                      <input
                        type="text"
                        id="subsidio"
                        name="subsidio"
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        value={subsidio}
                        onChange={(e) => setTipoSubsidio(e.target.value)} disabled
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="montoSubsidio" className="mb-2 flex justify-start">
                        Monto Subsidio
                      </label>
                      <input
                        type="text"
                        id="montoSubsidio"
                        name="montoSubsidio"
                        value={montoSubsidio}
                        onChange={(e) => setMontoSubsidio(e.target.value)}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        disabled
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="porcentajeCredito" className="mb-2 flex justify-start">
                        % Crédito Hipotecario
                      </label>
                      <input
                        id="porcentajeCredito"
                        name="porcentajeCredito"
                        type="text"
                        value={proyectoData?.datos?.proyecto?.nombreSubsidio === "Sin Subsidio" ? "80%" : `${porcentajeCredito}%`}
                        onChange={(e) => setPorcentajeCredito(e.target.value)}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        disabled
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="referral" className="mb-2 flex justify-start">
                        Plazo del Crédito (años):
                      </label>
                      <select
                        id="plazo"
                        name="plazo"
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        value={plazo} onChange={(e) => setPlazoCredito(e.target.value)}
                        required>
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="20">20 años</option>
                        <option value="25">25 años</option>
                        <option value="30">30 años</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="montoCreditoHipotecario" className="mb-2 flex justify-start">
                        Monto Crédito Hipotecario
                      </label>
                      <input
                        type="text"
                        id="montoCreditoHipotecario"
                        name="montoCreditoHipotecario"
                        value={parseInt(montoCreditoHipotecario)}
                        onChange={(e) => setMontoCreditoHipotecario(e.target.value)}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        disabled
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="ahorroMinimo" className="mb-2 flex justify-start">
                        Ahorro Minimo
                      </label>
                      <input
                        type="text" id="ahorroMinimo" name="ahorroMinimo"
                        value={ahorroMinimo}
                        onChange={(e) => setAhorroMinimo(e.target.value)}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        disabled
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="pieReserva" className="mb-2 flex justify-start">
                        Pie o Reserva
                      </label>
                      <input
                        type="email"
                        id="pieReserva"
                        name="pieReserva"
                        value={pieReserva}
                        onChange={(e) => setPieReserva(e.target.value)}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        disabled
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => validarCampos(2)}
                    className="focus:shadow-outline rounded bg-rojoMalpo px-4 py-2 text-white hover:bg-gray-400 focus:outline-none"
                  >
                    Siguiente
                  </button>
                </>
              )}
              {seccionFormulario == 3 && (
                <>
                  <h1 className="text-l flex justify-start py-4 font-bold">
                    3. Tu Dividendo
                  </h1>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="mb-4">
                      <label htmlFor="edad" className="mb-2 flex justify-start">
                        Edad
                      </label>
                      <select
                        id="edad"
                        name="edad"
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        required
                      >
                        <option value="" disabled>
                          Seleccione una opción
                        </option>
                        <option value="hasta24">Hasta 24 años</option>

                        <option value="entre24y35">Entre 24 y 35 años</option>

                        <option value="masde35">Más de 35 años</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="estado civil" className="mb-2 flex justify-start">
                        Estado Civil
                      </label>
                      <select
                        type="text" id="estado_civil" name="estado_civil"
                        value={estado_civil}
                        onChange={(e) => setEstadoCivil(e.target.value)}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        required
                      > <option value="" disabled>Selecciona una opción</option>

                        <option value="soltero">Soltero/a</option>

                        <option value="solteroConPareja">Soltero/a con pareja estable</option>

                        <option value="divorciado">Divorciado/a</option>

                        <option value="casado">Casado/a</option> </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <div className="mb-4">
                      <label htmlFor="genero" className="mb-2 flex justify-start">
                        Género
                      </label>
                      <select
                        id="genero"
                        name="genero"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        required
                      > <option value="">Selecciona una opción</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="hijos" className="mb-2 flex justify-start">
                        Hijos
                      </label>
                      <select
                        id="hijos"
                        name="hijos"
                        value={hijos}
                        onChange={(e) => setTieneHijos(e.target.value)}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        required
                      >  <option value="" disabled>Selecciona una opción</option>

                        <option value="no">No</option>

                        <option value="1">1</option>

                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4 o más</option>
                      </select>
                    </div>

                  </div>



                  <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                    <div className="mb-4">
                      <label htmlFor="NombresAtributos" className="mb-2 flex justify-start">
                        Atributos para elegir vivienda
                      </label>
                      <select
                        id="atributos"
                        name="atributos"
                        value={NombresAtributos}
                        onChange={handleSelectChangeAtributos}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        // disabled={isSelectDisabledOtrosAtributos}
                        required
                      >
                        <option value="" disabled>
                          Seleccione una opción
                        </option>
                        {optionsAtributosImportantes.map((atributo) => (
                          <option key={atributo.id} value={atributo.nombre}>
                            {atributo.nombre}
                          </option>
                        ))}
                      </select>
                    </div>


                    {NombresAtributos == "OTRO" && (
                      <div className="mb-4">
                        <label htmlFor="otros_atributos" className="mb-2 flex justify-start">Ingrese otro atributo importante:</label>
                        <textarea
                          id="otros_atributos"
                          name="otros_atributos"
                          className="form-textarea w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                          value={otros_atributos}
                          onChange={handleOtrosAtributosChange}
                        ></textarea>
                      </div>
                    )}


                  </div>


                  <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                    <div className="mb-4">
                      <label htmlFor="motivo_compra" className="mb-2 flex justify-start">Motivo de la Compra:</label>
                      <select
                        id="motivo_compra"
                        name="motivo_compra"
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        value={motivo_compra}
                        // disabled={isSelectDisabledMotivoCompra}
                        onChange={(e) => setMotivoCompra(e.target.value)}
                        required
                      >
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="habitar (vivir usted o un familiar)">Habitar (vivir usted o un familiar)</option>
                        <option value="invertir (para arriendo)">Invertir (para arriendo)</option>
                        <option value="segunda vivienda (vacaciones)">Segunda Vivienda (vacaciones)</option>
                        <option value="otro">Otro (por favor especifique)</option>
                      </select>
                      {/* {errors.motivo_compra && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.motivo_compra}</span>} */}
                    </div>
                    {motivo_compra === "otro" && (
                      <div className="form-group">
                        <label htmlFor="otroMotivoCompra" className="mb-2 flex justify-start">Especifique otro motivo de compra:</label>
                        <br></br>
                        <textarea
                          id="otroMotivoCompra"
                          name="otroMotivoCompra"
                          className="form-textarea w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                          value={otroMotivoCompra}
                          onChange={handleOtrosMotivosChange}
                        ></textarea>
                        {errors.otroMotivoCompra && <span className="error">{errors.otroMotivoCompra}</span>}
                      </div>
                    )}

                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                    <div className="mb-4">

                      <label htmlFor="residente_vivienda" className="mb-2 flex justify-start">¿Quiénes Habitarán la Propiedad?</label>

                      <select id="residente_vivienda" name="residente_vivienda" className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" value={residente_vivienda} onChange={(e) => setQuienesHabitaran(e.target.value)} required>

                        <option value="" disabled>Selecciona una opción</option>

                        <option value="solo/a usted">Solo/a usted</option>

                        <option value="usted y su pareja">Usted y su pareja</option>

                        <option value="Usted, su pareja e hijos">Usted, su pareja e hijos</option>

                        <option value="un familiar o amigo">Un familiar o amigo</option>

                        <option value="otro">Otro (por favor nombrar)</option>

                      </select>

                      {/* {errors.residente_vivienda && <span className="error">{errors.residente_vivienda}</span>} */}

                    </div>

                  </div>

                  {residente_vivienda === "otro" && (
                    <div className="form-group">
                      <label htmlFor="otroQuienesHabitaran" className="mb-2 flex justify-start">Especifique quién(es) habitarán:</label>
                      <textarea id="otroQuienesHabitaran" name="otroQuienesHabitaran" className="form-textarea w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" value={otroQuienesHabitaran} onChange={(e) => setOtroQuienesHabitaran(e.target.value)}></textarea>
                      {errors.otroQuienesHabitaran && <span className="error">{errors.otroQuienesHabitaran}</span>}
                    </div>
                  )}


                  <div className="flex justify-center">
                    <ReCAPTCHA
                      sitekey={captcha_key}
                      onChange={handleCaptchaChange}
                      className="mx-auto"
                    /></div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="focus:shadow-outline rounded bg-rojoMalpo px-4 py-2 text-white hover:bg-gray-400 focus:outline-none"
                    >
                      Enviar
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </Modal>
      )}
      {modalOpen2 && (
        <Modal onClose={handleModalToggle2}>
          <div className="container mx-auto w-full px-4 py-2">
            <div className="mx-auto mb-4 mt-4">
              <p className="text-18px pt-4 sm:text-center">
              Estimado(a): <strong>{nombre}</strong> el dividendo de tu cotización para el modelo <strong>{modelosData[0].Modelos.nombreModelo}</strong>, con un pie de <strong>{formatoNumero(formatNumberWithCommas(pieReserva))}</strong> UF,
            </p>              
                <p>
                <span className="text-lg"><strong>tasa anual {formatoNumero(formatNumberWithCommas((tasaMensual * 12).toFixed(1)))}% </strong></span>
                <i>("tasa referencial de <strong>{proyectoData?.datos?.proyecto?.bancoTasa}")</strong></i>
              </p>
              <p className="text-18px pt-2 sm:text-center">
                y un plazo de <strong>{plazo}</strong> años es:
              </p>
            </div>

            <div className="mx-auto mb-4 mt-4 flex h-28 flex-col items-center justify-center bg-rojoMalpo text-white">
              <div>Tu Dividendo Mensual es:</div>
              <div><b className="text-lg">$ {formatNumberWithCommas(cotizacionCLP)}</b></div>
            </div>

            <div className="mt-4 flex justify-between pr-4 text-rojoMalpo">
              <button className="ml-3" onClick={volverACotizar}><span>Volver a Cotizar</span></button>
              <button className="flex items-center" onClick={handleDownloadPDF}>
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
                <strong>El monto del dividendo es solo estimativo no incluye seguros asociados.</strong>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
};

export default Page;
