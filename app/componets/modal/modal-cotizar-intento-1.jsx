"use client";
import React, { useState, useEffect } from 'react';
import { Ctrl_como_te_enteraste} from '@/app/controllers/Ctrl_como_te_enteraste';
import { Ctrl_atributos_importantes } from '@/app/controllers/Ctrl_atributos_importantes';


import ButtonRojo from "@/app/componets/button/button-rojo";

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

const Page = (props) => {
  const proyectoData=props.proyecto;
  const modelosData=props.modelos;
  const tasaAnual = proyectoData?.datos?.proyecto?.valorTasa;
//   console.log("Los valores de proyectoData y modelosData son:",proyectoData,modelosData);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Aquí puedes agregar la lógica para enviar los datos del formulario
  //   console.log(formData);
  // };

  const [optionsComoTeEnteraste, setOptionsComoTeEnteraste] = useState([]);
  const [optionsAtributosImportantes, setOptionsAtributosImportantes] = useState([]);
  const [nombre, setNombre] = useState('');
  const [rut_cliente, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [contacto, setComoTeEnteraste] = useState([]);
  const [cod_unysoft, setCodUnysoft] = useState(proyectoData?.datos?.proyecto?.codigoUnisoft);
  const [modelo_vivienda, setModeloNombre] = useState(modelosData[0].Modelos.idModelo);
  const [valorUFModelo, setValorUFModelo] = useState(modelosData[0].Modelos.valorUfModelo);
  const [subsidio, setTipoSubsidio] = useState(proyectoData?.datos?.proyecto.nombreSubsidio);
  const [montoSubsidio, setMontoSubsidio] = useState(proyectoData?.datos?.proyecto?.ufSubsidio);
  const [porcentajeCredito, setPorcentajeCredito] = useState('80');
  const [plazo, setPlazoCredito] = useState('');
  const [montoCreditoHipotecario, setMontoCreditoHipotecario] = useState(0);
  const [enteroMontoCreditoHipotecario,setEnteroMontoCreditoHipotecario] = useState(Math.floor(montoCreditoHipotecario));
  const [ahorroMinimo, setAhorroMinimo] = useState(proyectoData?.datos?.proyecto?.ahorroMinimo);
  const [pieReserva, setPieReserva] = useState('');
  const [edad, setEdad] = useState('');
  const [estado_civil, setEstadoCivil] = useState('');
  const [genero, setGenero] = useState('');
  const [hijos, setTieneHijos] = useState('');
  const [NombresAtributos, setAtributosImportantes] = useState(['TODOS']);
  const [atributos, setAtributos] = useState([]);
  const [otros_atributos, setOtrosAtributos] = useState('');
  const [motivo_compra, setMotivoCompra] = useState('');
  const [otroMotivoCompra, setOtroMotivoCompra] = useState('');
  const [residente_vivienda, setQuienesHabitaran] = useState('');
  const [otroQuienesHabitaran, setOtroQuienesHabitaran] = useState('');
  const [tasaMensual, setTasaMensual] = useState(parseFloat(tasaAnual/12).toFixed(4));
  const [cotizacionUF, setCotizacionUF] = useState(0);
  const [cotizacionCLP, setCotizacionCLP] = useState('');
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



  useEffect(() => {
      obtenerValorUF();
  }, []);

  const obtenerValorUF = async () => {
      try {
          const response = await fetch(`https://mindicador.cl/api/uf/${fechaConsulta}`);
          if (!response.ok) {
              throw new Error('No se pudo obtener el valor de la UF');
          }
          const data = await response.json();
          // console.log("EL VALOR DE LA data ACTUAL ES:", data);
          setValorUFActual(data.serie[0].valor);
          // console.log("EL VALOR DE LA UF ACTUAL ES:", valorUF);
      } catch (error) {
          console.error('Error al obtener el valor de la UF:', error.message);
      }
  };


  // Definir la función para calcular el monto del crédito hipotecario
  function calcularMontoCreditoHipotecario() {
      // Calcula el monto del crédito hipotecario y lo retorna
      if (proyectoData?.datos?.proyecto?.nombreSubsidio === "Sin Subsidio") {
          return (((((valorUFModelo) * (80)) / 100)));
      } else {
          var porcentaje = parseFloat((((valorUFModelo) - montoSubsidio - ahorroMinimo) / valorUFModelo) * 100).toFixed(2);
          // console.log("El porcentaje es:", porcentaje);
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
      if (proyectoData?.datos?.proyecto?.nombreSubsidio === "Sin Subsidio") {
          return (((((valorUFModelo)) - (montoCreditoHipotecario))));
      } else {
          const pieReserva = valorUFModelo - montoCreditoHipotecario - montoSubsidio - ahorroMinimo;
          // console.log("EL VALOR DE PIE RESERVA ES:",pieReserva);
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
      // console.log("EL VALOR EN LA FUNCIÓN handleModeloChange de selectedModeloId es:", selectedModeloNombre);

      const selectedModelo = modelosData.find(modelo_vivienda => modelo_vivienda.nombreModelo === selectedModeloNombre);
      if (selectedModelo) {
          setModeloNombre(selectedModelo.idModelo); // Guarda el id del modelo_vivienda seleccionado
          setValorUFModelo(selectedModelo.valorUfModelo); // Guarda el valorUF correspondiente al modelo_vivienda seleccionado
      }
  }




  
  useEffect(() => {
      if (modalOpen) {
          // Llamada a ambas APIs
          Promise.all([
              Ctrl_como_te_enteraste(),
              Ctrl_atributos_importantes(),
          ])
              .then(([comoTeEnterasteData, atributosImportantesData]) => {
                  // Procesar los datos obtenidos y actualizar el estado
                  setOptionsComoTeEnteraste(comoTeEnterasteData.datos);
                  setOptionsAtributosImportantes(atributosImportantesData.datos);
                  setComoTeEnteraste([comoTeEnterasteData.datos[0].cod_contacto]);
                  setAtributos([atributosImportantesData.datos[0].cod_atributo]);
                  setAtributosImportantes([atributosImportantesData.datos[0].nombre]);

                  // console.log("Datos obtenidos de ambas APIs:", comoTeEnterasteData, atributosImportantesData);
              })
              .catch(error => {
                  console.error("Error al obtener opciones:", error);
              });


      }
  }, [modalOpen]);




  useEffect(() => {
      if (valorUFModelo && tasaMensual && plazo) {
          formulaCotizadorUF();
      }
  }, [valorUFModelo, tasaMensual, plazo]);

  //Formula del cotizador
  function formulaCotizadorUF() {
      const operacion1 = (parseFloat(montoCreditoHipotecario)) * (parseFloat(tasaMensual) / 100);
      const tasaMensualT = (1 + ((parseFloat(tasaMensual) / 100)));
      const plazoT = ((parseInt(plazo)) * 12);

  const operacion2 = Math.pow(tasaMensualT,plazoT);
      // const operacion2 = ((1 + ((parseFloat(tasaMensual) / 100))) ^ ((parseInt(plazo)) * 12));
      const operacion3 = operacion2 - 1;
      console.log("Operacion1, Operacion2, Operacion3:", operacion1, operacion2, operacion3);
      setCotizacionUF((operacion1 * operacion2) / parseFloat(operacion3));
      console.log(cotizacionUF);
  }

  useEffect(() => {
      if (valorUFModelo && tasaMensual && plazo) {
          formulaCotizadorCLP();
      }
  }, [cotizacionCLP, valorUFModelo, tasaMensual, plazo]);

  function formulaCotizadorCLP() {
      setCotizacionCLP(parseInt(cotizacionUF* parseFloat(valorUFActual)));
  }


  // Función para formatear un número con separadores de miles
  const formatNumberWithCommas = (number) => {
      return number.toLocaleString('es-ES'); // Puedes ajustar 'es-ES' según tu preferencia de idioma
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

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
              // console.log("formData", formData);
              //const response = await Ctrl_cotizador(formData);

              //  if (response && !response.ok) {
              //      throw new Error('Error al enviar el formulario', response);
              //  }

              // console.log('Formulario enviado con éxito');
              // // Realizar cualquier otra acción después de enviar el formulario
              setFormularioEnviado(true);
              console.log("formularioEnviado pasa a true al usar enviarse formulario", formularioEnviado)
           } catch (error) {
              console.error('Error al enviar el formulario:', error.message);
              // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
          }
      } else {
          // Mostrar errores si el formulario no es válido
          console.log("Errores:", validationErrors);
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
      // console.log("evento", e);
      const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
      setComoTeEnteraste(selectedValues);
  };


  const handleSelectChangeAtributos = (event) => {
      const value = event.target.value;

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
          console.log("EL VALOR DE data.email es:", data.email);
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
      if (typeof data.motivo_compra === 'undefined' || !data.motivo_compra.trim()) {
          errors.motivo_compra = 'Motivo de compra es requerido';
      }
      if (typeof data.residente_vivienda === 'undefined' || !data.residente_vivienda.trim()) {
          errors.residente_vivienda = 'Campo requerido';
      }
      // if (typeof data.otroQuienesHabitaran === 'undefined' || !data.otroQuienesHabitaran.trim()) {
      //     errors.otroQuienesHabitaran = 'Especifique quién(es) habitarán';
      // }


      return errors;
  };

  // Función para validar el correo electrónico
  const isValidEmail = (email) => {
      // Validación simple de dirección de correo electrónico
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  };

  return (
    <>
      <button
        onClick={handleModalToggle}
        className="fondo-malpo-rojo text-l my-2 w-[270px] rounded py-5 text-white hover:text-gray-400"
      >
        Cotizar
      </button>

      {modalOpen && (
  <Modal onClose={handleModalToggle}>
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg overflow-y-auto max-h-screen w-1100px">
        <div className="flex justify-between items-center px-4 py-2 bg-redMalpo">
          <div className="font-bold text-rojoMalpo text-2xl">Cotización</div>
          <img src="/logos/logoRojoMalpo.png" alt="Imagen de cotización" className="mr-4 h-6 w-auto" />
          <button className="text-gray-600 text-lg" onClick={handleModalToggle}>
            <img src="https://c.animaapp.com/o0ROixJd/img/cancel@2x.png" alt="Cancel" className="w-12 h-12" />
          </button>
        </div>
        <div className="bg-redMalpo text-white text-center font-bold py-4">
          Proyecto {proyectoData?.datos?.proyecto?.nombreWebProyecto}
        </div>
        <div className="px-4 py-2">
          <div className="mb-4 font-bold text-left">1. Tus Datos</div> {/* Alineado a la izquierda */}
          <form className="grid grid-cols-1 sm:grid-cols-3 gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="nombre" className="mb-1 text-left">Nombre:</label>
              <input type="text" id="nombre" name="nombre" className="border border-gray-300 rounded px-4 py-2 w-full" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="rut_cliente" className="mb-1 text-left">Rut:</label>
              <input type="text" id="rut_cliente" name="rut_cliente" value={rut_cliente} className="border border-gray-300 rounded px-4 py-2 w-full" onChange={handleRutChange} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-left">Correo:</label>
              <input type="email" id="email" name="email" className="border border-gray-300 rounded px-4 py-2 w-full" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="w-full flex justify-center sm:col-span-3">
              <button
                type="submit"
                className="focus:shadow-outline rounded bg-rojoMalpo px-4 py-2 text-white hover:bg-gray-400 focus:outline-none"
              >Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Modal>
)}




      {/* modal */}
    </>
  );
};

export default Page;
