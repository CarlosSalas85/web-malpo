'use client';
import React, { useState, useEffect } from "react";
import BannerProyecto from "@/app/componets/banner-proyectos/banner-proyecto";
import BannerLogos from "@/app/componets/banner-proyectos/banner-logos";
import BannerSalaVentas from "@/app/componets/banner-proyectos/banner-sala-ventas";
import BannerUbicacion from "@/app/componets/banner-proyectos/banner-ubicacion";
import BannerMapa from "@/app/componets/banner-proyectos/banner-mapa";
import BannerEjecutivas from "@/app/componets/banner-proyectos/banner-ejecutivas";
import BannerAccesos from "@/app/componets/banner-proyectos/banner-accesos";
import BannerProyectos from "@/app/componets/banner-proyectos/banner-proyectos";
import BannerLoteo from "@/app/componets/banner-proyectos/banner-loteo";
import CardModelos from "@/app/componets/card-proyecto/card-modelos";
import Button from "@/app/componets/button/button";
import ButtonRojo from "@/app/componets/button/button-rojo";
import ListProyecto from "@/app/componets/list-proyecto/list-proyecto";
import ListEtapa from "@/app/componets/list-proyecto/list-etapa";
import { useSearchParams } from 'next/navigation'
import { Ctrl_proyectos, ProyectoData } from "@/app/controllers/Ctrl_proyectos";
import Link from "next/link";

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

const Proyecto = ({ params: { proyecto } }) => {
  const filtroDecodificado = proyecto ? decodeURIComponent(proyecto) : "";
  const nombre = filtroDecodificado;
  // const proyectosData= await Ctrl_proyectos()
  const searchParams = useSearchParams();
  const idProyecto = searchParams.get("val");

  const [proyectoData, setProyectoData] = useState(null);
  // console.log("idProyecto",idProyecto);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await Ctrl_proyectos(idProyecto);
        setProyectoData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  const url = <UrlBanner nombre={proyectoData?.datos?.proyecto?.nombreWebProyecto} ciudad={proyectoData?.datos?.proyecto?.comunaNombre} />;

  return (
    <>
      <BannerProyecto url={url} nombre={proyectoData?.datos?.proyecto?.nombreWebProyecto} />
      <div className="mx-auto mb-4 mt-4 w-11/12 md:w-10/12">
        <p className="text-18px sm:text-center">
          {proyectoData?.datos?.proyecto?.informacionProyecto}
        </p>
      </div>

      <div className="mb-6 mt-6 flex justify-center">
        <div className="flex w-3/4 flex-col items-center justify-between text-center xl:w-2/3 xl:flex-row">
          <ButtonRojo titulo="Cotizar" />

          <Button
            titulo="Ver modelos de casas"
            imagen="https://c.animaapp.com/sQwZVHMV/img/vector.svg"
            href="#modelos"
            target="0"
          />

          <Button
            titulo="Descargar Brochure"
            imagen="https://c.animaapp.com/unMEM02m/img/picture-as-pdf-1.svg"
            // url={proyectoData?.datos?.proyecto?.pdfBrochure}
            url={proyectoData?.datos?.recursos?.pdfBrochure}
            target="1"
          />
        </div>
      </div>

      {proyectoData?.datos?.recursos && (
        <div className="pb-6 pt-6">
          <h1 className="ml-4 text-3xl sm:text-center">
            Características generales del proyecto
          </h1>
          <ListProyecto caracteristicas={proyectoData?.datos?.recursos}
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
       {proyectoData?.datos?.usuarios && (
      <BannerEjecutivas usuarios={proyectoData?.datos.usuarios} />
       )}
      <BannerAccesos />
      <BannerProyectos
        texto="Proyectos por región"
        titulo="región"
        filtro="regiones"
      />
    </>
  );
};

export default Proyecto;
