import "./card-proyecto.css";
import { Ctrl_destacados } from "@/app/controllers/Ctrl_destacados";

const UrlBanner = (props) => {
  return (
    <>
      <a href="/proyectos/todos/" className="mx-1 hover:text-gray-400">
        Proyectos
      </a>
      /
      <a href={`/proyectos/${props.idRegion}/0`} className="mx-1 hover:text-gray-400">
        {props.nombreRegion}
      </a>
      /
      <a href={`/proyectos/0/${props.idCiudad}`} className="mx-1 hover:text-gray-400">
        {props.nombreCiudad} 
      </a>
    </>
  );
};

export default async function CustomCards() {


  const replaceSpaces = (str) => {
    return encodeURIComponent(str.replace(/\s/g, '-'));
  };

  const data3 = await Ctrl_destacados();
  const proyectos = data3.datos;
  // console.log("LO QUE DEVUELVE LA API Ctrl_destacados es:", data3.datos);
  const contenidoProyectos = proyectos.map((card, index) => ({   //FALTAAAAN LEEEER DATOOOOS PARA ASIGNAR VARIABLESSSSSSS
    id: card.idProyecto,
    nombre: card.nombreWebProyecto,
    nombreEtapa: card.nombreEtapa,
    colorEtapa: card.colorEtapa,
    ufMinimo: card.ufMinimo,
    imagen: card.imagenMiniatura,
    comunaNombre: card.comunaNombre,
    nombreProyectoUrl:(replaceSpaces(card.nombreWebProyecto)),
    //tipo_vivienda:card.nombreTipo,
    nombreSubsidio: card.nombreSubsidio,
    icono: card.icono,
    //FALTA CASAS

  }));

    
 



  return (
    <>
      {contenidoProyectos.map((proyecto, index) => (
        <div key={index}  className="relative mr-4 flex w-[240px] flex-shrink-0">
          {/* Degradado de fondo */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-400"></div>
          <picture>
            {/* Imagen de fondo para dispositivos pequeños */}
            <source
              // srcSet="https://c.animaapp.com/3LiIjsbQ/img/rectangle-30-4.png"
              srcSet={proyecto.imagen}
              media="(max-width: 640px)"
            />
            {/* Imagen de fondo para dispositivos grandes */}
            <source
              // srcSet="https://c.animaapp.com/3LiIjsbQ/img/rectangle-30-2.png"
              srcSet={proyecto.imagen}
              media="(min-width: 641px)"
            />
            {/* Imagen de fondo por defecto */}
            <img
              className="absolute inset-0 block h-[450px] bg-cover bg-center"
              src={proyecto.imagen}
              // src="https://c.animaapp.com/3LiIjsbQ/img/rectangle-30-2.png" // Ruta de la imagen de fondo por defecto para navegadores que no admiten <picture>
              alt=""
              style={{ opacity: "0.7" }} // Ajusta la opacidad según sea necesario
            />
          </picture>
          {/* Primera fila */}
          <div className="relative w-full pl-4 pt-4">
            <div className="w-ful h-1/3">
              <h2 className="text-4xl text-white  hover:text-gray-400">
              <a href={`/proyecto/${proyecto.nombreProyectoUrl}?val=${proyecto.id}`}>
                {proyecto.nombre}
             </a>
              </h2>
            </div>
            {/* Segunda fila */}
            <div className="h-1/6 w-full">

              <p className="text-2xl font-bold text-white">Casas en {proyecto.comunaNombre}</p>
   
            </div>
            {/* Tercera fila */}
            <div className="h-1/6 w-full">
              <span
                className="inline-flex items-center rounded px-3 py-2 text-white"
                //className="inline-flex items-center rounded px-3 py-2 text-black"
                style={{
                  backgroundColor: `var(${proyecto.colorEtapa})`,
                }}
              >
                {proyecto.nombreEtapa}
              </span>
            </div>
            {/* Cuarta fila */}
            <div className="h-1/3 w-full">
              {" "}
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
                {proyecto.nombreSubsidio !== "Sin Subsidio" && (
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
        </div>
      ))}






    </>
  );
};