import "./card-proyecto.css";

const Card = (props) => {
  const replaceSpaces = (str) => {
    // return encodeURIComponent(str.replace(/\s/g, '-'));
    if(str){
    return encodeURIComponent(str.replace(/\s/g, '-'));
    }else{
      return null;
    }
  };


  function formatoNumero(elemento) {
    return new Intl.NumberFormat("es-CL").format(elemento);
  }

  const modelos = props?.modelos;
  const proyecto = props?.proyecto;

  const ciudadProyectoUrl = (replaceSpaces(proyecto?.comunaNombre))?.toLowerCase();
  const nombreProyectoUrl = (replaceSpaces(proyecto?.nombreWebProyecto))?.toLowerCase();


  return (
    <>
      {modelos.map((modelo, index) => {
        const modeloNombreUrl = replaceSpaces(modelo.nombreModelo).toLowerCase();
        const idProyecto = modelo.idProyecto;
        const idModelo = modelo.idModelo;
        return (
          <div key={index} className="relative m-5 flex h-[400px] w-[300px] flex-shrink-0">
            {/* Degradado de fondo */}
            <div className="absolute inset-0 rounded-b-xl bg-gradient-to-b from-gray-950 to-gray-400"></div>

            <a href={`/proyecto/${nombreProyectoUrl}/${modeloNombreUrl}?val1=${idProyecto}&val2=${idModelo}`} className="">        
            {/* Imagen de fondo */}
              <picture>
                {/* Imagen de fondo para dispositivos pequeños */}
                <source
                  // srcSet="https://c.animaapp.com/3LiIjsbQ/img/rectangle-30-4.png"
                  src={modelo.Modelos.imagenMiniatura}
                  media="(max-width: 640px)"
                />
                {/* Imagen de fondo para dispositivos grandes */}
                <source
                  // srcSet="https://c.animaapp.com/3LiIjsbQ/img/rectangle-30-2.png"
                  src={modelo.Modelos.imagenMiniatura}
                  media="(min-width: 641px)"
                />
                {/* Imagen de fondo por defecto */}
                <img
                  className="absolute inset-0 block h-[400px] w-[300px] rounded-b-xl bg-cover bg-center"
                  //src="https://c.animaapp.com/3LiIjsbQ/img/rectangle-30-2.png" // Ruta de la imagen de fondo por defecto para navegadores que no admiten <picture>
                  src={modelo.Modelos.imagenMiniatura}
                  alt=""
                  style={{ opacity: "0.7" }} // Ajusta la opacidad según sea necesario
                />
              </picture>

              {/* Contenido */}
              <div className="relative ml-3 mt-3 px-2 py-2">
                <div className="h-10">
                  <h2 className="text-4xl text-white hover:text-gray-400">
                    {proyecto?.nombreWebProyecto}
                  </h2>
                </div>
                <div className="h-16">
                  <p className="text-2xl font-bold text-white">{modelo.nombreModelo}</p>
                </div>
                <div className="h-16">
                  <span
                    className="inline-flex items-center rounded px-3 py-2 text-white"
                    style={{
                      backgroundColor: `var(${proyecto?.colorEtapa})`,
                    }}
                  >
                    {proyecto?.nombreEtapa}
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
                      <div className="ml-2">Desde UF {formatoNumero(modelo.valorUfModelo)}</div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-rojoMalpo px-2 py-2 text-white">
                <div className="hover:text-gray-400">Ir al Detalle - {modelo.nombreModelo}</div>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
};

const Cards = (props) => {
  const modelos = props.modelos;
  const proyecto = props.proyecto;
  return (
    <div className="pb-6 pt-6">
      <div className="mb-4 ml-4">
        <h1 className="mb-2 text-3xl sm:text-center">{props.texto}</h1>
        <div className="flex justify-start overflow-x-auto xl:justify-center">
          <Card modelos={modelos} proyecto={proyecto} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
