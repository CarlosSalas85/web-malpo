import React from "react";
import BannerProyectos from "@/app/componets/banner-proyectos/banner-proyectos";
import { Ctrl_ciudades } from "@/app/controllers/Ctrl_ciudades";

const data = await Ctrl_ciudades();
const datos = data.datos; // Asumiendo que data.datos es tu arreglo de objetos

datos.forEach((item) => {
  item.url = `proyectos/0/${item.id}`;
});


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
