import React from "react";
import Banner from "@/app/componets/banner/banner";
import BannerProyectos from "@/app/componets/banner-proyectos/banner-proyectos";
import BannerComoComprar from "@/app/componets/banner-como-comprar/banner-como-comprar";
import BannerBlog from "@/app/componets/banner-blog/banner-blog";
import Card from "@/app/componets/card/card";
import BannerCiudades from "@/app/function/banner-proyectos";

// import { Ctrl_destacados } from "@/app/controllers/Ctrl_destacados";
// import { Ctrl_blogs_top } from "./controllers/Ctrl_blogs_top";
//import "@/app/styleHome.css"; // Si tienes un archivo CSS externo para estilos adicionales

export default async function Home() {
  return (
    <>
        <Banner />
      <BannerCiudades texto="Proyectos por ciudad" titulo="ciudades" filtro="ciudad" />
     {/* <BannerProyectos texto="Proyectos por ciudad" titulo="ciudades" filtro="ciudad" /> */}
      <Card texto="Proyectos destacados"/>
      {/* <BannerProyectos texto="Proyectos por region"  filtro="regiones" /> */}
   {/* <BannerProyectos texto="Proyectos por región" titulo="region" filtro="region"/> */}
    <BannerCiudades texto="Proyectos por región" titulo="regiones" filtro="regiones" />
      <BannerComoComprar />
      <BannerBlog /> 
    </>
  );
};
