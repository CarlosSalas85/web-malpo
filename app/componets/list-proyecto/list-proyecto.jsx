
const List = (props) => {
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
    } = props.caracteristicas;
  
    const isModelo = props.tipo === "modelos";
  
    const mt2Construidos = isModelo ? m2Contruidos : `${mt2Minimo}-${mt2Maximo}`;
    const habitaciones = isModelo ? cantidadDormitorios : `${habitacionesMinimo}-${habitacionesMaximo}`;
    const banos = isModelo ? cantidadBanos : `${banosMinimo}-${banosMaximo}`;
    const estacionamientos = isModelo ? estacionamientoModelo : `${estacionamientosMinimo}-${estacionamientosMaximo}`;
    const precioUf = isModelo ? valorUfModelo : ufMinimo;
  return (
    <>
    <h1 className="mb-4 ml-4 mt-4 text-xl font-semibold sm:text-center">
      Desde UF {precioUf}
    </h1>
    <div className="mt-4 flex justify-center">
      <ul className="flex w-7/12 md:w-9/12 xl:w-8/12 flex-wrap justify-between">
        <li className="mb-4 w-full md:w-1/2 lg:w-2/5">
          <div className="flex">
            <img
              className="mr-3 h-8 w-8"
              alt="icono"
              src="https://c.animaapp.com/AuWMAeuM/img/house.svg"
            />
            <span className="text-xl font-semibold">Casa</span>
          </div>
        </li>
        <li className="mb-4 w-full md:w-1/2 lg:w-2/5">
          <div className="flex">
            <img
              className="mr-3 h-8 w-8"
              alt="icono"
              src="https://c.animaapp.com/z2K26Tdh/img/group-1@2x.png"
            />
            <span className="text-xl font-semibold">
            {mt2Construidos}  m2 útiles
            </span>
          </div>
        </li>
        <li className="mb-4 w-full md:w-1/2 lg:w-2/5">
          <div className="flex items-center">
            <img
              className="mr-3 h-8 w-8"
              alt="icono"
              src="https://c.animaapp.com/AuWMAeuM/img/king-bed.svg"
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
              src="https://c.animaapp.com/AuWMAeuM/img/bathtub.svg"
            />
            <span className="text-xl font-semibold">{banos} baños</span>
          </div>
        </li>
        <li className="mb-4 w-full md:w-1/2 lg:w-2/5">
          <div className="flex items-center">
            <img
              className="mr-3 h-8 w-8"
              alt="icono"
              src="https://c.animaapp.com/AuWMAeuM/img/directions-car.svg"
            />
            <span className="text-xl font-semibold">{estacionamientos} estacionamientos
        </span>
          </div>
        </li>
        {homeOffice==1 && (
        <li className="mb-4 w-full md:w-1/2 lg:w-2/5">
          <div className="flex items-center">
            <img
              className="mr-3 h-8 w-8"
              alt="icono"
              src="https://c.animaapp.com/AuWMAeuM/img/laptop-chromebook.svg"
            />
            <span className="text-xl font-semibold">Home Office</span>
          </div>
        </li>
        )}
      </ul>
    </div>
  </>
  );
};

export default List;
