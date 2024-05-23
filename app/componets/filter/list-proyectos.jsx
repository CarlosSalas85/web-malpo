'use client';
import CustomCards from "../../componets/card-proyecto/card-proyecto-uno";
import { Ctrl_aplicar_filtros } from "@/app/controllers/Ctrl_aplicar_filtros";



export default async function List(props){
  // Función auxiliar para reemplazar espacios en blanco por guiones bajos y codificar la URL
const replaceSpaces = (str) => {
  return encodeURIComponent(str.replace(/\s/g, '-'));
};

const ids = {
  estadoInversion: props.estadoInversion,
  tipoProyectoId: 0,
  subsidioId: 0,
  dormitorioId: 0,
  banoId: 0,
  etapaId: 0,
  ciudadId: 0,
};

const data = await Ctrl_aplicar_filtros(ids);
const proyectosIniciales = data.datos;


  return (
    <div className="flex w-full flex-wrap md:ml-4 md:mr-20 md:w-3/5">
        {proyectosIniciales.map((proyecto, index) => (
        <div className="flex w-full justify-center pb-6 xl:w-1/2" key={index}>
          <CustomCards // Don't forget to add a unique key for each item in the map function
            idProyecto={1} // Consider using proyecto.id or something unique from your data
            pagina={props.pagina}
            ciudad={props.ciudad}
            proyecto={proyecto}
            nombreProyectoUrl={(replaceSpaces(proyecto.nombreWebProyecto))}
            nombreProyecto={proyecto.nombreWebProyecto}
            comunaNombre={proyecto.comunaNombre}
            nombreEtapa={proyecto.nombreEtapa}
            colorEtapa= {proyecto.colorEtapa}
            precioUfMinimo={proyecto.ufMinimo}
            imagen={proyecto.imagenMiniatura}
            nombreSubsidio={proyecto.nombreSubsidio}
          />
          </div>
        ))}

      <div className="mb-4 flex w-full justify-center md:justify-start">
        <button className="mr-2 flex items-center justify-center rounded border border-gray-400 px-4 py-2 text-black hover:bg-gray-400">
          <img
            className="h-3 w-3"
            alt={`paginacion`}
            src={`../../iconos/flecha-izquierda.png`}
          />
        </button>
        <button className="fondo-malpo-rojo mr-2 flex items-center justify-center rounded border border-transparent px-4 py-2 text-white hover:bg-gray-400">
          1
        </button>
        <button className="mr-2 flex items-center justify-center rounded border border-gray-400 px-4 py-2 text-black hover:bg-gray-400">
          2
        </button>
        <button className="mr-2 flex items-center justify-center rounded border border-gray-400 px-4 py-2 text-black hover:bg-gray-400">
          <img
            className="h-3 w-3"
            alt={`paginacion`}
            src={`../../iconos/flecha-derecha.png`}
          />
        </button>
      </div>
    </div>
  );
};


