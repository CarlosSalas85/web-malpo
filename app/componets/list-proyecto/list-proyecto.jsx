
const List = (props) => {

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
  } = props.caracteristicas;

  const isModelo = props.tipo === "modelos";

  // const mt2Construidos = isModelo ? m2Contruidos : `${mt2Minimo} - ${mt2Maximo}`;
  // const habitaciones = isModelo ? cantidadDormitorios : `${habitacionesMinimo} - ${habitacionesMaximo}`;
  // const banos = isModelo ? cantidadBanos : `${banosMinimo} - ${banosMaximo}`;
  // const estacionamientos = isModelo ? estacionamientoModelo : `${estacionamientosMinimo} - ${estacionamientosMaximo}`;
  // const precioUf = isModelo ? valorUfModelo : ufMinimo;
  // const precioUfFormateado = formatoNumero(parseInt(precioUf));

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
        cantidadBanos : banosMinimo=='0' 
        ? banosMaximo : banosMinimo==banosMaximo ? banosMaximo :
        `${banosMinimo} - ${banosMaximo}` ;
  const estacionamientos = isModelo ? estacionamientoModelo : `${estacionamientosMinimo} - ${estacionamientosMaximo}`;
  const precioUf = isModelo ? valorUfModelo : ufMinimo;
  const precioUfFormateado = formatoNumero(parseInt(precioUf));

  



  const existeEstacionamiento = parseInt(estacionamientosMinimo) > 0 ? true : false;


  return (
    <>
      <h1 className="mb-4 ml-4 mt-4 text-xl font-semibold sm:text-center">
        Desde UF {precioUfFormateado}
      </h1>
      <div className="mt-4 flex justify-center">
        <ul className="flex w-7/12 md:w-9/12 xl:w-6/12 flex-wrap justify-between">
          <li className="mb-4 w-full md:w-1/2 lg:w-2/5">
            <div className="flex">
              <img
                className="mr-3 h-8 w-8"
                alt="icono"
                src={idTipo === "2" ? "/iconos/caracteristicas_proyecto/departamento.png" : "/iconos/caracteristicas_proyecto/house.png"}
                />
            
              <span className="text-xl font-semibold">  {idTipo === "2" ? "Departamento" : "Casa"}
            </span>
            </div>
          </li>
          <li className="mb-4 w-full md:w-1/2 lg:w-2/5">
            <div className="flex">
              <img
                className="mr-3 h-8 w-8"
                alt="icono"
                src="/iconos/caracteristicas_proyecto/mt2Cons.png"
              />
              <span className="text-xl font-semibold">
                {mt2Construidos}  m2 Construidos
              </span>
            </div>
          </li>
          <li className="mb-4 w-full md:w-1/2 lg:w-2/5">
            <div className="flex items-center">
              <img
                className="mr-3 h-8 w-8"
                alt="icono"
                src="/iconos/caracteristicas_proyecto/king-bed.png"
              />
              <span className="text-xl font-semibold">
                {habitaciones} habitaciones
              </span>
            </div>
          </li>
          <li className="mb-4 w-full md:w-1/2 lg:w-2/5">
            <div className="flex items-center">
              <img
                className="mr-3 h-8 w-8"
                alt="icono"
                src="/iconos/caracteristicas_proyecto/bano.png"
              />
              <span className="text-xl font-semibold">{banos} baños</span>
            </div>
          </li>
          {
            existeEstacionamiento && (
              <li className="mb-4 w-full md:w-1/2 lg:w-2/5">
                <div className="flex items-center">
                  <img
                    className="mr-3 h-8 w-8"
                    alt="icono"
                    src="/iconos/caracteristicas_proyecto/directions-car.png"
                  />
                  <span className="text-xl font-semibold">estacionamiento</span>
                </div>
              </li>
            )
          }
          {
            homeOffice == 1 && (
              <li className="mb-4 w-full md:w-1/2 lg:w-2/5">
                <div className="flex items-center">
                  <img
                    className="mr-3 h-8 w-8"
                    alt="icono"
                    src="/iconos/caracteristicas_proyecto/laptop-chromebook.png"
                  />
                  <span className="text-xl font-semibold">Home Office</span>
                </div>
              </li>
            )
          }

        </ul>
      </div>
    </>
  );
};

export default List;
