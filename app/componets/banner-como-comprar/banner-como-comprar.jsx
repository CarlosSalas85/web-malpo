import "./styleBanner-como-comprar.css";

const Banner = () => {
  return (
    <div className="pb-6 pt-6">
      <div className="mb-4 ml-4">
        <h1 className="mb-2 text-3xl sm:text-center">Proceso de compra</h1>

        <div className="flex flex-col items-center justify-center md:flex-row">
          {/* Primera tarjeta */}
          <div className="mr-4 mt-4 md:w-1/2">
            <div className="fondo-malpo-gris flex w-full items-center justify-center rounded-lg pb-6 pt-6 text-white sm:pb-4 sm:pt-4">
              {/* Contenido de la tarjeta */}
              <span className="ml-6 text-4xl font-normal sm:text-2xl md:ml-0 md:text-center">
                <a href="#" className="hover:text-gray-400">
                  Con Subsidio Habitacional
                </a>
              </span>
              {/* Icono */}
              <img
                className="w-16 h-16 md:w-10 md:h-10 mr-10 md:ml-4 md:mr-0"
                alt="icono"
                src="https://c.animaapp.com/K6aqUhg9/img/real-estate-agent@2x.png"
              />
            </div>
          </div>

          {/* Segunda tarjeta */}
          <div className="mr-4 mt-4 md:w-1/2">
            <div className="fondo-malpo-gris flex w-full items-center justify-center rounded-lg pb-6 pt-6 text-white sm:pb-4 sm:pt-4">
              {/* Contenido de la tarjeta */}
              <span className="ml-6 text-4xl font-normal sm:text-2xl md:ml-0 md:text-center">
                <a href="#" className="hover:text-gray-400">
                  Con Crédito Hipotecario
                </a>
              </span>
              {/* Icono */}
              <img
                className="w-16 h-16 md:w-10 md:h-10 mr-10 md:ml-4 md:mr-0"
                alt="icono"
                src="https://c.animaapp.com/9f5vD9WN/img/home@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
