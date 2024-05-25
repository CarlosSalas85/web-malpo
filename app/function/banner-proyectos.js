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

export default async function Function(props) {
    let data;
    switch (props.filtro) {
      case 'ciudad':
        data = await Ctrl_ciudades();
        break;
      case 'regiones':
        data = await Ctrl_regiones();
        break;
    }

  const datos = data.datos;
  return (
    <>
     <BannerProyectos texto={props.texto} filtro={props.filtro} titulo={props.titulo} data={datos} />
    </>
  );
};