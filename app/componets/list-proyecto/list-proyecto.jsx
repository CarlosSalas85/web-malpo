const List = (props) => {


  //Funcion que me convierte el numero a formato de miles
  function formatoNumero(elemento) {
    return new Intl.NumberFormat("es-CL").format(elemento);
  }

  const {
    mt2Minimo,
    mt2Maximo,
    habitacionesMinimo,
    habitacionesMaximo,
    banosMinimo,
    banosMaximo,
    estacionamientosMinimo,
    estacionamientosMaximo,
    homeOffice,
    ufMinimo,
    m2Contruidos,
    cantidadDormitorios,
    cantidadBanos,
    estacionamientoModelo,
    valorUfModelo,
    idTipo,
    nombreTipo,
  } = props.caracteristicas;

  const isModelo = props.tipo === "modelos";


  const mt2Construidos = isModelo ? m2Contruidos : `${mt2Minimo} - ${mt2Maximo}`;
  const habitaciones =
    isModelo
      ? cantidadDormitorios
      : habitacionesMinimo == '0'
        ? habitacionesMaximo
        : habitacionesMinimo == habitacionesMaximo
          ? habitacionesMaximo
          : `${habitacionesMinimo} - ${habitacionesMaximo}`;
  const banos =
    isModelo ?
      cantidadBanos : banosMinimo == '0'
        ? banosMaximo : banosMinimo == banosMaximo ? banosMaximo :
          `${banosMinimo} - ${banosMaximo}`;
  const estacionamientos = isModelo ? estacionamientoModelo : `${estacionamientosMinimo} - ${estacionamientosMaximo}`;
  const precioUf = isModelo ? valorUfModelo : ufMinimo;
  const precioUfFormateado = formatoNumero(parseInt(precioUf));





  const existeEstacionamiento = parseInt(estacionamientosMinimo) > 0 ? true : false;


  return (
    <>
      <h1 className="mb-4 ml-4 mt-4 text-xl sm:text-center">
        Desde <span className="font-semibold">{precioUfFormateado}</span> UF 
      </h1>
      <div className="mx-auto flex w-2/3 flex-wrap md:w-11/12 lg:w-3/5 xl:w-2/5">
        <div className="mb-4 flex w-2/6 justify-end md:w-1/12">
          <img
            className="mr-3 h-8 w-8"
            alt="icono"
            src={idTipo === "2" ? "/iconos/caracteristicas_proyecto/departamento.png" : "/iconos/caracteristicas_proyecto/house.png"}
          />
        </div>
        <div className="mb-4 flex w-4/6 items-center justify-start md:w-5/12">
          <span className="text-xl">{nombreTipo}</span>
        </div>
        <div className="mb-4 flex w-2/6 justify-end md:w-1/12">
          <img
            className="mr-3 h-8 w-8"
            alt="icono"
            src="/iconos/caracteristicas_proyecto/mt2Cons.png"
          />
        </div>
        <div className="mb-4 flex w-4/6 items-center justify-start md:w-5/12">
          <span className="text-xl">{mt2Construidos} Mt2 Construidos</span>
        </div>
        <div className="mb-4 flex w-2/6 justify-end md:w-1/12">
          <img
            className="mr-3 h-8 w-8"
            alt="icono"
            src="/iconos/caracteristicas_proyecto/king-bed.png"
          />
        </div>
        <div className="mb-4 flex w-4/6 items-center justify-start md:w-5/12">
          <span className="text-xl">{habitaciones} Habitaciones</span>
        </div>
        <div className="mb-4 flex w-2/6 justify-end md:w-1/12">
          <img
            className="mr-3 h-8 w-8"
            alt="icono"
            src="https://c.animaapp.com/AuWMAeuM/img/bathtub.svg"
          />
        </div>
        <div className="mb-4 flex w-4/6 items-center justify-start md:w-5/12">
          <span className="text-xl">{banos} Baños</span>
        </div>

        {existeEstacionamiento && (
          <>
            <div className="mb-4 flex w-2/6 justify-end md:w-1/12">
              <img
                className="mr-3 h-8 w-8"
                alt="icono"
                src="/iconos/caracteristicas_proyecto/directions-car.png"
              />
            </div>

            <div className="mb-4 flex w-4/6 items-center justify-start md:w-5/12">
              <span className="text-xl">Estacionamiento</span>
            </div>
          </>
        )}
        {homeOffice == 1 && (
          <>
        <div className="mb-4 flex w-2/6 justify-end md:w-1/12">
          <img
            className="mr-3 h-8 w-8"
            alt="icono"
            src="https://c.animaapp.com/AuWMAeuM/img/laptop-chromebook.svg"
          />
        </div>
        <div className="mb-4 flex w-4/6 items-center justify-start md:w-5/12">
          <span className="text-xl">Home Office</span>
        </div>
        </>
        )}
      </div>
    </>
  );
};

export default List;