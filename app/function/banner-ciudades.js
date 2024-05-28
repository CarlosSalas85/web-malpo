import React from "react";
import BannerProyectos from "@/app/componets/banner-proyectos/banner-proyectos";
import { Ctrl_ciudades } from "@/app/controllers/Ctrl_ciudades";

const data = await Ctrl_ciudades();
const datos = data.datos;

const Function = () => {
  return (
    <>
      <BannerProyectos
        texto="Proyectos por ciudad"
        datos={datos}
        filtro="ciudad"
      />
    </>
  );
};

export default Function;
