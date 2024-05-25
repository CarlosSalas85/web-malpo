"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./styleFiltro.css";
import { Ctrl_aplicar_filtros } from "@/app/controllers/Ctrl_aplicar_filtros";

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

// const data = await Ctrl_filtros();
// const filtros = data.datos;

// // Mapeo de los filtros en arrays separados
// const contenidoFiltros = {
//   tiposProyecto: filtros.tiposProyecto.map(tipo => ({
//     id: tipo.idTipo,
//     nombre: tipo.nombreTipo
//   })),
//   tiposSubsidio: filtros.tiposSubsidio.map(subsidio => ({
//     id: subsidio.idSubsidio,
//     nombre: subsidio.nombreSubsidio
//   })),
//   dormitorios: filtros.dormitorios.map(dormitorio => ({
//     id: dormitorio.idDormitorios,
//     cantidad: dormitorio.cantidadDormitorios
//   })),
//   banos: filtros.banos.map(bano => ({
//     id: bano.idBanos,
//     cantidad: bano.cantidadBanos
//   })),
//   etapasProyecto: filtros.etapasProyecto.map(etapa => ({
//     id: etapa.idEtapa,
//     nombre: etapa.nombreEtapa
//   })),
//   ciudadesProyecto: filtros.ciudadesProyecto.map(ciudad => ({
//     id: ciudad.idComuna,
//     cantidadfiltros: ciudad.cantidadfiltros,
//     nombre: ciudad.comunaNombre
//   })),
// };



// console.log("Filtros:",contenidoFiltros);


const Filter = ({filtros}) => {
  // console.log("Los filtros en Filter son:",filtros);
  const [activeFilterTipo, setActiveFilterTipo] = useState("TODOS");
  const [activeFilterSubsidio, setActiveFilterSubsidio] = useState("TODOS");
  const [activeFilterDormitorios, setActiveFilterDormitorios] =
    useState("TODOS");
  const [activeFilterBanos, setActiveFilterBanos] = useState("TODOS");
  const [mostrarSession, setMostrarSession] = useState(false);
  const [filteredData, setFilteredData] = useState(null);


  const applyFilters = async () => {
    const ids = {
      estadoInversion: 0,
      tipoProyectoId: 0,
      subsidioId:0,
      dormitorioId: 0,
      banoId: 0,
      etapaId: 0,
      ciudadId: 0,
    };

    // console.log("El valor de ids es:", ids);
    const response = await Ctrl_aplicar_filtros(ids);
    setFilteredData(response.datos);
    // actualizarProyectos(response.datos);
    // console.log("Lo que obtengo desde filteredData es:", filteredData);
  };

  useEffect(() => {
    applyFilters();
  }, []);

  useEffect(() => {
    if (filteredData === null) {
      applyFilters();
    }
  }, [filteredData]);



  const handleClick = () => {

    const proyecto = filtros.tiposProyecto.find((tipo) => tipo.nombre === activeFilterTipo);
    const activeFilterTipoId=proyecto.id;
    const subsidio = filtros.tiposSubsidio.find((subsidio) => subsidio.nombre === activeFilterSubsidio);
    const activeFilterSubsidioId=subsidio.id;
    const dormitorio = filtros.dormitorios.find((dormitorio) => dormitorio.cantidad === activeFilterDormitorios);
    // console.log("dormitorio", dormitorio);
    const activeFilterDormitorioId=dormitorio.id;
    const bano = filtros.banos.find((bano) => bano.cantidad === activeFilterBanos);
    const activeFilterBanoId=subsidio.id;

    var ids = {
      estadoInversion:0,
      tipoProyectoId: activeFilterTipoId,
      subsidioId: activeFilterSubsidioId,
      dormitorioId: activeFilterDormitorioId,
      banoId: activeFilterBanoId,
      etapaId: 0,
      ciudadId:0
      //etapaId: selectedOptionEtapa,
      //ciudadId: selectedOptionCiudad,
    };

    // console.log("El valor de ids es:", ids);
    // console.log(ids);
    // Ctrl_aplicar_filtros(ids)
    //   .then((response) => {
    //     // Actualizar el componente Proximos Proyectos con los nuevos datos
    //     setCurrentPage(1); // Suponiendo que tienes una variable de estado currentPage
    //     actualizarProyectos(response.datos);
  };

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


  const options = filtros.etapasProyecto.map(etapa => {
    return {
      value: etapa.id,
      label: etapa.nombre
    };
  });
  
  const optionsCiudad = filtros.ciudadesProyecto.map(etapa => {
    return {
      value: etapa.id,
      label: etapa.nombre
    };
  });




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
  
        {filtros.tiposProyecto.map((tipoProyecto, index) => (
  <FilterButton key={index}
    type={tipoProyecto.nombre}
    activeFilter={activeFilterTipo}
    handleClick={handleClickTipo}
  />
))}
          
        </div>

        <h2 className="text-2xl">Subsidio</h2>

        <div className="mb-6 mt-3 flex">
        {filtros.tiposSubsidio.map((tipoSubsidio, index) => (
  <FilterButton key={index}
    type={tipoSubsidio.nombre}
    activeFilter={activeFilterSubsidio}
    handleClick={handleClickSubsidio}
  />
))}
        </div>

        <h2 className="text-2xl">Dormitorios</h2>

        <div className="mb-6 mt-3 flex">
        {filtros.dormitorios.map((dormitorio, index) => (
  <FilterButton key={index}
    type={dormitorio.cantidad}
    activeFilter={activeFilterDormitorios}
    handleClick={handleClickDormitorios}
  />
))}
        </div>

        <h2 className="text-2xl">Baños</h2>

        <div className="mb-6 mt-3 flex">
        {filtros.banos.map((bano, index) => (
  <FilterButton key={index}
    type={bano.cantidad}
    activeFilter={activeFilterBanos}
    handleClick={handleClickBanos}
  />
))}
        </div>

        <h2 className="text-2xl">Etapa del proyecto</h2>
        <CustomSelect options={options}/>

        <h2 className="text-2xl">Ciudad</h2>
        <CustomSelect options={optionsCiudad} />
      </div>
    </div>
  );
};

export default Filter;


Filter.propTypes = {
  actualizarProyectos: PropTypes.func.isRequired, // Propiedad de función para actualizar los proyectos en el componente padre
};