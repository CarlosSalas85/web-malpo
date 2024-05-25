
const List = (props) => {
     const mt2Minimo=props.caracteristicas.mt2Minimo;
     const mt2Maximo=props.caracteristicas.mt2Maximo;
     const habitacionesMinimo=props.caracteristicas.habitacionesMinimo;
     const habitacionesMaximo=props.caracteristicas.habitacionesMaximo;
     const banosMinimo=props.caracteristicas.banosMinimo;
     const banosMaximo=props.caracteristicas.banosMaximo;
     const estacionamientosMin=props.caracteristicas.estacionamientosMinimo;
     const estacionamientosMax=props.caracteristicas.estacionamientosMaximo;
     const homeOffice= props.caracteristicas.homeOffice
  return (
    <>
    <h1 className="mb-4 ml-4 mt-4 text-xl font-semibold sm:text-center">
      Desde UF {props.caracteristicas.ufMinimo}
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
             {mt2Minimo}-{mt2Maximo}  m2 útiles
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
            {habitacionesMinimo}-{habitacionesMaximo} habitaciones
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
            <span className="text-xl font-semibold">{banosMinimo}-{banosMaximo} baños</span>
          </div>
        </li>
        <li className="mb-4 w-full md:w-1/2 lg:w-2/5">
          <div className="flex items-center">
            <img
              className="mr-3 h-8 w-8"
              alt="icono"
              src="https://c.animaapp.com/AuWMAeuM/img/directions-car.svg"
            />
            <span className="text-xl font-semibold">{estacionamientosMin}-{estacionamientosMax} estacionamientos
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
