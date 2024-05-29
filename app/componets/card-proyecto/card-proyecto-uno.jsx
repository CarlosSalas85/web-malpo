import "./card-proyecto.css";

const CustomCards = (props) => {
    // Función auxiliar para reemplazar espacios en blanco por guiones bajos y codificar la URL
const replaceSpaces = (str) => {
  // return encodeURIComponent(str.replace(/\s/g, '-'));
  return encodeURIComponent(str.replace(/\s/g, '-'));
};


  const proyecto=props.proyecto;
  const ciudadProyectoUrl=(replaceSpaces(proyecto.comunaNombre)).toLowerCase();
  const nombreProyectoUrl=(replaceSpaces(proyecto.nombreWebProyecto)).toLowerCase();
  const textColorClass = proyecto.colorEtapa === '--malpo-paleta-de-colores-blanco' ? 'text-black' : 'text-white';
  return (
    <div className="relative flex h-[400px] w-[300px] flex-shrink-0 md:h-[500px] md:w-[300px]">
      {/* Degradado de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-400"></div>

      <a href={`/${props.paginaDetalle}/${props.nombreProyectoUrl}?val=${props.idProyecto}`}>
        {props.imagen && (
          <picture>
            {/* Imagen de fondo para dispositivos pequeños */}
            <source
              src={proyecto.imagenMiniatura}
              media="(max-width: 640px)"
            />
            {/* Imagen de fondo para dispositivos grandes */}
            <source
              src={proyecto.imagenMiniatura}
              media="(min-width: 641px)"
            />
            {/* Imagen de fondo por defecto */}
            <img
              className="absolute inset-0 block h-[400px] w-[300px] bg-cover bg-center md:h-[500px] md:w-[300px]"
              src={proyecto.imagenMiniatura}
              alt=""
              style={{ opacity: "0.7" }} // Ajusta la opacidad según sea necesario
            />
          </picture>
        )}

        {/* Contenido */}
        <div className="relative ml-3 mt-3 px-2 py-2">
          <div className="h-15">
            <h2 className="text-4xl text-white hover:text-gray-400">
              {proyecto.nombreWebProyecto}
            </h2>
          </div>
          <div className="h-16">
            <p className="text-2xl font-bold text-white">en {proyecto.comunaNombre}</p>
          </div>
          <div className="mt-6 h-16">
            <div className="h-1/6 w-full">
              <span
                className={`inline-flex items-center rounded px-3 py-2 ${textColorClass}`}
                style={{
                  backgroundColor: `var(${proyecto.colorEtapa})`,
                }}
              >
                {proyecto.nombreEtapa}
              </span>
            </div>
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
                <div className="ml-2">Desde UF {proyecto.ufMinimo}</div>
              </li>
              {proyecto.nombreSubsidio!=="Sin Subsidio" && (
              <li className="flex items-center">
                <div>
                  <img
                    className="img-logo-list"
                    src="../../../iconos/dedoArriba.png"
                  />
                </div>
                <div className="ml-2">Con Subsidio</div>
              </li>
              )}
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CustomCards;
