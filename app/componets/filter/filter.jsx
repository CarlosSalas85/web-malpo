"use client";
import React from "react";
import { useState } from "react";
import "./styleFiltro.css";

const CustomSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="relative mb-6 mt-3 rounded border border-black">
      <div
        className="flex cursor-pointer items-center justify-between rounded border border-gray-300 px-4 py-2 pb-4 pt-4"
        onClick={toggleDropdown}
      >
        <span>
          {options.find((opt) => opt.value === selectedOption)?.label}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 transform transition-transform ${
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
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded border border-gray-300 bg-white shadow-md">
          {options.map((option) => (
            <div
              key={option.value}
              className={`flex cursor-pointer items-center px-4 py-2 ${
                selectedOption === option.value
                  ? "bg-gray-200"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleOptionSelect(option.value)}
            >
              <span>{option.label}</span>
              <input
                type="checkbox"
                checked={selectedOption === option.value}
                className="ml-auto cursor-pointer"
                onChange={() => {}}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const options = [
  { value: "0", label: "TODOS" },
  { value: "1", label: "VENTA EN VERDE" },
  { value: "2", label: "VENTA EN BLANCO" },
];

const optionsCiudad = [
  { value: "0", label: "TODOS" },
  { value: "1", label: "Talca" },
  { value: "2", label: "Linares" },
];

const FilterButton = ({ type, activeFilter, handleClick }) => {
  return (
    <button
      className={`text-l h-12 w-32 rounded border border-black hover:text-gray-400 ${
        activeFilter === type
          ? "fondo-malpo-gris text-white"
          : "bg-white text-black"
      } transition-colors duration-100 ease-in-out`}
      onClick={() => handleClick(type)}
    >
      {type}
    </button>
  );
};

const Filter = () => {
  const [activeFilterTipo, setActiveFilterTipo] = useState("Todas");
  const [activeFilterSubsidio, setActiveFilterSubsidio] = useState("Todas");
  const [activeFilterDormitorios, setActiveFilterDormitorios] =
    useState("Todas");
  const [activeFilterBanos, setActiveFilterBanos] = useState("Todas");
  const [mostrarSession, setMostrarSession] = useState(false);

  const handleClick = () => {};

  const handleClickTipo = (filter) => {
    setActiveFilterTipo(filter);
  };

  const handleClickSubsidio = (filter) => {
    setActiveFilterSubsidio(filter);
  };

  const handleClickDormitorios = (filter) => {
    setActiveFilterDormitorios(filter);
  };

  const handleClickBanos = (filter) => {
    setActiveFilterBanos(filter);
  };

  const toggleSession = () => {
    setMostrarSession(!mostrarSession);
  };

  return (
    <div className="w-full pl-2 pr-2 md:ml-20 md:mr-4 md:w-2/5">
      <div className="sm:block md:hidden">
        {" "}
        {/* Oculto en pantallas más grandes que sm */}
        <div className="mb-6 flex justify-between text-center">
          <a href="#" className="items-center">
            <div className="flex flex-col items-center justify-between">
              <img
                className="h-10 w-10" // Agregamos un margen a la derecha para separar el icono del texto
                alt={`filtro`}
                src={`https://c.animaapp.com/Px7m18Hi/img/filter-alt-off@2x.png`}
              />
              <span>Ver Todo</span>
            </div>
          </a>
          <a href="#" className="items-center">
            <div className="flex flex-col items-center justify-between">
              <img
                className="h-10 w-10" // Agregamos un margen a la derecha para separar el icono del texto
                alt={`filtro`}
                src={`https://c.animaapp.com/Px7m18Hi/img/home@2x.png`}
              />
              <span>Casa</span>
            </div>
          </a>
          <a href="#" className="items-center">
            <div className="flex flex-col items-center justify-between">
              <img
                className="h-10 w-10" // Agregamos un margen a la derecha para separar el icono del texto
                alt={`filtro`}
                src={`https://c.animaapp.com/Px7m18Hi/img/apartment@2x.png`}
              />
              <span>Dpto.</span>
            </div>
          </a>
          <a href="#" className="items-center">
            <div className="flex flex-col items-center justify-between">
              <img
                className="h-10 w-10" // Agregamos un margen a la derecha para separar el icono del texto
                alt={`filtro`}
                src={`https://c.animaapp.com/Px7m18Hi/img/store@2x.png`}
              />
              <span>Loc.</span>
            </div>
          </a>
          <a href="#" className="items-center" onClick={toggleSession}>
            <div className="flex flex-col items-center justify-between">
              <img
                className="h-10 w-10" // Agregamos un margen a la derecha para separar el icono del texto
                alt={`filtro`}
                src={`https://c.animaapp.com/Px7m18Hi/img/tune@2x.png`}
              />
              <span>Más Filtros</span>
            </div>
          </a>
        </div>
      </div>

      <div className={mostrarSession ? "block md:block" : "hidden md:block"}>
        <div className="mb-14 flex justify-between">
          <h2 className="text-2xl">Filtros</h2>
          <button
            className={`fondo-malpo-gris h-12 w-32 rounded-md border border-black text-white hover:text-gray-400`}
            onClick={() => handleClick()}
          >
            Aplicar Filtros
          </button>
        </div>

        <h2 className="text-2xl">Tipo de proyecto</h2>

        <div className="mb-6 mt-3 flex">
          <FilterButton
            type="Todas"
            activeFilter={activeFilterTipo}
            handleClick={handleClickTipo}
          />
          <FilterButton
            type="Casa"
            activeFilter={activeFilterTipo}
            handleClick={handleClickTipo}
          />
          <FilterButton
            type="Dpto"
            activeFilter={activeFilterTipo}
            handleClick={handleClickTipo}
          />
        </div>

        <h2 className="text-2xl">Subsidio</h2>

        <div className="mb-6 mt-3 flex">
          <FilterButton
            type="Todas"
            activeFilter={activeFilterSubsidio}
            handleClick={handleClickSubsidio}
          />
          <FilterButton
            type="Ds1"
            activeFilter={activeFilterSubsidio}
            handleClick={handleClickSubsidio}
          />
        </div>

        <h2 className="text-2xl">Dormitorios</h2>

        <div className="mb-6 mt-3 flex">
          <FilterButton
            type="Todas"
            activeFilter={activeFilterDormitorios}
            handleClick={handleClickDormitorios}
          />
          <FilterButton
            type="1"
            activeFilter={activeFilterDormitorios}
            handleClick={handleClickDormitorios}
          />
        </div>

        <h2 className="text-2xl">Baños</h2>

        <div className="mb-6 mt-3 flex">
          <FilterButton
            type="Todas"
            activeFilter={activeFilterBanos}
            handleClick={handleClickBanos}
          />
          <FilterButton
            type="1"
            activeFilter={activeFilterBanos}
            handleClick={handleClickBanos}
          />
        </div>

        <h2 className="text-2xl">Etapa del proyecto</h2>
        <CustomSelect options={options} />

        <h2 className="text-2xl">Ciudad</h2>
        <CustomSelect options={optionsCiudad} />
      </div>
    </div>
  );
};

export default Filter;
