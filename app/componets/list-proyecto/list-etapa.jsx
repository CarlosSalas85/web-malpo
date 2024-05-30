'use client';
import { useState } from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
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
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const IconoList = (props) => {
  return (
    <>
      <div className="hidden sm:block">
        <a className="flex flex-col items-center" onClick={props.onClick}>
          <div className="mt-4 flex flex-col items-center">
            <img className="h-10 w-10" alt={`icono`} src={props.icono} />
            <div className="mt-2 flex flex-wrap items-center justify-center">
              <div
                className={`h-4 w-4 rounded-full bg-${props.color} mb-2 md:mb-0`}
              ></div>
              <div className={`h-1 w-32 bg-${props.color}`}></div>
              <div
                className={`h-4 w-4 rounded-full bg-${props.color} ${props.circulo}`}
              ></div>
            </div>
            <p className={`mt-2 hover:text-gray-400 text-${props.color}`}>
              {props.titulo}
            </p>
          </div>
        </a>
      </div>

      <div className="mx-auto block sm:hidden">
        <a>
          <div className="flex flex-row">
            <div className="mr-3 flex w-20 flex-col items-end">
              <img className="h-10 w-10" alt={`icono`} src={props.icono} />
            </div>
            <div className="mr-4 flex w-10 flex-col items-center">
              <div className={`mx-4 h-4 w-4 rounded-full bg-${props.color}`}></div>
              <div className={`h-24 w-1 bg-${props.color}`}></div>
              <div className={`h-4 w-4 rounded-full bg-${props.color} ${props.circulo}`}></div>
            </div>
            <div className="items-first flex w-32 flex-col">
              <p className={`mt-2 hover:text-gray-400 text-${props.color}`}>{props.titulo}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

const List = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [avanceSeleccionado, setAvanceSeleccionado] = useState(null);

  const handleModalToggle = (avance = null) => {
    setAvanceSeleccionado(avance);
    setModalOpen(!modalOpen);
  };

  const nombreProyecto = props.nombreProyecto;
  const avances = props.avances;
  const iconos_rojo = [
    '../../iconos/etapa/OBRASPREVIASOK.png',
    '../../iconos/etapa/OBRAGRUESAOK.png',
    '../../iconos/etapa/TERMINACIONESOK.png',
    '../../iconos/etapa/RECEPCIONMUNICIPALOK.png',
    '../../iconos/etapa/ENTREGAOK.png'
  ];
  const iconos_gris = [
    '../../iconos/etapa/OBRASPREVIAS.png',
    '../../iconos/etapa/OBRAGRUESA.png',
    '../../iconos/etapa/TERMINACIONES.png',
    '../../iconos/etapa/RECEPCIONMUNICIPAL.png',
    '../../iconos/etapa/ENTREGA.png'
  ];

  var idmayorAvance = 0;
  var mayorAvance = "Piloto";

  if (avances) {
    for (let i = 0; i < 6; i++) {
      if (avances[i]?.estadoAvance === "1") {
        idmayorAvance = i;
      }
    }
    mayorAvance = avances[idmayorAvance]?.nombreAvance;
  }


  const extractVideoSrc = (iframeHtml) => {
    const regex = /src="([^"]+)"/;
    const match = iframeHtml.match(regex);
    return match ? match[1] : null;
  };

  const videoSrc = avanceSeleccionado?.videoAvance ? extractVideoSrc(avanceSeleccionado.videoAvance) : null;

  return (
    <>
      {avances != null && (
        <div className="text-18px mb-4 ml-4 mt-4 md:text-center">
          <h1>
            El proyecto {nombreProyecto} se encuentra en etapa de {mayorAvance}
          </h1>
        </div>
      )}

      {avances != null && (
        <div className="flex flex-col items-center justify-center">
          <div className="mt-6 flex flex-col justify-center sm:flex-row md:justify-between">
            {avances.slice(1).map((avance, index) => (
              <IconoList
                key={index}
                titulo={avance.nombreAvance}
                color={avance.estadoAvance === "1" ? "rojoMalpo" : "grisMalpo"}
                icono={
                  avance.estadoAvance === "1"
                    ? iconos_rojo[index]
                    : iconos_gris[index]
                }
                circulo={index === avances.length - 2 ? "block" : "hidden"}
                onClick={avance.estadoAvance === "1" ? () => handleModalToggle(avance) : null}
              />
            ))}
          </div>

          <div className="mt-4 flex justify-center md:justify-between" onClick={() => avances && avances.length > 0 && avances[0].estadoAvance === "1" ? handleModalToggle(avances[0]) : null}>
            <a>
              <div className="flex flex-col items-center">
                <img
                  className="w-30 h-12"
                  alt={`icono`}
                  src={`../../iconos/etapa/PILOTOON.png`}
                />
                <p className={`mt-2 ${avances[0].estadoAvance === "1" ? "text-grisMalpo" : "text-rojoMalpo"} hover:text-gray-400`}>
                  Vivienda Piloto
                </p>
              </div>
            </a>
          </div>
        </div>
      )}

      {modalOpen && (
        <Modal onClose={handleModalToggle}>
          <div className="container mx-auto px-4 py-8 text-center">
            <strong>Información del proyecto</strong>
            <p className="mt-2">Nombre: {nombreProyecto}</p>
            <p>Etapa: {avanceSeleccionado?.nombreAvance}</p>
            {avanceSeleccionado?.informacionAvance && (
              <p>Información Avance Etapa: {avanceSeleccionado.informacionAvance}</p>
            )}
            {avanceSeleccionado?.imagenAvance && (
              <div className="mt-4">
                <p>Imagen Avance:</p>
                <img className="imagen-avance mt-2 mx-auto" src={avanceSeleccionado.imagenAvance} alt="Imagen Avance" />
              </div>
            )}
            {avanceSeleccionado?.videoAvance && (
              <div className="mt-4">
                <p>Video Avance Etapa:</p>
                <div className="video-container mt-1 flex justify-center">
                  <div className="video-container mt-2" style={{ display: 'flex', justifyContent: 'center' }}>
                    <iframe
                      width="98%"
                      height="236.5"
                      src={videoSrc}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                {/* <div className="video-container mt-1 flex justify-center">
                  <div className="video-container mt-2" style={{ display: 'flex', justifyContent: 'center' }}>
                    <iframe
                      width="98%"
                      height="236.5"
                      src={videoSrc}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div> */}
              </div>
            )}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handleModalToggle(null)}
              className="focus:shadow-outline rounded bg-rojoMalpo px-4 py-2 text-white hover:bg-gray-400 focus:outline-none"
            >
              Cerrar
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default List;

