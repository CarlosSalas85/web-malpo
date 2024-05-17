import "./card-proyecto.css";

const Card = () => {
  return (
    <div className="relative m-5 flex h-[400px] w-[300px] flex-shrink-0">
      {/* Degradado de fondo */}
      <div className="absolute inset-0 rounded-b-xl bg-gradient-to-b from-gray-950 to-gray-400"></div>

      <a href="/proyectos/talca/doña-ignacia/colonial-77" className="">
        {/* Imagen de fondo */}
        <picture>
          {/* Imagen de fondo para dispositivos pequeños */}
          <source
            srcSet="https://c.animaapp.com/3LiIjsbQ/img/rectangle-30-4.png"
            media="(max-width: 640px)"
          />
          {/* Imagen de fondo para dispositivos grandes */}
          <source
            srcSet="https://c.animaapp.com/3LiIjsbQ/img/rectangle-30-2.png"
            media="(min-width: 641px)"
          />
          {/* Imagen de fondo por defecto */}
          <img
            className="absolute inset-0 block h-[400px] w-[300px] rounded-b-xl bg-cover bg-center"
            src="https://c.animaapp.com/3LiIjsbQ/img/rectangle-30-2.png" // Ruta de la imagen de fondo por defecto para navegadores que no admiten <picture>
            alt=""
            style={{ opacity: "0.7" }} // Ajusta la opacidad según sea necesario
          />
        </picture>

        {/* Contenido */}
        <div className="relative ml-3 mt-3 px-2 py-2">
          <div className="h-10">
            <h2 className="text-4xl text-white hover:text-gray-400">
              Alto Manque
            </h2>
          </div>
          <div className="h-16">
            <p className="text-2xl font-bold text-white">Colonial</p>
          </div>
          <div className="h-16">
            <span
              className="inline-flex items-center rounded px-3 py-2 text-white"
              style={{
                backgroundColor: "var(--malpo-paleta-de-colores-verde-malpo)",
              }}
            >
              Venta en Verde
            </span>
          </div>
          <div className="h-10">
            <ul className="text-white">
              <li className="flex items-center">
                <div>
                  <img
                    className="img-logo-list rounded-xl"
                    src="https://c.animaapp.com/3LiIjsbQ/img/payments-4@2x.png"
                  />
                </div>
                <div className="ml-2">Desde UF 1.800</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-rojoMalpo px-2 py-2 text-white">
          <div className="hover:text-gray-400">Ir al Detalle - Colonial 77</div>
        </div>
      </a>
    </div>
  );
};

const Cards = (props) => {
  return (
    <div className="pb-6 pt-6">
      <div className="mb-4 ml-4">
        <h1 className="mb-2 text-3xl sm:text-center">{props.texto}</h1>

        <div className="flex justify-start overflow-x-auto xl:justify-center">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Cards;
