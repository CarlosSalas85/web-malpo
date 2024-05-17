import React from "react";
import Banner from "@/app/componets/banner/banner";
import BannerProyectos from "@/app/componets/banner-proyectos/banner-proyectos";
import BannerComoComprar from "@/app/componets/banner-como-comprar/banner-como-comprar";
import BannerBlog from "@/app/componets/banner-blog/banner-blog";
import Card from "@/app/componets/card/card";
//import "@/app/styleHome.css"; // Si tienes un archivo CSS externo para estilos adicionales

const Home = () => {
  return (
    <>
      <Banner />
      <BannerProyectos texto="Proyectos por ciudad" titulo="ciudad" filtro="ciudad" />
      <Card texto="Proyectos destacados" />
      <BannerProyectos texto="Proyectos por región" titulo="región" filtro="region"/>
      <BannerComoComprar />
      <BannerBlog />
    </>
  );
};

export default Home;
