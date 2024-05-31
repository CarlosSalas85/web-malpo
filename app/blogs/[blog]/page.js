import BannerProyecto from "@/app/componets/banner-proyectos/banner-proyecto";
import InfoBlog from "@/app/componets/banner-blog/info-blog";

import BannerRegiones from "@/app/function/banner-regiones";

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

      <InfoBlog datos={datos} />

      <BannerRegiones />
    </>
  );
};

export default page;
