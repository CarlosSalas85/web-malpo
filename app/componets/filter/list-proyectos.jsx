'use client';
import React, { useEffect, useState } from 'react';
import CustomCards from "../../componets/card-proyecto/card-proyecto-uno";

export default function List(props) {

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 4;

  if (!props.proyectos || props.proyectos.length === 0) {
    return (
      <div className="flex w-full flex-wrap md:ml-4 md:mr-20 md:w-3/5">
        <div className="flex w-full justify-center pb-6 xl:w-1/2">
          <h3 class="mt-4">No hay proyectos que coincidan con la búsqueda</h3>
        </div>         
      </div>);
  }

  //PAGINACION
  const totalPages = Math.ceil(props.proyectos.length / itemsPerPage);
  const handleClickPrev = () => {
    if (currentPage > 1) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage(prevPage => prevPage - 1);
        setIsLoading(false);
      }, 500); // Simula una carga de 500ms
    }
  };
  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage(prevPage => prevPage + 1);
        setIsLoading(false);
      }, 100); 
    }
  };
  const handleClickPage = (page) => {
    if (currentPage !== page) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage(page);
        setIsLoading(false);
      }, 100); 
    }
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProjects = props.proyectos.slice(startIndex, startIndex + itemsPerPage);


  const replaceSpaces = (str) => {
    return encodeURIComponent(str.replace(/\s/g, '-'));
  };

  
  return (
    <div className="flex w-full flex-wrap md:ml-4 md:mr-20 md:w-3/5">
      {isLoading ? (
        <div className="w-full flex justify-center items-center h-64">
          <p className="text-lg font-semibold">Cargando...</p>
        </div>
      ) : (
        selectedProjects.map((proyecto, index) => (
          <div className="flex w-full justify-center pb-6 xl:w-1/2" key={index}>
            <CustomCards
              idProyecto={proyecto.idProyecto}
              pagina={props.pagina}
              paginaDetalle={props.paginaDetalle}
              ciudad={props.ciudad}
              proyecto={proyecto}
              nombreProyectoUrl={replaceSpaces(proyecto.nombreWebProyecto)}
              nombreProyecto={proyecto.nombreWebProyecto}
              comunaNombre={proyecto.comunaNombre}
              nombreEtapa={proyecto.nombreEtapa}
              colorEtapa={proyecto.colorEtapa}
              precioUfMinimo={proyecto.ufMinimo}
              imagen={proyecto.imagenMiniatura}
              nombreSubsidio={proyecto.nombreSubsidio}
            />
          </div>
        ))
      )}

      <div className="mb-4 h-10 flex w-full justify-center">
        <button
          className="mr-2 flex items-center justify-center rounded border border-gray-400 px-4 py-2 text-black hover:bg-gray-400"
          onClick={handleClickPrev}
          disabled={currentPage === 1 || isLoading}
        >
          <img
            className="h-3 w-3"
            alt="paginacion"
            src="../../iconos/flecha-izquierda.png"
          />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mr-2 flex items-center justify-center rounded border px-4 py-2 ${currentPage === index + 1 ? 'border-transparent fondo-malpo-rojo text-white' : 'border-gray-400 text-black hover:bg-gray-400'}`}
            onClick={() => handleClickPage(index + 1)}
            disabled={isLoading}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="mr-2 flex items-center justify-center rounded border border-gray-400 px-4 py-2 text-black hover:bg-gray-400"
          onClick={handleClickNext}
          disabled={currentPage === totalPages || isLoading}
        >
          <img
            className="h-3 w-3"
            alt="paginacion"
            src="../../iconos/flecha-derecha.png"
          />
        </button>
      </div>
    </div>
  );
};


