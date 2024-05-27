import { Ctrl_modelo } from "../controllers/Ctrl_modelo";
import BannerProyectos from "@/app/componets/banner-proyectos/banner-proyectos";

const Function = async (props) => {
  console.log("LOS VALORES DE PROPS SON:",props);
    const data = await Ctrl_modelo(props.id);
    const datos = data.datos;
    datos.nombre=datos.nombreModelo;
    console.log("LOS MODELOS obtenidos son:",datos);
      return (
    <>
      <BannerProyectos
        texto="Proyectos por modelos"       
        filtro="modelo"
        datos={datos}
      />
    </>
  );
};

export default Function;