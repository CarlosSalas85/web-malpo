import CustomCards from "../../componets/card-proyecto/card-proyecto-uno";

const List = (props) => {
  const nombreProyectoEncoded = encodeURIComponent("doña-ignacia");
  return (
    <div className="flex w-full flex-wrap md:ml-4 md:mr-20 md:w-3/5">
      <div className="flex w-full justify-center pb-6 xl:w-1/2">
        <CustomCards
          idProyecto={1}
          pagina={props.pagina}
          ciudad={props.ciudad}
          nombre={nombreProyectoEncoded}
        />
      </div>
      <div className="flex w-full justify-center pb-6 xl:w-1/2">
        <CustomCards
          idProyecto={2}
          pagina={props.pagina}
          ciudad={props.ciudad}
          nombre={nombreProyectoEncoded}
        />
      </div>
      <div className="flex w-full justify-center pb-6 xl:w-1/2">
        <CustomCards
          idProyecto={3}
          pagina={props.pagina}
          ciudad={props.ciudad}
          nombre={nombreProyectoEncoded}
        />
      </div>
      <div className="flex w-full justify-center pb-6 xl:w-1/2">
        <CustomCards
          idProyecto={4}
          pagina={props.pagina}
          ciudad={props.ciudad}
          nombre={nombreProyectoEncoded}
        />
      </div>

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

export default List;
