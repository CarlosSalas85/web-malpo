import React from "react";
import Banner from "@/app/componets/banner/banner";
import BannerProyectos from "@/app/componets/banner-proyectos/banner-proyectos";
import BannerComoComprar from "@/app/componets/banner-como-comprar/banner-como-comprar";
import BannerBlog from "@/app/componets/banner-blog/banner-blog";
import Card from "@/app/componets/card/card";
import { Ctrl_ciudades }  from "@/app/controllers/Ctrl_ciudades";
import { Ctrl_regiones } from "@/app/controllers/Ctrl_regiones";
// import { Ctrl_destacados } from "@/app/controllers/Ctrl_destacados";
// import { Ctrl_blogs_top } from "./controllers/Ctrl_blogs_top";
//import "@/app/styleHome.css"; // Si tienes un archivo CSS externo para estilos adicionales

export default async function Home() {
   const data = await Ctrl_ciudades();
  const ciudades = data.datos;
  console.log("el valor de ciudades es:",ciudades);
  const contenidoCiudades = ciudades.map((card, index) => ({
    id: card.idComuna,
    nombre: card.comunaNombre,
  }));

  const data2 = await Ctrl_regiones();
  const regiones = data2.datos;
  const contenidoRegiones = regiones.map((card, index) => ({
    id: card.idRegion,
    nombre: card.regionNombre,
  }));


  return (
    
    <>
      <Banner />
     <BannerProyectos texto="Proyectos por ciudad" titulo={contenidoCiudades} filtro="ciudad" />
     {/* <BannerProyectos texto="Proyectos por ciudad" titulo="ciudades" filtro="ciudad" /> */}
      <Card texto="Proyectos destacados"/>
      <BannerProyectos texto="Proyectos por ciudad" titulo={contenidoRegiones} filtro="regiones" />
   {/* <BannerProyectos texto="Proyectos por región" titulo="region" filtro="region"/> */}
      <BannerComoComprar />
      <BannerBlog /> 
    </>
  );
};
