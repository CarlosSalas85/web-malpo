import "./styleBanner-blog.css";

const CustomBlog = (props) => {
  return (
    <div className="flex flex-wrap md:justify-center">
      <a href="#">
        <div className="card-largo-blog relative mr-4 flex flex-shrink-0">
          <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            {/* Contenedor de la imagen */}

            <picture>
              {/* Imagen para dispositivos pequeños */}
              <source
                srcSet="/home/blog-mobile.png"
                media="(max-width: 640px)"
              />
              {/* Imagen para dispositivos grandes */}
              <source srcSet="/home/blog.png" media="(min-width: 641px)" />
              {/* Imagen por defecto */}
              <img
                className="block rounded-t-lg"
                src="/home/blog.png" // Ruta de la imagen por defecto para navegadores que no admiten <picture>
                alt=""
              />
            </picture>

            {/* Contenedor de la fecha */}
            <div className="fecha-transparente absolute right-1 top-1 rounded-lg p-1 text-sm text-white">
              20-04-2024
            </div>
            {/* Contenedor del texto */}
            <div className="p-5">
              <h5 className="mb-2 text-xl">
                Noteworthy technology acquisitions 2021
              </h5>

              <p className="mb-3 font-normal">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const Banner = () => {
  const blogs = Array.from({ length: 3 }, (_, i) => i + 1);

  return (
    <div className="pb-6 pt-10">
      <div className="mb-4 ml-4">
        <h1 className="mb-2 text-3xl sm:text-center">Blog</h1>
        <div className="flex justify-start overflow-x-auto xl:justify-center">
          {blogs.map((index) => (
            <CustomBlog />
          ))}

          <div className="card-largo-ver-todo-blog relative mr-4 flex flex-shrink-0 ">
            <a href="#">
              <div className="absolute inset-0 mb-1 mt-1 flex items-center justify-center shadow-md">
                <div className="text-center">
                  <h2 className="text-xl text-gray-700 hover:text-gray-400">
                    Ver Todo
                  </h2>
                  <img
                    className="img-logo-ver-todo mx-auto"
                    src="https://c.animaapp.com/q4YMxaTP/img/expand-circle-down@2x.png"
                    alt="Icono"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
