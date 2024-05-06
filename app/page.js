import React from "react";
import Banner from "./componets/banner/banner";
import BannerProyectos from "./componets/banner-proyectos/banner-proyectos";
import Card from "./componets/card/card";
import BannerComoComprar from "./componets/banner-como-comprar/banner-como-comprar";
import BannerBlog from "./componets/banner-blog/banner-blog";
//import "./styleHome.css"; // Si tienes un archivo CSS externo para estilos adicionales

const Home = () => {
  return (
    <>
      <Banner />
      <BannerProyectos texto="Proyectos por ciudad" titulo="ciudad" />
      <Card texto="Proyectos destacados" />
      <BannerProyectos texto="Proyectos por región" titulo="región" />
      <BannerComoComprar />
      <BannerBlog />
    </>
  );
};

export default Home;
