
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
import ListEtapa from "@/app/componets/list-proyecto/list-etapa";
import { Ctrl_proyectos } from "@/app/controllers/Ctrl_proyectos";


const UrlBanner = (props) => {
  return (
    <>
      <a href="/proyectos/todos/" className="mx-1 hover:text-gray-400">
        Proyectos
      </a>
      /
      <a href={`/proyectos/${props.idRegion}/0`} className="mx-1 hover:text-gray-400">
        {props.nombreRegion}
      </a>
      /
      <a href={`/proyectos/0/${props.idCiudad}`} className="mx-1 hover:text-gray-400">
        {props.nombreCiudad}
      </a>
    </>
  );
};

const Proyecto = async ({ params: { proyecto }, searchParams: { val } }) => {
  const filtroDecodificado = proyecto ? decodeURIComponent(proyecto) : "";
  const nombre = filtroDecodificado;
  const idProyecto = val;
  // const [proyectoData, setProyectoData] = useState(null);
  let proyectoData = await Ctrl_proyectos(idProyecto);
  const modelosData = proyectoData?.datos?.modelos;
  const idRegion = proyectoData?.datos?.proyecto?.idRegion;
  const nombreRegion = proyectoData?.datos?.proyecto?.regionNombre;
  const idCiudad = proyectoData?.datos?.proyecto?.idComuna;
  const nombreCiudad = proyectoData?.datos?.proyecto?.comunaNombre;
  const ejecutivas = proyectoData?.datos?.usuarios;
  const ejecutivasConImagen = ejecutivas?.filter(ejecutiva => ejecutiva.usuarioImagen != null);
  const urlEficienciaEnergetica = proyectoData?.datos?.recursos?.idTipo === "2" ? "https://web.malpo.cl/minisitios/departamento/" : "https://web.malpo.cl/minisitios/casa/";
  const url = <UrlBanner nombre={proyectoData?.datos?.proyecto?.nombreWebProyecto} idCiudad={idCiudad} nombreCiudad={nombreCiudad} idRegion={idRegion} nombreRegion={nombreRegion} />;

  return (
    <>
      <BannerProyecto url={url} nombre={proyectoData?.datos?.proyecto?.nombreWebProyecto} imagenCabecera={proyectoData?.datos?.proyecto?.imagenCabecera} imagenMobile={proyectoData?.datos?.proyecto?.imagenMobile} />
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
            blank="0"
          />


          <Button
            titulo="Descargar Brochure"
            imagen="https://c.animaapp.com/unMEM02m/img/picture-as-pdf-1.svg"
            // url={proyectoData?.datos?.proyecto?.pdfBrochure}
            url={proyectoData?.datos?.recursos?.pdfBrochure ? proyectoData.datos.recursos.pdfBrochure : 'about:blank'}
            blank="1"
          />

        </div>
      </div>

      {proyectoData?.datos?.recursos && (
        <div className="pb-6 pt-6">
          <h1 className="ml-4 text-3xl sm:text-center">
            Características generales del proyecto
          </h1>
          <ListProyecto caracteristicas={proyectoData?.datos?.recursos} tipo="proyecto" />
        </div>
      )}

      {proyectoData?.datos?.logos && (
        <div className="pb-6 pt-6">
          <div className="flex flex-wrap justify-start xl:justify-center">
            <BannerLogos logos={proyectoData?.datos?.logos} />
          </div>
        </div>
      )}

      {proyectoData?.datos?.modelos && (
        <div id="modelos">
          {proyectoData?.datos?.modelos && (
            <CardModelos texto="Modelos de" modelos={proyectoData?.datos?.modelos} proyecto={proyectoData?.datos?.proyecto} nombreTipo={proyectoData?.datos?.recursos?.nombreTipo} />
          )}
        </div>
      )}

      {proyectoData?.datos?.avances && (
        <div className="pb-6 pt-6">
          <h1 className="ml-4 text-3xl sm:text-center">Etapa del proyecto</h1>
          <ListEtapa nombreProyecto={proyectoData?.datos?.proyecto?.nombreWebProyecto} avances={proyectoData?.datos?.avances} />
        </div>
      )}

      {proyectoData?.datos?.salas && (
        <BannerSalaVentas salas={proyectoData?.datos?.salas} />
      )}

      {proyectoData?.datos?.proyecto.urlLinkProyecto && (
        <BannerUbicacion proyecto={proyectoData?.datos?.proyecto} />
      )}
      {proyectoData?.datos?.proyecto?.urlUbicacionProyecto && (
        <BannerMapa proyecto={proyectoData?.datos?.proyecto} ejecutivas={ejecutivas} />
      )}
      {proyectoData?.datos?.proyecto?.imagenLoteo && (
        <BannerLoteo imagenLoteo={proyectoData?.datos?.proyecto?.imagenLoteo} imagenLoteoZoom={proyectoData?.datos?.proyecto?.imagenLoteoZoom} />
      )}
      <div id="ejecutivas" className="mt-4">
        {proyectoData?.datos?.usuarios ? (
          <BannerEjecutivas usuarios={proyectoData?.datos?.usuarios} />
        ) : (
          <div className="flex justify-center items-center mt-4">
            <p className="text-3xl font-semibold text-rojoMalpo text-center">
              No hay ejecutivas asociadas a este proyecto
            </p>
          </div>
        )}
      </div>
      <BannerAccesos />
      <BannerRegiones />
    </>
  );
};

export default Proyecto;
