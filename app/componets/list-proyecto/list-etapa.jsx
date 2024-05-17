const IconoList = (props) => {
  return (
    <>
      <div className="hidden sm:block">
        <a href="#" className="flex flex-col items-center">
          <div className="mt-4 flex flex-col items-center">
            <img className="h-10 w-10" alt={`icono`} src={props.icono} />
            <div className="mt-2 flex flex-wrap items-center justify-center">
              <div
                className={`h-4 w-4 rounded-full bg-${props.color} mb-2 md:mb-0`}
              ></div>{" "}
              {/* Punto */}
              <div className={`h-1 w-32 bg-${props.color}`}></div>{" "}
              {/* Línea horizontal */}
              <div
                className={`h-4 w-4 rounded-full bg-${props.color} ${props.circulo}`}
              ></div>{" "}
              {/* Punto */}
            </div>
            <p className={`mt-2 hover:text-gray-400 text-${props.color}`}>
              {props.titulo}
            </p>
          </div>
        </a>
      </div>

      <div className="mx-auto block sm:hidden">
        {/* Fila con ícono, punto y título */}
        {/*  <a href="#" className="flex flex-row items-center justify-center">
          <img className="h-10 w-10" alt={`icono`} src={props.icono} />
          <div className={`mx-4 h-4 w-4 rounded-full bg-${props.color}`}></div>
          <p className={`mt-2 hover:text-gray-400 text-${props.color}`}>
            {props.titulo}
          </p>
        </a> */}
        {/* Fila con línea vertical */}
        <a href="#">
          <div className="flex flex-row">
            {/* Primera columna */}
            <div className="mr-3 flex w-20 flex-col items-end">
              <img className="h-10 w-10" alt={`icono`} src={props.icono} />
            </div>

            {/* Segunda columna */}

            <div className="mr-4 flex w-10 flex-col items-center">
              {/* Círculo */}
              <div
                className={`mx-4 h-4 w-4 rounded-full bg-${props.color}`}
              ></div>
              {/* Línea vertical */}
              <div className={`h-24 w-1 bg-${props.color}`}></div>
              <div
                className={`h-4 w-4 rounded-full bg-${props.color} ${props.circulo}`}
              ></div>{" "}
              {/* Punto */}
            </div>

            {/* Tercera columna */}
            <div className="items-first flex w-32 flex-col">
              {/* Texto en la tercera columna */}
              <p className={`mt-2 hover:text-gray-400 text-${props.color}`}>
                {props.titulo}
              </p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

const List = () => {
  return (
    <>
      {/* Título */}
      <div className="text-18px mb-4 ml-4 mt-4 md:text-center">
        <h1>El proyecto Doña Ignacia se encuentra en etapa de Terminaciones</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        {/* Fila de íconos */}
        <div className="mt-6 flex flex-col justify-center sm:flex-row md:justify-between">
          <IconoList
            titulo={"Lanzamiento"}
            color={"rojoMalpo"}
            icono={"../../iconos/etapa/OBRASPREVIASOK.png"}
            circulo={"hidden"}
          />
          <IconoList
            titulo={"En Construcción"}
            color={"rojoMalpo"}
            icono={"../../iconos/etapa/OBRAGRUESAOK.png"}
            circulo={"hidden"}
          />
          <IconoList
            titulo={"Terminaciones"}
            color={"grisMalpo"}
            icono={"../../iconos/etapa/TERMINACIONES.png"}
            circulo={"hidden"}
          />
          <IconoList
            titulo={"Pre-entrega"}
            color={"grisMalpo"}
            icono={"../../iconos/etapa/RECEPCIONMUNICIPAL.png"}
            circulo={"hidden"}
          />
          <IconoList
            titulo={"Entrega Inmediata"}
            color={"grisMalpo"}
            icono={"../../iconos/etapa/ENTREGA.png"}
            circulo={"block"}
          />
        </div>

        <div className="mt-4 flex justify-center md:justify-between">
          <a href="#">
            <div className="flex flex-col items-center">
              <img
                className="w-30 h-12"
                alt={`icono`}
                src={`../../iconos/etapa/PILOTOON.png`}
              />
              <p className={`mt-2 text-rojoMalpo hover:text-gray-400`}>
                Vivienda Piloto
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default List;
