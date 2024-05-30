import "./styleBanner-blog.css";
import CardBlog from "@/app/componets/banner-blog/card-blog";

import { Ctrl_blogs } from "@/app/controllers/Ctrl_blogs";

const apiBlogs = await Ctrl_blogs();
const datosBlogs = apiBlogs;

const Banner = () => {
  console.log(datosBlogs);
  return (
    <div className="pb-6 pt-10">
      <div className="mb-4 ml-4">
        <h1 className="mb-2 text-3xl sm:text-center">Blog</h1>
        <div className="flex justify-start overflow-x-auto xl:justify-center">
          {datosBlogs &&
            datosBlogs.datos.map((elemento, index) => (
              <CardBlog key={elemento.idBlog} datosBlog={elemento} />              
            ))}
          <div className="card-largo-ver-todo-blog relative mr-4 flex flex-shrink-0 px-3">
            <a href="/blogs">
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
