import React from "react";
import BannerProyectos from "@/app/componets/banner-proyectos/banner-proyectos";
import { Ctrl_regiones } from "@/app/controllers/Ctrl_regiones";

const data = await Ctrl_regiones();
const datos = data.datos;

const Function = async () => {
    const data = await Ctrl_regiones();
    const datos = data.datos;
  return (
    <>
      <BannerProyectos
        texto="Proyectos por region"       
        filtro="region"
        datos={datos}
      />
    </>
  );
};

export default Function;