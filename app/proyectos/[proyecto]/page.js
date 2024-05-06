import React from "react";
import BannerProyecto from "../../componets/banner-proyectos/banner-proyecto";

const Proyecto = ({ params: { proyecto } }) => {
  return (
    <>
      <BannerProyecto idProyecto={proyecto} />
      <div className="mx-auto mb-4 mt-4 w-11/12 md:w-10/12">
        <p className="sm:text-center">
          La mejor relación precio-calidad. Confía en la experiencia y asesoría
          Malpo. Comprueba nuestros altos estándares en materiales, diseño y
          terminaciones.El bienestar y futuro de cada familia, es nuestra
          priridad.La ubicacion esta en el sector Norte de Maule.
        </p>
      </div>

      <div className="mb-6 mt-6 flex justify-center">
        <div className="flex w-3/4 flex-col items-center justify-between text-center md:flex-row md:w-2/3">
          <button className="fondo-malpo-rojo my-2 w-60 rounded py-5 text-l text-white hover:text-gray-400">
            Cotizar Proyecto
          </button>
          <a
            href="#"
            className="text-rojoMalpo border-rojoMalpo my-2 flex w-60 items-center justify-center rounded border py-5 text-l hover:text-gray-400"
          >
            <span className="flex items-center">
              <span>Ver modelos de casas</span>
              <img
                className="ml-2 h-4 w-4"
                alt={`paginacion`}
                src={`https://c.animaapp.com/sQwZVHMV/img/vector.svg`}
              />
            </span>
          </a>

          <a
            href="#"
            className="text-rojoMalpo border-rojoMalpo my-2 flex w-60 items-center justify-center rounded border py-5 text-l hover:text-gray-400"
          >
            <span className="flex items-center">
              <span>Descargar Brochure</span>
              <img
                className="ml-2 h-4 w-4"
                alt={`paginacion`}
                src={`https://c.animaapp.com/unMEM02m/img/picture-as-pdf-1.svg`}
              />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Proyecto;
