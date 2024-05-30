import BannerProyecto from "@/app/componets/banner-proyectos/banner-proyecto";
import BannerRegiones from "@/app/function/banner-regiones";
import ShareButtons from "@/app/componets/banner-blog/compartir-rrss";

import { Ctrl_blog } from "@/app/controllers/Ctrl_blog";

const UrlBanner = (props) => {
  return (
    <>
      <a href="/blogs" className="mx-1 hover:text-gray-400">
        Blogs
      </a>
      /<span className="px-1">{props.nombre}</span>
    </>
  );
};

const page = async ({ searchParams: { val } }) => {
  const data = await Ctrl_blog(val);
  const datos = data.datos;

  const url = <UrlBanner nombre={datos.nombreCategoria} />;

  return (
    <>
      <BannerProyecto
        url={url}
        nombre={datos.tituloBlog}
        imagenMiniatura={datos.imagenMiniatura}
        imagenCabecera={datos.imagenCabecera}
      />

      <div className="mx-auto mb-3 mt-3 w-11/12 md:w-10/12">
        <h1 className="mb-2 text-3xl sm:text-center">{datos.subtituloBlog}</h1>
        <p className="text-18px pt-4 sm:text-center">{datos.informacionBlog}</p>
      </div>

      <div className="flex items-center justify-center">
        <div className="mx-auto mb-3 mt-3 w-11/12 md:w-10/12">
          <img
            src={datos.imagenCabecera}
            alt="Descripción de la imagen"
            className="mx-auto block h-auto w-[600px] rounded-t-lg"
          />
        </div>
      </div>

      <div className="mx-auto mb-3 mt-3 w-11/12 md:w-10/12">
        <p className="text-18px pt-1 sm:text-center">{datos.autorBlog}</p>
        <p className="text-18px pt-1 sm:text-center">{datos.fechaBlog}</p>
        <p className="text-18px pt-1 font-semibold text-rojoMalpo hover:text-gray-400 sm:text-center">
          <a href={datos.urlBlog} target="_blank">
            Ver más
          </a>
        </p>

       {/*  <ShareButtons /> */}
      </div>

      <BannerRegiones />
    </>
  );
};

export default page;
