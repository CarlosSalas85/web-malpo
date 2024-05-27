import React, { useEffect, useState } from "react";
import BannerProyectos from "@/app/componets/banner-proyectos/banner-proyectos";
import { Ctrl_regiones } from "@/app/controllers/Ctrl_regiones";

const Function = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Ctrl_regiones();
        const result = await response.datos;
        setData(result);
      } catch (error) {
      } finally {
      }
    };

    fetchData(); // Call fetchData
  }, []);

  return (
    <>
       <BannerProyectos
        texto="Proyectos por région"       
        filtro="region"
        datos={data}
      />
    </>
  );
};

export default Function;