"use client";
import "./card-proyecto.css";

const CustomCards = (props) => {
  //const nombreProyectoEncoded = encodeURIComponent(props.nombre);
  return (
    <div className="relative flex h-[400px] w-[300px] flex-shrink-0 md:h-[500px] md:w-[300px]">
      {/* Degradado de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-400"></div>

      <a href={`/${props.pagina}/${props.ciudad}/${props.nombre}?val=${props.idProyecto}`}>
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
            className="absolute inset-0 block h-[400px] w-[300px] bg-cover bg-center md:h-[500px] md:w-[300px]"
            src="https://c.animaapp.com/3LiIjsbQ/img/rectangle-30-2.png" // Ruta de la imagen de fondo por defecto para navegadores que no admiten <picture>
            alt=""
            style={{ opacity: "0.7" }} // Ajusta la opacidad según sea necesario
          />
        </picture>

        {/* Contenido */}
        <div className="relative ml-3 mt-3 px-2 py-2">
          <div className="h-15">
            <h2 className="text-4xl text-white hover:text-gray-400">
              Alto Manque
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
      </a>
    </div>
  );
};

export default CustomCards;
