const List = () => {
  return (
    <>
      <h1 className="mb-4 ml-4 mt-4 text-xl font-semibold sm:text-center">
        Título UF 5.000
      </h1>
      {/*  <div className="mt-4 flex justify-center">
        <ul className="flex w-7/12 md:w-9/12 xl:w-8/12 flex-wrap justify-between">
          <li className="mb-4 w-full md:w-1/2 lg:w-2/5">
            <div className="flex">
              <img
                className="mr-3 h-8 w-8"
                alt="icono"
                src="https://c.animaapp.com/AuWMAeuM/img/house.svg"
              />
              <span className="text-xl font-semibold">Item ERERER1</span>
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
                IteERERsdsdsdsdsdsm 2
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
                IteRRm sdsdsdsdsdsd1
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
              <span className="text-xl font-semibold">IteERER</span>
            </div>
          </li>
          <li className="mb-4 w-full md:w-1/2 lg:w-2/5">
            <div className="flex items-center">
              <img
                className="mr-3 h-8 w-8"
                alt="icono"
                src="https://c.animaapp.com/AuWMAeuM/img/directions-car.svg"
              />
              <span className="text-xl font-semibold">IRERtem 1</span>
            </div>
          </li>
          <li className="mb-4 w-full md:w-1/2 lg:w-2/5">
            <div className="flex items-center">
              <img
                className="mr-3 h-8 w-8"
                alt="icono"
                src="https://c.animaapp.com/AuWMAeuM/img/laptop-chromebook.svg"
              />
              <span className="text-xl font-semibold">IteREREm 2</span>
            </div>
          </li>
        </ul>
      </div> */}
      <div className="mx-auto flex w-2/3 flex-wrap md:w-11/12 lg:w-3/5 xl:w-2/5">
        <div className="mb-4 flex w-2/6 justify-end md:w-1/12">
          <img
            className="mr-3 h-8 w-8"
            alt="icono"
            src="https://c.animaapp.com/AuWMAeuM/img/house.svg"
          />
        </div>
        <div className="mb-4 flex w-4/6 items-center justify-start md:w-5/12">
          <span className="text-xl">Departamento</span>
        </div>
        <div className="mb-4 flex w-2/6 justify-end md:w-1/12">
          <img
            className="mr-3 h-8 w-8"
            alt="icono"
            src="https://c.animaapp.com/z2K26Tdh/img/group-1@2x.png"
          />
        </div>
        <div className="mb-4 flex w-4/6 items-center justify-start md:w-5/12">
          <span className="text-xl">57 - 63 m2 Construidos</span>
        </div>
        <div className="mb-4 flex w-2/6 justify-end md:w-1/12">
          <img
            className="mr-3 h-8 w-8"
            alt="icono"
            src="https://c.animaapp.com/AuWMAeuM/img/king-bed.svg"
          />
        </div>
        <div className="mb-4 flex w-4/6 items-center justify-start md:w-5/12">
          <span className="text-xl">2 - 3 habitaciones</span>
        </div>
        <div className="mb-4 flex w-2/6 justify-end md:w-1/12">
          <img
            className="mr-3 h-8 w-8"
            alt="icono"
            src="https://c.animaapp.com/AuWMAeuM/img/bathtub.svg"
          />
        </div>
        <div className="mb-4 flex w-4/6 items-center justify-start md:w-5/12">
          <span className="text-xl">1 - 2 baños</span>
        </div>
        <div className="mb-4 flex w-2/6 justify-end md:w-1/12">
          <img
            className="mr-3 h-8 w-8"
            alt="icono"
            src="https://c.animaapp.com/AuWMAeuM/img/directions-car.svg"
          />
        </div>
        <div className="mb-4 flex w-4/6 items-center justify-start md:w-5/12">
          <span className="text-xl">Estacionamiento</span>
        </div>
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
      </div>
    </>
  );
};

export default List;
