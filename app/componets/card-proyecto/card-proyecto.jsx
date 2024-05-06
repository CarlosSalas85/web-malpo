import "./card-proyecto.css";

const CustomCards = (props) => {
  return (
    <>
      <div className="card-largo relative mr-4 flex flex-shrink-0">
        {/* Degradado de fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-400"></div>

        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://c.animaapp.com/3LiIjsbQ/img/rectangle-30-4.png)",
            opacity: "0.7", // Ajusta la opacidad según sea necesario
          }}
        ></div>

        {/* Contenido */}
        <div className="relative ml-3 mt-3 px-2 py-2">
          <div className="h-15">
            <h2 className="text-4xl text-white">
              <a href="#" className="hover:text-gray-400">
                Alto Manque
              </a>
            </h2>
          </div>
          <div className="h-16">
            <p className="text-2xl font-bold text-white">Casas en Talca</p>
          </div>
          <div className="mt-6 h-16">
            <span
              className="inline-flex items-center rounded px-3 py-2 text-white"
              style={{
                backgroundColor: "var(--malpo-paleta-de-colores-verde-malpo)",
              }}
            >
              Venta en Verde
            </span>
          </div>
          <div className="mt-6">
            <ul className="text-white">
              <li className="flex items-center">
                <div>
                  <img
                    className="img-logo-list"
                    src="https://c.animaapp.com/3LiIjsbQ/img/payments-4@2x.png"
                  />
                </div>
                <div className="ml-2">Desde UF 1.800</div>
              </li>
              <li className="flex items-center">
                <div>
                  <img
                    className="img-logo-list"
                    src="../../../iconos/dedoArriba.png"
                  />
                </div>
                <div className="ml-2">Con Subsidio</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card-largo relative mr-4 flex flex-shrink-0">
        {/* Degradado de fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-400"></div>

        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://c.animaapp.com/3LiIjsbQ/img/rectangle-30-4.png)",
            opacity: "0.7", // Ajusta la opacidad según sea necesario
          }}
        ></div>

        {/* Contenido */}
        <div className="relative ml-3 mt-3 px-2 py-2">
          <div className="h-15">
            <h2 className="text-4xl text-white">
              <a href="#" className="hover:text-gray-400">
                Alto Manque
              </a>
            </h2>
          </div>
          <div className="h-16">
            <p className="text-2xl font-bold text-white">Casas en Talca</p>
          </div>
          <div className="mt-6 h-16">
            <span
              className="inline-flex items-center rounded px-3 py-2 text-black"
              style={{
                backgroundColor: "var(--malpo-paleta-de-colores-blanco)",
              }}
            >
              Venta en Blanco
            </span>
          </div>
          <div className="mt-6">
            <ul className="text-white">
              <li className="flex items-center">
                <div>
                  <img
                    className="img-logo-list"
                    src="https://c.animaapp.com/3LiIjsbQ/img/payments-4@2x.png"
                  />
                </div>
                <div className="ml-2">Desde UF 1.800</div>
              </li>
              <li className="flex items-center">
                <div>
                  <img
                    className="img-logo-list"
                    src="../../../iconos/dedoArriba.png"
                  />
                </div>
                <div className="ml-2">Con Subsidio</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card-largo relative mr-4 flex flex-shrink-0">
        {/* Degradado de fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-400"></div>

        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://c.animaapp.com/3LiIjsbQ/img/rectangle-30-4.png)",
            opacity: "0.7", // Ajusta la opacidad según sea necesario
          }}
        ></div>

        {/* Contenido */}
        <div className="relative ml-3 mt-3 px-2 py-2">
          <div className="h-15">
            <h2 className="text-4xl text-white">
              <a href="#" className="hover:text-gray-400">
                Alto Manque
              </a>
            </h2>
          </div>
          <div className="h-16">
            <p className="text-2xl font-bold text-white">Casas en Talca</p>
          </div>
          <div className="mt-6 h-16">
            <span
              className="inline-flex items-center rounded px-3 py-2 text-white"
              style={{
                backgroundColor: "var(--malpo-paleta-de-colores-rojo-malpo)",
              }}
            >
              Entrega Inmediata
            </span>
          </div>
          <div className="mt-6">
            <ul className="text-white">
              <li className="flex items-center">
                <div>
                  <img
                    className="img-logo-list"
                    src="https://c.animaapp.com/3LiIjsbQ/img/payments-4@2x.png"
                  />
                </div>
                <div className="ml-2">Desde UF 1.800</div>
              </li>
              <li className="flex items-center">
                <div>
                  <img
                    className="img-logo-list"
                    src="../../../iconos/dedoArriba.png"
                  />
                </div>
                <div className="ml-2">Con Subsidio</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCards;
