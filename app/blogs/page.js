import BannerRegiones from "@/app/function/banner-regiones";
import Blogs from "@/app/componets/banner-blog/blogs";
import { Ctrl_blog_categorias } from "@/app/controllers/Ctrl_blog_categorias";
import { Ctrl_blogs } from "@/app/controllers/Ctrl_blogs";

const apiCategorias = await Ctrl_blog_categorias();
const datosCategorias = apiCategorias;

const apiBlogs = await Ctrl_blogs();
const datosBlogs = apiBlogs;

const Page = () => {
  return (
    <>
      <div className="pb-6 pt-28">
        <div className="mb-4 ml-4">
          <h1 className="mb-2 text-3xl sm:text-center">Blog</h1>
          <p className="text-sm sm:text-center">
            Conoce más sobre el mundo inmobiliario, tendencias, diseño y más
          </p>
        </div>

        <Blogs datosCategorias={datosCategorias} datosBlogs={datosBlogs} />
      </div>
      <BannerRegiones />
    </>
  );
};

export default Page;
