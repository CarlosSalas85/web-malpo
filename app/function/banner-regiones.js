import React from "react";
import BannerProyectos from "@/app/componets/banner-proyectos/banner-proyectos";
import { Ctrl_regiones } from "@/app/controllers/Ctrl_regiones";

const data = await Ctrl_regiones();
const datos = data.datos;

const Function = () => {
  return (
    <>
      <BannerProyectos
        texto="Proyectos por région"       
        filtro="region"
        datos={datos}
      />
    </>
  );
};

export default Function;
