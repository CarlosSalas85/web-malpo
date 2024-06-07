import "./card-proyecto.css";
import { Ctrl_destacados } from "@/app/controllers/Ctrl_destacados";

export default async function CustomCards() {
  const replaceSpaces = (str) => {
    return encodeURIComponent(str.replace(/\s/g, '-'));
  };

  function formatoNumero(elemento) {
    return new Intl.NumberFormat("es-CL").format(elemento);
  }

  const data_blogs = await Ctrl_destacados();
  const proyectos = data_blogs.datos;

  return (
    <>
      {proyectos.map((proyecto, index) => {
        const textColorClass = proyecto.colorEtapa === '--malpo-paleta-de-colores-blanco' ? 'text-black' : 'text-white';
        return (
          <div key={index} className="relative mr-4 flex w-[240px] flex-shrink-0">
            {/* Degradado de fondo */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-400"></div>
            <a href={`/proyecto/${replaceSpaces(proyecto.nombreWebProyecto)}?val=${proyecto.idProyecto}`} className="block w-full h-full">
              {/* imagenMiniatura de fondo */}
              <picture>
                {/* imagenMiniatura de fondo para dispositivos pequeños */}
                <source
                  srcSet={proyecto.imagenMiniatura}
                  media="(max-width: 640px)"
                />
                {/* imagenMiniatura de fondo para dispositivos grandes */}
                <source
                  srcSet={proyecto.imagenMiniatura}
                  media="(min-width: 641px)"
                />
                {/* imagenMiniatura de fondo por defecto */}
                <img
                  className="absolute inset-0 block h-[450px] w-[300px] bg-cover bg-center"
                  srcSet={proyecto.imagenMiniatura}
                  alt=""
                  style={{ opacity: "0.7" }}
                />
              </picture>

              {/* Contenido */}
              <div className="relative w-full h-full pl-4 pt-4">
                <div className="w-full h-1/3">
                  <h2 className="text-4xl text-white hover:text-gray-400">
                    {proyecto.nombreWebProyecto}
                  </h2>
                </div>
                {/* Segunda fila */}
                <div className="h-1/6 w-full">
                  <p className="text-2xl font-bold text-white"> en {proyecto.comunaNombre}</p>
                </div>
                {/* Tercera fila */}
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
                {/* Cuarta fila */}
                <div className="h-1/3 w-full">
                  <ul className="text-white">
                    <li className="flex items-center">
                      <div>
                        <img
                          className="img-logo-list"
                          src="https://c.animaapp.com/3LiIjsbQ/img/payments-4@2x.png"
                        />
                      </div>
                      <div className="ml-2">Desde UF {formatoNumero(proyecto.ufMinimo)}</div>
                    </li>
                    {proyecto.idSubsidio !== "5" && (
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
      })}
    </>
  );
}





  