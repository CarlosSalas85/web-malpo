import React from 'react';
import Button from "../../componets/button/button";


function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

const Banner = (props) => {
  const { proyecto, ejecutivas } = props;
  return (
    <div className="mb-4 mt-4 flex flex-col justify-center md:flex-row md:px-0">
      {/* Mapa de Google */}
      <div className="flex w-full justify-center px-4 md:w-2/5 md:justify-end">
        {proyecto?.urlUbicacionProyecto && isValidUrl(proyecto.urlUbicacionProyecto) ? (
          <iframe
            src={proyecto.urlUbicacionProyecto}
            className="h-[350px] w-[500px] self-end border border-gray-300 shadow-md dark:border-gray-700 dark:bg-gray-800"
            title="Google Map"
          ></iframe>
        ) : (
          <div
            className="h-[350px] w-[500px] self-end border border-gray-300 shadow-md dark:border-gray-700 dark:bg-gray-800"
          ></div>
        )}
      </div>
      {/* Título */}
      <div className="w-full pl-4 md:w-2/5 md:pl-2 mt-4 md:mt-0">
        <h1 className="text-3xl">{proyecto?.nombreWebProyecto}</h1>
        <div className="text-18px flex">
          <p className="mr-2 font-semibold">Dirección:</p>
          <p>{proyecto?.direccionProyecto}</p>
        </div>
        <div className="flex justify-center pt-6 sm:justify-start">
          {ejecutivas?.length > 0 && (
            <Button
              titulo="Contactar ejecutiva"
              imagen="https://c.animaapp.com/sQwZVHMV/img/vector.svg"
              url="#ejecutivas"
              blank="0"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
