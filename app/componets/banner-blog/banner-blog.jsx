import React from "react";
import { Ctrl_blogs_top } from "@/app/controllers/Ctrl_blogs_top";
import "./styleBanner-blog.css";

const CustomBlog = ({ blog }) => {
  return (
    <div className="flex flex-wrap md:justify-center">
      <a href="#">
        <div className="card-largo-blog relative mr-4 flex flex-shrink-0">
          <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <picture>
              <source srcSet={blog.imagen} media="(max-width: 640px)" />
              <source srcSet={blog.imagen} media="(min-width: 641px)" />
              <img
                className="block rounded-t-lg"
                src={blog.imagen}
                alt={blog.titulo}
              />
            </picture>
            <div className="fecha-transparente absolute right-1 top-1 rounded-lg p-1 text-sm text-white">
              {blog.fecha}
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-xl">{blog.titulo}</h5>
              <p className="mb-3 font-normal">{blog.subtitulo}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default async function BannerBlog() {
  const data4 = await Ctrl_blogs_top();
  const blogs = data4.datos.slice(0, 4);
  //console.log(blogs);
  const contenidoBlogs = blogs.map((card, index) => ({
    id:card.idBlog,
    titulo: card.tituloBlog,
    subtitulo: card.subtituloBlog,
    imagen: card.imagenMiniatura,
    fecha: card.fechaBlog
  }));

  return (
    <div className="pb-6 pt-10">
      <div className="mb-4 ml-4">
        <h1 className="mb-2 text-3xl sm:text-center">Blog</h1>
        <div className="flex justify-start overflow-x-auto xl:justify-center">
          {contenidoBlogs.map(blog => (
            <CustomBlog key={blog.id} blog={blog} />
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

