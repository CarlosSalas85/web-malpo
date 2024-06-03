"use client";
import React, { useDeferredValue, useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./styleFiltro.css";

const FilterButton = ({ id, type, activeFilter, handleClick }) => {
  return (
    <button
      className={`text-l h-12 w-32 rounded border border-black hover:text-gray-400 ${activeFilter === id
        ? "fondo-malpo-gris text-white"
        : "bg-white text-black"
        } transition-colors duration-100 ease-in-out`}
      onClick={() => handleClick(id)}
    >
      {type}
    </button>
  );
};

const FilterButton2 = ({ id, type, activeFilter, handleClick }) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium border border-black rounded ${activeFilter === id
        ? "fondo-malpo-gris text-white"
        : "bg-white text-black"
        } transition-colors duration-100 ease-in-out`}
      onClick={() => handleClick(id)}
    >
      {type}
    </button>
  );
};

const validar = (p1, p2) => {
  if (p2 == 0) {
    return true
  } else if (p1 == p2) {
    return true
  } else {
    return false
  }
}

const validarCasa = (opcion, proyectoTipo) => {
  if (opcion == 0) {
    return true
  } else if (opcion == 4) {
    if (proyectoTipo == 1 || proyectoTipo == 2) {
      return true
    } else {
      return false
    }
  } else if (opcion == proyectoTipo) {
    return true
  } else {
    return false
  }
}
const validacionBanos = (opcion, rangoInf, rangoSup) => {
  if (opcion == 0) {
    return true
  } else if (opcion == 99) {
    if (rangoInf >= 3) {
      return true
    } else {
      return false
    }
  } else if (rangoInf >= opcion <= rangoSup) {
    return true
  } else {
    return false
  }
}
const validacionDormitorios = (opcion, rangoInf, rangoSup) => {
  if (opcion == 0) {
    return true
  } else if (opcion == 99) {
    if (rangoInf >= 4) {
      return true
    } else {
      return false
    }
  } else if (rangoInf >= opcion <= rangoSup) {
    return true
  } else {
    return false
  }
}
const CustomSelect = ({ options, optionDefault, handle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState((optionDefault) ? optionDefault : options[0].value);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (value, text) => {
    handle(value, text);
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="relative mb-6 mt-3 rounded border border-black">
      <div
        className="flex cursor-pointer items-center justify-between rounded border border-gray-300 px-4 py-2 pb-1 pt-1"
        onClick={toggleDropdown}
      >
        <span>
          {options.find((opt) => opt.value == selectedOption)?.label}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 transform transition-transform ${isOpen ? "-rotate-180" : ""
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
              className={`flex cursor-pointer items-center px-4 py-2 ${selectedOption === option.value
                ? "bg-gray-200"
                : "hover:bg-gray-100"
                }`}
              onClick={() => handleOptionSelect(option.value, option.label)}
            >
              <span>{option.label}</span>
              <input
                type="checkbox"
                checked={selectedOption === option.value}
                className="ml-auto cursor-pointer"
                onChange={() => { }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
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




const Filter = ({ filtros, filtroUrl, proyectos, setFiltrarProyectos, pagina }) => {
  const [activeFilterTipo, setActiveFilterTipo] = useState(0);
  const [activeFilterSubsidio, setActiveFilterSubsidio] = useState(0);
  const [activeFilterDormitorios, setActiveFilterDormitorios] = useState(0);
  const [activeFilterBanos, setActiveFilterBanos] = useState(0);
  const [selectedOptionEtapa, setSelectedOptionEtapa] = useState(filtros.etapasProyecto[0].id);

  const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);

  // Estados iniciales con validación
  const [selectedOptionRegion, setSelectedOptionRegion] = useState(
    filtroUrl && isNumber(filtroUrl.regionSelecionada) ? filtroUrl.regionSelecionada : 0
  );
  const [selectedOptionCiudad, setSelectedOptionCiudad] = useState(
    filtroUrl && isNumber(filtroUrl.comunaSelecionada) ? filtroUrl.comunaSelecionada : 0
  );

  let nombreRegion = ''
  let nombreComuna = ''

  const [mostrarSession, setMostrarSession] = useState(false);
  const [filteredData, setFilteredData] = useState(null);

  const getFilterId = (activeFilter, filterArray, defaultId = 0) => {
    if (activeFilter === 0) return defaultId;
    const filterItem = filterArray.find((item) => item.nombre === activeFilter || item.cantidad === activeFilter);
    return filterItem ? filterItem.id : defaultId;
  };



  const applyFilters = async () => {
    const ids = {
      estadoInversion: 0,

      tipoProyectoId: 0,
      subsidioId: 0,
      dormitorioId: 0,
      banoId: 0,
      etapaId: 0,
      ciudadId: 0,
    };
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
    const activeFilterTipoId = proyecto.id;
    const subsidio = filtros.tiposSubsidio.find((subsidio) => subsidio.nombre === activeFilterSubsidio);
    const activeFilterSubsidioId = subsidio.id;
    const dormitorio = filtros.dormitorios.find((dormitorio) => dormitorio.cantidad === activeFilterDormitorios);
    const activeFilterDormitorioId = dormitorio.id;
    const bano = filtros.banos.find((bano) => bano.cantidad === activeFilterBanos);
    const activeFilterBanoId = subsidio.id;

    var ids = {
      estadoInversion: 0,
      tipoProyectoId: activeFilterTipoId,
      subsidioId: activeFilterSubsidioId,
      dormitorioId: activeFilterDormitorioId,
      banoId: activeFilterBanoId,
      etapaId: 0,
      ciudadId: 0
      //etapaId: selectedOptionEtapa,
      //ciudadId: selectedOptionCiudad,
    };

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


  const handleEtapa = (idEtapa, nombreEtapa = '') => {
    setSelectedOptionEtapa(idEtapa)
  }
  const handleCiudad = (idCiudad, nombreCiudad = '') => {
    setSelectedOptionCiudad(idCiudad)
    setSelectedOptionRegion(0)
  }

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


  const modificarURL = (nombreRegion, nombreComuna) => {
    const cleanString = (str) => {
      return str.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ñ/g, "n")
        .replace(/\s+/g, "-")
        .toLowerCase()
    };

    let url = ``
    if (selectedOptionCiudad != 0) {
      url = `${cleanString(nombreComuna)}`
    } else if (selectedOptionRegion != 0) {
      url = `${cleanString(nombreRegion)}`
    } else {
      url = ``
    }
    window.history.replaceState(null, '', `/${pagina}/${url}`);
  }

  const filtrarProyectos = (proyectos, tipoProyecto, bano, dormitorio, subsidio, region, comuna, etapa) => {
    if (!proyectos || !Array.isArray(proyectos)) {
      return;
    }
    console.log('estos son todos los proyecots', proyectos)
    const proyectosFiltrados = proyectos.filter(proyecto => {
      // Verificar si algún parámetro de proyecto es igual a cero
      let filtroTipo = false;
      let filtroBano = false;
      let filtroDormitorio = false;
      let filtroSubsidio = false;
      let filtroRegion = false;
      let filtroComuna = false;
      let filtroEtapa = false;
      if (
        tipoProyecto == '0' &&
        bano == '0' &&
        dormitorio == '0' &&
        subsidio == '0' &&
        region == '0' &&
        comuna == '0' &&
        etapa == '0'
      ) {
        modificarURL('', '');
        return true
      } else {
        if (comuna != '0') {
          if (proyecto.idComuna == comuna) {
            nombreComuna = proyecto.comunaNombre
          }
        } else if (region != '0') {
          if (proyecto.idRegion == region) {
            nombreRegion = proyecto.regionNombre
          }
        }
        filtroTipo = validarCasa(tipoProyecto, proyecto.idTipo);
        filtroBano = validacionBanos(bano, proyecto.banosMinimo, proyecto.banosMaximo);
        filtroDormitorio = validacionDormitorios(dormitorio, proyecto.habitacionesMinimo, proyecto.habitacionesMaximo);
        filtroSubsidio = validar(proyecto.idSubsidio, subsidio);
        if (comuna == '0' && region == '0') {
          filtroRegion = true;
          filtroComuna = true;
        } else {
          filtroRegion = (proyecto.idRegion == region);
          filtroComuna = (proyecto.idComuna == comuna);
        }
        modificarURL(nombreRegion, nombreComuna);
        filtroEtapa = validar(proyecto.idEtapa, etapa);
        return (filtroTipo && filtroBano && filtroDormitorio && filtroSubsidio && (filtroRegion || filtroComuna) && filtroEtapa)
      }
    });

    setFiltrarProyectos(proyectosFiltrados)
  }

  useEffect(() => {
    filtrarProyectos(proyectos, activeFilterTipo, activeFilterBanos, activeFilterDormitorios, activeFilterSubsidio, selectedOptionRegion, selectedOptionCiudad, selectedOptionEtapa)
  }, [activeFilterTipo, activeFilterBanos, activeFilterDormitorios, activeFilterSubsidio, selectedOptionRegion, selectedOptionCiudad, selectedOptionEtapa]);


  return (

    <div className="pl-2 pr-2 md:ml-20 md:mr-4 grid-cols-2">

      <div className="sm:block md:hidden">
        {" "}
        {/* Oculto en pantallas más grandes que sm */}
        <div className="mb-6 flex justify-between text-center">
          <a href="#" className="items-center" onClick={() => handleClickTipo(0)}>
            <div className="flex flex-col items-center justify-between">
              <img
                className="h-10 w-10" // Agregamos un margen a la derecha para separar el icono del texto
                alt={`filtro`}
                src={`https://c.animaapp.com/Px7m18Hi/img/filter-alt-off@2x.png`}
              />
              <span>Ver Todo</span>
            </div>
          </a>
          <a href="#" className="items-center" onClick={() => handleClickTipo(1)}>
            <div className="flex flex-col items-center justify-between">
              <img
                className="h-10 w-10" // Agregamos un margen a la derecha para separar el icono del texto
                alt={`filtro`}
                src={`https://c.animaapp.com/Px7m18Hi/img/home@2x.png`}
              />
              <span>Casa</span>
            </div>
          </a>
          <a href="#" className="items-center" onClick={() => handleClickTipo(2)}>
            <div className="flex flex-col items-center justify-between">
              <img
                className="h-10 w-10" // Agregamos un margen a la derecha para separar el icono del texto
                alt={`filtro`}
                src={`https://c.animaapp.com/Px7m18Hi/img/apartment@2x.png`}
              />
              <span>Dpto.</span>
            </div>
          </a>
          <a href="#" className="items-center" onClick={() => handleClickTipo(3)}>
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
          {/*  Comentando boton de aplicar filtros, ya no es necesario al funcionar en tiempo real los filtros */}
          {/* <button
            className={`fondo-malpo-gris h-12 w-32 rounded-md border border-black text-white hover:text-gray-400`}
            onClick={() => handleClick()}
          >
            Aplicar Filtros
          </button> */}
        </div>

        <h2 className="text-2xl">Tipo de proyecto</h2>

        <div className="mb-6 mt-3 flex flex-wrap gap-1 rounded-md ">

          {filtros.tiposProyecto.map((tipoProyecto, index) => (
            <FilterButton2 key={index}
              id={tipoProyecto.id}
              type={tipoProyecto.nombre}
              activeFilter={activeFilterTipo}
              handleClick={handleClickTipo}
            />
          ))}

        </div>

        <h2 className="text-2xl">Subsidio</h2>

        <div className="mb-6 mt-3 flex flex-wrap gap-1 rounded-md">
          {filtros.tiposSubsidio.map((tipoSubsidio, index) => (
            <FilterButton2 key={index}
              id={tipoSubsidio.id}
              type={tipoSubsidio.nombre}
              activeFilter={activeFilterSubsidio}
              handleClick={handleClickSubsidio}
            />
          ))}
        </div>

        <h2 className="text-2xl">Dormitorios</h2>

        <div className="mb-6 mt-3 flex flex-wrap gap-1 rounded-md">
          {filtros.dormitorios.map((dormitorio, index) => (
            <FilterButton2 key={index}
              id={dormitorio.id}
              type={dormitorio.cantidad}
              activeFilter={activeFilterDormitorios}
              handleClick={handleClickDormitorios}
            />
          ))}
        </div>

        <h2 className="text-2xl">Baños</h2>

        <div className="mb-6 mt-3 flex flex-wrap gap-1 rounded-md">
          {filtros.banos.map((bano, index) => (

            <FilterButton2 key={index}
              id={bano.id}
              type={bano.cantidad}
              activeFilter={activeFilterBanos}
              handleClick={handleClickBanos}
            />
          ))}
        </div>

        <h2 className="text-2xl">Etapa del proyecto</h2>

        <CustomSelect options={options} optionDefault={0} handle={handleEtapa} />

        <h2 className="text-2xl">Ciudad</h2>
        <CustomSelect options={optionsCiudad} optionDefault={selectedOptionCiudad} handle={handleCiudad} />
      </div>
    </div>
  );
};

export default Filter;


Filter.propTypes = {
  actualizarProyectos: PropTypes.func.isRequired, // Propiedad de función para actualizar los proyectos en el componente padre
};