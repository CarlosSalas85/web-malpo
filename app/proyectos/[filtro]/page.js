"use client";
import React from "react";
import Filter from "@/app/componets/filter/filter";
import ListProyectos from "@/app/componets/filter/list-proyectos";

const Page = () => {
  return (
    <>
      <div className="md:pb-6 md:pt-28">
        <div className="mb-16 ml-4">
          <h1 className="mb-2 text-3xl sm:text-center">
            Proyectos disponibles
          </h1>
          <p className="text-sm sm:text-center">
            Encuentra tu proyecto ideal con nosotros
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sección 1/3 */}
          <Filter />
          {/* Sección 2/3 */}
          <ListProyectos pagina="proyectos" ciudad="ciudad"/>
        </div>

        <div className="mx-auto mb-4 mt-10 w-11/12 md:w-10/12">
          <h1 className="mb-2 text-3xl sm:text-center">
            Proyectos inmobiliarios en MALPO
          </h1>
          <p className="sm:text-center">
            Aquí encontrarás una variedad de proyectos de distintos tipos,
            diseñados para satisfacer tus necesidades y preferencias. Ya sea que
            busques una casa amplia y cómoda, un departamento moderno y
            funcional, o un proyecto para invertir y rentabilizar tu dinero,
            tenemos lo que necesitas. Explora nuestro catálogo y descubre todo
            lo que podemos ofrecerte. Estamos seguros de que encontrarás el
            proyecto ideal para ti y tu familia.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
