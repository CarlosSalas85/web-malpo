import "./styleBanner-como-comprar.css";

const Banner = () => {
  return (
    <div className="pb-6 pt-6">
      <div className="mb-4 ml-4">
        <h1 className="mb-2 text-3xl sm:text-center">Proceso de compra</h1>

        <div className="flex flex-col items-center justify-center md:flex-row">
          {/* Primera tarjeta */}
          <div className="mr-4 mt-4 w-4/5 sm:w-2/3 md:w-1/2">
            <a href="/como-comprar/con-subsidio?val=2">
              <div className="fondo-malpo-gris flex w-full items-center justify-center rounded-lg pb-6 pt-6 text-white sm:pb-4 sm:pt-4">
                {/* Contenido de la tarjeta */}
                <span className="ml-6 text-4xl font-normal hover:text-gray-400 sm:text-2xl md:ml-0 md:text-center">
                  Con Subsidio Habitacional
                </span>
                {/* Icono */}
                <img
                  className="mr-10 h-16 w-16 md:ml-4 md:mr-0 md:h-10 md:w-10"
                  alt="icono"
                  src="https://c.animaapp.com/K6aqUhg9/img/real-estate-agent@2x.png"
                />
              </div>
            </a>
          </div>

          {/* Segunda tarjeta */}
          <div className="mr-4 mt-4 w-4/5 sm:w-2/3 md:w-1/2">
            <a href="/como-comprar/con-hipotecario?val=3">
              <div className="fondo-malpo-gris flex w-full items-center justify-center rounded-lg pb-6 pt-6 text-white sm:pb-4 sm:pt-4">
                {/* Contenido de la tarjeta */}

                <span className="ml-6 text-4xl font-normal hover:text-gray-400 sm:text-2xl md:ml-0 md:text-center">
                  Con Crédito Hipotecario
                </span>
                {/* Icono */}
                <img
                  className="mr-10 h-16 w-16 md:ml-4 md:mr-0 md:h-10 md:w-10"
                  alt="icono"
                  src="https://c.animaapp.com/9f5vD9WN/img/home@2x.png"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
