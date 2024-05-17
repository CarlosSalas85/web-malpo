"use client";
import React from "react";

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

const UrlBanner = (props) => {
  return (
    <>
      <a href="#" className="mx-1 hover:text-gray-400">
        Proyectos
      </a>
      /
      <a href="#" className="mx-1 hover:text-gray-400">
        {props.nombre}
      </a>
    </>
  );
};

const Proyecto = ({ params: { proyecto } }) => {
  const filtroDecodificado = proyecto ? decodeURIComponent(proyecto) : "";
  const url = <UrlBanner nombre={filtroDecodificado} />;
  const nombre = filtroDecodificado;

  return (
    <>
      <BannerProyecto url={url} nombre={nombre} />
      <div className="mx-auto mb-4 mt-4 w-11/12 md:w-10/12">
        <p className="text-18px sm:text-center">
          La mejor relación precio-calidad. Confía en la experiencia y asesoría
          Malpo. Comprueba nuestros altos estándares en materiales, diseño y
          terminaciones.El bienestar y futuro de cada familia, es nuestra
          priridad.La ubicacion esta en el sector Norte de Maule.
        </p>
      </div>

      <div className="mb-6 mt-6 flex justify-center">
        <div className="flex w-3/4 flex-col items-center justify-between text-center xl:w-2/3 xl:flex-row">
          <ButtonRojo titulo="Cotizar" />
          <Button
            titulo="Ver modelos de casas"
            imagen="https://c.animaapp.com/sQwZVHMV/img/vector.svg"
          />
          <Button
            titulo="Descargar Brochure"
            imagen="https://c.animaapp.com/unMEM02m/img/picture-as-pdf-1.svg"
          />
        </div>
      </div>

      <div className="pb-6 pt-6">
        <h1 className="ml-4 text-3xl sm:text-center">
          Características generales del proyecto
        </h1>
        <ListProyecto />
      </div>

      <div className="pb-6 pt-6">
        <div className="flex flex-wrap justify-start xl:justify-center">
          <BannerLogos />
          <BannerLogos />
          <BannerLogos />
          <BannerLogos />
          <BannerLogos />
        </div>
      </div>

      <CardModelos texto="Modelos de Casas" />

      <div className="pb-6 pt-6">
        <h1 className="ml-4 text-3xl sm:text-center">Etapa del proyecto</h1>
        <ListEtapa />
      </div>

      <BannerSalaVentas />
      <BannerUbicacion />
      <BannerMapa />
      <BannerLoteo />
      <BannerEjecutivas />
      <BannerAccesos />
      <BannerProyectos
        texto="Proyectos por región"
        titulo="región"
        filtro="region"
      />
    </>
  );
};

export default Proyecto;
