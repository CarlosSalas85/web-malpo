
import React from "react";
import BannerProyecto from "@/app/componets/banner-proyectos/banner-proyecto";
import BannerRegiones from "@/app/function/banner-regiones";
import BannerLogos from "@/app/componets/banner-proyectos/banner-logos";
import BannerSalaVentas from "@/app/componets/banner-proyectos/banner-sala-ventas";
import BannerUbicacion from "@/app/componets/banner-proyectos/banner-ubicacion";
import BannerMapa from "@/app/componets/banner-proyectos/banner-mapa";
import BannerEjecutivas from "@/app/componets/banner-proyectos/banner-ejecutivas";
import BannerAccesos from "@/app/componets/banner-proyectos/banner-accesos";
import BannerLoteo from "@/app/componets/banner-proyectos/banner-loteo";
import CardModelos from "@/app/componets/card-proyecto/card-modelos";
import Button from "@/app/componets/button/button";
import ListProyecto from "@/app/componets/list-proyecto/list-proyecto";
import ModalCotizador from "@/app/componets/modal/modal-cotizar";
import ModalEjecutivas from "@/app/componets/modal/modal-ejecutiva";
import ListEtapa from "@/app/componets/list-proyecto/list-etapa";
import { Ctrl_proyectos } from "@/app/controllers/Ctrl_proyectos";

const UrlBanner = (props) => {
  return (
    <>
      <a href="/proyectos" className="mx-1 hover:text-gray-400">
        Proyectos
      </a>
      /
      <a href={`/proyectos/${props.ciudad}`} className="mx-1 hover:text-gray-400">
        {props.ciudad}
      </a>
    </>
  );
};

const Proyecto = async ({ params: { proyecto }, searchParams: { val } }) => { 
  const filtroDecodificado = proyecto ? decodeURIComponent(proyecto) : "";
  const nombre = filtroDecodificado;
  // const proyectosData= await Ctrl_proyectos()
  // const searchParams = useSearchParams();
  const idProyecto = val;

  // const [proyectoData, setProyectoData] = useState(null);
  let proyectoData = await Ctrl_proyectos(idProyecto);
  const modelosData = proyectoData?.datos?.modelos;

  const url = <UrlBanner nombre={proyectoData?.datos?.proyecto?.nombreWebProyecto} ciudad={proyectoData?.datos?.proyecto?.comunaNombre}/>;

  return (
    <>
      <BannerProyecto url={url} nombre={proyectoData?.datos?.proyecto?.nombreWebProyecto} proyecto={proyectoData?.datos?.proyecto} />
      <div className="mx-auto mb-4 mt-4 w-11/12 md:w-10/12">
        <p className="text-18px sm:text-center">
          {proyectoData?.datos?.proyecto?.informacionProyecto}
        </p>
      </div>

      <div className="mb-6 mt-6 flex justify-center">
        <div className="flex w-3/4 flex-col items-center justify-between text-center xl:w-2/3 xl:flex-row">
          <ModalCotizador proyecto={proyectoData} modelos={modelosData} />
          <Button
            titulo="Ver modelos de casas"
            imagen="https://c.animaapp.com/sQwZVHMV/img/vector.svg"
            url="#modelos"
            target="0"
          />

          <Button
            titulo="Descargar Brochure"
            imagen="https://c.animaapp.com/unMEM02m/img/picture-as-pdf-1.svg"
            // url={proyectoData?.datos?.proyecto?.pdfBrochure}
            href={proyectoData?.datos?.recursos?.pdfBrochure || "#"}
            target="1"
          />
        </div>
      </div>

      {proyectoData?.datos?.recursos && (
        <div className="pb-6 pt-6">
          <h1 className="ml-4 text-3xl sm:text-center">
            Características generales del proyecto
          </h1>
          <ListProyecto caracteristicas={proyectoData?.datos?.recursos} tipo="proyecto"
          />
        </div>
      )}

      {proyectoData?.datos?.logos && (
        <div className="pb-6 pt-6">
          <div className="flex flex-wrap justify-start xl:justify-center">
            <BannerLogos logos={proyectoData?.datos?.logos} />
          </div>
        </div>
      )}


      <div id="modelos">
        {proyectoData?.datos?.modelos && (
          <CardModelos texto="Modelos de Casas" modelos={proyectoData?.datos?.modelos} proyecto={proyectoData?.datos?.proyecto} />
        )}
      </div>


      {proyectoData?.datos?.avances && (
        <div className="pb-6 pt-6">
          <h1 className="ml-4 text-3xl sm:text-center">Etapa del proyecto</h1>
          <ListEtapa nombreProyecto={proyectoData?.datos?.proyecto?.nombreWebProyecto} avances={proyectoData?.datos?.avances} />
        </div>
      )}

      {proyectoData?.datos?.salas && (
        <BannerSalaVentas salas={proyectoData?.datos?.salas} />
      )}

      {proyectoData?.datos?.proyecto && (
        <BannerUbicacion proyecto={proyectoData?.datos?.proyecto} />
      )}
      {proyectoData?.datos?.proyecto && (
      <BannerMapa proyecto={proyectoData?.datos?.proyecto} />
      )}
      {proyectoData?.datos?.proyecto?.imagenLoteo && (
      <BannerLoteo imagenLoteo={proyectoData?.datos?.proyecto?.imagenLoteo} />
      )}
      {/* <div id="ejecutivas">
       {proyectoData?.datos?.usuarios && (
      <ModalEjecutivas proyecto={proyectoData} />
       )} 
       </div>*/}
       <div id="ejecutivas">
       {proyectoData?.datos?.usuarios && (
      <BannerEjecutivas usuarios={proyectoData?.datos?.usuarios} />
       )} 
       </div>
      <BannerAccesos />
   <BannerRegiones/>
    </>
  );
};

export default Proyecto;
