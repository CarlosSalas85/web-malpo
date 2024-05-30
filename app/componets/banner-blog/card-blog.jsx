import "./styleBanner-blog.css";

const Card = ({ datosBlog }) => {
  const tituloSinEspacios = datosBlog.tituloBlog.replace(/ /g, "-");
  const nombreBlog = encodeURIComponent(tituloSinEspacios);

  return (
    <div className="flex flex-wrap px-3 py-2 sm:px-2 md:justify-center">
      <a href={`/blogs/${nombreBlog}?val=${datosBlog.idBlog}`}>
        <div className="card-largo-blog relative flex flex-shrink-0">
          <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            {/* Contenedor de la imagen */}

            <picture>
              {/* Imagen para dispositivos pequeños */}
              <source
                srcSet={datosBlog.imagenMiniatura}
                media="(max-width: 640px)"
              />
              {/* Imagen para dispositivos grandes */}
              <source
                srcSet={datosBlog.imagenCabecera}
                media="(min-width: 641px)"
              />
              {/* Imagen por defecto */}
              <img
                className="block h-[180px] w-[300px] rounded-t-lg"
                src={datosBlog.imagenCabecera} // Ruta de la imagen por defecto para navegadores que no admiten <picture>
                alt=""
              />
            </picture>

            {/* Contenedor de la fecha */}
            <div className="fecha-transparente absolute right-1 top-1 rounded-lg p-1 text-sm text-white">
              {datosBlog.fechaBlog}
            </div>
            {/* Contenedor del texto */}
            <div className="p-5">
              <h5 className="mb-2 text-xl">{datosBlog.tituloBlog}</h5>

              <p className="mb-3 font-normal">{datosBlog.subtituloBlog}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
