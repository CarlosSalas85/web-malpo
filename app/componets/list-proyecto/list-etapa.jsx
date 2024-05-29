'use client';
import { useState } from "react";



const Modal = ({ onClose}) => {
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
        <div className="mt-4"></div>
      </div>
    </div>
  );
};



const IconoList = (props) => {
  return (
    <>
      <div className="hidden sm:block">
      <a href="#" className="flex flex-col items-center" onClick={props.onClick}>
          <div className="mt-4 flex flex-col items-center">
            <img className="h-10 w-10" alt={`icono`} src={props.icono} />
            <div className="mt-2 flex flex-wrap items-center justify-center">
              <div
                className={`h-4 w-4 rounded-full bg-${props.color} mb-2 md:mb-0`}
              ></div>{" "}
              {/* Punto */}
              <div className={`h-1 w-32 bg-${props.color}`}></div>{" "}
              {/* Línea horizontal */}
              <div
                className={`h-4 w-4 rounded-full bg-${props.color} ${props.circulo}`}
              ></div>{" "}
              {/* Punto */}
            </div>
            <p className={`mt-2 hover:text-gray-400 text-${props.color}`}>
              {props.titulo}
            </p>
          </div>
        </a>
      </div>

      <div className="mx-auto block sm:hidden">
        {/* Fila con ícono, punto y título */}
        {/*  <a href="#" className="flex flex-row items-center justify-center">
          <img className="h-10 w-10" alt={`icono`} src={props.icono} />
          <div className={`mx-4 h-4 w-4 rounded-full bg-${props.color}`}></div>
          <p className={`mt-2 hover:text-gray-400 text-${props.color}`}>
            {props.titulo}
          </p>
        </a> */}
        {/* Fila con línea vertical */}
        <a href="#">
          <div className="flex flex-row">
            {/* Primera columna */}
            <div className="mr-3 flex w-20 flex-col items-end">
              <img className="h-10 w-10" alt={`icono`} src={props.icono}  />
            </div>

            {/* Segunda columna */}

            <div className="mr-4 flex w-10 flex-col items-center">
              {/* Círculo */}
              <div
                className={`mx-4 h-4 w-4 rounded-full bg-${props.color}`}
              ></div>
              {/* Línea vertical */}
              <div className={`h-24 w-1 bg-${props.color}`}></div>
              <div
                className={`h-4 w-4 rounded-full bg-${props.color} ${props.circulo}`}
              ></div>{" "}
              {/* Punto */}
            </div>

            {/* Tercera columna */}
            <div className="items-first flex w-32 flex-col">
              {/* Texto en la tercera columna */}
              <p className={`mt-2 hover:text-gray-400 text-${props.color}`}>
                {props.titulo}
              </p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

const List = (props) => {
  // console.log("Los datos de nombre Proyecto y avances, avances[0].estadoAvance", props.nombreProyecto, props.avances);
  
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };


  const nombreProyecto = props.nombreProyecto;
  const avances = props.avances;
  const iconos_rojo = [].concat(
    // '../../iconos/etapa/PILOTOON.png',
    '../../iconos/etapa/OBRASPREVIASOK.png',
    '../../iconos/etapa/OBRAGRUESAOK.png',
    '../../iconos/etapa/TERMINACIONESOK.png',
    '../../iconos/etapa/RECEPCIONMUNICIPALOK.png',
    '../../iconos/etapa/ENTREGAOK.png'
  );
  const iconos_gris = [].concat(
    // '../../iconos/etapa/PILOTOOFF.png',
    '../../iconos/etapa/OBRASPREVIAS.png',
    '../../iconos/etapa/OBRAGRUESA.png',
    '../../iconos/etapa/TERMINACIONES.png',
    '../../iconos/etapa/RECEPCIONMUNICIPAL.png',
    '../../iconos/etapa/ENTREGA.png'
  );

  var idmayorAvance = 0;
  var mayorAvance="Piloto";
  
  // Verificar que avances esté definido y tenga al menos 5 elementos
  if (avances) {
    // Iterar sobre los primeros cinco avances
    for (let i = 0; i < 6; i++) {
      if (avances[i]?.estadoAvance === "1") {
        idmayorAvance = i; // Actualizamos el mayor valor de i
        // Si el estado de avance es "1", aplicamos el filtro de escala de grises
      }
    }
    

    var mayorAvance = avances[idmayorAvance]?.nombreAvance;
    // console.log("El valor de mayorAvance es:", mayorAvance);


    
  } 
  return (
    <>
      {/* Título */}
      {avances != null && (
      <div className="text-18px mb-4 ml-4 mt-4 md:text-center">
        <h1>El proyecto {nombreProyecto} se encuentra en etapa de {mayorAvance}</h1>
      </div>
       )}
      
      {avances != null && (
      <div className="flex flex-col items-center justify-center">
        {/* Fila de íconos */}
        <div className="mt-6 flex flex-col justify-center sm:flex-row md:justify-between">
        {/* Se usa slice(1) para no imprimir el primer elemento del array ya que se imprime abajo */}
       {avances.slice(1).map((avance, index) => (
              <IconoList
                key={index}
                titulo={avance.nombreAvance}
                color={avance.estadoAvance === "1" ? "rojoMalpo" : "grisMalpo"}
                icono={avance.estadoAvance === "1" ? iconos_rojo[index] : iconos_gris[index]}
                circulo={index === avances.length-2 ? "block" : "hidden"}
                onClick={handleModalToggle}
              />
            ))} 
        </div>

        <div className="mt-4 flex justify-center md:justify-between">
          <a href="#">
            <div className="flex flex-col items-center">
              <img
                className="w-30 h-12"
                alt={`icono`}
                src={`../../iconos/etapa/PILOTOON.png`}
              />
              <p className={`mt-2 text-rojoMalpo hover:text-gray-400`}>
                Vivienda Piloto 
              </p>
            </div>
          </a>
        </div>
      </div>
      )}

    {modalOpen && <Modal onClose={handleModalToggle}>HOLA MUNDO</Modal>}
    </>
  );
};

export default List;
