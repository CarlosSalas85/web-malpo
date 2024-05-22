import "./styleBanner.css"; // Si tienes un archivo CSS externo para estilos adicionales

const BottonBanner = () => {
  return (
    <div className="px-4 pb-20 pt-24 text-white sm:pt-36 sm:text-center">
      <h1 className="text-4xl sm:mb-12">¿Qué tipo de proyecto buscas?</h1>
      <div className="text-center">
        <div className="flex flex-wrap justify-center pt-5">
          {/* Modifico el primer elemento solo para sm */}
          <div className="mb-4 w-1/2 px-2 sm:w-1/5">
            <a href="#" className="hover:text-gray-400">
              <div className="card-fondo-tranparente flex h-full flex-col items-center justify-center rounded-xl border-2 border-white px-3 py-12">
                <div className="h-2/3 text-4xl">Para Vivir</div>
                <div className="flex h-1/3 items-center justify-center">
                  <img
                    className="img-icono"
                    alt="Add home"
                    src="https://c.animaapp.com/77ljBYGr/img/location-away@2x.png"
                  />
                </div>
              </div>
            </a>
          </div>

          {/* Modifico el segundo elemento solo para sm */}
          <div className="mb-4 w-1/2 px-2 sm:w-1/5">
            <div className="card-fondo-tranparente flex h-full flex-col items-center justify-center rounded-xl border-2 border-white px-3 py-12">
              <a href="#" className="hover:text-gray-400">
                <div className="h-2/3 text-4xl">Para Invertir</div>
                <div className="flex h-1/3 items-center justify-center">
                  <img
                    className="img-icono"
                    alt="Add home"
                    src="https://c.animaapp.com/77ljBYGr/img/add-home@2x.png"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <>
      <div className="imagen-fondo bg-cover bg-center hidden md:block">
        <BottonBanner />
      </div>
      <div className="imagen-fondo bg-cover bg-center block md:hidden">
        <BottonBanner />
      </div>
    </>
  );
};

export default Banner;
