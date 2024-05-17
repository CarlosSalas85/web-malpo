const List = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full sm:w-2/3 xl:w-1/3">
        <h1 className="ml-4 mb-4 mt-4 text-xl font-semibold sm:text-center">
          Título UF 5.000
        </h1>
        <div className="mb-4 flex flex-col justify-around sm:flex-row">
          <div className="mx-auto mb-4 flex w-full flex-col items-center sm:mb-0 sm:w-auto">
            <span className="flex items-center text-center">
              <img
                className="mr-3 h-8 w-8"
                alt={`icono`}
                src={`https://c.animaapp.com/AuWMAeuM/img/house.svg`}
              />
              <span className="text-2xl font-semibold">Item 1</span>
            </span>
          </div>
          <div className="mx-auto flex w-full flex-col items-center sm:w-auto">
            <span className="flex items-center text-center">
              <img
                className="mr-3 h-8 w-8"
                alt={`icono`}
                src={`https://c.animaapp.com/z2K26Tdh/img/group-1@2x.png`}
              />
              <span className="text-2xl font-semibold">Item 2</span>
            </span>
          </div>
        </div>
        <div className="mb-4 flex flex-col justify-around sm:flex-row">
          <div className="mx-auto mb-4 flex w-full flex-col items-center sm:mb-0 sm:w-auto">
            <span className="flex items-center text-center">
              <img
                className="mr-3 h-8 w-8"
                alt={`icono`}
                src={`https://c.animaapp.com/AuWMAeuM/img/king-bed.svg`}
              />
              <span className="text-2xl font-semibold">Item 1</span>
            </span>
          </div>
          <div className="mx-auto flex w-full flex-col items-center sm:w-auto">
            <span className="flex items-center text-center">
              <img
                className="mr-3 h-8 w-8"
                alt={`icono`}
                src={`https://c.animaapp.com/AuWMAeuM/img/bathtub.svg`}
              />
              <span className="text-2xl font-semibold">Item 2</span>
            </span>
          </div>
        </div>
        <div className="mb-4 flex flex-col justify-around sm:flex-row">
          <div className="mx-auto mb-4 flex w-full flex-col items-center sm:mb-0 sm:w-auto">
            <span className="flex items-center text-center">
              <img
                className="mr-3 h-8 w-8"
                alt={`icono`}
                src={`https://c.animaapp.com/AuWMAeuM/img/directions-car.svg`}
              />
              <span className="text-2xl font-semibold">Item 1</span>
            </span>
          </div>
          <div className="mx-auto flex w-full flex-col items-center sm:w-auto">
            <span className="flex items-center text-center">
              <img
                className="mr-3 h-8 w-8"
                alt={`icono`}
                src={`https://c.animaapp.com/AuWMAeuM/img/laptop-chromebook.svg`}
              />
              <span className="text-2xl font-semibold">Item 2</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
