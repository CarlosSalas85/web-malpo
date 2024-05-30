"use client";
import React, { useState, useEffect, useRef } from "react";
import CardBlog from "@/app/componets/banner-blog/card-blog";

const CustomSelect = ({ options, selectedOption, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative mb-6 mt-3 w-full rounded border border-black"
    >
      <div
        className="flex cursor-pointer items-center justify-between rounded border"
        onClick={toggleDropdown}
      >
        <div className="flex w-full flex-row">
          <div className="flex w-10/12 items-center justify-start bg-blue-50">
            <span className="text-18px ml-4 py-4">{selectedOption.label}</span>
          </div>
          <div className="flex w-2/12 items-center justify-center bg-rojoMalpo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`h-8 w-8 transform text-white transition-transform ${
                isOpen ? "-rotate-180" : ""
              }`}
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded border border-gray-300 bg-white shadow-md">
          {options.map((option) => (
            <div
              key={option.value}
              className={`flex cursor-pointer items-center px-4 py-2 ${
                option.value === selectedOption.value
                  ? "bg-gray-200 text-rojoMalpo"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              <span className="text-18px">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Page = ({ datosCategorias, datosBlogs }) => {
  const [options, setOptions] = useState([
    { value: 0, label: "Todos los blogs" },
  ]);

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [blogs, setBlogs] = useState(datosBlogs.datos);

  useEffect(() => {
    if (datosBlogs && datosBlogs.datos) {
      setBlogs(datosBlogs.datos);
    }
  }, [datosBlogs]);

  useEffect(() => {
    if (datosCategorias && datosCategorias.datos) {
      const formattedOptions = datosCategorias.datos.map((item) => ({
        value: item.idCategoria,
        label: item.nombreCategoria,
      }));
      setOptions([{ value: 0, label: "Todos los blogs" }, ...formattedOptions]);
    }
  }, [datosCategorias]);

  useEffect(() => {
    // Filtrar los blogs según la categoría seleccionada
    if (selectedOption.value !== 0) {
      const filteredBlogs = datosBlogs.datos.filter(
        (blog) => blog.idCategoria === selectedOption.value,
      );
      setBlogs(filteredBlogs);
    } else {
      // Si se selecciona "Todos los blogs", mostrar todos los blogs
      setBlogs(datosBlogs.datos);
    }
  }, [selectedOption, datosBlogs]);

  const handleChangeOption = (option) => {
    setSelectedOption(option);
  };

  const [blogsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="mx-auto flex w-11/12 pb-4 md:w-5/12">
        <CustomSelect
          options={options}
          selectedOption={selectedOption}
          onOptionSelect={handleChangeOption}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {currentBlogs.length > 0 ? (
          currentBlogs.map((blog) => <CardBlog key={blog.idBlog} datosBlog={blog} />)
        ) : (
          <p className="text-3xl font-semibold text-rojoMalpo">
            No hay blogs en esta categoría.
          </p>
        )}
      </div>
      <div className="mx-auto my-4 flex h-10 w-9/12 justify-center">
        <button
          className="mr-2 flex items-center justify-center rounded border border-gray-400 px-4 py-2 text-black hover:bg-gray-400"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1} // Deshabilitar el botón si está en la primera página
        >
          <img
            className="h-3 w-3"
            alt="paginacion"
            src="../../iconos/flecha-izquierda.png"
          />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`${
              currentPage === index + 1
                ? "fondo-malpo-rojo text-white"
                : "border border-gray-400"
            } mr-2 flex items-center justify-center rounded px-4 py-2 text-black hover:bg-gray-400`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="mr-2 flex items-center justify-center rounded border border-gray-400 px-4 py-2 text-black hover:bg-gray-400"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages} // Deshabilitar el botón si está en la última página
        >
          <img
            className="h-3 w-3"
            alt="paginacion"
            src="../../iconos/flecha-derecha.png"
          />
        </button>
      </div>
    </>
  );
};

export default Page;
