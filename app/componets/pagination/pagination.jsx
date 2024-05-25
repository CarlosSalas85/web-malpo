'use client';
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useRouter }  from "next/navigation";
// import "./style.css";

export const Pagination = ({
  view,
  totalPages,
  className,
  onPageChange,
  paginationItem = "https://c.animaapp.com/BaYmmMxe/img/-paginationitem-.svg",
  img = "https://c.animaapp.com/BaYmmMxe/img/-paginationitem--1.svg",
  currentPage,
  nombreLugar,
  param
}) => {
  const [paginaActual, setPaginaActual] = useState(currentPage || 1);
  const router = useRouter();

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
    onPageChange(numeroPagina);
    router.push(`/${view}/filtros?page=${numeroPagina}`);
  };

  const handlePrevPage = () => {
    if (paginaActual > 1) {
      cambiarPagina(paginaActual - 1);
    }
  };

  const handleNextPage = () => {
    if (paginaActual < totalPages) {
      cambiarPagina(paginaActual + 1);
    }
  };

  return (
    <div className={`mb-4 flex w-full justify-center md:justify-start ${className}`}>
      <button
        className="mr-2 flex items-center justify-center rounded border border-gray-400 px-4 py-2 text-black hover:bg-gray-400"
        onClick={handlePrevPage}
        disabled={paginaActual === 1}
      >
        <img
          className="h-3 w-3"
          alt="paginacion"
          src="../../iconos/flecha-izquierda.png"
        />
      </button>
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className={`mr-2 flex items-center justify-center rounded border px-4 py-2 ${
              paginaActual === pageNumber
                ? 'fondo-malpo-rojo text-white border-transparent hover:bg-gray-400'
                : 'border-gray-400 text-black hover:bg-gray-400'
            }`}
            onClick={() => cambiarPagina(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className="mr-2 flex items-center justify-center rounded border border-gray-400 px-4 py-2 text-black hover:bg-gray-400"
        onClick={handleNextPage}
        disabled={paginaActual === totalPages}
      >
        <img
          className="h-3 w-3"
          alt="paginacion"
          src="../../iconos/flecha-derecha.png"
        />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  view: PropTypes.string.isRequired,
  totalPages: PropTypes.number.isRequired,
  className: PropTypes.string,
  onPageChange: PropTypes.func.isRequired,
  paginationItem: PropTypes.string,
  img: PropTypes.string,
  currentPage: PropTypes.number,
  nombreLugar: PropTypes.string,
  param: PropTypes.string
};


