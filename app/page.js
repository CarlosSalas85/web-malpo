import React from "react";
import Banner from "@/app/componets/banner/banner";
import BannerComoComprar from "@/app/componets/banner-como-comprar/banner-como-comprar";
import BannerBlog from "@/app/componets/banner-blog/banner-blog";
import Card from "@/app/componets/card/card";

import BannerCiudades from "@/app/function/banner-ciudades";
import BannerRegiones from "@/app/function/banner-regiones";
//import "@/app/styleHome.css"; // Si tienes un archivo CSS externo para estilos adicionales

const Home = () => {
  return (
    <>    
      <Banner />
      <BannerCiudades/>      
      <Card texto="Proyectos destacados" />    
      <BannerComoComprar />
      <BannerRegiones/>
      <BannerBlog />
    </>
  );
};

export default Home;
